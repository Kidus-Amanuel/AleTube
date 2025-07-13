import React from 'react';

export default function Aboutme() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto">
        {/* Header with navigation */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-red-600 rounded-full"></div>
            <h1 className="ml-3 text-2xl font-bold">ALE TUBE</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Home</li>
              <li className="text-amber-400 font-medium">About</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Videos</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Merch</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </header>

        {/* Main content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - profile */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-amber-500 to-red-600 p-1 rounded-full">
                    <div className="bg-gray-800 rounded-full p-1">
                      <div className="bg-gray-700 w-24 h-24 rounded-full flex items-center justify-center">
                        <span className="text-4xl">A</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Ale Tube</h1>
                    <p className="text-amber-400 mt-1">Content Creator & Entertainer</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Hey there! I'm Ale, a passionate content creator who loves sharing my adventures, thoughts, 
                  and creative projects with the world. What started as a fun hobby has grown into a vibrant 
                  community of amazing people who inspire me every day.
                </p>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                  On my channel, you'll find a mix of lifestyle vlogs, creative challenges, travel diaries, 
                  and heartfelt conversations. I believe in authenticity, positivity, and making the internet 
                  a more joyful place.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-400">250K+</div>
                <div className="text-gray-400">Subscribers</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-gray-400">Videos</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-400">5M+</div>
                <div className="text-gray-400">Views</div>
              </div>
            </div>
          </div>

          {/* Right column - content showcase */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">My Content</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <span className="text-amber-400 font-medium">Vlogs & Diaries</span>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <span className="text-amber-400 font-medium">Challenges</span>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <span className="text-amber-400 font-medium">Travel</span>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <span className="text-amber-400 font-medium">Q&A</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex flex-wrap gap-4">
                {['YouTube', 'Instagram', 'Twitter', 'TikTok', 'Discord'].map((platform) => (
                  <div 
                    key={platform} 
                    className="flex items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-amber-500 transition-all cursor-pointer"
                  >
                    <div className="bg-gray-600 w-8 h-8 rounded-full mr-2"></div>
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
              <p className="mb-6">
                Subscribe to stay updated with my latest videos and behind-the-scenes content!
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-white/20 text-white placeholder:text-white/70 px-4 py-3 rounded-l-lg focus:outline-none"
                />
                <button className="bg-black px-6 py-3 rounded-r-lg font-medium hover:bg-gray-900 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Quote section */}
        <div className="max-w-3xl mx-auto mt-24 mb-16 text-center">
          <div className="text-6xl text-amber-400 mb-4">"</div>
          <p className="text-2xl italic">
            Creating content isn't just about views and numbers - it's about connection, 
            creativity, and sharing moments that matter.
          </p>
          <p className="mt-6 text-amber-400 font-medium">- Ale Tube</p>
        </div>

        
      </div>
    </div>
  );
}