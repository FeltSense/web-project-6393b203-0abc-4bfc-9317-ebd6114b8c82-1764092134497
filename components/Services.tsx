'use client'

import { Zap, Heart, TrendingUp, Sparkles } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Zap,
      title: "Instant Ratings",
      description: "Get real-time feedback on your photos from our vibrant community. Swipe, rate, and discover what's trending in seconds.",
      gradient: "from-pink-500 to-fuchsia-600",
      size: "large"
    },
    {
      icon: Heart,
      title: "Match & Connect",
      description: "Find people who rate you highly and start meaningful conversations instantly.",
      gradient: "from-cyan-400 to-cyan-600",
      size: "small"
    },
    {
      icon: TrendingUp,
      title: "Popularity Score",
      description: "Track your rating trends and see how you rank among millions of users worldwide.",
      gradient: "from-pink-400 to-pink-600",
      size: "small"
    },
    {
      icon: Sparkles,
      title: "AI Enhancement",
      description: "Get smart photo suggestions and tips to boost your ratings with our AI-powered insights.",
      gradient: "from-fuchsia-500 to-pink-600",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-r from-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Everything You Need to Stand Out
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help you shine, connect, and discover your social potential
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            
            return (
              <div
                key={index}
                className={`${
                  isLarge ? 'md:col-span-2' : 'md:col-span-1'
                } rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group`}
              >
                <div className={`flex ${isLarge ? 'flex-col md:flex-row md:items-center md:gap-12' : 'flex-col'}`}>
                  {/* Icon */}
                  <div className={`flex-shrink-0 mb-6 ${isLarge ? 'md:mb-0' : ''}`}>
                    <div className={`inline-flex items-center justify-center ${isLarge ? 'w-20 h-20' : 'w-16 h-16'} rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-normal leading-relaxed text-slate-600 mb-6">
                      {feature.description}
                    </p>
                    {isLarge && (
                      <a
                        href="#contact"
                        className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
                      >
                        Get Started
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
