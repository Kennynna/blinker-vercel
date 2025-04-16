import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';

import { SecondStepNewCard } from '../community-add-event/shared/second-step-new-card-place';
import { StepHeader } from '../shared/step-header';
import { FinalStepNewCardPlace } from './final-step-new-card-place';
import { FirstStepExistingCard } from './first-step-existing-place';
import { TagsStepChoose } from './four-step-new-card-place';
import { LastStepExistingCard } from './last-step-existing-place';
import { SecondStepExistingCard } from './second-step-existing-place';
import { Steps } from './step-place-choose';
import { ThirdStepNewCardPlace } from './third-step/third-step-new-card-place';

const Header = styled.div`
  /* Размещаем контент по центру по горизонтали,
     используем position: relative для "абсолютной" иконки */
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowWrapper = styled.div`
  /* Ставим иконку слева */
  position: absolute;
  left: 0;
`;

const HeaderText = styled.div`
  color: #424242;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 0;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 12px;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 1rem;
  background-color: #f9f9f9;
  padding: 16px;
`;
export interface StepContentProps {
  currentStep?: number;
  close?: () => void;
  stepPrev?: () => void;
  stepNext: (num?: number) => void;
}

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export function ChooseExistingOrNewPlace({ closeDrawer }) {
  const { step, currentPlace, setCurrentPlace, incrementStep, decrementStep } = useStepStore();
  const handleClickExistingCard = () => {
    setCurrentPlace('EXISTING');
    incrementStep();
  };
  const handleClickNewCard = () => {
    setCurrentPlace('NEW');
    incrementStep();
  };
  if (currentPlace === 'EXISTING') {
    return <ExistingCard stepNext={incrementStep} currentStep={step} stepBack={decrementStep} />;
  }
  if (currentPlace === 'NEW') {
    return <CreateNewCard currentStep={step} stepNext={incrementStep} stepBack={decrementStep} />;
  }

  return (
    <>
      <Header>
        <ArrowWrapper>
          <ArrowLeftIcon closeDrawer={closeDrawer} />
        </ArrowWrapper>
        <HeaderText>Добавить место</HeaderText>
      </Header>
      <Wrapper>
        <Card onClick={handleClickExistingCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
          </svg>
          <div>
            <Title>Существующее</Title>
            <Desc>Место, которое уже добавили другие пользователи</Desc>
          </div>
        </Card>

        <Card onClick={handleClickNewCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
          </svg>
          <div>
            <Title>Новое</Title>
            <Desc>Место, карточку которого никто не создавал или которого нет не карте</Desc>
          </div>
        </Card>
      </Wrapper>
    </>
  );
}

export function ExistingCard({
  currentStep,
  stepNext,
  stepBack,
}: {
  currentStep: number;
  stepNext: () => void;
  stepBack: () => void;
}) {
  const renderCurrentStepContent = () => {
    if (currentStep === 1) {
      return <FirstStepExistingCard stepNext={stepNext} />;
    }
    if (currentStep === 2) {
      return <SecondStepExistingCard />;
    }
    if (currentStep === 3) {
      // third
      return <LastStepExistingCard />;
    }
    return null;
  };

  return (
    <>
      <StepHeader title="Существующее место" onClick={stepBack} />
      <Steps />
      {renderCurrentStepContent()}
    </>
  );
}

export function CreateNewCard({
  currentStep,
  stepNext,
  stepBack,
}: {
  currentStep: number;
  stepNext: () => void;
  stepBack: () => void;
}) {
  const renderCurrentStepContent = () => {
    if (currentStep === 1) {
      return <FirstStepExistingCard stepNext={stepNext} />;
    }
    if (currentStep === 2) {
      return <SecondStepNewCard stepNext={stepNext} />;
    }
    if (currentStep === 3) {
      // third
      return <ThirdStepNewCardPlace stepNext={stepNext} />;
    }
    if (currentStep === 4) {
      // third
      return <TagsStepChoose stepNext={stepNext} />;
    }
    if (currentStep === 5) {
      // third
      return <FinalStepNewCardPlace />;
    }
    return null;
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
        <Header onClick={stepBack}>
          <ArrowWrapper>
            <ArrowLeftIcon />
          </ArrowWrapper>
          <HeaderText>Новое место</HeaderText>
        </Header>
        <Steps />
      </div>
      <div style={{ marginTop: '116px' }}> {renderCurrentStepContent()}</div>
    </>
  );
}
