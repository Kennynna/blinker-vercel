'use client';

import styled from '@emotion/styled';

import { InfoList } from './info-list';
import { PhotoUpload } from './photo-upload';
import { FixedButton } from '../../community-add-event/shared/fixed-button';

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

  background-color: #007BFF;
  cursor: 'pointer';
`;

export function ThirdStepNewCardPlace({ stepNext }: { stepNext: () => void }) {
  return (
    <StepContainer>
      <PhotoUpload />
      <InfoList />
        <FixedButton onClick={stepNext}>Далее</FixedButton>
    </StepContainer>
  );
}
