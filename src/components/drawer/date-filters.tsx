import React, { useState } from 'react';
import { CloseIcon } from '@/shared/icons/default-drawer/close-icon';
import { useStoreFilters } from '@/shared/store/filters';
import { Box, Button, styled, Typography } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { DateTimePicker } from '@mui/x-date-pickers';

import { useEventsFilters, useFilters, usePlacesFilters } from '@/hooks/filters/use-all-filters';

import { FixedButton } from '../community/community-add-event/shared/fixed-button';

interface dateFiltersProps {
  onClose: () => void;
}

// Компонент DateInputs
export function DateFilters({ onClose }: dateFiltersProps) {
  const dateTime = ['сегодня', 'завтра', 'на выходных'];
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Container>
      <GlobalStyles
        styles={{
          '& .mui-aaarfi-MuiInputBase-root-MuiOutlinedInput-root': {
            color: 'black !important',
          },
        }}
      />
      <Header>
        <HeaderText>Дата</HeaderText>
        <CloseIcon click={onClose} />
      </Header>
      <FilterWrapper sx={{ mt: 4 }}>
        {dateTime.map((item) => (
          <FilterItem key={item}>{item}</FilterItem>
        ))}
      </FilterWrapper>
      <DateTimePicker sx={{ color: 'black' }} />
      <FixedButton onClick={onClose}>Применить</FixedButton>
    </Container>
  );
}

const FilterButton = styled(Button)<{ isSelected: boolean }>`
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

// Контейнер для кнопок, как в PlacesFilters
const FlexBoxItems = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface TypeFiltersProps {
  onClose: () => void;
}
const Title = styled(Typography)`
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: start;
  color: #424242;
  font-size: 1.25rem;
  font-weight: 700;
`;
export function TypeFilters({ onClose }: TypeFiltersProps) {
  const { data: placesFilters } = usePlacesFilters();
  const { data: eventsFilters } = useEventsFilters();
  const {
    selectedPlaceCategory,
    setSelectedPlaceCategory,
    selectedEventCategory,
    setSelectedEventCategory,
    activeTab,
    togglePlaceCategory,
    toggleEventCategory,
  } = useStoreFilters();

  // Фильтрация данных для получения категорий мест и событий
  const placeCategories = placesFilters ? placesFilters : [];
  const eventCategories = eventsFilters ? eventsFilters : [];

  // Определяем, какие категории и функции использовать в зависимости от activeTab
  const isPlacesTab = activeTab === 'PLACE';
  const categories = isPlacesTab ? placeCategories : eventCategories;
  const selectedCategories = isPlacesTab ? selectedPlaceCategory : selectedEventCategory;
  const toggleCategory = isPlacesTab ? setSelectedPlaceCategory : setSelectedEventCategory;

  // Функция переключения категории
  const handleToggleCategory = (idCategory: string) => {
    toggleCategory(idCategory);
  };

  return (
    <Box>
      <Title>{isPlacesTab ? 'Тип места' : 'Тип события'}</Title>
      <FilterWrapper sx={{ mt: 4 }}>
        <FlexBoxItems>
          {categories?.map((item) => (
            <FilterButton
              key={item.id}
              isSelected={selectedCategories.includes(item.id)}
              onClick={() => (isPlacesTab ? togglePlaceCategory(item.id) : toggleEventCategory(item.id))}
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
      </FilterWrapper>
      <FixedButton onClick={onClose}>Применить</FixedButton>
    </Box>
  );
}

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Существующие стили компонентов
const Container = styled(Box)`
  position: relative;
  width: 100%;
`;
const HeaderText = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FilterWrapper = styled(Box)`
  margin-top: 16px;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FilterItem = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  padding: 0.75rem 1rem;
  color: #000000;
  border-radius: 39px;
  box-sizing: border-box;
  margin: 0;
  background-color: #f9f9f9;
`;
