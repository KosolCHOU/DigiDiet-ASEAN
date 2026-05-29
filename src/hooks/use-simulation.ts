import { useState } from 'react';

export function useSimulation() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const reset = () => setStep(0);

  return { step, nextStep, reset };
}
