import { Users } from 'lucide-react'
import React from 'react'

export default function TeamColaboaration() {
  return (
    <div>
         {/* Team Collaboration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Your Team Together</h2>
              <p className="text-gray-600 mb-8">
                Team Jams works best when everyone contributes. The diversity of 
                perspectives leads to better outcomes, and our AI ensures no idea gets lost.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Inclusive Participation</h4>
                    <p className="text-gray-500 text-sm">
                      Everyone gets a voice, even those who might stay quiet in traditional meetings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Remote-Friendly</h4>
                    <p className="text-gray-500 text-sm">
                      Works seamlessly for distributed teams across different time zones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Psychological Safety</h4>
                    <p className="text-gray-500 text-sm">
                      The rapid-fire format encourages sharing ideas without fear of judgment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 p-6 max-w-lg">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-md rounded-lg p-3 flex flex-col items-center justify-center aspect-square">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 mb-2 flex items-center justify-center text-white font-bold">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div className="h-1.5 w-16 bg-white/30 rounded-full"></div>
                      </div>
                    ))}
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
