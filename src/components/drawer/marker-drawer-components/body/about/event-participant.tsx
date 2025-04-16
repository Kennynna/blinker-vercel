import React from 'react';
import styled from '@emotion/styled';

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const People = styled.p`
  margin: 0;
  color: #424242;
  margin-left: 5px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ImageBlock = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
`;

const Image1 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 24px;
  z-index: 1;
  position: absolute;
  left: 0;
`;
const Image2 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 24px;
  z-index: 2;
  position: absolute;
  left: 15px;
`;

const Quantity = styled.div`
  position: absolute;
  left: 30px;
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  background: rgba(0, 0, 0, 1);
  z-index: 3;
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
`;

const Date = styled.p`
  color: #424242;
  margin: 0;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const EventParticipantAndDate = ({ quantity, date }: { date: string; quantity: number }) => {
  return (
    <Block>
      <Left>
        <ImageBlock>
          <Image1 src="https://i.pinimg.com/736x/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg" alt="Participant 1" />
          <Image2 src="https://i.pinimg.com/736x/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg" alt="Participant 2" />
          <Quantity>+2</Quantity>
        </ImageBlock>
        <People>Идут {quantity} человек</People>
      </Left>
      <Date>{date}</Date>
    </Block>
  );
};
