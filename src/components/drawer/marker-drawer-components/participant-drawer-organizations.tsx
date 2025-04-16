import React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
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
`;

const Left = styled.div`

  overflow: hidden;
  border-radius: 64px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.p`
  overflow: hidden;
  color: #424242;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  margin: 0;
`;

interface MarkerItemContactsProps {
  name?: string;
  toggleDrawer: () => void;
}

export const Participant: React.FC<MarkerItemContactsProps> = ({ name, toggleDrawer }) => {
  return (
    <Block onClick={toggleDrawer}>
      <Left>
        <img
          src="https://www.vokrug.tv/pic/person/b/a/7/6/ba76321120b5afa651f44bae474c4706.jpg"
          alt="organization"
          width={64}
          height={64}
          style={{objectFit: 'cover'}}
        />
      </Left>
      <Right>
        <Name>{name}</Name>
      </Right>
      <ArrowRightV2 color="#424242" />
    </Block>
  );
};
