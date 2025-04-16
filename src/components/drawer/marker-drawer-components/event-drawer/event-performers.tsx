import { useState } from 'react';
import styled from '@emotion/styled';

import { Title } from '../body/about/title';

const Block = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const TextBlock = styled.div<{ isOpen: boolean }>`
  margin-top: 12px;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 16px;
  color: #424242;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  /* Условные стили для обрезки текста */
  ${({ isOpen }) =>
    !isOpen &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Условные стили для полного текста */
  ${({ isOpen }) =>
    isOpen &&
    `
    display: block; /* Обычный блок без ограничений */
  `}
`;

const ShowMore = styled.p`
  color: #00a3ff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;

export const EventPerformers = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Block>
      <Title title="Исполнители" id="Исполнители" />
      <TextBlock isOpen={isOpen}>Исполнитель 1, Исполнитель 2, Исполнитель 3, Исполнитель 4, Исполнитель</TextBlock>
      {!isOpen && <ShowMore onClick={() => setIsOpen(true)}>Ещё</ShowMore>}
      {isOpen && <ShowMore onClick={() => setIsOpen(false)}>Свернуть</ShowMore>}
    </Block>
  );
};
