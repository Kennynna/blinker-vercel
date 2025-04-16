import React from 'react';
import { FilterIcon } from '@/shared/icons';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';



import { IOSSwitch } from './ui/switch';

const SwitchText = styled.p`
  margin: 0;
  color: #424242;
  font-size: 14px;
  font-weight: 600;
`;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 4.25rem;
  z-index: 13;
  gap: 1rem;
  width: 100%;
  padding-right: 2.5rem;
`;

const SwitchBlock = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  gap: 1rem;
`;
export const Switcher = () => {
  // const { selectedTypes } = useFilterStore();
  const { setWhatOpen } = useDrawerValue();

  return (
    <SwitchWrapper>
      <SwitchBlock>
        <SwitchText>Ближайшие события</SwitchText>
        <IOSSwitch />
      </SwitchBlock>
    </SwitchWrapper>
  );
};
