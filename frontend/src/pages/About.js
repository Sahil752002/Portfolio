import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { personalInfo } from '../data/mock';

const About = () => {
  const skillLevels = {
    "Excel": 95,
    "SQL": 90,
    "Power BI": 88,
    "Python": 85,
    "VBA": 80,
    "Data Visualization": 92,
    "Statistical Analysis": 85,
    "Process Automation": 88
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about turning complex data into clear insights and building intelligent automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile & Bio */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Card */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-gray-900 dark:text-white mb-6">
                  Technical Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skillLevels).map(([skill, level]) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {level}%
                        </span>
                      </div>
                      <Progress value={level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Highlights */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-gray-900 dark:text-white mb-6">
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Data Analytics Excellence
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Improved reporting efficiency by 40% through automated Power BI dashboards and optimized SQL queries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Automation Impact
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Reduced manual processing time by 90% with Python automation scripts and VBA macros
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Predictive Modeling
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Achieved 95% forecast accuracy in financial modeling using advanced statistical techniques
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Innovation Focus
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Currently exploring AI-powered video generation and computer vision applications
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</span>
                    <p className="text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Specialization</span>
                    <p className="text-gray-900 dark:text-white">Data Analytics & Automation</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</span>
                    <p className="text-gray-900 dark:text-white">3+ Years in Data Analytics</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-600 dark:text-green-400 text-sm">Available for projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Categories */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Skill Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-6">
                  {Object.entries(personalInfo.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardContent className="p-0 text-center">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  Interested in collaborating? Download my resume or get in touch!
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <a href="/resume" target="_blank">
                      <Download className="mr-2" size={16} />
                      Download Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:sahil.gupta@email.com">
                      Contact Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;