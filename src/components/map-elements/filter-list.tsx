import React from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';

const Filters = styled.div`
  position: absolute;
  top: 0.375rem;
  display: flex;
  justify-content: center;
  gap: 0.3125rem;
  width: 100%;
  z-index: 9;
  padding: 0 0.625rem;
`;
const FiltersText = styled.p`
  margin: 0;
  font-size: 1.125rem;
  z-index: 9;
`;

const FilterItem = styled.span`
  background-color: #ffffff;
  border-radius: 1rem;
  border: 0.125rem solid #007aff;
  padding: 0.1875rem 0.625rem;
  box-sizing: border-box;
  box-shadow: 0px 0.125rem 0px #007aff;
`;

export function FilterList() {
  const { filterValue } = useDrawerValue();
  return (
    <Filters>
      <FiltersText>
        Хочу...<FilterItem>{filterValue}</FilterItem>
      </FiltersText>
    </Filters>
  );
}
