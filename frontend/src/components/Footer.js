import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Database size={24} />
              </div>
              <span className="text-xl font-bold">{personalInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                About Me
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Projects
              </Link>
              <Link to="/resume" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Resume
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Skills</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-300">Data Analysis</span>
              <span className="text-gray-300">Python & SQL</span>
              <span className="text-gray-300">Power BI</span>
              <span className="text-gray-300">Automation</span>
              <span className="text-gray-300">AI & ML</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart size={16} className="mx-1 text-red-400" /> using React & FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;