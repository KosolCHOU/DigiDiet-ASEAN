'use client';

import { MessageSquare, Brain, HeartPulse, CheckCircle2, Utensils, Users, Activity } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section id="Solution" className="border-t border-slate-200/60 bg-gradient-to-b from-white to-[#f8f9ff] py-16 px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006c4a] block">
            02 / THE LIVE SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Zero Friction. Complete Connection.
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We eliminated the app. By moving the entire logging process into a conversational Telegram bot, patients simply send a number, and the ecosystem handles the rest.
          </p>
        </div>

        {/* 3-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-12">
          {/* Card 1 */}
          <div className="glass-card p-8 flex flex-col h-full hover:shadow-lg hover:border-slate-300/80 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#82f5c1]/20 text-[#006c4a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">1. The Raw Number</h3>
            <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">
              Patients simply type their current glucose reading (e.g., '150') into the Telegram Bot. No complicated menus, no manual food logging, and zero learning curve.
            </p>
            {/* Visual Representation */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="bg-[#eff4ff] rounded-xl p-3 border border-blue-100/50 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#006c4a] shrink-0" />
                <span className="text-xs font-semibold text-slate-800">150 mg/dL Logged</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 flex flex-col h-full hover:shadow-lg hover:border-slate-300/80 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#e5eeff] text-slate-850 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">2. Contextual Translation</h3>
            <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">
              The AI instantly maps the metabolic number against local ASEAN nutrition databases, suggesting highly localized, culturally relevant meal swaps (e.g., Kuy Teav with double bean sprouts).
            </p>
            {/* Visual Representation */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#f8f9ff] rounded-full text-xs font-semibold text-slate-800 border border-slate-200/50 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#006c4a]" />
                  Kuy Teav Swap
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 flex flex-col h-full hover:shadow-lg hover:border-slate-300/80 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-650 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">3. The Circle of Care</h3>
            <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">
              The platform automatically logs the data to the physician's monthly clinical dashboard and sends automated, gentle Telegram nudges to designated family members if numbers spike.
            </p>
            {/* Visual Representation */}
            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
                  <Users className="w-4 h-4 text-[#006c4a]" />
                  <span>Family Support</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
                  <Activity className="w-4 h-4 text-slate-900" />
                  <span>Clinical Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
