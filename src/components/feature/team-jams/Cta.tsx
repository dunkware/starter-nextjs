import React from 'react'

export default function Cta() {
  return (
    <div>
        {/* CTA Section */}
      <section className=" lg:py-44 py-16 overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
          }}
        />
        <div className="absolute inset-0 bg-[#0F172A] opacity-40" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team Meetings?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of teams who have reclaimed their time and unlocked 
            their collective creativity with Team Jams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-medium hover:bg-purple-100 transition-all">
              Start Your First Jam
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
