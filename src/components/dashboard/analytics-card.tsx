import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalyticsCardProps {
  data: { time: string; glucose: number }[];
}

export function AnalyticsCard({ data }: AnalyticsCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
        24h Glucose Trend
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[60, 220]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Line
              type="monotone"
              dataKey="glucose"
              stroke="#0f172a"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 0, fill: '#0f172a' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
