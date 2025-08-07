import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { personalInfo } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Resume = () => {
  const resumeUrl = "https://customer-assets.emergentagent.com/job_gupta-analytics/artifacts/8y14yuwx_Sahil%20Gupta%20Data%20Analyst%20Resume.pdf";
  const [stats, setStats] = useState({ downloads: 0, views: 0 });

  useEffect(() => {
    // Track resume page view
    trackResumeAction('view');
    // Fetch current stats
    fetchResumeStats();
  }, []);

  const trackResumeAction = async (action) => {
    try {
      await axios.post(`${API}/resume-analytics`, { action });
    } catch (error) {
      console.error('Error tracking resume action:', error);
    }
  };

  const fetchResumeStats = async () => {
    try {
      const response = await axios.get(`${API}/resume-stats`);
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching resume stats:', error);
    }
  };

  const handleDownload = () => {
    trackResumeAction('download');
    fetchResumeStats(); // Refresh stats after download
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Download my complete resume or view it online to learn more about my experience and skills
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg">
              <a href={resumeUrl} download="Sahil_Gupta_Data_Analyst_Resume.pdf">
                <Download className="mr-2" size={20} />
                Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg border-2">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={20} />
                View Online
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Preview & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-3"></div>
                  Resume Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[3/4] w-full">
                  <iframe
                    src={`${resumeUrl}#view=FitH`}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Actions */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Linkedin size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <a 
                        href={personalInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Github size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">GitHub</p>
                      <a 
                        href={personalInfo.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400"
                      >
                        View Projects
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Stats */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Resume Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-1">3+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">15+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Tech Skills</div>
                  </div>
                  <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">90%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Efficiency Boost</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <a href="/contact">
                      Schedule Interview
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/projects">
                      View Portfolio
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="w-full">
                    <a href="/about">
                      Learn More About Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 border-l-4 border-green-500">
              <CardContent className="p-0">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Currently Available</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Open to new opportunities and freelance projects. Let's discuss how I can help your team!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;