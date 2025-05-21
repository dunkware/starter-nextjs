'use client';

import React from 'react';
import * as FramerMotion from 'framer-motion';
import { X, Clock, Zap, Layers, ArrowRight } from 'lucide-react';

const { motion } = FramerMotion;

export default function AboutManifesto() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0F172A]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-orange-500 blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-purple-600 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[30%] w-96 h-96 rounded-full bg-blue-600 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero manifesto section */}
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-3"
          >
            <div className="bg-[#1E293B]/70 rounded-lg border border-white/5 px-8 py-10 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 flex items-center gap-3">
                <span>Enough Bullshit</span>
                <span className="inline-block ml-2 rotate-0 md:rotate-12">
                  <X className="h-8 w-8 text-orange-500" />
                </span>
              </h2>
              
              <div className="space-y-8 text-xl text-white/90">
                <p className="leading-relaxed">
                  Technology was supposed to make us faster, smarter, freer. Instead, it buried us in tabs, tools, and to-do lists. We've been promised productivity, but what we got was overhead—chasing approvals, switching contexts, scheduling calls, formatting ideas to fit software that was never built to understand them.
                </p>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 py-3">
                  <div className="text-3xl md:text-4xl font-bold text-white">Dunkware</div>
                  <div className="h-px w-full md:w-px md:h-10 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  <div className="flex-1 italic text-white/80">is built on a different principle: that good technology should disappear.</div>
                </div>
                
                <p className="leading-relaxed">
                  It should minimize its presence, reduce friction, and amplify what matters—your time, your ideas, your work.
                </p>
                
                <p className="leading-relaxed">
                  We envision a future where AI doesn't just assist you—it represents you. Agents, shaped by you, handle communication, coordination, and execution across people, teams, and institutions. No more waiting, translating, or jumping through hoops. Just intent, met with action.
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                  <div className="text-sm text-orange-400 tracking-wider uppercase font-medium">Our mission</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                </div>
                
                <div className="text-center py-2">
                  <p className="text-2xl md:text-3xl font-semibold text-white">
                    We're not here to add another app to your stack.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-orange-400 mt-2">
                    We're here to remove the stack.
                  </p>
                </div>
                
                <div className="pt-4 text-right">
                  <p className="text-white/90">
                    — <span className="font-bold">Duncan Krebs</span>
                  </p>
                  <p className="text-white/60 text-sm">Creator of Dunkware</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual representations */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col"
          >
            <div className="bg-red-500/20 rounded-lg p-3 w-fit mb-4">
              <Layers className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Technology Today</h3>
            <div className="flex-1">
              <p className="text-white/70 mb-4">An ever-growing stack of apps, tools, and platforms that require constant attention and management.</p>
            </div>
            <div className="mt-6 bg-[#0F172A]/60 rounded-lg p-4">
              <div className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${i <= 3 ? 'bg-red-500' : 'bg-white/20'}`}></div>
                    <div className="h-px flex-1 bg-white/10"></div>
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col"
          >
            <div className="bg-orange-500/20 rounded-lg p-3 w-fit mb-4">
              <Clock className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Cost</h3>
            <div className="flex-1">
              <p className="text-white/70 mb-4">Your time and creative energy are drained by overhead, context-switching, and forcing ideas to fit rigid structures.</p>
            </div>
            <div className="mt-6 bg-[#0F172A]/60 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-md flex items-center justify-center
                    ${i < 7 ? 'bg-white/10' : 'bg-orange-500/20 border border-orange-500/30'}`}
                  >
                    {i >= 7 && <Clock className="h-4 w-4 text-orange-400" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col"
          >
            <div className="bg-purple-500/20 rounded-lg p-3 w-fit mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dunkware's Vision</h3>
            <div className="flex-1">
              <p className="text-white/70 mb-4">Technology that disappears, AI that represents you, and work that flows naturally from intent to action.</p>
            </div>
            <div className="mt-6 bg-[#0F172A]/60 rounded-lg p-4">
              <div className="space-y-4">
                <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full"></div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-white/80 text-xs">Intent</div>
                  <ArrowRight className="h-3 w-3 text-white/40" />
                  <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-white/80 text-xs">Action</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-purple-700 transition-all flex items-center gap-2 mx-auto"
          >
            Join Our Vision <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
