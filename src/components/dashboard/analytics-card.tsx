export function AnalyticsCard() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold mb-4">24h Glucose Trend</h2>
      {/* Recharts integration will go here */}
      <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg text-gray-500">
        [Trend Chart Placeholder]
      </div>
    </div>
  );
}
