import React, { useState } from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';



import { MainPageEventAdd } from '../community-add-event/main-page-event-add';
import { ChooseExistingOrNewPlace } from './choose-existing-or-new-place';
import { MainPageAddCollection } from '../community-add-colection/main-page-add-collection';


{
  /* Контент содержимого тут будут 4 сценария */
}
interface StepsProps {
  closeDrawer: () => void;
  whatChoose: string;
}

// TODO: компонент добавления места, подборки, события
export const StepPlaceChoose = ({ closeDrawer, whatChoose }: StepsProps) => {
  return (
    <>
      {/* Контент */}
      {whatChoose === 'EVENT' && <MainPageEventAdd closeDrawer={closeDrawer} />}
      {whatChoose === 'PLACE' && <ChooseExistingOrNewPlace closeDrawer={closeDrawer} />}
      {whatChoose === 'COLLECTION' && <MainPageAddCollection closeDrawer={closeDrawer} />}

    </>
  );
};


// КОМПОНЕНТ ШАГОВ ВЕРхнИх
// Ниже логика закрашивание шагов
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WrapperStep = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const StepBlue = styled.div`
  display: flex;
  height: 4px;
  width: 100px;
  border-radius: 32px;
  background: #00a3ff;
`;
const StepWhite = styled.div`
  display: flex;
  height: 4px;
  width: 100px;
  border-radius: 32px;
  background: #f1f1f1;
`;
const StepText = styled.p`
  color: #424242;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
const Span = styled.span`
  color: #958a8a;
  font-size: 14px;
  font-weight: 500;
`;
export function Steps() {
  const { step, maxStep, currentPlace } = useStepStore();

  // Определяем текст для шагов в зависимости от типа места
  const stepText = (() => {
    if (currentPlace === 'EXISTING') {
      return {
        1: 'Поиск места',
        2: 'Выбор места',
        3: 'Выбор подборки',
      };
    } else if (currentPlace === 'NEW') {
      return {
        1: 'Локация',
        2: 'Категории',
        3: 'Данные',
        4: 'Теги',
        5: 'Подборка',
      };
    } else if (currentPlace === 'EVENT') {
      return {
        1: 'Локация',
        2: 'О событии',
        3: 'Категории',
        4: 'Участники',
        5: 'Данные',
        6: 'Теги',
      };
    } else if (currentPlace === 'COLLECTION') {
      return {
        1: 'Название и описание',
        2: 'Иконка',
        3: 'Места',

      };
    }
    return {}; // Возвращаем пустой объект, если currentPlace не определен
  })();

  return (
    <Wrapper>
      <StepText>
        <Span>
          {Math.floor(step)}/{maxStep}{' '}
        </Span>
        {stepText[ Math.floor(step)] || ''} {/* Используем текущий шаг*/}
      </StepText>
      <WrapperStep>
        {/* Генерация индикаторов шагов */}
        {Array.from({ length: maxStep }, (_, index) =>
          index < Math.floor(step) ? <StepBlue key={index} /> : <StepWhite key={index} />
        )}
      </WrapperStep>
    </Wrapper>
  );
}
