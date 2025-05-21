import React from 'react';
import Link from 'next/link';
import HeroAnim from './HeroAnim';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
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
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 pt-8 pb-36 mt-[-1vh] lg:pl-40">
          {/* Left side - Hero content */}
          <div className="w-full lg:w-2/3 text-white space-y-6 mb-24 lg:mb-0 lg:mt-[-10vh]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap">
            LET AI <br className="mt-0 pt-0" /><span className="text-orange-400">WORK FOR YOU</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              
              Time is constant — optimize it. Dunkware AI <br></br> works for you so you can on what matters most.
              
              
          
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                href="/login" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md text-center transition-colors"
              >
                Login
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
           <div className="w-full lg:w-2/5 lg:-ml-8">
                     <HeroAnim/>
           </div>
        
        </div>
      </div>
    </div>
  );
}
