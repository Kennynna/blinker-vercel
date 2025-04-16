import { useState } from 'react';
import styled from '@emotion/styled';

import { InputWithLimit } from '../shared/input-with-limit';

export const SelectableField = styled.input`
  border-radius: 16px;
  background: #f9f9f9;
  padding: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #424242;
  border: none;
  outline: none;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::placeholder {
    color: #958a8a;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const InputTitle = styled.div`
  color: #958a8a;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Star = styled.span`
  color: #00a3ff;
`;

export const EventName = () => {
  const [inputValue, setInputValue] = useState('');
  const [showLimit, setShowLimit] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 35) {
      return;
    }
    setInputValue(e.target.value);
  };
  return (
    <InputWithLimit
      type={'text'}
      value={inputValue}
      onChange={handleChange}
      limit={35}
      inputTitle="Название"
      placeholder="Введите название события..."
      show={showLimit}
      strong={true}
      onFocus={() => setShowLimit(true)}
      onBlur={() => setShowLimit(false)}
    />
  );
};
