import { useState } from 'react';
import styled from '@emotion/styled';



import { CreateCard } from '../widgets/create-new-card-place';
import { ThirdStepPlaceCard } from '../widgets/third-step-place-card';
import { FullCardPage } from './full-card-page';


const Text = styled.p`
  color: #424242;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
// 2 СЦЕНАРИЯ
// Созданы ли карточки в этой точке интереса?
// если да то
export const SecondStepExistingCard = () => {
  const [isOpenCardPage, setIsOpenCardPage] = useState(false);
  function handleClickExistingCard() {
    setIsOpenCardPage(true);
  }
  function handleClickCreateCard() {
    setIsOpenCardPage(false);
  }
  if (isOpenCardPage) {
    return <FullCardPage back={handleClickCreateCard} />;
  }

  return (
    <Wrapper>
      <Text>Нашли такие карточки мест по этому адресу</Text>

      <ThirdStepPlaceCard existingCard={handleClickExistingCard} />
      <ThirdStepPlaceCard existingCard={handleClickExistingCard} />
      <CreateCard createNewCard={handleClickCreateCard} />
    </Wrapper>
  );
};
