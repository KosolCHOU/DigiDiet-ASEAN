export function StatusGauge({ value = 120 }: { value?: number }) {
  const getStatusColor = (val: number) => {
    if (val < 70) return 'text-red-500 border-red-500';
    if (val > 140) return 'text-amber-500 border-amber-500';
    return 'text-emerald-500 border-emerald-500';
  };

  return (
    <div className="glass-card p-6 flex flex-col items-center justify-center">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
        Glucose Telemetry
      </h3>
      <div className={`w-36 h-36 rounded-full border-[10px] flex flex-col items-center justify-center transition-all duration-500 ${getStatusColor(value)}`}>
        <span className="text-3xl font-bold tracking-tight text-slate-900">{value}</span>
        <span className="text-[10px] font-semibold text-slate-400 uppercase">mg/dL</span>
      </div>
      <div className="mt-4 flex gap-4 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Normal
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Elevated
        </span>
      </div>
    </div>
  );
}
