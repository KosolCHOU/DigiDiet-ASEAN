export function StatusGauge() {
  return (
    <div className="glass-card p-6 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Current Status</h2>
      {/* Circular glucose telemetry ring */}
      <div className="w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center text-xl font-bold">
        105
      </div>
      <span className="mt-2 text-sm text-gray-500">mg/dL</span>
    </div>
  );
}
