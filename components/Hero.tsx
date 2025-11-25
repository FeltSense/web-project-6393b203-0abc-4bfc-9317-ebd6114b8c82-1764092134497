'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-600 via-pink-700 to-fuchsia-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s',
          }}
        ></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium text-sm tracking-wide">
                #1 Social Discovery Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-['Space_Grotesk'] leading-tight">
              Discover.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                Connect.
              </span>
              <br />
              Be Discovered.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-['Inter']">
              Join millions making instant connections. Rate profiles, get discovered, and find your vibe in the most exciting social platform of 2024.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">10M+</div>
                <div className="text-white/70 font-medium mt-1">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">500M+</div>
                <div className="text-white/70 font-medium mt-1">Daily Ratings</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">4.9★</div>
                <div className="text-white/70 font-medium mt-1">App Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="#contact"
                className="group bg-white hover:bg-cyan-50 text-pink-600 font-semibold rounded-xl px-10 py-5 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span className="text-lg">Get Started Free</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm rounded-xl px-10 py-5 font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span className="text-lg">See How It Works</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden bg-gradient-to-br from-pink-400 to-fuchsia-600">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="User avatar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Join 10M+ users</div>
                <div className="text-white/70 text-sm">Making connections daily</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Phone Mockup */}
          <div className="relative hidden lg:block">
            <div
              className="relative z-10"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-[340px] h-[680px] bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-800 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                
                {/* Screen Content */}
                <div className="relative w-full h-full bg-gradient-to-br from-pink-50 to-cyan-50 overflow-hidden">
                  {/* Mock App Interface */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-white rounded-3xl shadow-2xl w-full h-[85%] overflow-hidden">
                      {/* Profile Card */}
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                          alt="Profile"
                          width={400}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                          <h3 className="text-white text-2xl font-bold mb-1">Sarah, 24</h3>
                          <p className="text-white/80 text-sm">2 miles away</p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                          <button className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <button className="w-16 h-16 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Phone */}
              <div className="absolute -top-8 -right-8 bg-cyan-500 text-white rounded-2xl px-6 py-4 shadow-2xl animate-bounce">
                <div className="text-3xl font-bold">🔥</div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl px-6 py-4 shadow-2xl animate-pulse">
                <div className="text-2xl font-bold text-pink-600">+1 Match</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#services" className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
