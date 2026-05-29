'use client';

import { useState, useEffect } from 'react';
import { useSimulation } from '../hooks/use-simulation';
import { ViewToggle } from '../components/dashboard/view-toggle';
import { StatusGauge } from '../components/dashboard/status-gauge';
import { AnalyticsCard } from '../components/dashboard/analytics-card';
import { MealBadge } from '../components/dashboard/meal-badge';
import { ClinicalSummary } from '../components/dashboard/clinical-summary';
import { ReportExport } from '../components/dashboard/report-export';
import { 
  Activity, 
  User, 
  ShieldAlert, 
  ArrowRight, 
  TrendingUp, 
  Utensils, 
  Bot, 
  Delete, 
  Send, 
  Compass,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Home() {
  // B2B Dashboard State
  const {
    view,
    setView,
    messages: b2bMessages,
    glucoseData: b2bGlucoseData,
    advanceSimulation: b2bAdvanceSimulation,
    resetSimulation: b2bResetSimulation,
  } = useSimulation();

  // Hero Section Interactive State
  const [currentInput, setCurrentInput] = useState('150');
  const [glucoseVal, setGlucoseVal] = useState(150);
  const [isHigh, setIsHigh] = useState(false);
  const [gaugeOffset, setGaugeOffset] = useState(125.6); // Default for 150mg/dL

  useEffect(() => {
    const val = parseInt(currentInput) || 0;
    setGlucoseVal(val);

    // Update gauge offset (circumference = 251.2, max glucose value = 300)
    const maxVal = 300;
    const percentage = Math.min((val / maxVal) * 100, 100);
    const offset = 251.2 - (percentage / 100) * 251.2;
    setGaugeOffset(offset);

    // Update risk state
    setIsHigh(val > 180);
  }, [currentInput]);

  const handleKeyPress = (num: string) => {
    if (currentInput.length < 3) {
      setCurrentInput((prev) => {
        const next = prev === '0' ? num : prev + num;
        return next;
      });
    }
  };

  const handleBackspace = () => {
    setCurrentInput((prev) => {
      const next = prev.slice(0, -1);
      return next || '0';
    });
  };

  const handleClear = () => {
    setCurrentInput('150');
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col antialiased selection:bg-[#82f5c1] selection:text-[#002114]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 h-16 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#c6c6cd]/25">
        <div className="flex items-center gap-2">
          <img 
            src="/heart-canopy-removebg-preview.png" 
            alt="DigiDiet Logo" 
            className="h-10 w-auto object-contain"
          />
          <span className="font-sans tracking-tight text-[22px] flex items-center">
            <span className="font-bold text-[#0f172a]">Digi</span>
            <span className="font-light text-[#475569] ml-0.5">Diet ASEAN</span>
          </span>
        </div>
        
        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold text-slate-900 border-b-2 border-slate-900 pb-1 cursor-pointer" href="#hero">Problem</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#interactive-preview">Live Solution</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#b2b-dashboard">B2B Portal</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#tech-stack">Tech Stack</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#team">Team</a>
        </nav>

          <a 
            href="https://github.com/kosolCHOU/digidiet-asean" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm transition-all duration-200"
          >
            <div className="w-5 h-5 rounded-full bg-[#0b1c30] flex items-center justify-center text-white shrink-0">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#0b1c30]">GitHub</span>
          </a>
      </header>

      {/* Main Interactive Hero Section */}
      <section id="hero" className="flex-grow flex items-center justify-center py-16 px-8 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative">
          
          {/* Background Gradient Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-gradient-to-tr from-[#d3e4fe]/30 to-[#eaf1ff]/30 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#006c4a]/30 bg-[#006c4a]/5 text-[#006c4a] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#006c4a] animate-pulse"></span>
              ADSE 2026 Submission
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              One Number.<br />
              <span className="text-[#565e74] bg-clip-text">Smarter Meals.</span><br />
              A Connected Circle of Care.
            </h1>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Simplifying Type 2 Diabetes management across ASEAN. NutriPulse leverages conversational AI to translate complex clinical metrics into actionable daily habits via Telegram.
            </p>
            <div className="flex flex-row items-center gap-4 pt-4 w-full">
              <a 
                href="#interactive-preview" 
                className="h-12 px-6 rounded-full bg-[#006c4a] text-white font-semibold hover:bg-[#005137] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg whitespace-nowrap text-sm"
              >
                Try Live Simulator
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#b2b-dashboard" 
                className="h-12 px-6 rounded-full bg-transparent border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all flex items-center justify-center whitespace-nowrap text-sm"
              >
                View B2B Portal
              </a>
            </div>
          </div>

          {/* Center Column: Interactive Clinical Dashboard Card */}
          <div id="interactive-preview" className="lg:col-span-4 flex justify-center z-10 relative">
            <div className={`glass-panel rounded-[24px] p-6 w-full max-w-sm shadow-[0_24px_48px_-12px_rgba(11,28,48,0.06)] flex flex-col gap-6 transition-all duration-300 ${isHigh ? 'state-high' : 'state-normal'}`} id="dashboard-card">
              <div className="flex justify-between items-center border-b border-[#c6c6cd]/30 pb-3">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 dynamic-text" />
                  Patient Monitoring
                </h3>
                <TrendingUp className="w-5 h-5 text-slate-400" />
              </div>

              {/* Metric Gauge */}
              <div className="flex flex-col items-center justify-center py-4 relative">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Ring */}
                  <circle className="text-slate-100" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="8"></circle>
                  {/* Progress Ring */}
                  <circle 
                    className="dynamic-ring transition-all duration-500" 
                    cx="50" 
                    cy="50" 
                    fill="none" 
                    r="40" 
                    stroke="currentColor" 
                    strokeDasharray="251.2" 
                    strokeDashoffset={gaugeOffset} 
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-900 dynamic-text">{glucoseVal}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">mg/dL</span>
                </div>
              </div>

              <div className="text-center text-sm font-semibold tracking-wide uppercase dynamic-text">
                {isHigh ? 'High Risk Spike' : 'Stable Range'}
              </div>

              {/* Trend Line (Decorative) */}
              <div className="h-12 w-full relative opacity-85">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path className="text-slate-300" d="M0,30 Q10,10 20,25 T40,20 T60,35 T80,15 T100,20" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  <circle className="dynamic-text" cx="80" cy="15" fill="currentColor" r="3"></circle>
                </svg>
              </div>

              {/* Food Badge */}
              <div className="bg-[#eff4ff] rounded-xl p-3 flex items-start gap-3 border border-blue-100/50">
                <div className="w-10 h-10 rounded-full dynamic-bg flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-5 h-5 dynamic-text" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Recent Meal Log</div>
                  <div className="text-sm font-semibold text-slate-800">Kuy Teav</div>
                  <div className="text-[10px] text-slate-500">Note: Double bean sprouts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup (Interactive Keypad & Telegram Bot Interface) */}
          <div className="lg:col-span-4 flex justify-center items-center z-10 py-6">
            <div className="phone-bezel w-[320px] h-[650px] bg-white flex flex-col shadow-2xl relative my-4">
              <div className="notch"></div>
              
              {/* Phone Header */}
              <div className="bg-white pt-10 pb-3 px-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#006c4a] text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-850">NutriPulse Bot</div>
                  <div className="text-[10px] font-semibold text-[#006c4a] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006c4a] inline-block animate-ping"></span>
                    online
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-grow bg-[#E4DDD6] p-4 flex flex-col gap-4 overflow-y-auto relative pb-8" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23cbbcb0\' fill-opacity=\'0.3\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')" }}>
                {/* Bot Greeting */}
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm self-start text-xs border border-slate-200/20">
                  <p className="text-slate-800">Hello! Please enter your current glucose reading (mg/dL).</p>
                  <div className="text-[9px] text-slate-400 text-right mt-1">10:00 AM</div>
                </div>
                {/* User Input Message */}
                <div className="bg-[#E3F2FD] rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-sm self-end text-xs border border-blue-200/25">
                  <p className="text-slate-800 font-semibold">{currentInput}</p>
                  <div className="text-[9px] text-slate-400 text-right mt-1">10:01 AM</div>
                </div>
                {/* Bot Evaluation Response */}
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm self-start text-xs border border-slate-200/20 transition-all duration-300">
                  {isHigh ? (
                    <p className="text-slate-800">
                      <span className="text-[#ba1a1a] font-bold">Alert: High Risk Level.</span> Please drink water immediately and consider a 15-minute light walk. Avoid complex carbohydrates for the next meal.
                    </p>
                  ) : (
                    <p className="text-slate-800">
                      Great job staying in range. Your Kuy Teav with extra veggies seems to be working well. Keep it up!
                    </p>
                  )}
                  <div className="text-[9px] text-slate-400 text-right mt-1">10:01 AM</div>
                </div>
              </div>

              {/* Keypad Display */}
              <div className="bg-white flex flex-col border-t border-slate-100">
                <div className="px-4 py-3 flex items-center gap-2 bg-slate-50">
                  <div className="flex-grow h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200/40">
                    <span className="font-mono text-xl font-extrabold text-slate-800 tracking-widest">{currentInput}</span>
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center bg-[#006c4a] text-white rounded-full shadow-sm hover:bg-[#005137] transition-all flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {/* Keypad Buttons */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-100 border-t border-slate-200/40">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                    <button 
                      key={num}
                      onClick={() => handleKeyPress(num)}
                      className="py-3 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-200 text-slate-800 font-bold transition-all text-sm shadow-sm"
                    >
                      {num}
                    </button>
                  ))}
                  <button 
                    onClick={handleClear}
                    className="py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-bold transition-all text-xs shadow-sm uppercase"
                  >
                    CLR
                  </button>
                  <button 
                    onClick={() => handleKeyPress('0')}
                    className="py-3 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-200 text-slate-800 font-bold transition-all text-sm shadow-sm"
                  >
                    0
                  </button>
                  <button 
                    onClick={handleBackspace}
                    className="py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-all flex items-center justify-center shadow-sm"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Circle of Care - B2B Console Portal */}
      <section id="b2b-dashboard" className="border-t border-slate-200/60 bg-gradient-to-b from-white to-[#f8f9ff] py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Circle of Care B2B Console</h2>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Unified workspace managing Patient compliance and Doctor analytics logs.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ViewToggle view={view} onViewChange={setView} />
            </div>
          </div>

          {/* Console Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  {view === 'patient' ? (
                    <>
                      <User className="w-4 h-4 text-slate-500" /> Patient Companion View
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4 text-slate-500" /> Doctor Portal (Adherence Hub)
                    </>
                  )}
                </h2>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Live Telemetry Feed
                </div>
              </div>

              {view === 'patient' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-6">
                    <StatusGauge value={b2bGlucoseData[b2bGlucoseData.length - 1]?.glucose || 120} />
                    <MealBadge />
                  </div>
                  <div className="md:col-span-2">
                    <AnalyticsCard data={b2bGlucoseData} />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <ClinicalSummary />
                  </div>
                  <div className="md:col-span-1 space-y-6">
                    <ReportExport />
                    <div className="glass-card p-6 border-l-4 border-amber-500 bg-amber-50/50">
                      <div className="flex gap-2">
                        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Circle of Care: Warning Trigger</h4>
                          <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                            Adherence nudge successfully sent to Family Circle due to glycemic index spike event. Compliance rate remains stable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="border-t border-slate-200/60 bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Enterprise Tech Stack</h2>
            <p className="text-sm text-slate-500">
              Modern, type-safe, and highly performant technologies powering the DigiDiet ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Next.js 16', desc: 'App Router & SSR' },
              { title: 'Tailwind CSS v4', desc: 'Modern Design Tokens' },
              { title: 'TypeScript', desc: 'Strict Compile-Time Safety' },
              { title: 'Recharts', desc: 'Responsive Telemetry Graphs' }
            ].map((tech) => (
              <div key={tech.title} className="glass-panel p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-2">
                <span className="text-lg font-bold text-slate-800">{tech.title}</span>
                <span className="text-xs text-slate-500">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="border-t border-slate-200/60 bg-slate-50 py-16 px-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Team</h2>
            <p className="text-sm text-slate-500">
              The innovators behind NutriPulse and the DigiDiet ASEAN initiative.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="glass-panel p-8 rounded-2xl border border-slate-100 max-w-sm w-full text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#006c4a] text-white flex items-center justify-center text-xl font-bold mx-auto">
                KC
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Kosal Chou</h3>
                <p className="text-xs text-[#006c4a] font-semibold mt-1">Lead Developer & Architect</p>
              </div>
              <p className="text-xs text-slate-550 leading-relaxed">
                ADSE 2026 Submission. Passionate about leveraging AI and modern web architectures to improve healthcare outcomes in the ASEAN region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 lg:hidden bg-white/95 backdrop-blur-lg shadow-[0_-4px_12px_rgba(0,40,80,0.05)] border-t border-slate-100 rounded-t-xl">
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-[#006c4a] transition-all p-2 rounded-lg" href="#hero">
          <Compass className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Feed</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-[#006c4a] transition-all p-2 rounded-lg" href="#interactive-preview">
          <MessageSquare className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Simulator</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-[#006c4a] transition-all p-2 rounded-lg" href="#b2b-dashboard">
          <Activity className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Portal</span>
        </a>
      </nav>
    </div>
  );
}
