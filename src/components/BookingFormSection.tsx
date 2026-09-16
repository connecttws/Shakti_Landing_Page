'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Send, 
  User, 
  Phone, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  HelpCircle,
  Clock
} from 'lucide-react';

export default function BookingFormSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gender: '',
    occupation: '',
    occupationOther: '',
    painDiscomfort: '',
    affectedAreas: [] as string[],
    affectedAreasOther: '',
    desireChanges: '',
    previousHelp: '',
    pregnancyImpact: '',
    callTime: '',
  });

  const occupationOptions = [
    'Working Professional',
    'Homemaker',
    'Business Owner',
    'Other'
  ];

  const painDiscomfortOptions = [
    'Yes, during penetration',
    'Yes, during or after intercourse',
    'Sometimes',
    'No'
  ];

  const affectedOptions = [
    'Se.x.ual confidence',
    'Relationship / intimacy',
    'Emotional wellbeing',
    'Self-esteem',
    'Daily activities, work/studies, sleep',
    'Other'
  ];

  const desireChangesOptions = [
    'Reduced se.x.ual desire',
    'Difficulty becoming aroused',
    'Both',
    'No'
  ];

  const previousHelpOptions = [
    'No',
    'Yes',
    'Prefer not to say'
  ];

  const pregnancyImpactOptions = [
    'Yes, after childbirth',
    'Yes, after pregnancy',
    'Yes, due to other physical changes',
    'No'
  ];

  const callTimeOptions = [
    'Morning (9 AM – 12 PM)',
    'Afternoon (12 PM – 3 PM)',
    'Evening (3 PM – 6 PM)',
    'Evening (6 PM – 9 PM)'
  ];

  const handleCheckboxToggle = (
    field: 'affectedAreas', 
    value: string
  ) => {
    setFormData((prev) => {
      const current = prev[field];
      const exists = current.includes(value);
      return {
        ...prev,
        [field]: exists 
          ? current.filter((item) => item !== value)
          : [...current, value]
      };
    });
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Store in session storage for local reference
    try {
      sessionStorage.setItem('shakti_lead', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
    } catch {
      // ignore storage errors
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.warn('Google Sheets submission issue:', data.error);
      }
    } catch (err) {
      console.error('Form submission fetch error:', err);
    } finally {
      setIsSubmitting(false);
      router.push('/thank-you');
    }
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-gradient-to-b from-bg-base via-white to-bg-base px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background Subtle Accents */}
      <div className="absolute top-20 right-5 w-72 h-72 bg-accent-coral/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-5 w-80 h-80 bg-accent-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-navy/5 text-primary-navy font-semibold text-xs md:text-sm mb-4 border border-primary-navy/10">
            <ShieldCheck className="w-4 h-4 text-primary-navy" />
            100% Private, Confidential & Compassionate
          </div>
          <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Private Consultation
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Please share a few details so Dr. Dipali can understand your situation and provide personalized, non-judgmental guidance.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-primary-navy/5">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* STEP 1: Personal Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary-navy/10 text-primary-navy flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-outfit text-xl font-bold text-primary-navy">
                  Basic Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800">
                    1. Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy transition-all"
                    />
                  </div>
                </div>

                {/* 2. Phone Number */}
                <div className="space-y-2 text-left">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-800">
                    2. Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Gender */}
              <div className="space-y-3 text-left pt-2">
                <label className="block text-sm font-semibold text-slate-800">
                  3. Gender <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Male', 'Female'].map((gender) => {
                    const isSelected = formData.gender === gender;
                    return (
                      <label
                        key={gender}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{gender}</span>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          required={!formData.gender}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, gender })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 4. Occupation */}
              <div className="space-y-3 text-left pt-2">
                <label className="block text-sm font-semibold text-slate-800">
                  4. Occupation <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {occupationOptions.map((occ) => {
                    const isSelected = formData.occupation === occ;
                    return (
                      <label
                        key={occ}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{occ}</span>
                        <input
                          type="radio"
                          name="occupation"
                          value={occ}
                          required={!formData.occupation}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, occupation: occ })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
                {formData.occupation === 'Other' && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Please specify your occupation"
                      value={formData.occupationOther}
                      onChange={(e) => setFormData({ ...formData, occupationOther: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy transition-all"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* STEP 2: Concerns & Life Impact */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary-navy/10 text-primary-navy flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-outfit text-xl font-bold text-primary-navy">
                  Concerns & Life Impact
                </h3>
              </div>

              {/* 5. Are you experiencing pain or discomfort during se.x.ual intercourse? */}
              <div className="space-y-3 text-left">
                <label className="block text-sm font-semibold text-slate-800">
                  5. Are you experiencing pain or discomfort during se.x.ual intercourse? <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {painDiscomfortOptions.map((option) => {
                    const isSelected = formData.painDiscomfort === option;
                    return (
                      <label
                        key={option}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="painDiscomfort"
                          value={option}
                          required={!formData.painDiscomfort}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, painDiscomfort: option })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 6. Has this concern affected any of the following? */}
              <div className="space-y-3 text-left pt-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <label className="block text-sm font-semibold text-slate-800">
                    6. Has this concern affected any of the following? <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-xs text-slate-500 font-medium">Select all that apply</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {affectedOptions.map((area) => {
                    const isChecked = formData.affectedAreas.includes(area);
                    return (
                      <label
                        key={area}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-accent-coral/20 border-accent-coral text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('affectedAreas', area)}
                          className="w-4 h-4 mt-0.5 rounded text-primary-navy accent-primary-navy"
                        />
                        <span className="text-sm leading-snug">{area}</span>
                      </label>
                    );
                  })}
                </div>
                {formData.affectedAreas.includes('Other') && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Please specify other affected area"
                      value={formData.affectedAreasOther}
                      onChange={(e) => setFormData({ ...formData, affectedAreasOther: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy transition-all"
                    />
                  </div>
                )}
              </div>

              {/* 7. Are you experiencing any changes in your se.x.ual desire or arousal? */}
              <div className="space-y-3 text-left pt-3">
                <label className="block text-sm font-semibold text-slate-800">
                  7. Are you experiencing any changes in your se.x.ual desire or arousal? <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {desireChangesOptions.map((option) => {
                    const isSelected = formData.desireChanges === option;
                    return (
                      <label
                        key={option}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="desireChanges"
                          value={option}
                          required={!formData.desireChanges}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, desireChanges: option })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STEP 3: Consultation Preferences & Background */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary-navy/10 text-primary-navy flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-outfit text-xl font-bold text-primary-navy">
                  Background & Consultation Preferences
                </h3>
              </div>

              {/* 8. Have you previously sought professional help for this concern? */}
              <div className="space-y-3 text-left">
                <label className="block text-sm font-semibold text-slate-800">
                  8. Have you previously sought professional help for this concern? <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {previousHelpOptions.map((option) => {
                    const isSelected = formData.previousHelp === option;
                    return (
                      <label
                        key={option}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="previousHelp"
                          value={option}
                          required={!formData.previousHelp}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, previousHelp: option })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 9. Have pregnancy, childbirth, postpartum changes, or other physical changes affected your se.x.ual well-being? */}
              <div className="space-y-3 text-left pt-3">
                <label className="block text-sm font-semibold text-slate-800">
                  9. Have pregnancy, childbirth, postpartum changes, or other physical changes affected your se.x.ual well-being? <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pregnancyImpactOptions.map((option) => {
                    const isSelected = formData.pregnancyImpact === option;
                    return (
                      <label
                        key={option}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm">{option}</span>
                        <input
                          type="radio"
                          name="pregnancyImpact"
                          value={option}
                          required={!formData.pregnancyImpact}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, pregnancyImpact: option })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 10. What is the best time to call you? */}
              <div className="space-y-3 text-left pt-3">
                <label className="block text-sm font-semibold text-slate-800">
                  10. What is the best time to call you? <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {callTimeOptions.map((time) => {
                    const isSelected = formData.callTime === time;
                    return (
                      <label
                        key={time}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-primary-navy/5 border-primary-navy text-primary-navy font-semibold shadow-sm'
                            : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                        }`}
                      >
                        <span className="text-sm font-medium">{time}</span>
                        <input
                          type="radio"
                          name="callTime"
                          value={time}
                          required={!formData.callTime}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, callTime: time })}
                          className="w-4 h-4 text-primary-navy accent-primary-navy"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Privacy Reassurance Banner */}
            <div className="p-4 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 flex items-start sm:items-center gap-3.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary-navy">
                <Lock className="w-5 h-5 text-primary-navy" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-primary-navy font-semibold">Strict Confidentiality Guaranteed:</strong> Your responses are encrypted, kept strictly confidential, and viewed solely by Dr. Dipali for consultation preparation.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 sm:py-4.5 text-base sm:text-lg font-bold tracking-wide rounded-2xl flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Booking Your Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Book Consultation</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mt-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-sage" /> No spam, guaranteed
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent-sage" /> Response within 24 hours
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-sage" /> Private online/offline session
                </span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
