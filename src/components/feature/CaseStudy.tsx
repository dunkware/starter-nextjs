export default function CaseStudy() {
  return (
    <div className="bg-[#1e3a8a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Testimonial */}
          <div>
            <p className="text-[#ff6b1a] font-medium mb-3">CASE STUDY</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How Acme Corp reduced meetings by 70%</h2>
            <blockquote className="text-lg md:text-xl text-white/90 mb-6">
              "We used to spend 15 hours weekly on status meetings. With Dunkware's AI Captures, we now have 2 hours of
              focused collaboration and get better results."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-3">
                <span className="inline-block w-1 h-6 bg-[#ff6b1a]"></span>
              </div>
              <p className="font-medium">Sarah Chen, Director of Product</p>
            </div>
          </div>

          {/* Right Column - Metrics */}
          <div className="bg-[#1a337a]/70 border border-blue-400/20 rounded-xl p-8">
            <p className="text-lg mb-6">
              <span className="text-[#ff6b1a] font-medium">Before</span> →{" "}
              <span className="text-blue-300 font-medium">After</span>
            </p>

            {/* Meeting Hours Metric */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span>Meeting Hours</span>
                <span className="font-medium">15 → 2</span>
              </div>
              <div className="h-2 w-full bg-blue-900 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-[#ff6b1a] h-full w-[87%]"></div>
                  <div className="bg-blue-500 h-full w-[13%]"></div>
                </div>
              </div>
            </div>

            {/* Decision Time Metric */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span>Decision Time</span>
                <span className="font-medium">3 days → 3 hours</span>
              </div>
              <div className="h-2 w-full bg-blue-900 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-[#ff6b1a] h-full w-[90%]"></div>
                  <div className="bg-blue-500 h-full w-[10%]"></div>
                </div>
              </div>
            </div>

            {/* Follow-up Items Metric */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Follow-up Items</span>
                <span className="font-medium">23 → 5</span>
              </div>
              <div className="h-2 w-full bg-blue-900 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-[#ff6b1a] h-full w-[82%]"></div>
                  <div className="bg-blue-500 h-full w-[18%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
