"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase'; // Ensure this path is correct
import {
  ArrowLeft,
  Send,
  ShieldCheck,
  Building2,
  User,
  Mail,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

export default function DemoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Form State
  const [formData, setFormData] = useState({
    full_name: '',
    work_email: '',
    organization: '',
    primary_interest: 'Post-Quantum Cryptography (PQC)',
    queries: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    function generateId() {
      return `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
    }

    try {
      // Direct Insert to Supabase table: 'demo_requests'
      const { error } = await supabase
        .from('demos')
        .insert([
          {
            id: generateId(),
            full_name: formData.full_name,
            work_email: formData.work_email,
            organization: formData.organization,
            primary_interest: formData.primary_interest,
            queries: formData.queries
          }
        ]);

      if (error) throw error;

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission Error:", error.message);
      alert("System Error: Could not transmit data. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black flex items-center justify-center p-6 text-white font-sans relative z-50">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-purple-500/20 border border-purple-500/50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-purple-400 w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">Request Received.</h1>
          <p className="text-gray-400 font-light leading-relaxed">
            Our technical team is reviewing your profile. You will receive a secure briefing invitation at your registered email within 24 hours.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all cursor-pointer"
          >
            Return to Core
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black text-white font-sans selection:bg-purple-500/30">

      {/* Back Navigation */}


      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">

        {/* Left Side: Context */}
        <div className="flex flex-col justify-center space-y-8 relative z-50">
          <nav className="relative z-50">
            <button
              onClick={() => router.push('/')}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium uppercase tracking-widest">Back to Interface</span>
            </button>
          </nav>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Secure Access</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Quantum Leap.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Schedule a technical deep-dive into our PQC architectures and AI-driven defense protocols.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-purple-400">
                <ChevronRight size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Technical Validation</h4>
                <p className="text-xs text-gray-500 mt-1">Reviewing alignment with emerging NIST standards and DRDO frameworks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-purple-400">
                <ChevronRight size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Pilot Deployment</h4>
                <p className="text-xs text-gray-500 mt-1">Discussing integration with existing critical infrastructure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

          <form
            onSubmit={handleSubmit}
            className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    required
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Sidharth Kumar"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    required
                    type="email"
                    name="work_email"
                    value={formData.work_email}
                    onChange={handleChange}
                    placeholder="sidharth@qnnx.in"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Organization / Department</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Indian Army / Defense Division"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
            </div>

            {/* Interest Area */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Primary Interest (Select one)</label>
              <select
                name="primary_interest"
                value={formData.primary_interest}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
              >
                <option value="Post-Quantum Cryptography (PQC)" className='text-black'>Post-Quantum Cryptography (PQC)</option>
                <option value="Secure Communication Systems" className='text-black'>Secure Communication Systems</option>
                <option value="AI-Driven Cyber Defense" className='text-black'>AI-Driven Cyber Defense</option>
                <option value="Critical Infrastructure Protection" className='text-black'>Critical Infrastructure Protection</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Specific Queries</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-500" size={16} />
                <textarea
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  rows="3"
                  placeholder="How can QNNX assist with our transition away from RSA/ECC?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 rounded-xl font-bold text-sm hover:bg-purple-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer hover:bg-white/75"
            >
              {isSubmitting ? (
                <>Initializing <Loader2 className="animate-spin" size={18} /></>
              ) : (
                <>Request Technical Briefing <Send size={18} /></>
              )}
            </button>

            <p className="text-center text-[10px] text-gray-600 uppercase tracking-tighter">
              By submitting, you agree to our secure data handling protocols.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

function Loader2({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}