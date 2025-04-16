'use client';

import { useState } from 'react';

import LeftDrawerChild from '@/components/drawer/default-drawer-components/ui/left-drawer-child';
import { TicketBuy } from '@/components/widgets/ticket-buy-step/ticket-buy';

const TicketPrice = () => {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
    console.log('step', step);
  }
  function stepPrev() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <LeftDrawerChild buttonText="Билеты от 900" step={step} setStep={setStep}>
        <TicketBuy step={step} nextStep={nextStep} stepPrev={stepPrev} />
      </LeftDrawerChild>
    </div>
  );
};
export default TicketPrice;
