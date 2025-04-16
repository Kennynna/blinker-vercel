import { useDrawerValue } from '@/shared/store/drawer-value';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';

import { usePlaces } from '@/hooks/places-and-events/usePlaces';

import { PlaceCard } from '../../drawer-info-item';

interface PlaceContentProps {
  isScroll: boolean;
}

export const PlaceContent = ({ isScroll }: PlaceContentProps) => {
  const { selectedPlaceCategory, tagsOfPlace } = useStoreFilters();
  const { cardClick, setItemType } = useDrawerValue();

  function clickPlaceCard(item) {
    console.log(item);
    cardClick(item);
    setItemType('PLACE');
  }

  function clickEventCard(item) {
    console.log(item);
    cardClick(item);
    setItemType('EVENT');
  }

  const queryParams = {
    longitude: 83.0922185298129,
    latitude: 54.85019526962852,
    localityId: '00000000-0000-0000-0000-000000000000',
    tags: tagsOfPlace,
    categoriesOfPlaces: [selectedPlaceCategory],
  };

  const {
    data: placesData,
    isLoading: isPlacesLoading,
    isError: isPlacesError,
    error: placesError,
  } = usePlaces(queryParams);

  return (
    <PlaceContainer isScroll={isScroll}>
      {placesData ? (
        placesData.map((place) => (
          <PlaceCard
            openMarkerDrawer={() => clickPlaceCard(place)}
            openMarkerDrawerEvent={() => clickEventCard(place.events[0])}
            key={`place-${place.id}`}
            place={place}
          />
        ))
      ) : (
        <p>Нет мест</p>
      )}
    </PlaceContainer>
  );
};

const PlaceContainer = styled.div<{ isScroll: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: ${(props) => (props.isScroll ? '116px' : '0')};
`;
