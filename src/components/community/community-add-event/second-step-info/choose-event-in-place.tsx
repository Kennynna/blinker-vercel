import styled from '@emotion/styled';

import { CreateCard } from '../../widgets/create-new-card-place';
import { ThirdStepPlaceCard } from '../../widgets/third-step-place-card';
import BottomDrawerEvent from '../shared/bottom-drawer-event';
import { StepTitle } from '../shared/step-title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
// 2 СЦЕНАРИЯ
// Созданы ли карточки в этой точке интереса?
// если да то
export const ChooseEventInPlace = () => {
  return (
    <Wrapper>
      <StepTitle title="Где провести событие?" />

      <ThirdStepPlaceCard />
      <ThirdStepPlaceCard />
      <CreateCard />
      <BottomDrawerEvent />
    </Wrapper>
  );
};
