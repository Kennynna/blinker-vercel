import React from 'react';
import { CheckIcon } from '@/shared/icons/community/check-icon';
import { EyeCloseIcon } from '@/shared/icons/community/close-eye-icon';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import styled from '@emotion/styled';

import { EventParticipantAndDate } from '../drawer/marker-drawer-components/body/about/event-participant';
import { Title } from '../drawer/marker-drawer-components/body/about/title';
import { AddPlaceDrawer } from './shared/add-place-drawer';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
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

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EventButtonGo = styled.button`
  font-size: 14px;
  color: #424242;
  font-weight: 600;
  padding: 16px;
  border-radius: 2.4375rem;
  background: #fff;
  width: 100%;
  text-align: center;
  border: none;
  box-shadow: 0px 0.5rem 1.5625rem 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 3px;
  justify-content: center;
`;
const EventButton = styled.button`
  flex: 1;
  font-size: 14px;
  color: #424242;
  font-weight: 600;
  padding: 16px;
  border-radius: 2.4375rem;
  background: #fff;
  width: 100%;
  text-align: center;
  border: none;
  box-shadow: 0px 0.5rem 1.5625rem 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1px;
  justify-content: center;
`;
export const NearEvents = () => {
  return (
    <div>
      <Title title="Ближайшее событие" id="features" />

      <Container>
        {/* Колличество участников */}
        <EventParticipantAndDate quantity={2} date="17 ноя 19:00" />
        <PlaceFooter>
          <EventWrapper>
            <EventImage>
              <Img src={'https://i.ytimg.com/vi/b9VxdYxLnCo/hqdefault.jpg'} alt="Event image" />
            </EventImage>
            <EventDesc>
              <Paragraf>Свердлова 9, Ялта</Paragraf>
              <Name>Мероприятие в 2 строки сокращается</Name>
            </EventDesc>
          </EventWrapper>

          <ButtonGroup>
            <EventButtonGo>
              <CheckIcon color="#424242" />
              Вы идёте
            </EventButtonGo>
            <EventButton>
              <EyeCloseIcon />
            </EventButton>
          </ButtonGroup>

          <AddPlaceDrawer
            children={
              <EventButtonGo>
                <PlusIcon color="#424242" />
                Добавить
              </EventButtonGo>
            }
          />
        </PlaceFooter>
      </Container>
    </div>
  );
};
