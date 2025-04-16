import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';





export const FilterButton = styled(Button)<{ isSelected: boolean }>`
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
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

export const Title = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: start;
  color: #424242;
  font-size: 1.25rem;
  font-weight: 700;
`;

interface PlacesFiltersProps {
  reqFilters: CategoryFilters[] | undefined;
  selectedPlaceCategory: string[];
  togglePlaceCategory: (idCategory: string) => void; // Изменяем тип пропса
}

export function PlacesFilters({ reqFilters, selectedPlaceCategory, togglePlaceCategory }: PlacesFiltersProps) {
  return (
    <Box>
      <Title>Тип Места</Title>
      <FlexBoxItems>
        {reqFilters?.map((item) => (
          <FilterButton
            key={item.id}
            isSelected={selectedPlaceCategory?.includes(item.id)}
            onClick={() => togglePlaceCategory(item.id)} // Используем togglePlaceCategory
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconWrapper>
                <img src={item.icon.uri} alt="icon" width={24} height={24} />
              </IconWrapper>
              <span>{item.name}</span>
            </Box>
          </FilterButton>
        ))}
      </FlexBoxItems>
    </Box>
  );
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
