import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';

const Block = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  width: 100%;
  margin-top: 12px;
`;

export const Title = styled.p`
  color: #424242;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const Desc = styled.p`
  font-size: 14px;
  color: #424242;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  margin-top: 4px;
`;
const ImageBlock = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    object-fit: cover;
    position: relative; /* Включаем позиционирование для использования z-index */
    z-index: 3;
  }

  img + img {
    margin-left: -2px; /* Сдвигаем второе изображение влево на 2 пикселя для перекрытия */
    z-index: 2; /* Устанавливаем z-index, чтобы второе изображение было сверху */
  }

  img + img + div {
    margin-left: -3px; /* Сдвигаем второе изображение влево на 2 пикселя для перекрытия */
    z-index: 1; /* Устанавливаем z-index, чтобы второе изображение было сверху */
  }
`;

const CommunityInfo = styled.div`
  width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  background: #958a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
`;

const TextBlock = styled.div``;

interface MapItemDetailsProps {
  title?: string;
  description?: string;
  event?: any;
  icon?: string;
  socialNetwork?: string;
  children?: ReactJSXElement;
}

export const PlaceDetails: React.FC<MapItemDetailsProps> = ({ title, description, children }) => {
  return (
    <Block>
      <TextBlock>
        <Title>{title}</Title>
        {description && <Desc>{description}</Desc>}
      </TextBlock>
      {children}
    </Block>
  );
};

interface PlaceDetailCommunityProps {
  title: string;
  description?: string;
  images?: string[];
}

export const PlaceDetailCommunity: React.FC<PlaceDetailCommunityProps> = ({ title, description }) => {
  return (
    <Block>
      <TextBlock>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TextBlock>

      <ImageBlock>
        <img src={'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg'} alt="preview" />
        <img src={'https://sun9-27.userapi.com/c10377/u87813154/d_a3974f55.jpg'} alt="preview" />
        <CommunityInfo>
          <p>99+</p>
        </CommunityInfo>
      </ImageBlock>
    </Block>
  );
};

export const EventDate: React.FC<MapItemDetailsProps & { dates: string[]; zone_offset: string }> = ({
  dates,
  zone_offset,
  children,
}) => {
  const eventDate = new Date(dates[0]); // Парсим UTC дату
  const zonedDate = new Date(eventDate.toLocaleString('en-US', { timeZone: 'UTC' }) + zone_offset); // Применяем смещение вручную

  const today = new Date();
  const isToday = zonedDate.toDateString() === today.toDateString();

  const timeString = zonedDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const titleText = isToday
    ? `сегодня ${timeString}`
    : zonedDate.toLocaleString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

  const dayOfWeek = zonedDate.toLocaleString('ru-RU', { weekday: 'long' });

  return (
    <Block>
      <TextBlock>
        <Title>{titleText}</Title>
        <Desc>{dayOfWeek}</Desc>
      </TextBlock>
      {children}
    </Block>
  );
};

export const EventDetails: React.FC<MapItemDetailsProps> = ({ title, description, children }) => {
  return (
    <Block>
      <TextBlock>
        <Title>{title}</Title>
        {description && <Desc>{description}</Desc>}
      </TextBlock>
      {children}
    </Block>
  );
};
