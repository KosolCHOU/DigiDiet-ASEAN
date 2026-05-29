import { FoodItem } from '../types';

export const foodDatabase: FoodItem[] = [
  {
    id: 'kuy-teav',
    name: 'Kuy Teav (Pork Noodle Soup)',
    region: 'ASEAN/Cambodia',
    glycemicIndex: 'medium',
    metrics: { calories: 450, carbs: 65, protein: 20, fat: 12 },
    recommendation: 'Pair with extra bean sprouts to slow glucose spike.',
  },
  {
    id: 'nasi-lemak',
    name: 'Nasi Lemak',
    region: 'ASEAN/Malaysia',
    glycemicIndex: 'high',
    metrics: { calories: 650, carbs: 80, protein: 15, fat: 25 },
    recommendation: 'High glycemic load. Limit portion size and add cucumber slices.',
  },
  {
    id: 'som-tum',
    name: 'Som Tum (Papaya Salad)',
    region: 'ASEAN/Thailand',
    glycemicIndex: 'low',
    metrics: { calories: 120, carbs: 15, protein: 3, fat: 2 },
    recommendation: 'Excellent low glycemic side. Watch out for added palm sugar.',
  }
];
