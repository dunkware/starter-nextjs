import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
        }}
      />
      <div className="" />

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
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">AI Captures</h2>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  + New Capture
                </button>
              </div>

              <h3 className="text-gray-400 text-sm mb-2">YOUR CAPTURES</h3>

              <div className="space-y-3">
                {/* Capture items */}
                <div className="bg-blue-900/80 rounded-lg p-4">
                  <h4 className="font-medium">Product Branding</h4>
                  <p className="text-sm text-blue-200">Active now - 5 contributors</p>
                </div>

                <div className="bg-blue-900/80 rounded-lg p-4">
                  <h4 className="font-medium">Business Requirements</h4>
                  <p className="text-sm text-blue-200">Completed - 9 artifacts</p>
                </div>

                <div className="bg-blue-900/80 rounded-lg p-4">
                  <h4 className="font-medium">Q2 Sales Strategy</h4>
                  <p className="text-sm text-blue-200">Completed - 7 artifacts</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm mb-2">
                  <span>5 contributors</span>
                  <span>4:13 remaining</span>
                </div>
                <p className="text-sm italic mb-3">Rapid-fire thoughts will be analyzed by AI</p>
                
                <div className="space-y-2">
                  <div className="bg-blue-800/80 rounded-lg p-3 text-sm">
                    We need to make sure the brand feels modern but trustworthy...
                  </div>
                  <div className="bg-blue-800/80 rounded-lg p-3 text-sm">
                    agree w/ Sarah, competitors all use blue gradients...
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button className="text-orange-400 hover:text-orange-300 font-medium">
                    End Capture
                  </button>
                  <span className="text-blue-200 text-sm">Updating live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
