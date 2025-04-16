'use client';

import React, { useEffect } from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';
import { Box } from '@mui/material';

import { useEventById } from '@/hooks/places-and-events/useEvents';
import { usePlaceById } from '@/hooks/places-and-events/usePlaces';
import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';

import { MarkerDrawerEvent } from './marker-drawer-components/event-drawer';
import { PlaceDrawer } from './marker-drawer-components/place-drawer';

export function MarkerDrawer() {
  const { fullOpen, setFullOpen } = DrawerOpenAndFullOpen();
  const { item, itemType, setWhatOpen, isListingOpen, setIsListingOpen, resetOnlyItem } = useDrawerValue();

  console.table(item);

  const { data: event } =
    itemType === 'EVENT'
      ? useEventById({
          userLongitude: 83.0922185298129,
          userLatitude: 54.85019526962852,
          eventId: item.id,
        })
      : { data: null };

  const { data: place } =
    itemType === 'PLACE'
      ? usePlaceById({
          placeId: item.id,
          userLongitude: 83.0922185298129,
          userLatitude: 54.85019526962852,
        })
      : { data: null };

  console.log('OUR PLACE BY ID', place);

  useEffect(() => {
    setFullOpen(true);
    setWhatOpen('markItem');

    let startTouchY = null;

    const handleTouchStart = (event) => {
      const touchY = event.changedTouches[0].clientY;
      if (touchY < 300) {
        startTouchY = touchY;
      } else {
        startTouchY = null;
      }
    };

    const handleTouchEnd = (event) => {
      if (startTouchY !== null) {
        const endTouchY = event.changedTouches[0].clientY;
        const swipeDistance = endTouchY - startTouchY;
        if (swipeDistance > 100) {
          console.log('Свайп вниз на более чем 100px');
          setWhatOpen('default');
          if (isListingOpen === 'fullOpen') {
            resetOnlyItem();
            setFullOpen(true);
          } else {
            setFullOpen(false);
          }
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [setFullOpen, setWhatOpen, isListingOpen, resetOnlyItem]);

  return (
    <>
      <Box
        className="marker-drawer"
        sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'white',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
          overflow: fullOpen ? 'auto' : 'hidden',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          paddingBottom: '100px',
        }}
      >
        {itemType === 'PLACE' ? <PlaceDrawer place={place} /> : <MarkerDrawerEvent item={event} />}
      </Box>
    </>
  );
}
