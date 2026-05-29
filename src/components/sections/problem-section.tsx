import { AlertTriangle, Globe, Unlink } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section
      id="problem-section"
      className="border-t border-slate-200/60 bg-[#f8f9ff] py-16 px-8 max-w-7xl mx-auto w-full relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full relative">

        {/* Left Column: Friction Points */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#006c4a] uppercase tracking-wider">
            01 / THE ASEAN CRISIS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            The Friction of Modern Diabetes Management.
          </h2>

          <div className="flex flex-col gap-6 mt-6">
            {/* App Fatigue */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#ba1a1a]/10 flex items-center justify-center shrink-0 border border-[#ba1a1a]/20 text-[#ba1a1a]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-800">App Fatigue &amp; Manual Friction</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Clinical data shows user engagement drops significantly during manual entries. The cognitive load of logging every meal overwhelms patients.
                </p>
              </div>
            </div>

            {/* Cultural Nutritional Gap */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#82f5c1]/30 flex items-center justify-center shrink-0 border border-[#82f5c1]/50 text-[#006c4a]">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-800">The Cultural Nutritional Gap</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Global databases fail to localize for ASEAN foods. Complex regional diets are inaccurately represented, leading to flawed nutritional telemetry.
                </p>
              </div>
            </div>

            {/* Broken Care Loop */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#131b2e]/10 flex items-center justify-center shrink-0 border border-[#131b2e]/20 text-slate-700">
                <Unlink className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-800">The Broken Care Loop</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Fragmented systems lack family and physician loop-notifications. Critical interventions are missed when care networks are siloed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Health Telemetry Card */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_8px_32px_rgba(11,28,48,0.05)] border border-slate-200/50 bg-white/70 backdrop-blur-md">
            <div className="flex flex-col gap-1 border-b border-slate-200/50 pb-4">
              <h3 className="text-xl font-bold text-slate-900">Regional Health Telemetry</h3>
              <p className="text-sm text-slate-500">Validated metabolic metrics and user drop-off trends.</p>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-slate-700">ASEAN Diabetes Surge (Urban Areas)</h4>

                {/* Bar Chart */}
                <div className="flex items-end gap-4 h-32 border-b border-l border-slate-200 pb-2 pl-2">
                  <div className="w-1/4 bg-gradient-to-t from-[#f23d5c] to-[#ffb2b7] rounded-t-md h-[40%] group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">12%</span>
                  </div>
                  <div className="w-1/4 bg-gradient-to-t from-[#f23d5c] to-[#ffb2b7] rounded-t-md h-[60%] group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">18%</span>
                  </div>
                  <div className="w-1/4 bg-gradient-to-t from-[#f23d5c] to-[#ffb2b7] rounded-t-md h-[85%] group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">25%</span>
                  </div>
                  <div className="w-1/4 bg-gradient-to-t from-[#92002a] to-[#f23d5c] rounded-t-md h-full group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#ba1a1a]">31%</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 italic">
                  Nearly half (48.8%) of adults with diabetes in Southeast Asia live in urban centers (IDF dataset).
                </p>
              </div>

              {/* 67% Drop-off Callout */}
              <div className="bg-[#f8f9ff]/80 rounded-xl p-4 border border-slate-200/40 flex flex-col md:flex-row items-center gap-4">
                <div className="text-5xl text-[#ba1a1a] font-extrabold leading-none shrink-0">67%</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Of type 2 diabetes patients completely discontinue manual dietary and lifestyle logs on standard smartphone apps due to input fatigue.
                  <span className="text-slate-400 text-xs block mt-1">(Source: PMC Real-World Evidence Study)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
