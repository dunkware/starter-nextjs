import React from 'react'
import {  ArrowRight } from 'lucide-react'

export default function TeamJamsBanner() {
  return (
    <div>
         <section className="relative lg:py-44 py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
            backgroundSize: '100% auto',
          }}
        />
        <div className="absolute inset-0 bg-[#0F172A] opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Team Jams
                <span className="block text-2xl md:text-2xl mt-2 text-orange-400">
                  Why meet when you can jam
                </span>
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Save time, skip meetings, have focused time-boxed sessions where topics are generated on the fly. 
                No spell checker or grammar—just rapid fire knowledge, fast and quick within a small time frame.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-purple-100 transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-white/70 text-sm">Team Jam Session #42</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@alex: We need to improve the onboarding flow</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@taylor: Users are confused by step 3</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@jordan: What if we add a progress indicator?</p>
                      </div>
                      <div className="bg-purple-500/30 p-3 rounded-lg border border-purple-400/30">
                        <p className="text-white text-sm font-medium">Dunkware AI is processing...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
