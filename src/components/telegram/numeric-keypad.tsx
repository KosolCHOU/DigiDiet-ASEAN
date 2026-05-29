export function NumericKeypad() {
  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-200 p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '✓'].map((key) => (
        <button
          key={key}
          className="bg-white py-3 rounded shadow-sm text-lg font-medium hover:bg-gray-50"
        >
          {key}
        </button>
      ))}
    </div>
  );
}
