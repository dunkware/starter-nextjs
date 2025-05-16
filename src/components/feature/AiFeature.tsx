import { Check, FileText, PenToolIcon as Tool } from "lucide-react"

export default function AiFeature() {
  return (
    <div className="bg-[#1e3a8a] text-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[#ff6b1a] text-5xl md:text-6xl font-bold mb-6">Get Your Freedom Back</h1>
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
          From endless meetings to instant results. Dunkware unites people and AI to create faster than ever before.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {/* AI Captures Section */}
          <div className="flex flex-col items-start text-left">
            <div className="bg-[#1e3a8a] border-2 border-white/20 rounded-lg p-4 mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">AI Captures</h2>
            <p className="mb-6 text-white/80">
              Replace endless meetings with focused, time-boxed collaboration sessions. AI synthesizes discussions into
              actionable artifacts automatically.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>5x faster requirements gathering</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>Automated meeting minutes & follow-ups</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>Real-time consensus visualization</span>
              </li>
            </ul>
          </div>

          {/* AI Co-Creation Section */}
          <div className="flex flex-col items-start text-left">
            <div className="bg-[#1e3a8a] border-2 border-white/20 rounded-lg p-4 mb-4">
              <Tool className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">AI Co-Creation</h2>
            <p className="mb-6 text-white/80">
              Your AI partner builds presentations, documents, and prototypes while you focus on strategy and decisions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>Slide decks built in minutes, not hours</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>Continuous refinement through conversation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#ff6b1a] mr-2 mt-0.5 flex-shrink-0" />
                <span>Version control with AI-generated changelogs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
