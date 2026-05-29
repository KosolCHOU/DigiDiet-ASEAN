'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Activity, TrendingUp, Utensils, Bot, Send, Delete } from 'lucide-react';

export default function HeroSection() {
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
  );
}
