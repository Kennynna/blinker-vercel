import React from 'react';
import styled from '@emotion/styled';

interface DiscountProps {
  discountValue: number;
}

const DiscountValue = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 56px;
  font-weight: 700;
  padding: 0 0.25rem;
  height: 26px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.4375rem;
  background-color: #00a3ff;
  z-index: 10;
`;

export function Discount({ discountValue }: DiscountProps): React.JSX.Element {
  return <DiscountValue>{`${discountValue}%`}</DiscountValue>;
}
