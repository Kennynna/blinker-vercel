'use client';

import React from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';

import { MarkerDrawerPlaceCard } from '../../place-card';
import { Title } from './title';
import { Box } from '@mui/system';

export const Events = () => {
  const { item } = useDrawerValue();

  return (
    <Box sx={{mt: '32px'}}>
      <Title title="События" id="events" />

      {/* {item && item.events && item.events.length > 0 ? (
        item.events.map((eventItem) => (
          <MarkerDrawerPlaceCard imageUrl={eventItem.pictures_urls[0]} key={eventItem.id} />
        ))
      ) : (
        <p>Нет событий</p>
      )} */}

      <MarkerDrawerPlaceCard
        imageUrl={'https://fighttime.ru/media/k2/items/cache/94b729b10b1fe7a3aed8c63d1b6901f1_M.jpg'}
      />
    </Box>
  );
};
