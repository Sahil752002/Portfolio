from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ValidationError
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup event
    yield
    # Shutdown event
    client.close()

# Create the main app without a prefix
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# Resume Analytics Models
class ResumeAnalytics(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    action: str  # 'download', 'view'
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None

class ResumeAction(BaseModel):
    action: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Portfolio API Endpoints

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactMessageCreate, request: Request):
    try:
        # Get client IP address for analytics
        client_ip = request.client.host if request.client else "unknown"
        
        # Create contact message
        contact_message = ContactMessage(
            **contact_data.dict(),
        )
        
        # Save to database
        result = await db.contact_messages.insert_one(contact_message.dict())
        
        if result.inserted_id:
            logger.info(f"New contact message from {contact_data.email}: {contact_data.subject}")
            
            # TODO: Send email notification (optional)
            # await send_contact_notification(contact_message)
            
            return ContactResponse(
                success=True,
                message="Thank you for your message! I'll get back to you within 24 hours.",
                id=contact_message.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
            
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=f"Validation error: {e}")
    except Exception as e:
        logger.error(f"Error saving contact message: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your message")

@api_router.get("/contact-messages")
async def get_contact_messages():
    """Admin endpoint to retrieve contact messages"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return {"success": True, "data": messages}
    except Exception as e:
        logger.error(f"Error fetching contact messages: {e}")
        raise HTTPException(status_code=500, detail="Error fetching messages")

@api_router.post("/resume-analytics")
async def track_resume_action(action_data: ResumeAction, request: Request):
    """Track resume downloads and views"""
    try:
        client_ip = request.client.host if request.client else "unknown"
        
        analytics = ResumeAnalytics(
            action=action_data.action,
            ip_address=client_ip
        )
        
        await db.resume_analytics.insert_one(analytics.dict())
        
        return {"success": True, "message": "Action tracked"}
    except Exception as e:
        logger.error(f"Error tracking resume action: {e}")
        return {"success": False, "message": "Tracking failed"}

@api_router.get("/resume-stats")
async def get_resume_stats():
    """Get resume download and view statistics"""
    try:
        downloads = await db.resume_analytics.count_documents({"action": "download"})
        views = await db.resume_analytics.count_documents({"action": "view"})
        
        return {
            "success": True,
            "data": {
                "downloads": downloads,
                "views": views
            }
        }
    except Exception as e:
        logger.error(f"Error fetching resume stats: {e}")
        return {"success": False, "data": {"downloads": 0, "views": 0}}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
