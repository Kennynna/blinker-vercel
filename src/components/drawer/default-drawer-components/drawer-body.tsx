'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useStoreFilters } from '@/shared/store/filters';
import { Box } from '@mui/material';

import { DrawerFiltersPlaces } from '@/components/drawer/default-drawer-components/filters/default-drawer-filters-places';

import { EventContent } from './events-tab-content/event-content';
import { DrawerFiltersEvents } from './filters/default-drawer-filters';
import { PlaceContent } from './places-tab-content/places-content';
import { PlaceOrEventTab } from './ui/place-or-event-tab';
import { useDrawerValue } from '@/shared/store/drawer-value';

enum ComponentsState {
  Place = 'PLACE',
  Event = 'EVENT',
}


export function DrawerBody(): React.JSX.Element {
  const { activeTab, setActiveTab } = useStoreFilters();

  const [isScroll, setIsScroll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClickTab = (tab: 'PLACE' | 'EVENT') => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 200) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      ref={scrollContainerRef}
      className="scroll-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
        padding: '0 1rem',
        position: 'relative',
        overflowY: 'auto', // делаем контейнер прокручиваемым
        maxHeight: '100vh', // или установите нужную высоту
        paddingBottom: '20px',
      }}
    >
      <PlaceOrEventTab activeTab={activeTab} handleClickTab={handleClickTab} />
      {activeTab === 'PLACE' ? (
        <>
          <DrawerFiltersPlaces activeTab={activeTab} isScroll={isScroll} />
          <PlaceContent  isScroll={isScroll} />
        </>
      ) : (
        <>
          <DrawerFiltersEvents activeTab={activeTab} isScroll={isScroll} />
          <EventContent  />
        </>
      )}
      {/* <Switcher /> */}
    </Box>
  );
}
