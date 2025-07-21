import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building, Briefcase, TrendingUp, Code, Smartphone, BarChart3 } from 'lucide-react';

// Type for experience item
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: any;
  color: string;
  status: string;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Namo Advisors',
      location: 'Remote',
      period: 'Feb 2025 – Present',
      type: 'Internship',
      description: 'Currently migrating Swift iOS application to Android using Jetpack Compose and MVVM architecture. Implementing modern Android development practices with Room database, Hilt dependency injection, and Kotlin Coroutines for seamless data management.',
      achievements: [
        'Migrating complete iOS app to Android using Jetpack Compose',
        'Implementing MVVM architecture with Room DB and Hilt',
        'Utilizing Kotlin Coroutines for asynchronous operations',
        'Ensuring feature parity between iOS and Android versions'
      ],
      technologies: ['Jetpack Compose', 'Kotlin', 'MVVM', 'Room', 'Hilt', 'Coroutines'],
      icon: Smartphone,
      color: 'from-green-400 to-teal-400',
      status: 'current'
    },
    {
      title: 'Android Developer Intern',
      company: 'ElkDocs',
      location: 'Remote',
      period: 'Jul 2024 – Sep 2024',
      type: 'Internship',
      description: 'Developed high-performance Android applications using Jetpack Compose with significant performance improvements. Led code reviews and API integrations while maintaining exceptional code quality standards.',
      achievements: [
        'Built responsive Compose UI with 30% faster render times',
        'Improved overall app performance by 40% through optimization',
        'Successfully integrated 8+ REST APIs with error handling',
        'Led code reviews achieving 98% quality score',
        'Mentored junior developers on Android best practices'
      ],
      technologies: ['Jetpack Compose', 'Kotlin', 'REST APIs', 'Performance Optimization', 'Code Review'],
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      status: 'completed'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Reliance Industries Ltd.',
      location: 'Mumbai, India',
      period: 'May 2024 – Jun 2024',
      type: 'Internship',
      description: 'Developed Angular-based web application for analyzing large-scale call data using Microsoft SQL Server. Implemented cost-effective solutions that significantly reduced operational expenses and improved system reliability.',
      achievements: [
        'Developed Angular UI for analyzing 500K+ daily calls',
        'Integrated with MS SQL Server for data processing',
        'Reduced daily operational costs by ₹1500',
        'Decreased system bugs by 40% through optimization',
        'Implemented real-time data visualization dashboards'
      ],
      technologies: ['Angular', 'TypeScript', 'MS SQL Server', 'Data Visualization', 'Performance Optimization'],
      icon: BarChart3,
      color: 'from-purple-400 to-pink-400',
      status: 'completed'
    }
  ];

  const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
    const Icon = item.icon;
    const isLast = index === experiences.length - 1;
    
    return (
      <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: `${index * 300}ms` }}>
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-green-400/50 to-gray-700/30"></div>
        )}
        
        {/* Timeline Dot */}
        <div className={`absolute left-3 top-8 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-gray-900 shadow-lg`}></div>
        
        {/* Content Card */}
        <div className="ml-16 mb-12">
          <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-gray-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-green-400 font-semibold">
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-gray-400">
                <div className="flex items-center mb-1">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center mb-1">
                  <MapPin size={16} className="mr-2" />
                  <span>{item.location}</span>
                </div>
                <div>
                  <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{item.description}</p>
            
            {/* Achievements */}
            <div className="mb-6 relative z-10">
              <h5 className="text-white font-semibold mb-3 flex items-center">
                <TrendingUp size={16} className="mr-2 text-green-400" />
                Key Achievements
              </h5>
              <ul className="space-y-2">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-green-400/20 hover:text-green-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various internships and professional roles in software development and Android engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.title} item={exp} index={index} />
          ))}
        </div>

        {/* Education Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center">
                    <Building className="text-gray-900" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      Bachelor of Technology in ICT
                    </h4>
                    <p className="text-green-400 font-semibold text-lg">
                      Pandit Deendayal Energy University (PDEU)
                    </p>
                    <p className="text-gray-400">
                      Gandhinagar, Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>2021 – 2025</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">Final Year</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Pursuing Bachelor of Technology in Information and Communication Technology with a focus on 
                software engineering, mobile application development, and modern programming paradigms. 
                Active participant in coding competitions and open-source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;