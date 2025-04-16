import React from 'react';
import { Group } from '@/shared/icons/group';
import styled from '@emotion/styled';
import { CreateCardIcon } from '@/shared/icons/community/create-card-icon';

const CardWrapper = styled.div`
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;

const CardUpper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
`;
const ImgBlock = styled.div`
  width: 84px;
  height: 84px;
  position: relative;
  border-radius: 12px;
`;
const ImgBig = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
const ImgSmall = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 12px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;
const RightLow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextGray = styled.p`
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;
const TextGrayLow = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #958a8a;
  text-overflow: ellipsis;
`;

const TextBlack = styled.p`
  color: #424242;
  font-size: 16px;
  font-weight: 700;
`;

const LowTextCommunity = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #958a8a;
  font-size: 14px;
  font-weight: 600;
`;

const ImgAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 50px;
  height: 25px;
  border-radius: 39px;
  background: #2c94ea;
  color: #fff;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
`;
export const ThirdStepPlaceCard = ({ existingCard }: { existingCard?: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <CardWrapper>
      <CardUpper onClick={existingCard}>
        <ImgBlock>
          <ImgBig
            src="https://avatars.mds.yandex.net/i?id=3e25928ab5fbb584e3409ce095aeb56d_sr-5238257-images-thumbs&n=13"
            alt=""
          />
          <ImgAbsolute>-10%</ImgAbsolute>
        </ImgBlock>
        <Right>
          <TextGray>Ресторан</TextGray>
          <TextBlack>Гуси</TextBlack>
          <TextGray>ул. Северная 5, Город</TextGray>
        </Right>
      </CardUpper>
      {/* Нижний */}
      <CardUpper>
        <ImgSmall
          src="https://avatars.mds.yandex.net/i?id=3e25928ab5fbb584e3409ce095aeb56d_sr-5238257-images-thumbs&n=13"
          alt=""
        />

        <RightLow>
          <TextGrayLow>Название сообщества, создвашего краточку</TextGrayLow>
          <LowTextCommunity>
            <Group color="#958a8a" width="16px" height="16px" /> 1,1К Участников
          </LowTextCommunity>
        </RightLow>
      </CardUpper>
    </CardWrapper>
  );
};

