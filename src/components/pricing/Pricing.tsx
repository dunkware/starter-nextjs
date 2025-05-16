import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for individuals just getting started with generative web",
      features: [
        "3 AI Captures per month",
        "1 contributor per capture",
        "Basic analytics",
        "24 hour data retention"
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Starter",
      price: "29",
      description: "Ideal for small teams exploring generative collaboration",
      features: [
        "15 AI Captures per month",
        "5 contributors per capture",
        "Advanced analytics",
        "30 day data retention",
        "Export to common formats"
      ],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Essentials",
      price: "79",
      description: "For teams that need more collaboration power and insights",
      features: [
        "Unlimited AI Captures",
        "15 contributors per capture",
        "In-depth analytics & insights",
        "90 day data retention",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-featured solution for organizations at scale",
      features: [
        "Unlimited everything",
        "Unlimited contributors",
        "Advanced security features",
        "Dedicated support",
        "Custom deployment options",
        "Unlimited data retention",
        "Advanced AI capabilities"
      ],
      cta: "Contact Sales",
      highlight: false,
    }
  ];

  return (
    <div className="relative w-full bg-blue-900 py-24 px-6">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800/40 to-blue-900/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Simple</span> Pricing for Everyone
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the plan that works best for your team's generative web needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                tier.highlight 
                  ? 'border-2 border-orange-500 transform md:-translate-y-4' 
                  : 'border border-white/10'
              }`}
            >
              <div className={`
                ${tier.highlight ? 'bg-blue-800/40' : 'bg-black/20'} 
                backdrop-blur-sm p-6 h-full flex flex-col
              `}>
                {tier.highlight && (
                  <div className="bg-orange-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full self-start mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-blue-200">/month</span>
                  )}
                </div>
                
                <p className="text-blue-100 mb-6">{tier.description}</p>
                
                <div className="border-t border-white/10 pt-6 mb-6">
                  <h4 className="text-sm uppercase text-blue-200 mb-4">Features</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className={`h-5 w-5 ${tier.highlight ? 'text-orange-400' : 'text-blue-300'} mr-2 mt-0.5`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href="#"
                    className={`
                      w-full block text-center py-3 px-6 rounded-md font-medium transition-colors 
                      ${tier.highlight 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }
                    `}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-6">
            All plans include core AI Capture features. Need something special?
          </p>
          <Link 
            href="#custom"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
          >
            Contact us for custom pricing
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}