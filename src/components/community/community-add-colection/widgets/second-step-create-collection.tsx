import { useState } from 'react';
import styled from '@emotion/styled';

import { FixedButton } from '../../community-add-event/shared/fixed-button';
import { CollectionIconChoose } from '../shared/collection-icon-choose';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  margin-bottom: 65px;
`;

export const SecondStepCreateCollection = ({ stepNext }: { stepNext: () => void }) => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <Wrapper>
        {Array.from({ length: 50 }).map((_, index) => (
          <CollectionIconChoose active={active === index} key={index} onClick={() => setActive(index)} />
        ))}
      </Wrapper>
      <FixedButton onClick={stepNext} disabled={!active}>
        Далее
      </FixedButton>
    </>
  );
};
