export type GlucoseBand = 'low' | 'normal' | 'elevated' | 'high';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface FoodItem {
  id: string;
  name: string;
  region: string;
  metrics: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
  recommendation: string;
}
