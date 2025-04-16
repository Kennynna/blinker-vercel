import styled from '@emotion/styled';

import { TagsStepChoose } from '../../community-add-palce-steps/four-step-new-card-place';
import { FixedButton } from './fixed-button';



export const SixStepCreateEvent = () => {
  return (
    <div style={{
      marginBottom: '24px'
    }}>
      <TagsStepChoose stepNext={() => {}} />
      <FixedButton text="Перейти в событие" />
    </div>
  );
};
