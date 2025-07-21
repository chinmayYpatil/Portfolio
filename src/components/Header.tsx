import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, Mail, FileText, Home, BookOpen } from 'lucide-react';
import profileImage from '../profile.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Blogs', href: '#blogs', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Profile Image */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400/50 hover:border-green-400 transition-colors duration-300">
                <img
                  src={profileImage}
                  alt="Chinmay Patil"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">Chinmay Patil</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-300 hover:text-green-400 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon size={18} className="group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
            <a
              href="/Chinmay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 rounded-xl font-medium hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText size={18} className="relative z-10" />
              <span className="relative z-10">Resume</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-green-400 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300 rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <a
                href="/Chinmay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 rounded-xl font-medium mx-4 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;