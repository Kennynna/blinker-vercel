import { useStepStore } from '@/shared/store/community/steps';

import { FirstStepExistingCard } from '../community-add-palce-steps/first-step-existing-place';
import { Steps } from '../community-add-palce-steps/step-place-choose';
import { StepHeader } from '../shared/step-header';
import { ChooseEventInPlace } from './second-step-info/choose-event-in-place';
import { SecondStepCreateEvent } from './second-step-info/second-step-create-event';
import { FiveStepCreateEvent } from './shared/five-step-create-event';
import { FourStepCreateEvent } from './shared/four-step-create-event';
import { SecondStepNewCard as ThirdStepEvent } from './shared/second-step-new-card-place';
import { SixStepCreateEvent } from './shared/six-step-create-event';

interface MainPageEventAddProps {
  closeDrawer: () => void;
}

export const MainPageEventAdd = ({ closeDrawer }: MainPageEventAddProps) => {
  const { step, incrementStep, decrementStep } = useStepStore();

  const prevStep = () => {
    if (step === 1) {
      closeDrawer();
    } else if (step === 1.1) {
      decrementStep(0.1);
    } else {
      decrementStep();
    }
  };

  const renderCreateEvent = () => {
    switch (step) {
      case 1:
        return <FirstStepExistingCard stepNext={incrementStep} />;
      case 1.1:
        return <ChooseEventInPlace />;
      case 2:
        return <SecondStepCreateEvent stepNext={incrementStep} />;
      case 3:
        return <ThirdStepEvent stepNext={incrementStep} />;
      case 4:
        return <FourStepCreateEvent stepNext={incrementStep} />;
      case 5:
        return <FiveStepCreateEvent stepNext={incrementStep} />;
      case 6:
        return <SixStepCreateEvent />;
      default:
        return null;
    }
  };
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: 'calc(100% - 32px)', // 100% минус 16px с каждой стороны
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#fff',
          zIndex: 100,
        }}
      >
        <StepHeader title="Добавить событие" onClick={prevStep} skip={step === 5 || step === 6} />
        <Steps />
      </div>
      <div style={{ marginTop: '116px',}}>{renderCreateEvent()}</div>
    </>
  );
};
