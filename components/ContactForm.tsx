'use client';

import { useState } from 'react';
import { FiMail, FiUser, FiPhone, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '6393b203-0abc-4bfc-9317-ebd6114b8c82',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-pink-900 to-fuchsia-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full px-5 py-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-semibold text-sm">Let's Connect</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Ready to Join the{' '}
                <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                  Excitement?
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Get in touch with the Hot or Not team. Whether you have questions, feedback, or partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/30 transition-all duration-300">
                  <FiMail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">hello@hotornot.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <FiMessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                  <p className="text-slate-400">Available 24/7 for instant support</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm mb-4">Trusted by millions worldwide</p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-white">10M+</div>
                  <div className="text-sm text-slate-400">Active Users</div>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-slate-400">App Rating</div>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                    <FiCheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Thanks for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-slate-600">Fill out the form below and we'll be in touch soon</p>
                  </div>

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiUser className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 pl-12 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiMail className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 pl-12 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiPhone className="w-5 h-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 pl-12 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                      Your Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <FiMessageSquare className="w-5 h-5 text-slate-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 pl-12 pr-5 text-slate-900 placeholder:text-slate-400 transition-all duration-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                      <FiAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold rounded-xl px-8 py-5 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500 pt-2">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
