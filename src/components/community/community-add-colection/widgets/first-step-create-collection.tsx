import { useState } from 'react';
import styled from '@emotion/styled';

import { FixedButton } from '../../community-add-event/shared/fixed-button';
import { InputWithLimit } from '../../community-add-event/shared/input-with-limit';
import { LeftDrawerInput } from '../../community-add-event/shared/left-drawer-input';

export const FirstStepCreateCollection = ({stepNext}: {stepNext: () => void}) => {
  const [inputValue, setInputValue] = useState('');
  const [showLimit, setShowLimit] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 35) {
      return;
    }
    setInputValue(e.target.value);
  };

  const [descCollection, setDescCollection] = useState('');

  return (
    <Wrapper>
      <InputWithLimit
        type={'text'}
        value={inputValue}
        onChange={handleChange}
        limit={35}
        inputTitle="Название"
        placeholder="Как называется подборка"
        show={showLimit}
        strong={true}
        onFocus={() => setShowLimit(true)}
        onBlur={() => setShowLimit(false)}
      />
      <LeftDrawerInput
        inputValue={descCollection}
        setInputValue={setDescCollection}
        headerTitle="Описание"
        placeholder="О чём ваша подборка?"
        inputTitle="Описание"
        limit={1000}
      />
      <FixedButton text="Далее" disabled={!inputValue} onClick={stepNext}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
