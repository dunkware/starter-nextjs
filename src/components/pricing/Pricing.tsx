import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Free",
      price: "0",
      description: "For individuals getting started with generative work",
      features: [
        "Generative Docs & Planning",
        "Up to 3 users",
        "1M AI tokens/month",
        "Basic support (Email, 48-hour response time)",
        "Great for small teams & side projects"
      ],
      cta: "Get Started",
      highlight: false,
      color: "bg-green-500",
      icon: "🟩"
    },
    {
      name: "Pro",
      price: "29",
      priceMonthly: "39",
      description: "For power users who rely on AI every day",
      features: [
        "Everything in Free",
        "10M AI tokens/month",
        "Unlimited projects",
        "Priority support (Email + Chat, 24-hour response time)",
        "Advanced document generation templates",
        "Version history (30 days)"
      ],
      cta: "Start Free Trial",
      highlight: true,
      color: "bg-blue-500",
      icon: "🟦"
    },
    {
      name: "Business Starter",
      price: "49",
      priceMonthly: "69",
      description: "For growing teams who need more control and trust",
      features: [
        "Dedicated business workspace (isolated from public runtime)",
        "Admin tools + Team permissions",
        "Scalable AI infrastructure (25M tokens/month)",
        "SSO integration",
        "Audit logs",
        "Workspace analytics"
      ],
      cta: "Start Free Trial",
      highlight: false,
      color: "bg-orange-500",
      icon: "🟧",
      minUsers: "Minimum 5 users"
    },
    {
      name: "Business Elite",
      price: "99",
      priceMonthly: "129",
      description: "For companies needing full control, privacy, and performance",
      features: [
        "Hosted in your private tenant (or optionally in your cloud)",
        "Custom AI runtime and compute limits (100M tokens/month)",
        "Advanced compliance options",
        "Custom data retention policies",
        "Priority SLAs (99.9% uptime guarantee)",
        "Dedicated onboarding specialist"
      ],
      cta: "Contact Sales",
      highlight: false,
      color: "bg-yellow-500",
      icon: "🟨",
      minUsers: "Minimum 10 users"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical AI across the organization",
      features: [
        "Fully managed, highly scalable infrastructure",
        "Custom integrations & security reviews",
        "Dedicated success manager & solutions engineering",
        "Advanced AI model customization",
        "Enterprise-grade SLAs (99.99% uptime guarantee)",
        "Unlimited tokens with fair use policy",
        "Custom security controls"
      ],
      cta: "Contact Sales",
      highlight: false,
      color: "bg-red-500",
      icon: "🟥"
    }
  ];

  const additionalServices = [
    {
      name: "AI Model Fine-tuning",
      price: "Starting at $5,000"
    },
    {
      name: "Custom Integration Development",
      price: "Starting at $2,500"
    },
    {
      name: "Advanced Training",
      price: "$1,500/session"
    },
    {
      name: "Implementation Services",
      price: "Custom quote based on requirements"
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
            <span className="text-orange-400">Transparent</span> Pricing for Every Team
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We believe in providing fair, scalable pricing that grows with your needs. 
            Our philosophy is simple: you should only pay for what you use, with predictable costs as you scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
                
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{tier.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                </div>
                
                <div className="mb-4">
                  {tier.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-bold text-white">${tier.price}</span>
                      <span className="text-blue-200">/user/month</span>
                      {tier.priceMonthly && (
                        <div className="text-sm text-blue-300 mt-1">
                          ${tier.priceMonthly}/user/month (billed monthly)
                        </div>
                      )}
                      {tier.minUsers && (
                        <div className="text-sm text-blue-300 mt-1">
                          {tier.minUsers}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">Contact us for pricing</span>
                  )}
                </div>
                
                <p className="text-blue-100 mb-6">{tier.description}</p>
                
                <div className="border-t border-white/10 pt-6 mb-6">
                  <h4 className="text-sm uppercase text-blue-200 mb-4">Features</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className={`h-5 w-5 ${tier.color ? tier.color.replace('bg-', 'text-') : 'text-blue-300'} mr-2 mt-0.5`} 
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
                        : tier.color ? `${tier.color} hover:${tier.color.replace('500', '600')} text-white` 
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

        {/* Yearly Discount */}
        <div className="mt-12 text-center bg-blue-800/30 rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">Yearly Discount</h3>
          <p className="text-blue-100">
            Save 20% when billed annually on all paid plans.
          </p>
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                <p className="text-blue-200">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-6">
            Need a custom solution for your specific requirements?
          </p>
          <Link 
            href="#custom"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
          >
            Let's talk about your specific needs
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
