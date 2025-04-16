'use client';

import React from 'react';
import Image from 'next/image';
import { PlusIcon } from '@/shared/icons/community/plus-icon';
import { SearchIcon } from '@/shared/icons/community/search-icon';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import { CreateCommunityMainScreen } from '@/components/community-create/main-screen';

import { LeftDrawerChildV2 } from './left-drawer-child';

interface TabProps {
  activeTab: 'PLACE' | 'EVENT';
  handleClickTab: (tab: 'PLACE' | 'EVENT') => void;
}

const TabText = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ active }: { active?: boolean }) => (active ? '#424242' : '#B7AEAE')};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceOrEventTab = ({ activeTab, handleClickTab }: TabProps) => {
  return (
    <Block>
      <Image width={40} height={40} src={'/img/logo_blue.svg'} alt={'logo'} />
      <TabContainer>
        <TabText active={activeTab === 'EVENT'} onClick={() => handleClickTab('EVENT')}>
          События
        </TabText>
        <TabText active={activeTab === 'PLACE'} onClick={() => handleClickTab('PLACE')}>
          Места
        </TabText>
      </TabContainer>
      <SearchIcon color="#00A3FF" />
    </Block>
  );
};

export const PlaceOrEventTabWithoutIcons = ({ activeTab, handleClickTab }: TabProps) => {
  return (
    <Block>
      <TabContainer>
        <TabText active={activeTab === 'PLACE'} onClick={() => handleClickTab('PLACE')}>
          Места
        </TabText>
        <TabText active={activeTab === 'EVENT'} onClick={() => handleClickTab('EVENT')}>
          События
        </TabText>
      </TabContainer>
    </Block>
  );
};

export const CommunityOrEventTab = () => {
  const { activeTab, setActiveTab } = useStoreFilters();

  const handleClickTab = (tab: 'COMMUNITY' | 'EVENT') => {
    setActiveTab(tab);
  };
  return (
    <Block>
      <LeftDrawerChildV2
        drawerOpenComponent={<PlusIcon color="#00A3FF" />}
        drawerContent={<CreateCommunityMainScreen />}
      />

      <TabContainer>
        <TabText active={activeTab === 'COMMUNITY'} onClick={() => handleClickTab('COMMUNITY')}>
          Сообщества
        </TabText>
        <TabText active={activeTab === 'EVENT'} onClick={() => handleClickTab('EVENT')}>
          События
        </TabText>
      </TabContainer>
      <SearchIcon color="#00A3FF" />
    </Block>
  );
};
