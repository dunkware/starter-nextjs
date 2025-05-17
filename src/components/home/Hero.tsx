import React from 'react';
import Link from 'next/link';
import HeroAnim from './HeroAnim';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
        }}
      />
      <div className="absolute inset-0 bg-[#0F172A
] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex h-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-12">
          {/* Left side - Hero content */}
          <div className="w-full lg:w-1/2 text-white space-y-6 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold">
              Building The <span className="text-orange-400">Generative</span>
              <br />
              <span className="text-orange-400">Web</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-xl">
              Where people and AI come together to create, extend and grow a living web
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#waitlist" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md text-center transition-colors"
              >
                Join Waitlist
              </Link>
              <Link 
                href="#learn" 
                className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-md text-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side - AI Captures panel */}
           <div className="w-full lg:w-5/12">
                     <HeroAnim/>

           
           </div>
        
        </div>
      </div>
    </div>
  );
}
