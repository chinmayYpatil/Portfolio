import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Star, Eye, GitFork, Smartphone, Globe, Brain, LucideIcon } from 'lucide-react';

// Add interface for project
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  type: string;
  featured: boolean;
  icon: LucideIcon;
  stats: {
    stars?: number;
    downloads?: string;
    users?: string;
    rating?: string;
    forks?: number;
    views?: string;
    accuracy?: string;
  };
  highlights?: string[];
  preview?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'IPO Naut',
      description: 'Comprehensive Android app for IPO insights and market analysis. Built with Jetpack Compose and integrated with Google Sheets API for real-time data updates. Features include IPO tracking, market trends, and investment recommendations.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Kotlin', 'Google Sheets API', 'Apps Script', 'Material Design', 'MVVM'],
      github: 'https://github.com/chinmayYpatil/IPONaut',
      demo: 'https://play.google.com/store/apps/details?id=com.app.iponaut&pcampaignid=web_share',
      type: 'Android App',
      featured: true,
      icon: Smartphone,
      stats: {
        stars: 45,
        downloads: '',
        rating: '4.5'
      },
      highlights: ['Play Store Published', 'Real-time Data', 'Material Design 3']
    },
    {
      title: 'HireReady',
      description: 'AI-powered interview preparation tool that helps candidates practice and improve their interview skills. Built with React frontend, Node.js backend, and integrated with Ollama AI for intelligent question generation and feedback.',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Ollama AI', 'Express.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/chinmayYpatil/HireReady',
      demo: 'https://hireready-demo.vercel.app',
      type: 'Web Application',
      featured: true,
      icon: Brain,
      stats: {
        stars: 67,
        users: '',
        accuracy: '92%'
      },
      highlights: ['AI-Powered', 'Real-time Feedback', 'Interview Analytics']
    },
    {
      title: 'Itinr',
      preview: 'https://youtu.be/PommT7ACYNI',
      description: 'Smart travel planner app that allows users to create multi-day itineraries with offline sync capabilities. Built using Jetpack Compose, Supabase for backend, Firebase for authentication, and Hilt for dependency injection.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Kotlin', 'Supabase', 'Firebase', 'Hilt', 'Room Database'],
      github: 'https://github.com/chinmayYpatil/itinr',
      demo: '#',
      type: 'Android App',
      featured: true,
      icon: Globe,
      stats: {
        stars: 38,
        downloads: '',
        rating: '4.3'
      },
      highlights: ['Offline Sync', 'Multi-day Planning', 'Cloud Backup']
    },
    {
      title: 'Weather Compose',
      description: 'Modern weather application built with Jetpack Compose featuring beautiful animations, weather forecasts, and location-based services. Demonstrates advanced Compose UI techniques and API integration.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jetpack Compose', 'Kotlin', 'Weather API', 'Location Services', 'Animations'],
      github: 'https://github.com/chinmayYpatil/weather-compose',
      demo: '#',
      type: 'Android App',
      featured: false,
      icon: Smartphone,
      stats: {
        stars: 23,
        forks: 12,
        views: '450'
      },
      highlights: ['Beautiful Animations', 'Location-based', 'Modern UI']
    },
    {
      title: 'Task Manager Pro',
      description: 'Productivity app for task management with team collaboration features. Built with modern Android architecture patterns and real-time synchronization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Android', 'Kotlin', 'Room', 'WorkManager', 'Notifications'],
      github: 'https://github.com/chinmayYpatil/task-manager-pro',
      demo: '#',
      type: 'Android App',
      featured: false,
      icon: Smartphone,
      stats: {
        stars: 31,
        forks: 8,
        views: '320'
      },
      highlights: ['Team Collaboration', 'Offline Support', 'Smart Notifications']
    },
    {
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts. Features beautiful charts and comprehensive market analysis.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'CoinGecko API', 'WebSocket', 'Local Storage'],
      github: 'https://github.com/chinmayYpatil/crypto-tracker',
      demo: 'https://crypto-tracker-chinmay.vercel.app',
      type: 'Web Application',
      featured: false,
      icon: Globe,
      stats: {
        stars: 19,
        forks: 7,
        views: '280'
      },
      highlights: ['Real-time Data', 'Portfolio Tracking', 'Price Alerts']
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index, isFeatured = false }: { project: Project; index: number; isFeatured?: boolean }) => {
    const isHovered = hoveredProject === `${isFeatured ? 'featured' : 'other'}-${index}`;
    const Icon = project.icon;
    
    return (
      <div
        className={`group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ animationDelay: `${index * 200}ms` }}
        onMouseEnter={() => setHoveredProject(`${isFeatured ? 'featured' : 'other'}-${index}`)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Featured Badge */}
        {isFeatured && project.title !== 'Itinr' && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Project Type Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-full px-3 py-1">
            <Icon size={16} className="text-green-400" />
            <span className="text-gray-300 text-sm font-medium">{project.type}</span>
          </div>
        </div>

        {/* Project Image (skip for Itinr if video is present) */}
        {!(project.title === 'Itinr' && project.preview) && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-60' : 'opacity-30'
            }`}></div>
            {/* Hover Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              {project.title !== 'Itinr' && project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-2xl flex items-center justify-center text-white hover:text-green-400 hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
              )}
              {project.title !== 'Itinr' && project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-2xl flex items-center justify-center text-white hover:text-green-400 hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Embed YouTube video for Itinr above all content */}
        {project.title === 'Itinr' && project.preview && (
          <div className="w-full flex justify-center mb-4">
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/PommT7ACYNI?autoplay=${isVisible ? 1 : 0}&mute=1`}
              title="Itinr App Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl border border-gray-700 shadow-md"
            ></iframe>
          </div>
        )}
        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>
          
          {/* Project Stats */}
          <div className="flex items-center space-x-4 mb-4 text-xs text-gray-400">
            <span>{project.stats.downloads || project.stats.users}</span>
            {project.stats.forks && (
              <div className="flex items-center">
                <GitFork size={14} className="mr-1" />
                <span>{project.stats.forks}</span>
              </div>
            )}
          </div>

          {/* Highlights */}
          {isFeatured && project.highlights && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((highlight: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs hover:bg-green-400/20 hover:text-green-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 6 : 4) && (
              <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                +{project.technologies.length - (isFeatured ? 6 : 4)}
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            {/* Only show Code and Demo buttons if links exist and are not for Itinr or for HireReady's demo */}
            {project.title !== 'Itinr' && project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.title !== 'Itinr' && project.demo && project.demo !== '#' && project.title !== 'HireReady' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
              >
                <ExternalLink size={16} />
                <span>{project.type === 'Android App' ? 'Play Store' : 'Live Demo'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent Android applications and web development projects that solve real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isFeatured={true} />
            ))}
          </div>
        </div>

        {/* GitHub Contribution Snake Animation */}
        <div className="flex justify-center my-12 overflow-x-auto">
          <img
            src="https://raw.githubusercontent.com/chinmayYpatil/chinmayYpatil/output/github-contribution-grid-snake.svg"
            alt="GitHub contribution snake animation"
            className="max-w-4xl w-full border-2 border-green-400/30 rounded-2xl shadow-lg"
            loading="lazy"
            style={{ minWidth: 600 }}
          />
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-green-400/10 to-teal-400/10 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 animate-pulse"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Want to see more of my work?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
              Check out my GitHub profile for additional projects, contributions to open-source, 
              and code samples that showcase my Android development skills.
            </p>
            <a
              href="https://github.com/chinmayYpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 relative z-10"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;