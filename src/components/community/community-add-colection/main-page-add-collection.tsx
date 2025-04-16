import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';

import { Steps } from '../community-add-palce-steps/step-place-choose';
import { StepHeader } from '../shared/step-header';
import { FirstStepCreateCollection } from './widgets/first-step-create-collection';
import { SecondStepCreateCollection } from './widgets/second-step-create-collection';
import { ThirdStepCreateCollection } from './widgets/third-step-create-collection';

interface MainPageAddCollectionProps {
  closeDrawer: () => void;
}

export const MainPageAddCollection = ({ closeDrawer }: MainPageAddCollectionProps) => {
  const { step, incrementStep, decrementStep, closeCommunityDrawer, openToast, setToastMessage, setCurrentPlace } =
    useStepStore();

  function handleCloseDrawers() {
    setToastMessage('Подборка добавлена');
    closeCommunityDrawer();
    openToast();
    setCurrentPlace(null);
  }
  const prevStep = () => {
    if (step === 1) {
      closeDrawer();
    } else if (step === 1.1) {
      decrementStep(0.1);
    } else {
      decrementStep();
    }
  };

  const renderCreateCollection = () => {
    if (step === 1) {
      return <FirstStepCreateCollection stepNext={incrementStep} />;
    }
    if (step === 2) {
      return <SecondStepCreateCollection stepNext={incrementStep} />;
    }
    if (step === 3) {
      return <ThirdStepCreateCollection closeDrawer={handleCloseDrawers} />;
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
        <StepHeader title="Добавить подборку" onClick={prevStep} />

        <Steps />
      </div>
      <div style={{ marginTop: '116px' }}> {renderCreateCollection()}</div>
    </>
  );
};
