import { useState } from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import styled from '@emotion/styled';

const HeaderText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  h2 {
    font-size: 16px;
  }

  p {
    overflow: hidden;
    color: #958a8a;

    text-align: center;
    text-overflow: ellipsis;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 16px;
`;

export function Header({ step, stepPrev }: { step: number; stepPrev: () => void }) {
  const title = ['Билеты', 'Покупка билета', 'Покупка билета'];
  return (
    <Block>
      <ArrowLeftIcon closeDrawer={stepPrev} />
      <HeaderText>
        <h2>{title[step - 1]}</h2>
        <p>Мероприятие в 2 строки текста длинное</p>
      </HeaderText>
    </Block>
  );
}
