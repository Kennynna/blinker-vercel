import React, { useEffect, useState } from 'react';
import { CalendarIcon } from '@/shared/icons/filters/calendar';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';

import { Title } from '@/components/drawer/marker-drawer-components/body/about/title';

import CommunityLeftDrawer from '../shared/community-left-drawer';

const Wrapper = styled.div`
  padding: 32px 16px;
`;

export const AddListActions = () => {
  const { communityDrawer, openCommunityDrawer, closeCommunityDrawer, setCurrentPlace } = useStepStore();

  const [whatAdd, setWhatAdd] = useState<'PLACE' | 'EVENT' | 'COLLECTION' | ''>('');

  function handleAddEvent(action: 'EVENT') {
    setCurrentPlace(action);
    setWhatAdd(action);
    openCommunityDrawer();
  }

  function handleAddCollection(action: 'COLLECTION') {
    setCurrentPlace(action);
    setWhatAdd(action);
    openCommunityDrawer();
  }
  function handleAddPlace(action: 'PLACE') {
    setWhatAdd(action);
    openCommunityDrawer();
  }

  return (
    <>
      {/* КАКОЙ СЦЕНАРИЙ ОТКРЫТЬ В ДРАВЕРЕ */}
      <Wrapper>
        <Title title="Добавить" />
        <ListCard title="Пост" />
        <ListCard title="Статью" />
        <ListCard title="Место" whatOpen={() => handleAddPlace('PLACE')} />
        <ListCard title="Событие" whatOpen={() => handleAddEvent('EVENT')} />
        <ListCard title="Подборку" whatOpen={() => handleAddCollection('COLLECTION')} />
      </Wrapper>

      {/* Рендерим ваш Drawer. При openLeftDrawer === true – он открыт */}
      <CommunityLeftDrawer
        whatChoose={whatAdd}
        close={closeCommunityDrawer}
        open={communityDrawer}
        // handleClose={handleCloseDrawer}
      />
    </>
  );
};

interface ListCardProps {
  title: string;
  icon?: React.ReactNode;
  whatOpen?: () => void; // добавили onClick
}

export function ListCard({ title, whatOpen }: ListCardProps) {
  return (
    <CardWrapper onClick={whatOpen}>
      <CalendarIcon />
      {title}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  border-radius: 16px;
  gap: 8px;

  color: #424242;
  font-size: 14px;
  font-weight: 600;
`;
