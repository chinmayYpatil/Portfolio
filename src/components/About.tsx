import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Award, Users, Zap, Target, Trophy, Star } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Expert in Jetpack Compose, Kotlin, and modern Android architecture patterns',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in React, Node.js, and building scalable web applications',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Trophy,
      title: 'Open Source Contributor',
      description: 'Top-25 global contributor in HackSquad with multiple project contributions',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Award,
      title: 'Google Certified',
      description: 'Certified Play Store developer with published applications',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Specialized in app performance tuning and user experience enhancement',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience working in agile teams and leading development initiatives',
      color: 'from-indigo-400 to-purple-400'
    }
  ];

  const stats = [
    { number: '2', label: 'Internships Completed', icon: Code },
    { number: '1', label: 'Internships ongoing', icon: Code },
    { number: '1', label: 'App on Play Store', icon: Smartphone },
    { number: '1', label: 'App on Play Store in process', icon: Smartphone }
  ];
  

  const techStack = [
    { name: 'Kotlin', level: 95, color: 'from-purple-400 to-purple-600' },
    { name: 'Jetpack Compose', level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Android SDK', level: 88, color: 'from-blue-400 to-blue-600' },
    { name: 'Firebase', level: 85, color: 'from-orange-400 to-orange-600' },
    { name: 'React', level: 82, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 80, color: 'from-teal-400 to-teal-600' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group text-center">
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3 text-green-400" size={32} />
              My Journey
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                As a final-year B.Tech ICT student at PDEU, I've dedicated myself to mastering 
                Android development with a focus on modern technologies like Jetpack Compose and Kotlin.
              </p>
              <p>
                My journey includes being a Google-certified Play Store developer and achieving 
                recognition as a top-25 global open-source contributor in HackSquad. I've built 
                multiple Android applications that solve real-world problems.
              </p>
              <p>
                I'm passionate about creating intuitive user experiences, optimizing app performance, 
                and staying current with the latest Android development trends and best practices.
              </p>
            </div>

            {/* Tech Stack Progress */}
            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Core Technologies</h4>
              {techStack.map((tech, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{tech.name}</span>
                    <span className="text-green-400 text-sm font-semibold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 100 + 800}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <Icon className="text-gray-900" size={24} />
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300 relative z-10">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`relative bg-gradient-to-r from-green-400/10 to-teal-400/10 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 text-center transition-all duration-1000 delay-1000 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 animate-pulse"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
            I'm always excited to work on innovative Android projects and collaborate with talented teams. 
            Let's discuss how we can bring your mobile app ideas to life.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 relative z-10"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;