import { Schedule } from './schedule';
import { TicketPrice } from './ticket-price';

export function Body({ step, nextStep }: { step: number; nextStep: () => void }) {
  if (step === 1) {
    return <Schedule nextStep={nextStep} />;
  }
  if (step === 2) {
    return <TicketPrice nextStep={nextStep} />;
  }
  if (step === 3) {
    return <div>Тут будет сайт</div>;
  }

  return null;
}
