'use client';

import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

const Block = styled.div`
  margin-top: 24px;
  width: 100%;
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;

  span {
    color: #958a8a;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
  }
`;

export function GrayBlockArrow() {
  return (
    <Block>
      <p>
        Подписки <span>42</span>
      </p>
      <ArrowRightV2 color="#958A8A" />
    </Block>
  );
}
