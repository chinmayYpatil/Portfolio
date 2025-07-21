import React, { useEffect, useRef, useState } from 'react';
import { 
  Smartphone, 
  Code, 
  Database, 
  Cloud, 
  GitBranch,
  Palette,
  Zap,
  Brain
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-green-400 to-teal-400',
      skills: [
        { 
          name: 'Kotlin', 
          level: 95, 
          description: 'Advanced Kotlin programming with coroutines, sealed classes, and modern language features',
          icon: '🎯'
        },
        { 
          name: 'Jetpack Compose', 
          level: 90, 
          description: 'Modern Android UI toolkit with state management and custom composables',
          icon: '🎨'
        },
        { 
          name: 'Android SDK', 
          level: 88, 
          description: 'Comprehensive Android development with lifecycle management and architecture components',
          icon: '📱'
        },
        { 
          name: 'MVVM Architecture', 
          level: 85, 
          description: 'Model-View-ViewModel pattern with LiveData and Data Binding',
          icon: '🏗️'
        },
        { 
          name: 'Room Database', 
          level: 82, 
          description: 'Local database management with SQLite abstraction and migrations',
          icon: '💾'
        },
        { 
          name: 'Hilt/Dagger', 
          level: 80, 
          description: 'Dependency injection for maintainable and testable Android apps',
          icon: '🔧'
        }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { 
          name: 'Java', 
          level: 88, 
          description: 'Object-oriented programming with design patterns and enterprise development',
          icon: '☕'
        },
        { 
          name: 'Python', 
          level: 85, 
          description: 'Data processing, automation scripts, and backend development',
          icon: '🐍'
        },
        { 
          name: 'JavaScript', 
          level: 82, 
          description: 'Modern ES6+ features, async programming, and frontend development',
          icon: '⚡'
        },
        { 
          name: 'SQL', 
          level: 80, 
          description: 'Database design, complex queries, and performance optimization',
          icon: '🗃️'
        },
        { 
          name: 'TypeScript', 
          level: 78, 
          description: 'Type-safe JavaScript development with interfaces and generics',
          icon: '📘'
        }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { 
          name: 'React', 
          level: 85, 
          description: 'Component-based UI development with hooks and state management',
          icon: '⚛️'
        },
        { 
          name: 'HTML/CSS', 
          level: 88, 
          description: 'Semantic markup, responsive design, and modern CSS features',
          icon: '🎨'
        },
        { 
          name: 'Tailwind CSS', 
          level: 82, 
          description: 'Utility-first CSS framework for rapid UI development',
          icon: '💨'
        },
        { 
          name: 'Material Design', 
          level: 90, 
          description: 'Google\'s design system implementation in Android and web',
          icon: '🎭'
        }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-orange-400 to-red-400',
      skills: [
        { 
          name: 'Node.js', 
          level: 80, 
          description: 'Server-side JavaScript with Express.js and RESTful APIs',
          icon: '🟢'
        },
        { 
          name: 'Firebase', 
          level: 85, 
          description: 'Authentication, Firestore, Cloud Functions, and real-time database',
          icon: '🔥'
        },
        { 
          name: 'Supabase', 
          level: 78, 
          description: 'Open-source Firebase alternative with PostgreSQL backend',
          icon: '⚡'
        },
        { 
          name: 'MongoDB', 
          level: 75, 
          description: 'NoSQL database design and aggregation pipelines',
          icon: '🍃'
        },
        { 
          name: 'REST APIs', 
          level: 88, 
          description: 'API design, documentation, and integration best practices',
          icon: '🔗'
        }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-yellow-400 to-orange-400',
      skills: [
        { 
          name: 'Ollama AI', 
          level: 75, 
          description: 'Local AI model integration and natural language processing',
          icon: '🤖'
        },
        { 
          name: 'NLP', 
          level: 70, 
          description: 'Natural Language Processing for text analysis and chatbots',
          icon: '💬'
        },
        { 
          name: 'Machine Learning', 
          level: 68, 
          description: 'Basic ML algorithms and model training with Python',
          icon: '🧠'
        }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: GitBranch,
      color: 'from-indigo-400 to-purple-400',
      skills: [
        { 
          name: 'Git/GitHub', 
          level: 92, 
          description: 'Version control, branching strategies, and collaborative development',
          icon: '🌿'
        },
        { 
          name: 'Android Studio', 
          level: 95, 
          description: 'Advanced IDE usage with debugging, profiling, and optimization tools',
          icon: '🛠️'
        },
        { 
          name: 'VS Code', 
          level: 88, 
          description: 'Efficient code editing with extensions and productivity tools',
          icon: '💻'
        },
        { 
          name: 'Docker', 
          level: 70, 
          description: 'Containerization for development and deployment environments',
          icon: '🐳'
        },
        { 
          name: 'Google Apps Script', 
          level: 80, 
          description: 'Automation and integration with Google Workspace services',
          icon: '📊'
        }
      ]
    }
  ];

  const SkillCard = ({ skill, index, categoryIndex }) => {
    const isHovered = hoveredSkill === `${categoryIndex}-${index}`;
    
    return (
      <div
        className="relative group"
        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${index}`)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
          <span className="text-green-400 text-sm font-semibold">{skill.level}%</span>
        </div>
        
        {/* Skill Bar */}
        <div className="relative w-full bg-gray-700/50 rounded-full h-2 overflow-hidden mb-2">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-400 transition-all duration-1000 ease-out relative"
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${categoryIndex * 200 + index * 100}ms`
            }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-20">
            <div className="bg-gray-800/95 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 shadow-xl max-w-xs">
              <div className="text-white text-sm font-medium mb-2 flex items-center">
                <span className="text-lg mr-2">{skill.icon}</span>
                {skill.name}
              </div>
              <div className="text-gray-300 text-xs leading-relaxed">{skill.description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 hover:scale-105 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-gray-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Cloud */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-green-400/10 to-teal-400/10 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 animate-pulse"></div>
            <div className="flex items-center justify-center mb-6 relative z-10">
              <Zap className="text-green-400 mr-3" size={32} />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Continuous Learning & Innovation
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed relative z-10">
              I believe in staying current with emerging technologies and best practices in Android development. 
              My skill set continues to evolve as I explore new frameworks, libraries, and development methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {[
                { name: 'Kotlin Multiplatform', icon: '🚀' },
                { name: 'Flutter', icon: '🦋' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'Microservices', icon: '🔧' },
                { name: 'CI/CD', icon: '⚙️' },
                { name: 'Cloud Computing', icon: '☁️' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group px-4 py-2 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-full text-sm hover:border-green-400 hover:text-green-400 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;