import { Download } from 'lucide-react';

export function ReportExport() {
  const handleExport = () => {
    alert('Exporting clinical PDF report...');
  };

  return (
    <div className="glass-card p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Clinical Reporting
        </h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Generate a comprehensive PDF report containing glucose logs, food diaries, and adherence logs formatted for clinical review.
        </p>
      </div>
      <button
        onClick={handleExport}
        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all"
      >
        <Download className="w-4 h-4" />
        Export Clinical PDF Report
      </button>
    </div>
  );
}
