import styled from '@emotion/styled';

import { PhotoUpload } from '../../community-add-palce-steps/third-step/photo-upload';
import BottomDrawerFiveStepEvent from './bottom-drawer-four-step';
import { FixedButton } from './fixed-button';
import { InfoListCreateEvent } from './info-list-create-event';

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const ButtonBlock = styled.div`
  padding: 0 16px;
  position: fixed;
  bottom: 5px;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  border-radius: 39px;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;

  background-color: #007bff;
  cursor: 'pointer';
`;

export const FiveStepCreateEvent = ({ stepNext }: { stepNext: () => void }) => {
  return (
    <StepContainer>
      <PhotoUpload />
      <InfoListCreateEvent />
      <FixedButton text="Далее" onClick={stepNext} />
      <BottomDrawerFiveStepEvent />
    </StepContainer>
  );
};
