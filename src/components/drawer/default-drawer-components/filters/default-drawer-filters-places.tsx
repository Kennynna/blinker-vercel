'use client';

import React, { useState } from 'react';
import { ArrowDawnForFiltersIcon } from '@/shared/icons/arrow-dawn-for-filters';
import { ActionIconV2 } from '@/shared/icons/community/action-icon-v2';
import { FilterIconV2 } from '@/shared/icons/community/filter-icon-v2';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';



import { useEventCollectionsFilters, usePlaceCollectionsFilters } from '@/hooks/filters/use-all-filters';



import { DatesFilterDrawer, TypeFilterDrawer } from '../../dates-filters-drawer';
import MainFiltersDrawer from '../../filters-drawer/filter-drawer-main';


const ActivityList = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 1.0625rem;
  width: 100%;
  z-index: 9;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  height: max-content;
`;

const IconsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  background: #f9f9f9;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const FilterQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #00a3ff;
  position: absolute;
  top: 0px;
  right: 0px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const Container = styled.div<{ isScroll: boolean }>`
  position: ${(props) => (props.isScroll ? 'fixed' : 'static')};
  top: 0;
  left: 16px;
  right: 16px;
  z-index: 10;
  background: ${(props) => (props.isScroll ? '#fff' : 'transparent')};
`;

interface DrawerFiltersProps {
  isScroll: boolean;
}

interface CollectionsFilters {
  id: string;
  name: string;
  description: string;
  icon: { id: string; uri: string };
  categories: { id: string; name: string; description: string; place: boolean; icon: { id: string; uri: string } }[];
}

export function DrawerFiltersPlaces({ isScroll }: DrawerFiltersProps) {
  const { activeTab, selectedPlaceCategory, selectedCollectionId, setSelectedCollection, clearSelectedCollection } =
    useStoreFilters();
  const [openDateDrawer, setOpenDateDrawer] = useState(false);
  const [openTypeDrawer, setOpenTypeDrawer] = useState(false);
  const { data: placeCollections } = usePlaceCollectionsFilters();

  const filterCount = activeTab === 'PLACE' ? selectedPlaceCategory.length : 0;

  const handleCollectionClick = (collection: CollectionsFilters) => {
    const collectionIds = collection.categories.map((cat) => cat.id);
    if (selectedCollectionId === collection.id) {
      // Если подборка уже выбрана, снимаем выбор
      setSelectedCollection(null, []);
    } else {
      // Выбираем новую подборку
      setSelectedCollection(collection.id, collectionIds);
    }
  };

  return (
    <Container isScroll={isScroll}>
      <ActivityList>
        <IconsWrapper>
          <ActionIconV2 color="#00A3FF" />
        </IconsWrapper>

        <IconsWrapper
          onClick={() => setSelectedCollection(null, [])}
          style={{
            background: selectedPlaceCategory.length === 0 ? '#00A3FF' : '#f9f9f9',
            color: selectedPlaceCategory.length === 0 ? '#fff' : '#000',
          }}
        >
          <p>Все</p>
        </IconsWrapper>

        {placeCollections?.map((item: CollectionsFilters) => {
          const isSelected = selectedCollectionId === item.id;
          return (
            <IconsWrapper
              key={item.id}
              onClick={() => handleCollectionClick(item)}
              style={{
                background: isSelected ? '#00A3FF' : '#f9f9f9',
                color: isSelected ? '#fff' : '#000',
              }}
            >
              <img src={item.icon.uri} alt="icon" width={24} height={24} />
              <p>{item.name}</p>
            </IconsWrapper>
          );
        })}
      </ActivityList>

      <ActivityList>
        <IconsWrapper>
          <MainFiltersDrawer>
            <FilterIconV2 />
          </MainFiltersDrawer>
          {filterCount > 0 && <FilterQuantity>{filterCount}</FilterQuantity>}
        </IconsWrapper>
        <IconsWrapper onClick={() => setOpenTypeDrawer(true)}>
          <p>Тип места</p>
          <ArrowDawnForFiltersIcon color="#B7AEAE" />
        </IconsWrapper>
      </ActivityList>

      <DatesFilterDrawer toggleDrawerOpen={openDateDrawer} onClose={() => setOpenDateDrawer(false)} />
      <TypeFilterDrawer toggleDrawerOpen={openTypeDrawer} onClose={() => setOpenTypeDrawer(false)} />
    </Container>
  );
}
