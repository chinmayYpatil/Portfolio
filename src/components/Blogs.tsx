import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Clock, Tag, BookOpen, TrendingUp } from 'lucide-react';

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);
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

  const categories = ['All', 'Android', 'Kotlin', 'AI/ML', 'Web Development', 'Career'];

  const blogs = [
    {
      title: 'Android Basics to Advanced Tutorial #1: Comparing LazyColumn and Column in Jetpack Compose',
      preview: 'A deep dive into the differences between LazyColumn and Column in Jetpack Compose, with practical examples and performance tips.',
      image: 'https://miro.medium.com/v2/resize:fit:1000/1*sPsfuFiDvwG1_Og73GXPxw.jpeg',
      category: 'Android',
      readTime: '8 min read',
      date: 'Apr 2024',
      url: 'https://medium.com/@chinmay7016/android-basics-to-advanced-tutorial-1-comparing-lazycolumn-and-column-in-jetpack-compose-fc2bd768471c',
      featured: false,
      tags: ['Android', 'Jetpack Compose', 'Kotlin', 'UI']
    },
    {
      title: 'Mastering Android Activity Lifecycle',
      preview: 'Understand the Android Activity Lifecycle in depth, with real-world scenarios and lifecycle management best practices.',
      image: 'https://developer.android.com/static/images/activity_lifecycle.png',
      category: 'Android',
      readTime: '10 min read',
      date: 'Mar 2024',
      url: 'https://medium.com/@chinmay7016/mastering-android-activity-lifecycle-553737e2899f',
      featured: false,
      tags: ['Android', 'Lifecycle', 'Best Practices']
    }
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  interface Blog {
    title: string;
    preview: string;
    image: string;
    category: string;
    readTime: string;
    date: string;
    url: string;
    featured: boolean;
    tags: string[];
  }

  const BlogCard = ({ blog, index, isFeatured }: { blog: Blog; index: number; isFeatured: boolean }) => {
    const isHovered = hoveredBlog === `${isFeatured ? 'featured' : 'regular'}-${index}`;
    
    return (
      <article
        className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-500 hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${isFeatured ? 'md:col-span-2' : ''}`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredBlog(`${isFeatured ? 'featured' : 'regular'}-${index}`)}
        onMouseLeave={() => setHoveredBlog(null)}
      >
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
              <TrendingUp size={14} className="mr-1" />
              Featured
            </span>
          </div>
        )}

        {/* Blog Image */}
        <div className={`relative ${isFeatured ? 'h-64' : 'h-48'} overflow-hidden`}>
          <img
            src={blog.image}
            alt={blog.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-60' : 'opacity-30'
          }`}></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-gray-900/80 backdrop-blur-sm border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-2xl flex items-center justify-center text-white hover:text-green-400 hover:border-green-400 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h3 className={`font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 ${
            isFeatured ? 'text-2xl' : 'text-xl'
          }`}>
            {blog.title}
          </h3>
          
          <p className={`text-gray-300 mb-4 leading-relaxed ${
            isFeatured ? 'text-base' : 'text-sm'
          }`}>
            {blog.preview}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, isFeatured ? 4 : 3).map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs hover:bg-green-400/20 hover:text-green-400 transition-colors duration-300 flex items-center"
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          {/* Read More Button */}
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-400 hover:text-teal-400 transition-colors duration-300 font-medium"
          >
            <BookOpen size={16} />
            <span>Read More</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </article>
    );
  };

  return (
    <section id="blogs" ref={sectionRef} className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Blogs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Sharing insights, tutorials, and experiences from my journey in software development and Android engineering.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-400 to-teal-400 text-gray-900'
                    : 'bg-gray-800/50 text-gray-300 hover:text-green-400 hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Blogs Grid */}
        <div className="mb-16">
          {selectedCategory === 'All' && (
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="mr-3 text-green-400" size={28} />
              All Articles
            </h3>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' ? regularBlogs : filteredBlogs).map((blog: any, index: number) => (
              <BlogCard key={index} blog={blog} index={index} isFeatured={false} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-green-400/10 to-teal-400/10 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5 animate-pulse"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Want to read more?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
              Follow me on Medium for more articles about Android development, software engineering, 
              and my journey in the tech industry.
            </p>
            <a
              href="https://medium.com/@chinmay7016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 relative z-10"
            >
              <ExternalLink size={20} />
              <span>Follow on Medium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;