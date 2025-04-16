import React from 'react';
import type { Event } from '@/constants/markeritems';
import { Box } from '@mui/material';

import style from '@/styles/map-drawer.module.css';

import { DrawerInfoItem } from './drawer-info-item';

interface MarkerEventsProps {
  event: Event;
}

function getDate(date: string) {
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));
  return formattedDate;
}

export function MarkerEvents({ event }: MarkerEventsProps): React.JSX.Element {
  let date;
  event.date && (date = getDate(event.date));
  return (
    <div className={style.timetable}>
      <p className={style.timetitle}>Мероприятия в этом месяце</p>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3125rem' }}>
        <DrawerInfoItem date={date} event={event.types[0]} description={event.name} imageUrl={event.pictures_urls[0]} />
      </Box>
    </div>
  );
}
