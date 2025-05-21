import Pricing from "@/src/components/pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | AI Tool",
  description: "Transparent pricing plans for every team size and need. Choose the plan that works best for your AI needs.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-10 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core AI features with different levels of capacity and support.
            </p>
          </div>
        </div>
      </div>
      
      <Pricing />
      
      <div className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-900/50 rounded-xl p-8 border border-blue-700">
            <h2 className="text-3xl font-bold text-white mb-6">Our Pricing Philosophy</h2>
            <div className="space-y-6 text-blue-100">
              <p>
                We believe AI tools should be accessible to everyone, from individual creators to enterprise organizations. 
                Our pricing is designed to scale with your usage, ensuring you only pay for what you need.
              </p>
              <p>
                As your team grows and your AI needs expand, our plans provide the flexibility to scale up without unexpected costs. 
                We're committed to transparent pricing with no hidden fees.
              </p>
              <p>
                All plans include our core AI capabilities, with higher tiers offering increased capacity, 
                enhanced security features, and more personalized support to meet the needs of larger organizations.
              </p>
              <p>
                Not sure which plan is right for you? Start with our Free tier to explore our platform, 
                or contact our sales team for a personalized consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What are AI tokens?</h3>
                <p className="text-blue-100">
                  AI tokens are the units of measurement for AI processing. They represent the computational resources used 
                  when generating content, analyzing documents, or performing other AI tasks. Different operations consume 
                  different amounts of tokens based on their complexity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-blue-100">
                  Yes, you can change your plan at any time. When upgrading, the new features and capacity will be available immediately. 
                  When downgrading, changes will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What happens if I exceed my monthly token limit?</h3>
                <p className="text-blue-100">
                  If you approach your monthly token limit, you'll receive notifications. If you exceed your limit, 
                  you can purchase additional tokens or upgrade to a higher tier plan with more capacity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Do unused tokens roll over to the next month?</h3>
                <p className="text-blue-100">
                  No, unused tokens do not roll over. Your token allocation refreshes at the beginning of each billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Is there a free trial for paid plans?</h3>
                <p className="text-blue-100">
                  Yes, we offer a 14-day free trial for our Pro and Business Starter plans. No credit card is required to start your trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
