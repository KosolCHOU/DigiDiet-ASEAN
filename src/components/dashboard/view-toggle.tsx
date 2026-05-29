import { ViewState } from '../../types';

interface ViewToggleProps {
  view: ViewState;
  onViewChange: (view: ViewState) => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex bg-slate-200/60 p-1 rounded-xl w-fit">
      <button
        onClick={() => onViewChange('patient')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          view === 'patient'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        Patient View
      </button>
      <button
        onClick={() => onViewChange('doctor')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          view === 'doctor'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        Doctor Portal
      </button>
    </div>
  );
}
