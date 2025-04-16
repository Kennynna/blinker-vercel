'use client';

import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


import { TopIconsCommunity } from './top-icons-community';


interface PlacementProps {
  isScroll: boolean;
}

const CommunityName = styled.h2<PlacementProps>`
  width: 100%;
  font-weight: 700;
  font-size: ${(props) => (props.isScroll ? '16px' : '1.5rem')};
  color: ${(props) => (props.isScroll ? '#424242' : '#fff')};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 11px;
`;

const ImageBlock = styled.div`
  top: 0;
  width: 100%;
  min-height: 375px;
  z-index: 10;
`;

const ImageContent = styled.div`
  max-height: 375px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  pointer-events: none;
`;



const Image = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.5);
`;

interface ImageSliderProps {
  images: string[];
  isScrolled: boolean;
}

export function HeaderCommunity({ images, isScrolled }: ImageSliderProps) {
  return (
    <ImageBlock>
      <ImageContent>
        {/* Верхняя часть блока  иконки*/}
        <TopIconsCommunity isScrolled={isScrolled} />

        <CommunityInfo isScrolled={isScrolled} />
      </ImageContent>

      <Image src={images[0]} alt={`Изображение ${+1}`} />
    </ImageBlock>
  );
}

const LeaderBlock = styled.div`
  color: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const RightText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const GroupCreater = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FooterGroup = styled.p`
  padding: 2px 8px 4px 8px;
  border-radius: 12px;
  background: rgba(0, 163, 255, 0.3);
  color: #4dbfff;
  font-size: 14px;
  font-weight: 600;
`;

const FooterPlace = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.6;
`;

const CommunityInfo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div id='about'>
      <LeaderBlock>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <RightText>
          <GroupCreater>Создатель группы</GroupCreater>
          <p>Имя моего профиля</p>
        </RightText>
      </LeaderBlock>
      <CommunityName isScroll={isScrolled}>Community, если длинное название, то в 2 строки максимум</CommunityName>
      <Footer>
        <FooterGroup>Группа</FooterGroup>
        <FooterPlace>Крым · Прогулки</FooterPlace>
      </Footer>
    </div>
  );
};
