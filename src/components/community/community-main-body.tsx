'use client';

import Image from 'next/image';
import styled from '@emotion/styled';

import { FakePlaceCard, GroupCard } from '../drawer/drawer-info-item';

const Block = styled.div`
  width: 100%;
  margin-top: 24px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
    height: 100%;
  }
`;

export const CommunityMainBody = () => {
  return (
    <Block>
      <Image src="/img/community-card.png" width={360} height={200} alt="" objectFit="cover" />
      <FakePlaceCard />
      <GroupCard />
    </Block>
  );
};
