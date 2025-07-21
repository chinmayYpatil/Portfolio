import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Smartphone, Globe, ExternalLink } from 'lucide-react';
import profileImage from '../profile.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Software Engineer','Android Developer' ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  // Minimalist Medium logo for dark UI
  const MediumMinimalLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 22}
      height={props.height || 22}
      {...props}
    >
      <text x="4" y="28" fontFamily="Georgia, serif" fontWeight="bold" fontSize="28" fill="currentColor">M</text>
    </svg>
  );

  // Minimalist Reddit logo for dark UI
  const RedditMinimalLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 22}
      height={props.height || 22}
      {...props}
    >
      <text x="8" y="28" fontFamily="Georgia, serif" fontWeight="bold" fontSize="28" fill="currentColor">r</text>
    </svg>
  );

  const socialLinks = [
    { 
      Icon: Github, 
      href: 'https://github.com/chinmayYpatil', 
      label: 'GitHub',
      color: 'hover:text-gray-300 hover:shadow-gray-300/25'
    },
    { 
      Icon: Linkedin, 
      href: 'https://www.linkedin.com/in/chinmay-patil-b9771422b/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400 hover:shadow-blue-400/25'
    },
    { 
      Icon: MediumMinimalLogo, // Use the custom minimalist Medium logo
      href: 'https://medium.com/@chinmay7016', 
      label: 'Medium',
      color: 'hover:text-green-400 hover:shadow-green-400/25',
      imgSrc: null
    },
    { 
      Icon: RedditMinimalLogo, // Use the custom minimalist Reddit logo
      href: 'https://www.reddit.com/user/Yachika-/', 
      label: 'Reddit',
      color: 'hover:text-orange-400 hover:shadow-orange-400/25',
      imgSrc: null
    },
    { 
      Icon: Mail, 
      href: 'mailto:chinmay7016@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-400 hover:shadow-red-400/25'
    }
  ];

  const floatingElements = [
    { Icon: Code, delay: '0s', position: 'top-20 left-10', color: 'text-green-400' },
    { Icon: Smartphone, delay: '2s', position: 'top-40 right-20', color: 'text-teal-400' },
    { Icon: Globe, delay: '4s', position: 'bottom-40 left-20', color: 'text-cyan-400' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((item, index) => {
        const { Icon, delay, position, color } = item;
        return (
          <div
            key={index}
            className={`absolute ${position} ${color}/30 animate-bounce hidden lg:block`}
            style={{ animationDelay: delay, animationDuration: '3s' }}
          >
            <Icon size={48} />
          </div>
        );
      })}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Glowing Border */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 rounded-full p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src={profileImage}
                    alt="Chinmay Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p className="text-green-400 text-lg font-medium mb-2">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Chinmay Patil
                </span>
              </h1>
            </div>
            
            <div className="h-20 flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl md:text-4xl text-gray-300">
                <span className="text-green-400 font-semibold border-r-2 border-green-400 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Final-year B.Tech ICT student at PDEU, passionate about Software Development and Android development. 
              I have worked as an intern at Reliance Industries, ElkDocs, and Namo Advisors, where I built websites and Android apps that helped improve performance and save time.
              I enjoy learning new things, building apps, and contributing to open-source projects. 
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <a
              href="#projects"
              className="group relative bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 flex items-center space-x-2 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="/Chinmay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-2 border-green-400 text-green-400 px-8 py-4 rounded-2xl font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 hover:scale-105 backdrop-blur-sm bg-gray-800/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            {socialLinks.map((social, index) => {
              const { Icon, href, label, color, imgSrc } = social;
              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-green-400 ${color}`}
                  title={label}
                >
                  {imgSrc ? (
                    <img src={imgSrc} alt={label} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    Icon && <Icon width={22} height={22} className="group-hover:scale-110 transition-transform duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-green-400 text-sm font-medium">Scroll Down</span>
              <ChevronDown size={32} className="text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;