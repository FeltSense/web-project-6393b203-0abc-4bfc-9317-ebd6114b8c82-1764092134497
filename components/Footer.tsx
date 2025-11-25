'use client';

import { Flame, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press Kit', href: '#press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Community Guidelines', href: '#guidelines' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Safety Tips', href: '#safety' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-['Space_Grotesk']">
                Stay in the Loop
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Get the latest updates, trending profiles, and exclusive features delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-slate-900 border border-slate-800 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none py-4 px-5 text-white placeholder-slate-500 transition-all duration-300"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/25 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-pink-600 to-fuchsia-600 p-3 rounded-2xl shadow-lg">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Hot or Not
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              The ultimate platform for instant social discovery. Rate, connect, and discover amazing people in real-time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@hotornot.com" className="flex items-center gap-3 text-slate-400 hover:text-pink-500 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>hello@hotornot.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-400 hover:text-pink-500 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`bg-slate-900 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 font-['Space_Grotesk']">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-pink-500 transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 font-['Space_Grotesk']">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-pink-500 transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 font-['Space_Grotesk']">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-pink-500 transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 font-['Space_Grotesk']">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-pink-500 transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Hot or Not. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-500 hover:text-pink-500 text-sm transition-colors duration-300">
                Privacy
              </a>
              <a href="#terms" className="text-slate-500 hover:text-pink-500 text-sm transition-colors duration-300">
                Terms
              </a>
              <a href="#cookies" className="text-slate-500 hover:text-pink-500 text-sm transition-colors duration-300">
                Cookies
              </a>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>Made with</span>
                <Flame className="w-4 h-4 text-pink-600 animate-pulse" />
                <span>in San Francisco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
