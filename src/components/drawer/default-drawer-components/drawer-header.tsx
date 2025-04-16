import React from 'react';
import { Place } from '@/constants/markeritems';
import { PullerIcon } from '@/shared/icons';
import { CloseIconV2 } from '@/shared/icons/default-drawer/close-icon';
import { BookMark } from '@/shared/icons/marker-drawer/book-mark';
import { ShareIconV2 } from '@/shared/icons/marker-drawer/share';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';
import { Box } from '@mui/material';



import { useEventById } from '@/hooks/places-and-events/useEvents';
import { usePlaceById } from '@/hooks/places-and-events/usePlaces';
import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';



import { LinksEvents } from '../marker-drawer-components/body/about/links';


const HeaderTitle = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const HeaderContainer = styled.div`
  padding: 0px 1rem 1rem 1rem;
`;

const Span = styled.span`
  color: #b7aeae;
  font-size: 1.125rem;
  font-weight: 700;
`;

const Desc = styled.p`
  color: #424242;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const Container = styled.div`
  background-color: #f9f9f9;
  padding-bottom: 70px;
`;

const ItemHeader = styled.div`
  border-radius: 20px;
  background-color: #fff;
  color: #424242;
  padding-inline: 1rem;

  position: relative;
`;

const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 90%;
`;

const ItemHeaderDate = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const TagsList = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-bottom: 20px;
`;
const ItemTags = styled.p`
  border-radius: 32px;
  background: #f9f9f9;
  padding: 4px 12px;
  font-weight: 600;
  font-size: 14px;
`;

const ItemContainer = styled.div`
  border-radius: 20px 20px 0px 0px;
  background-color: #fff;
  margin-top: 8px;
  padding: 1rem;
`;

const Title = styled.p`
  color: #424242;
  margin-top: 1rem;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FixedContent = styled.div`
  height: 100px;
  position: fixed;
  z-index: 1100;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
  padding: 1rem;
`;

const ScrollList = styled.div`
  overflow-x: scroll;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 39px;
  background: #00a3ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 16px;
  border: none;
`;

interface DrawerHeaderProps {
  eventsAndPlaces?: Place[];
}

export function DrawerHeader({ eventsAndPlaces }: DrawerHeaderProps): React.JSX.Element {
  const { item, resetItem, itemType, setIsListingOpen } = useDrawerValue();

  if (item === null) {
    return <DefaultHeader eventsAndPlaces={eventsAndPlaces} />;
  } else if (itemType === 'EVENT') {
    return <EventHeader item={item} resetItem={resetItem} />;
  } else if (itemType === 'PLACE') {
    return <PlaceHeader item={item} resetItem={resetItem} />;
  } else {
    return <div>Неизвестный тип элемента</div>; // На случай ошибки
  }
}

function DefaultHeader({ eventsAndPlaces }: { eventsAndPlaces?: Place[] }) {
  return (
    <HeaderContainer>
      <Box>
        <PullerIcon />
      </Box>
      <HeaderTitle>
        Все места и мероприятия
        <Span> · 7</Span>
      </HeaderTitle>
      <Desc>Необычный современный интерьер удивляет и заставляет с интересом осматриваться</Desc>
    </HeaderContainer>
  );
}

function EventHeader({ item, resetItem }: { item: any; resetItem: () => void }) {

  const { data: event } = useEventById({
    userLongitude: 83.0922185298129,
    userLatitude: 54.85019526962852,
    eventId: item.id,
  });

  if (!event) {
    return <div>Загрузка...</div>; // Плейсхолдер на время загрузки
  }

  return (
    <Container>
      <ItemHeader>
        <Box>
          <PullerIcon />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderText>{event.name}</HeaderText>
          <CloseIconV2 click={resetItem} />
        </Box>
        <ItemHeaderDate>
          {event.dates} · {event.address}
        </ItemHeaderDate>
        {event.tags && (
          <TagsList>
            {event.tags.map((tag) => (
              <ItemTags key={tag.definition_id}>{tag.string_representation}</ItemTags>
            ))}
          </TagsList>
        )}
      </ItemHeader>
      <ItemContainer>
        <LinksEvents />
        <Title>О событии</Title>
        {/* Дополнительные детали события */}
      </ItemContainer>
      <FixedContent>
        <ScrollList>
          <Button>Купить билет</Button>
          <ShareIconV2 />
          <BookMark />
        </ScrollList>
      </FixedContent>
    </Container>
  );
}

function PlaceHeader({ item, resetItem }: { item: any; resetItem: () => void }) {
  const { data: place } = usePlaceById({
    placeId: item.id,
    userLongitude: 83.0922185298129,
    userLatitude: 54.85019526962852,
  });

  if (!place) {
    return <div>Загрузка...</div>; // Плейсхолдер на время загрузки
  }

  return (
    <Container>
      <ItemHeader>
        <Box>
          <PullerIcon />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderText>{place.name}</HeaderText>
          <CloseIconV2 click={resetItem} />
        </Box>
        <ItemHeaderDate>{place.address}</ItemHeaderDate>
        {place.tags && (
          <TagsList>
            {place.tags.map((tag) => (
              <ItemTags key={tag.definition_id}>{tag.string_representation}</ItemTags>
            ))}
          </TagsList>
        )}
      </ItemHeader>
      <ItemContainer>
        <Title>О месте</Title>
        {/* Дополнительные детали места */}
      </ItemContainer>
      <FixedContent>
        <ScrollList>
          <Button>Посетить</Button>
          <ShareIconV2 />
          <BookMark />
        </ScrollList>
      </FixedContent>
    </Container>
  );
}
