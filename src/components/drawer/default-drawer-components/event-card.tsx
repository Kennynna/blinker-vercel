import React from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

const Slide = styled.div`
  min-width: 300px;
  min-height: 200px;
  width: 100%;
  height: 300px;
  max-width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

const SlideText = styled.div`
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Text = styled.p`
  margin: 0;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
`;

const Span = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

const HeaderTextBlock = styled.div`
  position: absolute;
  top: 0;
  padding: 16px;
  display: flex;
  gap: 4px;
`;

const HeaderText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.5);
  padding: 4px 12px;
`;

const PriceButton = styled.button`
  width: 100%;
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  background: #fff;
  text-align: center;
  color: #424242;
  font-size: 14px;
  font-weight: 600;
  border: none;
`;

const Sale = styled.p`
  border-radius: 32px;
  background: #00a3ff;
  padding: 4px 12px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
`;

// Функция для форматирования даты, аналогичная логике в Schedule
const formatEventDate = (isoDate, zoneOffset) => {
  const date = parseISO(isoDate);
  const [hours, minutes] = zoneOffset.split(':').map(Number);
  const offsetInMinutes = hours * 60 + (hours < 0 ? -minutes : minutes);
  const localDate = new Date(date.getTime() + offsetInMinutes * 60 * 1000);
  const localYear = localDate.getUTCFullYear();
  const localMonth = localDate.getUTCMonth();
  const localDay = localDate.getUTCDate();
  const localHour = localDate.getUTCHours();
  const localMinute = localDate.getUTCMinutes();
  const dayMonth = format(new Date(localYear, localMonth, localDay), 'd MMMM', { locale: ru });
  const time = `${String(localHour).padStart(2, '0')}:${String(localMinute).padStart(2, '0')}`;
  return `${dayMonth}, ${time}`;
};

export const EventCard = ({ event, openMarkerDrawer }) => {
  const formattedDate = formatEventDate(event.dates[0], event.zone_offset);

  return (
    <Slide onClick={openMarkerDrawer}>
      <Img src={event.listing_picture.uri} alt="img" />
      <HeaderTextBlock>
        {event.discount != 0.0 && <Sale>{event.discount}%</Sale>}
        {event.tags?.map((tag) => <HeaderText>{tag.string_representation}</HeaderText>)}
      </HeaderTextBlock>
      <SlideText>
        <Text>{event.name}</Text>
        <Span>
          {formattedDate} · {event.address}
        </Span>
        <PriceButton>Билеты от 900 ₽</PriceButton>
      </SlideText>
    </Slide>
  );
};
