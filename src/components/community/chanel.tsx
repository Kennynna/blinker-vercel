import React from 'react';
import { ArrowRight } from '@/shared/icons/marker-drawer/arrow-right';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

import { Title } from '../drawer/marker-drawer-components/body/about/title';

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

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  justify-content: space-between;
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

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

// Канал
export const Chanel = () => {
  return (
    <div>
      <Title title="Канал" />
      <ChanelItem />
    </div>
  );
};

const ChanelItem = () => {
  return (
    <Container>
      <EventWrapper>
        <EventImage>
          <Img src={'https://i.ytimg.com/vi/b9VxdYxLnCo/hqdefault.jpg'} alt="Event image" />
        </EventImage>
        <EventDesc>
          <Name>Мероприятие в 2 строки сокращается</Name>
          <Paragraf>98 Участников</Paragraf>
        </EventDesc>

        <ArrowRightV2 color='#424242'/>
      </EventWrapper>
    </Container>
  );
};
