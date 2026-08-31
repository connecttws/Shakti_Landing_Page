import React from 'react';
import { PlayCircle, ShieldCheck, CheckCircle2, ChevronDown, Activity, Heart, Brain, Users, Sparkles, MessageCircleHeart } from 'lucide-react';

export default function ShaktiLandingPage() {
  return (
    <div className="min-h-[100dvh] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <div className="font-outfit text-xl md:text-2xl font-bold text-primary-navy tracking-tight">
            SHakti
          </div>
          <a href="#consultation" className="btn-primary py-2 px-4 md:py-2.5 md:px-6 text-xs md:text-sm">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-bg-base relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-coral/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-sage/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary-navy/5 text-primary-navy font-medium text-xs md:text-sm">
              <ShieldCheck className="w-4 h-4" />
              Private & Confidential Support
            </div>
            <h1 className="heading-primary text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight">
              Working Professionals Facing <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-navy to-accent-sage">Intimacy Issues?</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get personalised support for <strong className="text-primary-navy font-bold">sexual wellness, intimacy, anxiety, and relationship</strong> concerns in a safe, non-judgmental space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <a href="#consultation" className="btn-primary text-base md:text-lg group w-full sm:w-auto">
                Book Your Private Consultation
                <PlayCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500 font-medium pt-4 md:pt-6">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-sage" /> 1000+ Patients</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-sage" /> Online/Offline</span>
            </div>
          </div>
          
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group border-4 border-white w-full max-w-xl mx-auto lg:max-w-none">
            {/* VSL Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform cursor-pointer mb-2 md:mb-4 drop-shadow-md" />
              <div className="text-white/90 text-center text-sm md:text-base font-medium drop-shadow-md">
                Click to watch Dr. Dipali explain her approach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach / Agitation */}
      <section className="py-12 md:py-24 bg-primary-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            "I Look Beyond the Sexual Concern — <br className="hidden sm:block"/>
            <span className="text-accent-coral">I Look at What Affects Your Intimacy"</span>
          </h2>
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-16">
            Through an Occupational Therapy approach, I help you understand how stress, anxiety, health and everyday life may be affecting your intimacy and sexual well-being. Together, we work on practical strategies to improve confidence, comfort and connection.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 font-medium text-base md:text-xl text-accent-sage">
            <span>Understand</span>
            <span className="hidden sm:inline">→</span>
            <span>Identify</span>
            <span className="hidden sm:inline">→</span>
            <span>Communicate</span>
            <span className="hidden sm:inline">→</span>
            <span>Adapt</span>
            <span className="hidden sm:inline">→</span>
            <span>Reconnect</span>
          </div>
        </div>
      </section>

      {/* Concerns & Support Grid */}
      <section className="py-12 md:py-24 bg-bg-base px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-primary text-3xl md:text-4xl font-bold mb-4">Concerns We Can Help You With</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mt-6 md:mt-8">
              {["Performance Anxiety", "Sexual Confidence", "Premature Ejaculation", "Erectile Difficulties", "Vaginismus & Pelvic Pain", "Intimacy & Desire Concerns"].map((concern, idx) => (
                <span key={idx} className="px-4 py-2 md:px-6 md:py-3 bg-white rounded-full shadow-sm text-primary-navy font-medium border border-gray-100 text-sm md:text-base">
                  {concern}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              { icon: <Heart className="text-accent-coral" />, title: "Sexual Wellness Concerns", desc: "Understand your sexual wellness concerns in a private, comfortable and non-judgmental environment." },
              { icon: <MessageCircleHeart className="text-accent-sage" />, title: "Intimacy & Relationship", desc: "Work through communication difficulties, emotional distance, and differences in expectations." },
              { icon: <Brain className="text-primary-teal" />, title: "Sexual Performance Anxiety", desc: "Understand how anxiety, overthinking, pressure and self-confidence may be affecting your intimate experience." },
              { icon: <Sparkles className="text-amber-500" />, title: "Body Confidence", desc: "Develop greater awareness, comfort and confidence in your body and intimate self." },
              { icon: <Activity className="text-rose-500" />, title: "Stress & Anxiety", desc: "Explore how everyday stress, work pressure, and emotional exhaustion may be affecting your sexual well-being." },
              { icon: <Users className="text-indigo-500" />, title: "Partner Education", desc: "Help partners understand each other's needs, concerns and experiences to build better connection." },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl group cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-navy mb-2 md:mb-3 font-outfit">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16">
             <a href="#consultation" className="btn-primary w-full sm:w-auto">
                Book Your Private Consultancy
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-xl w-full max-w-sm mx-auto lg:max-w-none">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm md:text-base">
                ( Dr. Dipali Picture Here )
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl glass-card hidden sm:block">
              <div className="text-2xl md:text-4xl font-bold text-primary-navy mb-1 font-outfit">1000+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">Patients Supported</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="heading-primary text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center lg:text-left">Meet Dr. Dipali Ganesh Thakare</h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed text-center lg:text-left">
              Hi, I’m Dr. Dipali Ganesh Thakare, founder of SHakti – Sexual Wellness, Intimacy & Rehabilitation. I help individuals and couples navigate concerns around sexual wellness, intimacy, relationships, body confidence, and sexual rehabilitation — with a practical Occupational Therapy approach.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-4 md:mb-6 font-outfit text-center lg:text-left">Our Outcomes</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Build Sexual Confidence",
                "Improve Intimate Connection",
                "Manage Performance Concerns",
                "Feel More Comfortable With Intimacy"
              ].map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-3 md:gap-4 text-base md:text-lg text-slate-700 font-medium bg-bg-base py-3 px-4 md:px-5 rounded-xl">
                  <CheckCircle2 className="text-accent-sage w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-bg-base px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-primary text-3xl md:text-4xl font-bold mb-3 md:mb-4">Real Clients. Real Experiences.</h2>
            <p className="text-base md:text-lg text-slate-600">Hear from professionals who have reclaimed their confidence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "I finally felt comfortable talking about something I had been keeping to myself for a long time. The consultation gave me a safe space.",
              "I appreciated that the conversation was not only about the sexual concern. We also looked at my overall routine, emotions and everyday life.",
              "The biggest difference for me was being able to talk openly. I understood how stress and anxiety were affecting my confidence.",
              "Work pressure and stress were affecting my intimate life. After counselling, I understood how to manage these concerns better.",
              "Anxiety was affecting my intimate life and confidence. After counselling, I understood my triggers better and felt much more comfortable.",
              "I was very uncomfortable discussing my intimacy concerns. The consultation felt private, respectful and easy to talk through."
            ].map((quote, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl relative">
                <div className="text-4xl md:text-6xl text-primary-navy/10 absolute top-4 right-6 font-serif">"</div>
                <p className="text-sm md:text-base text-slate-700 relative z-10 italic mb-4 md:mb-6 leading-relaxed">"{quote}"</p>
                <div className="font-bold text-sm md:text-base text-primary-navy font-outfit">— Client</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-primary text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Frequently Asked Questions</h2>
          <div className="space-y-3 md:space-y-4">
            {[
              { q: "What is Sexual Wellness Consultation?", a: "A private consultation to discuss your sexual wellness, intimacy, confidence, relationship or sexuality-related concerns and understand the right support for you." },
              { q: "What happens in a Sexual & Intimacy Assessment?", a: "We explore how your body, emotions, relationships, health and everyday life may be affecting your intimacy and sexual well-being." },
              { q: "Can you help with Sexual Performance Anxiety?", a: "Yes. The program focuses on anxiety, overthinking, pressure and confidence concerns that may be affecting your intimate life." },
              { q: "Do you offer Female Sexual Wellness consultations?", a: "Yes. Women can discuss concerns related to sexual wellness, intimacy, body awareness, confidence and self-esteem." },
              { q: "Are consultations available online?", a: "Yes. Dr. Dipali Ganesh Thakare currently offers private online consultations." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-bg-base rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer font-bold text-base md:text-lg text-primary-navy font-outfit select-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-slate-600 leading-relaxed border-t border-gray-200/50 mt-1 pt-3 md:mt-2 md:pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="bg-primary-navy pt-12 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 text-center" id="consultation">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ready to Reclaim Your Confidence?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto">
            Take the first step towards better intimacy, sexual wellness, and connection today. Private, confidential, and individualised support.
          </p>
          <button className="bg-accent-coral text-primary-navy font-bold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-white transition-all shadow-xl hover:-translate-y-1 mb-12 md:mb-16 w-full sm:w-auto">
            BOOK YOUR PRIVATE CONSULTATION
          </button>
          
          <div className="border-t border-white/10 pt-6 md:pt-8 mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-blue-200">
            <div className="mb-4 md:mb-0">© {new Date().getFullYear()} SHakti - Sexual Wellness, Intimacy & Rehabilitation.</div>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
