import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { Title } from './title';

// Стили
const WrapperButtons = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 4px;
`;

const InfoButton = styled.p`
  padding: 12px 16px;
  border-radius: 32px;
  background: ${({ active }) => (active ? '#F9F9F9' : 'transparent')};
  color: ${({ active }) => (active ? '#424242' : '#958A8A')};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  overflow: auto;
`;

const Slide = styled.div`
  min-width: 300px;
  min-height: 300px;
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

const CommunityInfo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  background: #958a8a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PeopleGoing = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
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

const ImageBlock = styled.div`
  display: flex;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    object-fit: cover;
  }
  img + img {
    margin-left: -2px;
  }
`;

const ShowList = styled.div`
  border-radius: 39px;
  background: #f9f9f9;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
  p {
    color: #424242;
    font-size: 14px;
    font-weight: 600;
  }
`;

// Данные событий
export const eventsData = [
  {
    id: 1,
    title: 'Мероприятие в 2 строки текста длинное',
    date: '13 июля 16:00',
    location: 'ул.Свердлова,9',
    image: 'https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg',
    communityImages: [
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
    ],
    going: 120,
    headers: ['Мероприятие', 'Мероприятие'],
  },
  {
    id: 1,
    title: 'Мероприятие в 2 строки текста длинное',
    date: '13 июля 16:00',
    location: 'ул.Свердлова,9',
    image: 'https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg',
    communityImages: [
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
    ],
    going: 120,
    headers: ['Мероприятие', 'Мероприятие'],
  },
  {
    id: 1,
    title: 'Мероприятие в 2 строки текста длинное',
    date: '13 июля 16:00',
    location: 'ул.Свердлова,9',
    image: 'https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg',
    communityImages: [
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
      'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg',
    ],
    going: 120,
    headers: ['Мероприятие', 'Мероприятие'],
  },
  // Можно добавить другие события здесь
];

// Компонент слайда
const EventSlide = ({ event }) => (
  <Slide>
    <Img src="https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg" alt="img" />
    <HeaderTextBlock>
      <HeaderText>Мероприятие</HeaderText>
      <HeaderText>Мероприятие</HeaderText>
    </HeaderTextBlock>
    <SlideText>
      <ImageBlock>
        <img src={'https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg'} alt="preview" />
        <img src={'https://i.pinimg.com/736x/d7/ca/0f/d7ca0f7a89e38bfab37668f78f974450.jpg'} alt="preview" />

        <CommunityInfo>
          <p>99+</p>
        </CommunityInfo>
        <PeopleGoing>Идут 50 человек</PeopleGoing>
      </ImageBlock>
      <Text>{event.name}</Text>
      <Span>
        {event.dates[0]} · {event.address}
      </Span>
    </SlideText>
  </Slide>
);

// Слайдер событий
export const EventsArticlesSwiper = ({ eventsInPlace }: any) => (
  <Wrapper>{eventsInPlace && eventsInPlace.map((event) => <EventSlide key={event.id} event={event} />)}</Wrapper>
);

// Основной компонент
export const EventsArticles = ({ eventsInPlace }: any) => {
  const [active, setActive] = React.useState(0);
  const buttons = [
    { label: 'Предстоящие 15', type: 'upcoming' },
    { label: 'Прошедшие 34', type: 'past' },
  ];

  return (
    <Box sx={{ marginTop: '32px' }}>
      <Title title="События" id="events" />
      <WrapperButtons>
        {buttons.map((button, index) => (
          <InfoButton key={index} active={active === index} onClick={() => setActive(index)}>
            {button.label}
          </InfoButton>
        ))}
      </WrapperButtons>
      <EventsArticlesSwiper eventsInPlace={eventsInPlace} />
      <ShowList>
        <p>Показать списком</p>
        <ArrowRightV2 color="#424242" />
      </ShowList>
    </Box>
  );
};
