'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Hot or Not completely transformed how I connect with my audience! The instant feedback is addictive and the community is so engaged. I've grown my following by 300% in just two months!"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Marketer",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "This platform is pure genius. The voting system creates such authentic interactions, and I love discovering new people daily. It's like social media was meant to be - fun, fast, and real!"
    },
    {
      name: "Emma Thompson",
      role: "Influencer",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "I was skeptical at first, but Hot or Not delivers! The energy is electric, connections happen instantly, and the vibe is incredible. Best social discovery app I've ever used, hands down."
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-r from-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join the community that's redefining social discovery with instant connections and authentic vibes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
