import React from 'react'
import Image from 'next/image'
import { Clock, Zap, Users, FileText, BrainCircuit, ArrowRight } from 'lucide-react'

export default function TeamJamsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Team Jams
                <span className="block text-2xl md:text-3xl mt-2 text-purple-300">
                  Skip meetings. Create magic.
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How Team Jams Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Time-Boxed Sessions</h3>
              <p className="text-gray-600">
                Set a timer, focus intensely, and capture ideas without overthinking. 
                Short, concentrated bursts of productivity replace lengthy meetings.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Fire Knowledge</h3>
              <p className="text-gray-600">
                No time for perfect grammar or spelling. Just raw, unfiltered ideas 
                flowing quickly from your team's collective intelligence.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Processing</h3>
              <p className="text-gray-600">
                Dunkware AI processes all the content and generates the types of 
                artifacts configured for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Use Cases</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Team Jams transforms chaotic brainstorming into structured deliverables, 
            saving your team countless hours of meeting time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-white" />
                      <h4 className="text-white font-medium">JIRA-1234: User Authentication Flow</h4>
                    </div>
                    <ul className="space-y-2 text-white/90 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full border border-white/50 flex-shrink-0 mt-0.5"></div>
                        <span>Implement social login options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full border border-white/50 flex-shrink-0 mt-0.5"></div>
                        <span>Add password strength indicator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full border border-white/50 flex-shrink-0 mt-0.5"></div>
                        <span>Create forgot password flow</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">JIRA Story Creation</h3>
                <p className="text-gray-600 mb-6">
                  Transform rapid-fire team input into well-structured JIRA stories complete 
                  with acceptance criteria, story points, and implementation details.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-white" />
                      <h4 className="text-white font-medium">Product Requirements: Mobile App v2.0</h4>
                    </div>
                    <div className="space-y-3 text-white/90 text-sm">
                      <p>The new version should focus on improving user engagement through:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Personalized content recommendations</li>
                        <li>Streamlined checkout process</li>
                        <li>Enhanced notification system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Product Requirements</h3>
                <p className="text-gray-600 mb-6">
                  Quickly capture product ideas and requirements from stakeholders and 
                  transform them into comprehensive documentation with clear priorities.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
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
