# API Contracts & Integration Guide

## Overview
This document outlines the API contracts for Sahil Gupta's portfolio website, detailing the transition from mock data to full backend integration.

## Current Mock Data Structure

### 1. Personal Information
- **File**: `mock.js` - `personalInfo` object
- **Fields**: name, title, email, linkedin, github, location, tagline, bio, skills

### 2. Projects Data
- **File**: `mock.js` - `projects` object
- **Categories**: dataAnalytics, automations, videoAI
- **Fields**: id, title, description, technologies, image, status, highlights

### 3. Testimonials
- **File**: `mock.js` - `testimonials` array
- **Fields**: id, name, role, company, message, avatar

### 4. Contact Information
- **File**: `mock.js` - `contactInfo` object
- **Fields**: email, linkedin, github, location, availability

## Backend API Endpoints to Implement

### 1. Contact Form Submission
```
POST /api/contact
Body: {
  name: string,
  email: string,
  subject: string,
  message: string
}
Response: {
  success: boolean,
  message: string,
  id?: string
}
```

### 2. Get Projects (Optional - if admin panel needed later)
```
GET /api/projects
Response: {
  success: boolean,
  data: Project[]
}
```

### 3. Get Resume Stats (Optional)
```
GET /api/resume-stats
Response: {
  success: boolean,
  data: {
    downloads: number,
    views: number
  }
}
```

## Database Models

### Contact Message Model
```python
class ContactMessage:
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime
    status: str  # 'new', 'read', 'replied'
```

### Resume Analytics Model (Optional)
```python
class ResumeAnalytics:
    id: str
    action: str  # 'download', 'view'
    timestamp: datetime
    ip_address: str (optional)
```

## Frontend Integration Points

### 1. Contact Form (`/src/pages/Contact.js`)
- **Current**: Mock form submission with toast notification
- **Update**: Replace mock with actual API call to `/api/contact`
- **Error Handling**: Display API errors in toast notifications
- **Success**: Clear form and show success message

### 2. Resume Page (`/src/pages/Resume.js`)
- **Current**: Static resume display
- **Update**: Track download/view events via API calls
- **Optional**: Display download count

### 3. Projects Page (`/src/pages/Projects.js`)
- **Current**: Static mock data display
- **Future**: Could be enhanced with dynamic project management

## Implementation Priority

### Phase 1 (Essential)
1. Contact form backend API
2. Database schema for contact messages
3. Email notification system (optional)
4. Frontend integration for contact form

### Phase 2 (Optional Enhancements)
1. Resume analytics tracking
2. Admin dashboard for viewing messages
3. Project management system
4. Blog/article system

## Environment Variables Needed
```
# Backend .env
MONGO_URL=mongodb://localhost:27017/portfolio
DB_NAME=portfolio
EMAIL_HOST=smtp.gmail.com (if email notifications needed)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Frontend Environment Variables
```
# Frontend .env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Testing Checklist
- [ ] Contact form submits successfully
- [ ] Contact form validation works
- [ ] Success/error messages display correctly
- [ ] Contact messages stored in database
- [ ] Resume download tracking (if implemented)
- [ ] All existing functionality remains intact

## Notes
- All mock data should remain in `mock.js` for easy reference
- Frontend should gracefully handle API failures
- Maintain existing UI/UX while adding backend functionality
- Ensure proper CORS configuration for frontend-backend communication