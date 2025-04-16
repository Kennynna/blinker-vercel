'use client';

import { useEffect } from 'react';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';
import { Box } from '@mui/material';



import { useTagsByCategoryEventId, useTagsByCategoryPlaceId } from '@/hooks/tags/use-category-tags';



import { FilterButton, FlexBoxItems } from './styled-filter';


const Title = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: start;
  color: #424242;
  font-size: 1.25rem;
  font-weight: 700;
`;

interface Props {
  activeTab: 'PLACE' | 'EVENT';
  selectedPlaceCategory: string[];
  tagsOfPlace: any; // желательно заменить any на Tag[]
  setTagsOfPlace: (tag: any) => void;
  selectedEventCategory: string[];
  tagsOfEvent: any; // желательно заменить any на Tag[]
  setTagsOfEvent: (tag: any) => void;
  insideFiltersForPlace: CategoryFilters[] | undefined;
  insideFiltersForEvents: CategoryFilters[] | undefined;
}

export function DinamicFilters({
  insideFiltersForPlace,
  insideFiltersForEvents,
  activeTab,
  selectedPlaceCategory,
  tagsOfPlace,
  setTagsOfPlace,
  selectedEventCategory,
  tagsOfEvent,
  setTagsOfEvent,
}: Props) {
  console.log('selectedEventCategory: ' + selectedEventCategory);
  console.log(activeTab);
  const {
    data: placeTags,
  } = useTagsByCategoryPlaceId({
    placeCategoryId: selectedPlaceCategory,
  });
  const { data: eventTags } = useTagsByCategoryEventId({
    eventsCategories: selectedEventCategory,
  });

  // Получаем экшены для удаления недоступных тегов из стора
  const { removeUnavailableTagsOfPlace, removeUnavailableTagsOfEvent } = useStoreFilters();

  // При обновлении данных для мест (placeTags) фильтруем выбранные теги,
  // удаляя те, которых нет в новых данных с бэкенда.
  useEffect(() => {
    if (placeTags && placeTags.grouped_available_tag_values) {
      const validTagIds = placeTags.grouped_available_tag_values.flatMap((group: any) =>
        group.values.map((value: any) => value.value_id)
      );
      removeUnavailableTagsOfPlace(validTagIds);
    }
  }, [placeTags, removeUnavailableTagsOfPlace, selectedPlaceCategory]);

  // Аналогичная логика для событий (eventTags)
  useEffect(() => {
    if (eventTags && eventTags.grouped_available_tag_values) {
      const validTagIds = eventTags.grouped_available_tag_values.flatMap((group: any) =>
        group.values.map((value: any) => value.value_id)
      );
      removeUnavailableTagsOfEvent(validTagIds);
    }
  }, [eventTags, removeUnavailableTagsOfEvent, selectedEventCategory]);

  // Функция для тоггла тегов для мест
  const toggleTags = (value: any) => {
    setTagsOfPlace(value);
  };

  return (
    <Box sx={{ color: 'black' }}>
      {activeTab === 'PLACE' && selectedPlaceCategory.length > 0 && placeTags
        ? placeTags.grouped_available_tag_values.map((categoryData: any) => {
            // Фильтруем дубликаты по string_representation для каждой группы
            const uniqueValues = categoryData.values.filter(
              (value: any, index: number, self: any[]) =>
                index === self.findIndex((t) => t.string_representation === value.string_representation)
            );
            return (
              <Box key={categoryData.category.id}>
                <Title>{categoryData.category.name}</Title>
                <FlexBoxItems>
                  {uniqueValues.map((value: any) => (
                    <FilterButton
                      key={value.value_id}
                      onClick={() => toggleTags(value)}
                      isSelected={tagsOfPlace.some(
                        (tag: any) => tag.string_representation === value.string_representation
                      )}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <span>{value.string_representation.replace(/^Кухня:\s*/, '')}</span>
                      </Box>
                    </FilterButton>
                  ))}
                </FlexBoxItems>
                {insideFiltersForPlace && insideFiltersForPlace.length > 0 && (
                  <>
                    <Title>Что внутри</Title>
                    <FlexBoxItems>
                      {insideFiltersForPlace.map((item) => (
                        <FilterButton key={item.id}>{item.name}</FilterButton>
                      ))}
                    </FlexBoxItems>
                  </>
                )}
              </Box>
            );
          })
        : activeTab === 'EVENT' && selectedEventCategory.length > 0 && eventTags
          ? eventTags.grouped_available_tag_values.map((categoryData: any) => {
              const uniqueValues = categoryData.values.filter(
                (value: any, index: number, self: any[]) =>
                  index === self.findIndex((t) => t.string_representation === value.string_representation)
              );
              return (
                <Box key={categoryData.category.id}>
                  <Title>{categoryData.category.name}</Title>
                  <FlexBoxItems>
                    {uniqueValues.map((value: any) => (
                      <FilterButton
                        key={value.string_representation}
                        onClick={() => setTagsOfEvent(value)}
                        isSelected={tagsOfEvent.some(
                          (tag: any) => tag.string_representation === value.string_representation
                        )}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <span>{value.string_representation.replace(/^Кухня:\s*/, '')}</span>
                        </Box>
                      </FilterButton>
                    ))}
                  </FlexBoxItems>
                </Box>
              );
            })
          : null}
      {activeTab === 'EVENT' && insideFiltersForEvents && insideFiltersForEvents.length > 0 && (
        <>
          <Title>Где проходит</Title>
          <FlexBoxItems>
            {insideFiltersForEvents?.map((item) => <FilterButton key={item.id}>{item.name}</FilterButton>)}
          </FlexBoxItems>
        </>
      )}
    </Box>
  );
}
