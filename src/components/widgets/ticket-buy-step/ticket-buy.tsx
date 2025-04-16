import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Body } from './body';
import { Header } from './header';

const Block = styled.div`
  color: #424242;
  font-size: 16px;
  font-family: Inter;
  font-weight: 700;
  padding: 0 16px;
  margin-top: 63px;
`;

export const TicketBuy = ({ step, nextStep, stepPrev }) => {
  return (
    <Block>
      <Header step={step} stepPrev={stepPrev} />
      <Body step={step} nextStep={nextStep} />
    </Block>
  );
};
