'use client';

import ProblemSection from '../components/sections/problem-section';
import HeroSection from '../components/sections/hero-section';
import SolutionSection from '../components/sections/solution-section';

export default function Home() {
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
          <a className="text-sm font-semibold text-slate-900 border-b-2 border-slate-900 pb-1 cursor-pointer" href="#problem">Problem</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#Solution">Solution</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#methodologies">Methodology</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#Tech Stack">Tech Stack</a>
          <a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer" href="#Team">Team</a>
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
      <HeroSection />

      {/* Problem Section (01 / THE ASEAN CRISIS) */}
      <ProblemSection />

      {/* Solution Section (02 / THE LIVE SOLUTION) */}
      <SolutionSection />
    </div>
  );
}
