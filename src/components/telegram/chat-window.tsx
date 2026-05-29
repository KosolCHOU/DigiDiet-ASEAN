export function ChatWindow() {
  return (
    <div className="flex flex-col gap-4 p-4 h-full bg-[#e5ddd5]">
      {/* Simulated message feed UI */}
      <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] self-start shadow-sm">
        Please input your recent meal and glucose reading.
      </div>
      <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none max-w-[80%] self-end shadow-sm">
        [User Input Placeholder]
      </div>
    </div>
  );
}
