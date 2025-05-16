import { Globe, Heart, Brain } from "lucide-react"

export default function FeatureCards() {
  return (
    <div className="bg-[#1e3a8a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Living Workspaces Card */}
          <div className="bg-[#1a337a] rounded-xl p-8 border border-blue-400/20">
            <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center mb-6 border border-blue-400/30">
              <Globe className="w-6 h-6 text-[#5eead4]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Living Workspaces</h3>
            <p className="text-white/80">
              Spaces evolve into living documents that grow with your team's knowledge and AI insights.
            </p>
          </div>

          {/* Human-AI Handoff Card */}
          <div className="bg-[#1a337a] rounded-xl p-8 border border-blue-400/20">
            <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center mb-6 border border-blue-400/30">
              <Heart className="w-6 h-6 text-[#ffa64d]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Human-AI Handoff</h3>
            <p className="text-white/80">
              Seamlessly pass tasks between team members and AI agents with full context preservation.
            </p>
          </div>

          {/* Organizational Memory Card */}
          <div className="bg-[#1a337a] rounded-xl p-8 border border-blue-400/20">
            <div className="bg-[#1e3a8a] w-12 h-12 rounded-full flex items-center justify-center mb-6 border border-blue-400/30">
              <Brain className="w-6 h-6 text-[#ffb3b3]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Organizational Memory</h3>
            <p className="text-white/80">
              AI remembers everything so you don't have to. Recall past decisions and rationale instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
