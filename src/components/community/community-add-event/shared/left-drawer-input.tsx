import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';



import LeftSideDrawer from '../../community-add-palce-steps/third-step/left-drawer';


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputTitle = styled.h3`
  color: #958a8a;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const SectionText = styled.p`
  color: #424242;
  font-size: 14px;
  font-weight: 400;
`;

export const SelectableField = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  p {
    color: #424242;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; /* Обязательное условие */
    width: 100%; /* или max-width с явным значением */
    min-width: 0; /* Важно для flex-контейнеров */
  }
`;

export const InputContainer = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

// Модифицируем стили инпута
const ReadonlyInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
  cursor: pointer;

  color: #424242;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 24px; // Оставляем место для стрелки

  &:disabled {
    opacity: 1;
    -webkit-text-fill-color: #424242;
  }
`;

// Стиль для позиционирования стрелки
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface LeftSideDrawerProps {
  inputTitle: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  limit: number;
  placeholder: string;
  headerTitle: string;
  childrenDrawer?: React.ReactNode;
}

export const LeftDrawerInput = ({
  childrenDrawer,
  inputTitle,
  inputValue,
  setInputValue,
  limit,
  placeholder,
  headerTitle,
}: LeftSideDrawerProps) => {
  return (
    <LeftSideDrawer
      inputValue={inputValue}
      setInputValue={setInputValue}
      title={headerTitle}
      placeholder={placeholder}
      limit={limit}
      childrenDrawer={childrenDrawer}
    >
      <InputTitle>{inputTitle}</InputTitle>
      <InputContainer>
        <ReadonlyInput type="text" value={inputValue || ''} placeholder={placeholder} readOnly />
        <ArrowWrapper>
          <ArrowRightV2 color="#958A8A" />
        </ArrowWrapper>
      </InputContainer>
    </LeftSideDrawer>
  );
};
