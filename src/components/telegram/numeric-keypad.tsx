interface NumericKeypadProps {
  onKeyPress: (value: string) => void;
  onClear: () => void;
  onBackspace: () => void;
}

export function NumericKeypad({ onKeyPress, onClear, onBackspace }: NumericKeypadProps) {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', '⌫'];

  const handleClick = (key: string) => {
    if (key === 'CLR') {
      onClear();
    } else if (key === '⌫') {
      onBackspace();
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="bg-slate-900 p-4 grid grid-cols-3 gap-2">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          className={`py-3 rounded-xl font-semibold text-lg transition-all active:scale-95 ${
            key === 'CLR'
              ? 'bg-red-500/10 text-red-455 hover:bg-red-500/20'
              : key === '⌫'
              ? 'bg-amber-500/10 text-amber-455 hover:bg-amber-500/20'
              : 'bg-slate-800 text-white hover:bg-slate-700'
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
