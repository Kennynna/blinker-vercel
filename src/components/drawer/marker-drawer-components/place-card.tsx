import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

import { EventParticipantAndDate } from './body/about/event-participant';
import LeftDrawer from './events-in-place';
import { DrawerPlacesItems } from './marker-drawer-places-items';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 16px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.875rem;
`;

const Paragraf = styled.p`
  margin: 0;
  color: #958a8a;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Discount = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.875rem;
  background-color: #00a3ff;
  border-radius: 2.4375rem;
  margin: 0;
  padding: 0.25rem 0.6875rem;
  color: #fff;
  font-family: Inter;
  font-weight: 800;
`;

const Name = styled.p`
  color: #424242;
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PlaceFooter = styled.div`
  background-color: #f9f9f9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const EventWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
`;

const EventImage = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  flex-shrink: 0;
`;

const EventDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const EventPrice = styled.span`
  color: #424242;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-left: 0.25rem;
`;

interface DrawerInfoItemProps {
  imageUrl?: string;
}

export function MarkerDrawerPlaceCard({
  imageUrl = 'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg',
}: DrawerInfoItemProps): React.JSX.Element {
  return (
    <>
      <Container>
        {/* Колличество участников */}
        <EventParticipantAndDate quantity={2} date="17 ноя 19:00" />
        <PlaceFooter>
          <DefaultDrawerEvent imgUrl={imageUrl} />
          <EventButton>Билеты от 900 ₽</EventButton>
        </PlaceFooter>
      </Container>
      <LeftDrawer>
        <DrawerPlacesItems />
      </LeftDrawer>
    </>
  );
}

const EventButton = styled.button`
  color: #fff;
  padding: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 2.4375rem;
  background: #00a3ff;
  width: 100%;
  text-align: center;
  border: none;
  box-shadow: 0px 0.5rem 1.5625rem 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
`;

export function DefaultDrawerEvent({ imgUrl }: { imgUrl: string }) {
  return (
    <EventWrapper>
      <EventImage>
        <Img src={imgUrl} alt="Event image" />
      </EventImage>
      <EventDesc>
        <Paragraf>
          Концерт
          <EventPrice>от 900 ₽</EventPrice>
        </Paragraf>
        <Name>Мероприятие в 2 строки сокращается</Name>
      </EventDesc>
    </EventWrapper>
  );
}
