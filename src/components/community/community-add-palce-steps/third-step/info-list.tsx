import { useState } from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

import { LeftDrawerInput } from '../../community-add-event/shared/left-drawer-input';
import { Category } from './category';
import LeftSideDrawer from './left-drawer';
import BottomInfoDrawer from './notes-info-botom-drawer';
import { OtherInfo } from './other-info/other-info';
import { Private } from './private';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 90px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputTitle = styled.h3`
  color: #958a8a;
  font-weight: 600;
  font-size: 14px;
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

export function InfoList() {
  const [notes, setNotes] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [descPlace, setDescPlace] = useState('');
  return (
    <Container>
      <Section>
        <InputTitle>Адрес</InputTitle>
        <SelectableField>
          <SectionText>ул. Северная 5, Город</SectionText>
        </SelectableField>
      </Section>

      <LeftDrawerInput
        inputValue={placeName}
        setInputValue={setPlaceName}
        headerTitle="Название"
        placeholder="Название места"
        inputTitle="Название"
        limit={100}
      />

      <Category />

      <LeftDrawerInput
        inputValue={descPlace}
        setInputValue={setDescPlace}
        headerTitle="Описание"
        placeholder="Расскажите о месте"
        inputTitle="Описание"
        limit={100}
      />

      <LeftSideDrawer
        inputValue={notes}
        setInputValue={setNotes}
        title={'Заметка'}
        placeholder="Ваши впечатления, советы, мнение"
        childrenDrawer={<BottomInfoDrawer />}
      >
        
        <InputTitle>Заметка</InputTitle>
        <InputContainer>
          <ReadonlyInput type="text" value={notes || ''} placeholder="Ваши впечатления, советы, мнение" readOnly />
          <ArrowWrapper>
            <ArrowRightV2 color="#958A8A" />
          </ArrowWrapper>
        </InputContainer>
      </LeftSideDrawer>

      {/* TODO: Добавить */}

      <OtherInfo />

      <Private />
    </Container>
  );
}
