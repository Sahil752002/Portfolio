import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Code, Video, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, projects, testimonials } from '../data/mock';

const Home = () => {
  const featuredProjects = [
    ...projects.dataAnalytics.slice(0, 2),
    ...projects.automations.slice(0, 1)
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-navy-700 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6 animate-in slide-in-from-bottom duration-1000 drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300 font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-500">
              {personalInfo.tagline}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-700">
            <Button asChild size="lg" className="bg-gradient-to-r from-navy-700 to-cyan-500 hover:from-navy-800 hover:to-cyan-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specializing in data-driven solutions and intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Analytics */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Transform raw data into actionable insights using Excel, SQL, Power BI, and Python
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalInfo.skills["Data Analysis"].slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Automations */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Streamline workflows with Python scripts and VBA macros to boost productivity
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalInfo.skills["Automation"].slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI & Video */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Video size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  AI & Video Generation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Exploring cutting-edge AI technologies for automated video content creation
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    Coming Soon
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                    AI/ML
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A showcase of my recent work in data analytics and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-cyan-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
                    View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Feedback from colleagues and collaborators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how data analytics and automation can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/resume">
                <Download className="mr-2" size={20} />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;