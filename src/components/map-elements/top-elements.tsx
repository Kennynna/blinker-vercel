'use client';

import React, { useState } from 'react';
import { ArrowDawnForFiltersIcon } from '@/shared/icons/arrow-dawn-for-filters';
import { ActionIconV2 } from '@/shared/icons/community/action-icon-v2';
import { FilterIconV2 } from '@/shared/icons/community/filter-icon-v2';
import { useStoreFilters } from '@/shared/store/filters';
import styled from '@emotion/styled';

import { useEventCollectionsFilters, usePlaceCollectionsFilters } from '@/hooks/filters/use-all-filters';
import { DatesFilterDrawer, TypeFilterDrawer } from '@/components/drawer/dates-filters-drawer';
import MainFiltersDrawer from '@/components/drawer/filters-drawer/filter-drawer-main';

import { PlaceOrEventTab } from '../drawer/default-drawer-components/ui/place-or-event-tab';

// Styled components (unchanged from your code)
const Paragraph = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  z-index: 11;
  background-color: ${(props) => (props.isSelected ? '#007aff' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : '#424242')};
  padding: 0.75rem 0.625rem;
  border-radius: 2.4375rem;
  background: ${(props) => (props.isSelected ? '#007aff' : '#fefdf4')};
  backdrop-filter: blur(1.5625rem);
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#0056b3' : '#e6f2ff')};
  }
  height: 3rem;
  gap: 0.5rem;
`;

const ActivityList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.0625rem;
  width: 100%;
  z-index: 9;
  padding: 0.3125rem 0.625rem;
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

const Block = styled.div<{ isBlock?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  ${(props) => (props.isBlock ? 'position: static;' : 'position: absolute;')}
  top: 0.9375rem;
  z-index: 9;
  gap: 1rem;
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

const fakeSecondFilters = ['Дата', 'Жанр'];

export function TopElements({ isBlock }: { isBlock?: boolean }): React.JSX.Element | null {
  const {
    activeTab,
    selectedEventCategory,
    selectedPlaceCategory,
    setActiveTab,
    setSelectedCollection,
    selectedCollectionId, // Added to access current selected collection ID
  } = useStoreFilters();
  const [openTypeDrawer, setOpenTypeDrawer] = useState(false);
  const [openDateDrawer, setOpenDateDrawer] = useState(false);

  const { data: placeCollections } = usePlaceCollectionsFilters();
  const { data: eventCollections } = useEventCollectionsFilters();

  const handleClickTab = (tab: 'PLACE' | 'EVENT') => {
    setActiveTab(tab);
  };

  const handleCollectionClick = (collection: CollectionsFilters) => {
    const collectionIds = collection.categories.map((cat) => cat.id);
    if (selectedCollectionId === collection.id) {
      // If the collection is already selected, deselect it
      setSelectedCollection(null, []);
    } else {
      // Select the new collection
      setSelectedCollection(collection.id, collectionIds);
    }
  };

  const filterCount = activeTab === 'EVENT' ? selectedEventCategory.length : selectedPlaceCategory.length;

  return (
    <Block isBlock={isBlock}>
      <div style={{ padding: '0 16px', width: '100%' }}>
        <PlaceOrEventTab activeTab={activeTab} handleClickTab={handleClickTab} />
      </div>

      <ActivityList>
        <IconsWrapper>
          <ActionIconV2 color="#00A3FF" />
        </IconsWrapper>
        <IconsWrapper
          onClick={() => setSelectedCollection(null, [])}
          style={{
            background:
              activeTab === 'PLACE' && selectedPlaceCategory.length === 0
                ? '#00A3FF'
                : activeTab === 'EVENT' && selectedEventCategory.length === 0
                  ? '#00A3FF'
                  : '#f9f9f9',
            color:
              activeTab === 'PLACE' && selectedPlaceCategory.length === 0
                ? '#fff'
                : activeTab === 'EVENT' && selectedEventCategory.length === 0
                  ? '#fff'
                  : '#000',
          }}
        >
          <p>Все</p>
        </IconsWrapper>

        {activeTab === 'PLACE'
          ? placeCollections?.map((item: CollectionsFilters) => {
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
            })
          : eventCollections?.map((item: CollectionsFilters) => {
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

      {activeTab === 'PLACE' ? (
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
      ) : (
        <ActivityList>
          <IconsWrapper>
            <MainFiltersDrawer>
              <FilterIconV2 />
            </MainFiltersDrawer>
            {filterCount > 0 && <FilterQuantity>{filterCount}</FilterQuantity>}
          </IconsWrapper>
          <IconsWrapper onClick={() => setOpenTypeDrawer(true)}>
            <p>Тип события</p>
            <ArrowDawnForFiltersIcon color="#B7AEAE" />
          </IconsWrapper>
          {fakeSecondFilters.map((item, index) => (
            <IconsWrapper key={index} onClick={() => setOpenDateDrawer(true)}>
              <p>{item}</p>
              <ArrowDawnForFiltersIcon color="#B7AEAE" />
            </IconsWrapper>
          ))}
        </ActivityList>
      )}

      <DatesFilterDrawer toggleDrawerOpen={openDateDrawer} onClose={() => setOpenDateDrawer(false)} />
      <TypeFilterDrawer toggleDrawerOpen={openTypeDrawer} onClose={() => setOpenTypeDrawer(false)} />
    </Block>
  );
}
