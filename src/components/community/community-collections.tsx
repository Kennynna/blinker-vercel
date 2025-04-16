import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';

import { Title } from '../drawer/marker-drawer-components/body/about/title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const CommunityCollections = () => {
  return (
    <div>
      <Title title="Подборки" id="collections" />

      {/* Подборки */}

      <Wrapper>
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </Wrapper>
    </div>
  );
};

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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
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
`;
export const CollectionItem = () => {
  return (
    <Container>
      <EventWrapper>
        <EventImage>
          <Img src={'https://i.ytimg.com/vi/b9VxdYxLnCo/hqdefault.jpg'} alt="Event image" />
        </EventImage>
        <EventDesc>
          <Name>Кастомная</Name>
          <Paragraf>Необычный современный интерьер удивляет и заставляет с интересом осматриваться дивляет и заставляет с интересом осматриваться</Paragraf>
        </EventDesc>

        <ArrowRightV2 color="#424242" />
      </EventWrapper>
    </Container>
  );
};
