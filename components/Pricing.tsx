'use client';

import { Check, Zap, Star } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-r from-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-5 py-2 rounded-full font-semibold text-sm mb-6">
            <Zap className="w-4 h-4" />
            Limited Time Pre-Order
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Get Early Access
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience the future of social discovery. Lock in exclusive founding member benefits.
          </p>
        </div>

        {/* Centered Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                Founding Member
              </div>
            </div>

            {/* Pricing Card */}
            <div className="rounded-2xl bg-white shadow-2xl border-2 border-pink-600 p-8 md:p-10 hover:shadow-[0_20px_60px_-15px_rgba(219,39,119,0.3)] transition-all duration-500 hover:-translate-y-2">
              {/* Price */}
              <div className="text-center mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-start justify-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-slate-900 mt-2">$</span>
                  <span className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">29</span>
                </div>
                <p className="text-lg text-slate-600">One-time pre-order</p>
                <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full font-semibold text-sm mt-4">
                  <Zap className="w-4 h-4" />
                  Save $20 off launch price
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Lifetime access to Hot or Not',
                  'Unlimited voting and ratings',
                  'Advanced matching algorithm',
                  'Priority profile visibility',
                  'Exclusive founding member badge',
                  'Early access to new features',
                  'Ad-free experience forever',
                  'VIP customer support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-pink-600 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stripe Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Pre-Order Now - $29
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-500" />
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-500" />
                    Money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-slate-600 mt-8 text-sm">
            Join <span className="font-semibold text-pink-600">2,847 founding members</span> who've already secured their spot
          </p>
        </div>
      </div>
    </section>
  );
}
