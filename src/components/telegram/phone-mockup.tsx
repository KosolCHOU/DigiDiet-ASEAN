export function PhoneMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mx-auto w-[320px] h-[640px] glass-card rounded-[2.5rem] overflow-hidden border-8 border-gray-800 shadow-2xl relative">
      <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-2xl w-40 mx-auto z-20"></div>
      <div className="h-full w-full bg-white relative overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
