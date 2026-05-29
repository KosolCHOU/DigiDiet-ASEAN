import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ClinicalSummary() {
  const complianceData = [
    { name: 'Week 1', compliance: 85 },
    { name: 'Week 2', compliance: 90 },
    { name: 'Week 3', compliance: 78 },
    { name: 'Week 4', compliance: 92 },
  ];

  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          HbA1c Projection & Compliance
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase">Estimated HbA1c</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">6.4%</div>
            <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">↓ 0.3% last month</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase">Time-in-Range</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">82%</div>
            <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">Target: &gt;70%</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Weekly Adherence Rate</h4>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={complianceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="compliance" fill="#0f172a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
