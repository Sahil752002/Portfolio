import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProjects = [
    ...projects.dataAnalytics,
    ...projects.automations,
    ...projects.videoAI
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'dataAnalytics':
        return <TrendingUp size={16} />;
      case 'automations':
        return <Github size={16} />;
      case 'videoAI':
        return <Tag size={16} />;
      default:
        return <TrendingUp size={16} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'dataAnalytics':
        return 'from-blue-500 to-cyan-500';
      case 'automations':
        return 'from-emerald-500 to-teal-500';
      case 'videoAI':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getProjectCategory = (project) => {
    if (projects.dataAnalytics.includes(project)) return 'dataAnalytics';
    if (projects.automations.includes(project)) return 'automations';
    if (projects.videoAI.includes(project)) return 'videoAI';
    return 'other';
  };

  const ProjectCard = ({ project }) => {
    const category = getProjectCategory(project);
    const isComingSoon = project.status === 'in-progress' || project.status === 'planning';

    return (
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative">
        {isComingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-orange-500 text-white">
              {project.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
            </Badge>
          </div>
        )}
        
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isComingSoon ? 'opacity-60' : ''
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <div className={`p-2 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg text-white`}>
              {getCategoryIcon(category)}
            </div>
            <div className="flex space-x-2">
              {!isComingSoon && (
                <>
                  <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github size={16} />
                  </Button>
                </>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Key Highlights
              </h4>
              <div className="space-y-1">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of data analytics, automation, and AI projects showcasing my skills and expertise
          </p>
        </div>

        {/* Project Categories */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all" className="text-sm">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="dataAnalytics" className="text-sm">
              Data Analytics
            </TabsTrigger>
            <TabsTrigger value="automations" className="text-sm">
              Automations
            </TabsTrigger>
            <TabsTrigger value="videoAI" className="text-sm">
              Video AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataAnalytics" className="mt-8">
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Data Analytics Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive analysis projects using Excel, SQL, Power BI, and Python to transform raw data into actionable business insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.dataAnalytics.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="automations" className="mt-8">
            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Automation Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent automation solutions using Python scripts and VBA macros to streamline workflows and boost productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.automations.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videoAI" className="mt-8">
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Video AI Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Cutting-edge AI and machine learning projects focused on video generation, computer vision, and intelligent content creation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.videoAI.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in My Work?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help with your data analytics and automation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <a href="/resume">
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;