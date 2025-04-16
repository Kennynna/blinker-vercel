import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Title = styled.p`
  text-align: start;
  color: #424242;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const FilterButton = styled(Button)<{ isSelected?: boolean }>`
  gap: 0.5rem;

  padding: 0.75rem 1rem;
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  border-radius: 1rem;
  box-sizing: border-box;
  margin: 0;
  background-color: ${(props) => (props.isSelected ? '#007aff' : '#F9F9F9')};
  font-size: 0.875rem;
  border-radius: 2.4375rem;
  &:hover {
    background-color: ${(props) => (props.isSelected ? '#0056b3' : '#e6f2ff')};
  }
`;

export const FlexBoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const BtnDiv = styled.div`
  padding: 0.75rem 0px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: #fff;
`;

export const FilterBtnApplying = styled(Button)`
  width: 100%;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  padding: 1rem 0px;
  border-radius: 1rem;
  background-color: #00A3FF;
  &:disabled {
    background-color: #b7aeae;
  }

`;
