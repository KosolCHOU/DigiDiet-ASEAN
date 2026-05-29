interface PhoneMockupProps {
  children?: React.ReactNode;
}

export function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[340px] h-[680px] rounded-[3.2rem] p-3 bg-slate-900 shadow-2xl border-4 border-slate-800/80 overflow-hidden ring-1 ring-white/10">
      {/* Speaker and Camera notch */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
      </div>
      {/* Screen container */}
      <div className="relative w-full h-full rounded-[2.5rem] bg-slate-100 overflow-hidden flex flex-col shadow-inner z-20 border border-slate-950/20">
        {children}
      </div>
    </div>
  );
}
