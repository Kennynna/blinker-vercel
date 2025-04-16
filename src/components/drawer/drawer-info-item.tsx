import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';

import { CheckBoxIconBlack, CheckIcon } from '../community/community-add-palce-steps/final-step-new-card-place';

const Slide = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
  border-radius: 16px;
  overflow: hidden;
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
  align-items: center;

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

export const PlaceCard = ({ place, openMarkerDrawer, openMarkerDrawerEvent }) => {
  const formatDateWithOffset = (isoDate, zoneOffset) => {
    // Создаем объект даты из ISO строки
    const date = new Date(isoDate);

    // Парсим offset (например, "+07:00" или "-03:00")
    const [hours, minutes] = zoneOffset.split(':').map(Number);
    const offsetInMinutes = hours * 60 + minutes * (hours < 0 ? -1 : 1);

    // Применяем смещение к UTC времени
    const localDate = new Date(date.getTime() + offsetInMinutes * 60 * 1000);

    const options = {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    };
    return localDate.toLocaleString('ru-RU', options);
  };

  return (
    <Slide onClick={openMarkerDrawer}>
      <Img src={place.listing_picture.uri} alt="img" />
      <HeaderTextBlock>
        {place.tags && place.tags.map((tag) => <HeaderText>{tag.string_representation.split(': ')[1]}</HeaderText>)}
      </HeaderTextBlock>
      <SlideText>
        <Text>{place.name}</Text>
        <Span>{place.address}</Span>
        {place.events &&
          place.events.map((event) => (
            <EventInPlace
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие события
                openMarkerDrawerEvent();
              }}
            >
              <img src={place.listing_picture_uri} alt="" />
              <div>
                <DateAndAddress>
                  {formatDateWithOffset(event.dates, event.zone_offset)} · {event.address}
                </DateAndAddress>
                <EventName>{event.name}</EventName>
              </div>
              <ArrowRightV2 color="#958A8A" />
            </EventInPlace>
          ))}
      </SlideText>
    </Slide>
  );
};

const EventInPlace = styled.div`
  width: 100%;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
    border-radius: 8px;
  }

  div {
    flex: 1;
  }
`;

const DateAndAddress = styled.p`
  opacity: 0.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
`;

const EventName = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
`;

export const PlaceCardCheckbox = ({ isSelected }) => {
  return (
    <Slide>
      <Img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="img" />
      <HeaderTextBlock>
        <HeaderText>Посиделки</HeaderText>
      </HeaderTextBlock>
      <SlideText>
        <ImageBlock>
          <img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="preview" />
          <img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="preview" />

          <CommunityInfo>
            <p>99+</p>
          </CommunityInfo>
          <PeopleGoing>Идут {'10'} человек</PeopleGoing>
        </ImageBlock>
        <Text>Текст какой-то</Text>
        <Span>группа · крым</Span>
      </SlideText>
      <Checkbox
        checked={isSelected}
        icon={<CheckBoxIconBlack />}
        checkedIcon={<CheckIcon />}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      />
    </Slide>
  );
};

export const FakePlaceCard = () => (
  <Slide>
    <Img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="img" />
    <HeaderTextBlock>
      <HeaderText>Посиделки</HeaderText>
      <HeaderText>Посиделки</HeaderText>
    </HeaderTextBlock>
    <SlideText>
      <ImageBlock>
        <img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="preview" />

        <CommunityInfo>
          <p>99+</p>
        </CommunityInfo>
        <PeopleGoing>Идут {'10'} человек</PeopleGoing>
      </ImageBlock>
      <Text>Фейковая карточка</Text>
      <Span>группа · крым</Span>
      <EventInPlace>
        <img src="https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg" alt="" />
        <div>
          <DateAndAddress>Сегодня 17:00 · Свердлова 9, Ялта </DateAndAddress>
          <EventName>Собираемся в настолки</EventName>
        </div>
        <ArrowRightV2 color="#958A8A" />
      </EventInPlace>
    </SlideText>
  </Slide>
);

export const GroupCard = () => (
  <Slide>
    <Img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="img" />
    <HeaderTextBlock>
      <HeaderText>Группа</HeaderText>
    </HeaderTextBlock>
    <SlideText>
      <ImageBlock>
        <img src={'https://hauteliving.com/wp-content/uploads/2013/08/JG-GRILL1.jpg'} alt="preview" />

        <CommunityInfo>
          <p>99+</p>
        </CommunityInfo>
        <PeopleGoing>Идут {'10'} человек</PeopleGoing>
      </ImageBlock>
      <Text>Название</Text>
      <Span>группа · крым</Span>
    </SlideText>
  </Slide>
);
