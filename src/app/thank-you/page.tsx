import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, Heart, Lock, CalendarClock } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-white to-bg-base overflow-x-hidden selection:bg-teal-700 selection:text-white">
      {/* Navigation */}
      <nav className="w-full bg-white/60 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-outfit text-xl md:text-2xl font-bold text-primary-navy tracking-tight hover:opacity-80 transition-opacity">
            SHakti
          </Link>
          <Link href="/" className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-navy transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Website</span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Elegant Ambient Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-coral/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-sage/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

        <div className="max-w-4xl w-full">
          {/* Main Content Area */}
          <div className="text-center mb-12 md:mb-16">
            {/* Elegant Check Icon */}
            <div className="mx-auto w-24 h-24 mb-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-accent-sage/30 rounded-full animate-ping opacity-75 duration-1000"></div>
              <div className="relative bg-gradient-to-tr from-accent-sage to-emerald-200 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-accent-sage/30">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-primary-navy mb-6 tracking-tight">
              Thank You
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Your consultation request has been successfully submitted.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Thank you for taking the first step towards better sexual wellness, intimacy, and confidence. Dr. Dipali’s team will review your details and be in touch shortly.
            </p>
          </div>
          
          <hr className="border-gray-200/60 w-24 mx-auto mb-12 md:mb-16" />

          {/* Details Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-accent-coral/10 text-accent-coral rounded-2xl flex items-center justify-center mb-5">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h2 className="font-outfit text-xl font-bold text-primary-navy mb-3">What Happens Next?</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our team will contact you to confirm your consultation. You’ll have a private, confidential, and non-judgmental space to discuss your concerns comfortably.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-teal/10 text-primary-teal rounded-2xl flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-outfit text-xl font-bold text-primary-navy mb-3">Your Privacy Matters</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Your personal information and consultation details will be handled with the utmost care and kept strictly confidential.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 md:mt-16 text-sm text-slate-500 font-medium">
             <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-sage" />
                Private & Confidential Support
             </span>
             <span className="hidden sm:block text-gray-300">•</span>
             <span className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent-coral" />
                Online & Offline Consultations
             </span>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-slate-400 text-xs md:text-sm border-t border-gray-100/50 bg-white/30 backdrop-blur-sm mt-auto">
        <p>© {new Date().getFullYear()} SHakti – Sexual Wellness, Intimacy & Rehabilitation.</p>
      </footer>
    </div>
  );
}
