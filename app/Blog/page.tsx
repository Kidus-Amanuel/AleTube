'use client';

import React, { useState } from 'react';
import Image from 'next/image';


export default function Blog() {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Blog categories
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'behind-scenes', name: 'Behind the Scenes' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'vlog', name: 'Vlog Diaries' },
    { id: 'community', name: 'Community' },
    { id: 'updates', name: 'Updates' }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Making of My Most Popular Video",
      excerpt: "Ever wondered what goes into creating a viral video? Join me as I break down the entire process from concept to final edit.",
      date: "May 15, 2025",
      readTime: "8 min read",
      category: "behind-scenes",
      image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      popular: true
    },
    {
      id: 2,
      title: "10 Tips for Aspiring Content Creators",
      excerpt: "After five years in the content creation space, I've learned some valuable lessons. Here are my top tips for anyone starting their creator journey.",
      date: "April 28, 2025",
      readTime: "12 min read",
      category: "tutorials",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      popular: true
    },
    {
      id: 3,
      title: "My Journey to 250K Subscribers",
      excerpt: "It's been an incredible journey reaching this milestone. In this post, I reflect on the challenges, successes, and lessons learned along the way.",
      date: "April 10, 2025",
      readTime: "10 min read",
      category: "vlog",
      image: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "How I Organize My Filming Schedule",
      excerpt: "Staying organized is key to consistent content creation. Here's a deep dive into my scheduling system and productivity hacks.",
      date: "March 22, 2025",
      readTime: "7 min read",
      category: "tutorials",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      popular: true
    },
    {
      id: 5,
      title: "Behind the Scenes: Our Community Meetup",
      excerpt: "Relive the magical moments from our first in-person community event. From planning to execution, here's how it all came together.",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "community",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "New Studio Tour & Setup Reveal",
      excerpt: "After months of planning, my new creative space is finally ready! Come take a tour of my new studio setup and equipment.",
      date: "February 18, 2025",
      readTime: "9 min read",
      category: "updates",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 7,
      title: "The Camera Gear I Use in 2025",
      excerpt: "Many of you have asked about my filming setup. Here's a comprehensive guide to all the equipment I currently use for my videos.",
      date: "February 2, 2025",
      readTime: "11 min read",
      category: "tutorials",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 8,
      title: "Reflecting on My First Year of Full-Time Content Creation",
      excerpt: "One year ago I took the leap to become a full-time creator. In this personal reflection, I share the highs, lows, and unexpected lessons.",
      date: "January 14, 2025",
      readTime: "14 min read",
      category: "vlog",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Popular posts
  const popularPosts = blogPosts.filter(post => post.popular);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-[family-name:var(--font-geist-sans)] py-24 ">
     

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Behind the Content</h1>
            <p className="text-xl text-gray-300 mb-8">
              Dive deeper into my creative process, personal journey, and the stories behind the videos.
            </p>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search blog posts..." 
                className="flex-1 bg-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500 text-white">
                  1
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200">
                  2
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200">
                  3
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200">
                  &gt;
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* About Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-red-600 p-1 rounded-full">
                  <div className="bg-gray-800 rounded-full p-1">
                    <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">A</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Ale Tube</h3>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-700">
                Sharing my journey through videos and words. Join me as I explore creativity, community, and the art of storytelling.
              </p>
            </div>
            
            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Popular Posts</h3>
              <div className="space-y-5">
                {popularPosts.map(post => (
                  <div key={post.id} className="flex items-start group cursor-pointer">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-3">
                {categories.filter(c => c.id !== 'all').map(category => (
                  <li key={category.id} className="flex justify-between">
                    <span className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">
                      {category.name}
                    </span>
                    <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                      {blogPosts.filter(p => p.category === category.id).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-amber-500 to-red-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Join the Newsletter</h3>
              <p className="mb-4">
                Get updates on new posts, exclusive content, and behind-the-scenes insights.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/20 text-white placeholder:text-white/70 px-4 py-3 rounded-lg focus:outline-none"
                />
                <button className="w-full bg-black hover:bg-gray-900 px-4 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-medium">FEATURED POST</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                How I Overcome Creative Burnout
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                After months of non-stop content creation, I hit a wall. In this deeply personal post, I share my journey through burnout and the strategies that helped me rediscover my creative spark.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Read the Full Story
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-r from-amber-500/20 to-red-600/20 rounded-2xl overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}