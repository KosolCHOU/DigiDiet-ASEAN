import { foodDatabase } from '../../data/food-database';

export function MealBadge() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
        ASEAN Dietary Interventions
      </h3>
      <div className="space-y-3">
        {foodDatabase.map((item) => (
          <div key={item.id} className="flex flex-col p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 text-sm">{item.name}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                item.glycemicIndex === 'low'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : item.glycemicIndex === 'medium'
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {item.glycemicIndex} GI
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">{item.recommendation}</p>
            <div className="flex gap-4 mt-2 text-[10px] text-slate-400 font-medium">
              <span>{item.metrics.calories} kcal</span>
              <span>{item.metrics.carbs}g Carbs</span>
              <span>{item.metrics.protein}g Protein</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
