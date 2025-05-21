import React from 'react';
import { ArrowRight, Clock, Zap, Globe, Code, Cpu, Users } from 'lucide-react';

export default function PlatformOverview() {
  return (
    <div>
      {/* Hero Section */}
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
                Dunkware AI
                <span className="block text-2xl md:text-2xl mt-2 text-orange-400">
                  Better manage your time and effort
                </span>
              </h1>
              <p className="text-lg text-white/80 mb-8">
                We're building cutting-edge generative and augmentative AI that helps individuals and teams quickly get stuff done—without the long meetings or the struggle of putting thoughts into email. Powered by intent and knowledge, Dunkware welcomes typos and grammar that leave others concerned.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all flex items-center gap-2">
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
                      <div className="ml-4 text-white/70 text-sm">Dunkware AI in action</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@user1: Need to create product req doc for the mobile app</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@user2: key features should include offline access</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white text-sm">@user3: we need a dark mode option too</p>
                      </div>
                      <div className="bg-orange-500/30 p-3 rounded-lg border border-orange-400/30">
                        <p className="text-white text-sm font-medium">Dunkware AI is generating requirements doc...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generative Web Section */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Generative Web</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A new paradigm where people and AI work together to create, collaborate, and solve problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#1E293B]/60 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">What is the Generative Web?</h3>
                <p className="text-lg text-white/80 mb-6">
                  The Generative Web is a combination of people and both generative and augmentative AI working together. It's a web that grows and expands through the participation of humans and AI collaborating seamlessly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-orange-500/20 rounded-lg">
                      <Users className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Collective Intelligence</h4>
                      <p className="text-white/70">Processing rapid-fire inputs from individuals and teams to generate assets from collective intentions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-orange-500/20 rounded-lg">
                      <Cpu className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">AI-Powered</h4>
                      <p className="text-white/70">Leveraging open-source learning models to keep costs down while delivering powerful capabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-orange-500/20 rounded-lg">
                      <Globe className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Expanding Ecosystem</h4>
                      <p className="text-white/70">A web that grows through the continuous contributions of both humans and AI, building on shared knowledge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1E293B]/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Generative AI</h4>
                </div>
                <p className="text-white/70">
                  Transforms product requirements, legal matters, and other inputs into polished, actionable content by processing batch inputs through our AI farm.
                </p>
              </div>

              <div className="bg-[#1E293B]/60 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Augmentative AI</h4>
                </div>
                <p className="text-white/70">
                  AI Captures in Dunkware apply monitoring to group discussions, work documents, and challenges—autonomously building software solutions within a growing web.
                </p>
              </div>

              <div className="bg-[#1E293B]/60 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Code className="h-5 w-5 text-orange-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Unified Runtime</h4>
                </div>
                <p className="text-white/70">
                  Takes AI to a higher level by building new software not with code but through a unified runtime, simplifying complex development into intent-based creation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-purple-700 transition-all flex items-center gap-2 mx-auto">
              Experience the Generative Web <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What This Means For You</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Dunkware AI transforms your workflow and productivity in meaningful ways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0F172A]/60 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Information Capture</h3>
              <p className="text-white/70">
                Automatically captures and organizes valuable information from discussions, documents, and interactions, building a knowledge repository that grows with your team.
              </p>
            </div>

            <div className="bg-[#0F172A]/60 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <Clock className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Task Simplification</h3>
              <p className="text-white/70">
                Transforms boring, mundane tasks into simple ones, freeing up your time and mental energy for more creative and strategic work that matters.
              </p>
            </div>

            <div className="bg-[#0F172A]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Polished Content</h3>
              <p className="text-white/70">
                Publishes professional, polished content for formal exchange without you having to worry about typos or grammar—focusing on ideas rather than presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
