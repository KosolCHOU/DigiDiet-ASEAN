export type ViewState = 'patient' | 'doctor';
export type GlucoseBand = 'low' | 'normal' | 'elevated' | 'high';
export type ChatRole = 'user' | 'bot' | 'family';

export interface ChatMessage {
  id: string;
  sender: ChatRole;
  text: string;
  timestamp: Date;
}

export interface FoodItem {
  id: string;
  name: string;
  region: string;
  glycemicIndex: 'low' | 'medium' | 'high';
  metrics: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
  recommendation: string;
}
