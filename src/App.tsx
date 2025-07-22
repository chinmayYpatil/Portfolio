import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const getScrollPercent = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    };

    const animate = () => {
      const target = getScrollPercent();
      progressRef.current += (target - progressRef.current) * 0.08;
      if (Math.abs(target - progressRef.current) < 0.1) {
        progressRef.current = target;
      }
      setScrollProgress(prev => {
        if (Math.abs(prev - progressRef.current) > 0.1) {
          return progressRef.current;
        }
        return prev;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
        <div className="w-full h-5 bg-transparent relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 transition-transform duration-300 ease-out flex items-center justify-center relative rounded-r-full"
            style={{
              transform: `scaleX(${scrollProgress / 100})`,
              transformOrigin: 'left',
              willChange: 'transform',
              boxShadow: scrollProgress > 0 ? '0 0 16px 4px rgba(34,211,238,0.4), 0 0 32px 8px rgba(16,185,129,0.2)' : 'none',
            }}
          >
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-semibold select-none pointer-events-none drop-shadow">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
      {/* End Scroll Progress Bar */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;