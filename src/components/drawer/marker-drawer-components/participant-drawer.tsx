import * as React from 'react';
import { Group } from '@/shared/icons';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export default function ParticipantList({ children }: any) {
  return (
    <Container>
      {/* Участник */}
      <Participant name="Arianna Name" />
      <ParticipantCommunity name="Фанаты Фентези" />
    </Container>
  );
}

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
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  border-radius: 64px;
  span {
    color: #958a8a;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 40px;
    height: 40px;
  }
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
}

export const Participant: React.FC<MarkerItemContactsProps> = ({ name }) => {
  return (
    <Block>
      <Left>
        <Name>{name}</Name>
      </Left>
      <Right>
        <img
          src="https://www.vokrug.tv/pic/person/b/a/7/6/ba76321120b5afa651f44bae474c4706.jpg"
          alt="organization"
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </Right>
    </Block>
  );
};
export const ParticipantCommunity: React.FC<MarkerItemContactsProps> = ({ name }) => {
  return (
    <Block>
      <Left>
        <Name>{name}</Name>
        <Group color="#958A8A" />
        <span>10,3K</span>
      </Left>
      <Right>
        <img
          src="https://www.vokrug.tv/pic/person/b/a/7/6/ba76321120b5afa651f44bae474c4706.jpg"
          alt="organization"
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </Right>
    </Block>
  );
};

const OrganizationBlock = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: #f9f9f9;
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: center;
  img {
    width: 42px;
    height: 42px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #424242;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #958a8a;
    font-size: 14px;
    font-weight: 600;
  }
`;
export const Organization = () => {
  return (
    <OrganizationBlock>
      <img
        src="https://www.vokrug.tv/pic/person/b/a/7/6/ba76321120b5afa651f44bae474c4706.jpg"
        alt="organization"
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
      <TextBlock>
        <p>MTS Live</p>
        <span>2,3 К событий</span>
      </TextBlock>
    </OrganizationBlock>
  );
};
