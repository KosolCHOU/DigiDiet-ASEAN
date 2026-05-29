import { ChatMessage } from '../../types';

interface ChatWindowProps {
  messages: ChatMessage[];
}

export function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#efeae2] p-4 pt-12 gap-3 min-h-[300px]">
      {messages.map((msg) => {
        if (msg.sender === 'user') {
          return (
            <div key={msg.id} className="bg-emerald-100 text-slate-950 p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end shadow-sm border border-emerald-250/20 text-sm">
              {msg.text}
            </div>
          );
        } else if (msg.sender === 'family') {
          return (
            <div key={msg.id} className="bg-amber-100 text-slate-950 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start shadow-sm border border-amber-250/20 text-sm">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">Circle of Care: Family</span>
              {msg.text}
            </div>
          );
        } else {
          return (
            <div key={msg.id} className="bg-white text-slate-950 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start shadow-sm border border-slate-200/50 text-sm">
              <span className="text-[10px] font-bold text-indigo-600 block mb-1">DigiDiet Assistant</span>
              {msg.text}
            </div>
          );
        }
      })}
    </div>
  );
}
