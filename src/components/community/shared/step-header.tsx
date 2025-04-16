import React from 'react';
import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import styled from '@emotion/styled';

const Header = styled.div`
  /* Размещаем контент по центру по горизонтали,
     используем position: relative для "абсолютной" иконки */

  position: sticky;
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

export const Skip = styled.span`
  position: absolute;
  right: 0;
  top: 18px;
  color: #00a3ff;
  font-size: 14px;
  font-weight: 600;
`;

interface StepHeaderPros {
  onClick?: () => void;
  title: string;
  skip?: boolean;
}

export const StepHeader = ({ onClick, title, skip }: StepHeaderPros) => {
  return (
    <Header>
      <ArrowWrapper onClick={onClick}>
        <ArrowLeftIcon />
      </ArrowWrapper>
      <HeaderText>
        {title}
        {skip && <Skip>Пропустить</Skip>}
      </HeaderText>
    </Header>
  );
};
