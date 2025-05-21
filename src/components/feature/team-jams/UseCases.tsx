import React from 'react'
import { FileText, ArrowRight } from 'lucide-react'


export default function UseCases() {
  return (
    <div>

      <section className=" bg-[#0F172A] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Use Cases</h2>
          <p className="text-white text-center max-w-3xl mx-auto mb-16">
            Team Jams transforms chaotic brainstorming into structured deliverables, 
            saving your team countless hours of meeting time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
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
    </div>
  )
}
