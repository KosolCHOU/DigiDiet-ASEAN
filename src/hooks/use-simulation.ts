import { useState } from 'react';
import { ChatMessage, ViewState } from '../types';

export function useSimulation() {
  const [view, setView] = useState<ViewState>('patient');
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Welcome to DigiDiet ASEAN. Please log your breakfast or enter a glucose reading (e.g., 180).',
      timestamp: new Date(),
    }
  ]);
  const [glucoseData, setGlucoseData] = useState([
    { time: '08:00', glucose: 110 },
    { time: '10:00', glucose: 130 },
    { time: '12:00', glucose: 120 },
  ]);

  const addMessage = (text: string, sender: 'user' | 'bot' | 'family') => {
    const newMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender,
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const advanceSimulation = (inputValue: string) => {
    if (step === 0) {
      addMessage(`Logged glucose: ${inputValue} mg/dL`, 'user');
      const val = parseFloat(inputValue) || 120;
      addMessage('Evaluating glycemic impact...', 'bot');
      setTimeout(() => {
        if (val > 140) {
          addMessage('Alert: Elevated glucose detected. Notifying Circle of Care.', 'bot');
          addMessage('Family Circle: "Dad, please verify your insulin dose. Checking in!"', 'family');
        } else {
          addMessage('Stable glucose level. Circle of Care notified of status.', 'bot');
        }
        setGlucoseData((prev) => [...prev, { time: '14:00', glucose: val }]);
        setStep(1);
      }, 1000);
    } else {
      addMessage(`Response logged: ${inputValue}`, 'user');
      addMessage('Telemetry stabilized. Doctor updated on adherence logs.', 'bot');
      setStep(2);
    }
  };

  return {
    view,
    setView,
    step,
    messages,
    glucoseData,
    advanceSimulation,
    resetSimulation: () => {
      setStep(0);
      setMessages([
        {
          id: '1',
          sender: 'bot',
          text: 'Welcome to DigiDiet ASEAN. Please log your breakfast or enter a glucose reading (e.g., 180).',
          timestamp: new Date(),
        }
      ]);
      setGlucoseData([
        { time: '08:00', glucose: 110 },
        { time: '10:00', glucose: 130 },
        { time: '12:00', glucose: 120 },
      ]);
    }
  };
}
