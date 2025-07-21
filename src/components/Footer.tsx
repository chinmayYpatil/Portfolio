import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/chinmayYpatil', 
      name: 'GitHub',
      color: 'hover:text-gray-300 hover:bg-gray-700/50'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/chinmay-patil-b9771422b/', 
      name: 'LinkedIn',
      color: 'hover:text-blue-400 hover:bg-blue-400/20'
    },
    { 
      icon: ExternalLink, 
      href: 'https://medium.com/@chinmay7016', 
      name: 'Medium',
      color: 'hover:text-green-400 hover:bg-green-400/20'
    },
    { 
      icon: Mail, 
      href: 'mailto:chinmay7016@gmail.com', 
      name: 'Email',
      color: 'hover:text-red-400 hover:bg-red-400/20'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl blur-lg opacity-75"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center text-gray-900 font-bold text-lg mr-3 shadow-lg shadow-green-400/25">
                  CP
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Chinmay Patil
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Android Developer & Software Engineer passionate about creating innovative mobile solutions 
              with modern technologies and clean architecture patterns.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Chinmay_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <Mail size={16} className="mr-3 text-green-400" />
                chinmay7016@gmail.com
              </p>
              <p className="flex items-center">
                <span className="w-4 h-4 mr-3 text-green-400">📍</span>
                Mumbai, India
              </p>
              <p className="flex items-center">
                <span className="w-4 h-4 mr-3 text-green-400">🎓</span>
                PDEU Student
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Chinmay Patil. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center group-hover:border-green-400 transition-all duration-300">
              <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;