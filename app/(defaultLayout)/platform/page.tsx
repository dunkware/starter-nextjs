import React from "react"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export default function PlatformPage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Platform
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the technologies that power Dunkware AI and enable seamless collaboration between people and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-[#1E293B]/60 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Globe className="h-8 w-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Generative Web</h3>
                  <p className="text-white/70 mb-4">
                    Self growing software through people and AI. A new paradigm where people and AI work together to create, collaborate, and solve problems.
                  </p>
                  <Link href="/platform/generative-web">
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all flex items-center gap-2 text-sm">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
