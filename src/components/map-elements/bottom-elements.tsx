import React from 'react';
import {MyLocationIcon} from '@/shared/icons';
import {useDrawerValue} from '@/shared/store/drawer-value';
import styled from '@emotion/styled';
import {Button, Typography} from '@mui/material';

import {RightIcons} from './top-icons';

export const Paragraph = styled(Typography)`
  z-index: 11;
  background-color: white;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: 0px 0.125rem 0px #007aff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background-color: #00A3FF;

    path {
      fill: #fff;
    }
  }
`;

export const CustomButton = styled(Button)<{ $bgColor?: string }>`
  z-index: 11;
  background-color: ${(props) => props.$bgColor || 'white'}; // Используем проп или дефолтное значение
  border-radius: 3.125rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: black;
  min-width: 0px !important;
  min-height: 0;
  max-width: 40px;
  max-height: 40px;
  width: 40px;

  &:hover {
    background-color: #00A3FF;

    path {
      fill: #fff;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
  min-width: 3rem;
  position: relative;
`;

const LocationBlock = styled.div`
  position: absolute;
  bottom: 256px;
  right: 1.25rem;
  background-color: inherit;
  z-index: 9;
`;

const FiltersAndCollection = styled.div`
  position: absolute;
  bottom: 312px;
  right: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

interface BottomElementsProps {
  fullscreen?: boolean;
  handleUserLocationClick?: () => void;
}

export function BottomElements({handleUserLocationClick}: BottomElementsProps): React.JSX.Element {
  const {setWhatOpen} = useDrawerValue();
  return (
    <>
      <LocationBlock>
        <CustomButton onClick={handleUserLocationClick}>
          <MyLocationIcon/>
        </CustomButton>
      </LocationBlock>

      <FiltersAndCollection>
        <RightIcons setWhatOpen={setWhatOpen}/>
      </FiltersAndCollection>
    </>
  );
}
