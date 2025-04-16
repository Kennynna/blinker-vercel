import { ArrowLeftIcon } from '@/shared/icons/community/arrow-left-icon';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';

import {
  useEventsCategoriesFromPlacesOnes,
  useEventsCategoriesFromPlacesOnesWithSelectedCategories,
  useEventsFilters,
  useFilters,
  usePlacesCategoriesFromEventsOnes,
  usePlacesCategoriesFromEventsOnesWithSelectedCategories,
  usePlacesFilters,
} from '@/hooks/filters/use-all-filters';
import { usePlaces } from '@/hooks/places-and-events/usePlaces';
import { FixedButton } from '@/components/community/community-add-event/shared/fixed-button';

import { BtnDiv, FilterBtnApplying } from '.';
import { DinamicFilters } from './dinamic-filter';
import { EventFilters } from './event-filter';
import { PlacesFilters } from './places-filters';

const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  bottom: 0;
  z-index: 12;
  overflow: auto;
`;
export const Title = styled.p`
  text-align: center;
  color: #424242;
  font-size: 1.25rem;
  font-weight: 700;
  flex: 1;
`;

const FilterBlock = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 1.25rem;
  position: relative;
  padding: 0.75rem 1rem;
  margin-bottom: 50px;
`;

const FilterItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
  gap: 0.625rem;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export function FilterDrawerItems({ closeDrawer }: any) {
  const {
    activeTab,
    selectedPlaceCategory,
    togglePlaceCategory, // Используем новый метод
    toggleEventCategory, // Используем новый метод
    selectedEventCategory,
    tagsOfPlace,
    setTagsOfPlace,
    tagsOfEvent,
    setTagsOfEvent,
  } = useStoreFilters();

  const { data: eventsFilters } = useEventsFilters();
  const { data: placesFilters } = usePlacesFilters();

  const { data: placesCategoriesFromEvents } = useEventsCategoriesFromPlacesOnesWithSelectedCategories({
    localityId: 0,
    categories: selectedPlaceCategory,
  });
  const { data: eventsCategoriesFromEvents } = usePlacesCategoriesFromEventsOnesWithSelectedCategories({
    localityId: 0,
    categories: selectedEventCategory,
  });

  function applyFilters() {
    closeDrawer();
  }

  return (
    <FilterContainer>
      <FilterBlock>
        <FilterHeader>
          <ArrowLeftIcon color="#00A3FF" closeDrawer={closeDrawer} />
          <Title>Фильтры</Title>
        </FilterHeader>

        <FilterItem>
          {activeTab === 'PLACE' ? (
            <PlacesFilters
              reqFilters={placesFilters}
              selectedPlaceCategory={selectedPlaceCategory}
              togglePlaceCategory={togglePlaceCategory} // Передаём togglePlaceCategory
            />
          ) : (
            <EventFilters
              reqFilters={eventsFilters}
              selectedEventCategory={selectedEventCategory}
              toggleEventCategory={toggleEventCategory} // Передаём toggleEventCategory
            />
          )}

          {/* Динамические фильтры */}
          <DinamicFilters
            insideFiltersForPlace={eventsCategoriesFromEvents}
            insideFiltersForEvents={placesCategoriesFromEvents}
            activeTab={activeTab}
            selectedPlaceCategory={selectedPlaceCategory}
            tagsOfPlace={tagsOfPlace}
            setTagsOfPlace={setTagsOfPlace}
            selectedEventCategory={selectedEventCategory}
            setTagsOfEvent={setTagsOfEvent}
            tagsOfEvent={tagsOfEvent}
          />
        </FilterItem>

        <BtnDiv>
          <FixedButton onClick={applyFilters}>Применить</FixedButton>
        </BtnDiv>
      </FilterBlock>
    </FilterContainer>
  );
}
