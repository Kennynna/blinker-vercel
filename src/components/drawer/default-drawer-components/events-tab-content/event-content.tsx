import { useDrawerValue } from '@/shared/store/drawer-value';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';

import { useEvents } from '@/hooks/places-and-events/useEvents';

import { EventCard } from '../event-card';

export function EventContent() {
  const { selectedEventCategory, tagsOfEvent } = useStoreFilters();
  const { cardClick, setItemType } = useDrawerValue();

  function clickEventCard(item) {
    console.log(item);
    cardClick(item);
    setItemType('EVENT');
  }

  const queryParams = {
    longitude: 83.0922185298129,
    latitude: 54.85019526962852,
    localityId: '00000000-0000-0000-0000-000000000000',
    tags: tagsOfEvent,
    categoriesOfEvents: [selectedEventCategory], // здесь можно передать массив фильтров
  };

  const {
    data: eventsData,
    isLoading: isEventsLoading,
    isError: isEventsError,
    error: eventsError,
  } = useEvents(queryParams);

  console.log(eventsData);

  return (
    <Container>
      {/*<img src="img/place-card.png" alt="" style={{ width: '100%' }} />*/}

      {eventsData && eventsData.length > 0 ? (
        <div>
          {/*<EventsDate>1 Апреля · Сегодня</EventsDate>*/}
          <EventWrapper>
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} openMarkerDrawer={() => clickEventCard(event)} />
            ))}
          </EventWrapper>
          {/* {eventsData&& eventsData.length > 2 && <LeftDrawerEventList eventsData={eventsData} />} */}
        </div>
      ) : (
        <p>Нет событий</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const EventsDate = styled.p`
  color: #424242;
  font-size: 20px;
  font-weight: 700;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;
