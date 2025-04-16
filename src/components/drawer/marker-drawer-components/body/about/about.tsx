import React from 'react';
import { PlaceById } from '@/app/(marketing)/types/place-and-events';
import { EventById } from '@/constants/markeritems';
import { RouteIcon } from '@/shared/icons/marker-drawer';
import { CalendarIconEvent } from '@/shared/icons/marker-drawer/calendar-icon-event-drawer';
import { itemsEqual } from '@dnd-kit/sortable/dist/utilities';
import { Box } from '@mui/material';

import { EventDate, EventDetails, PlaceDetailCommunity, PlaceDetails } from '@/components/drawer/map-item-details';

import { EventContacts } from '../../event-drawer/event-contacts';
import { EventOrganizations } from '../../event-drawer/event-organizations';
import { EventPerformers } from '../../event-drawer/event-performers';
import { Schedule } from '../../event-drawer/schedule';
import { NotesAndCollections } from '../user-notes-and-colletions/notes-and-colletions';
import { AboutDrawerText, AboutDrawerTextEvent } from './about-drawer-text';
import { EventsArticles } from './events-articles';
import { Links, LinksEvents } from './links';
import { PlaceContacts } from './place-contacts';

interface AboutPlace {
  place: PlaceById;
}

export const About = ({ place }: AboutPlace) => {
  return (
    <Box component={'section'} sx={{ padding: '0 16px', width: '100%' }}>
      <Links />
      <AboutDrawerText description={place?.description} tags={place?.tags} />

      {/* <NotesAndCollections /> */}

      {/* <PlaceDetailCommunity title="723 сообществ" description="Добавили место к себе" /> */}
      <PlaceDetails description="5 км от вас" title={place?.address}>
        <RouteIcon />
      </PlaceDetails>

      {/* <PlaceDetails title="Режим работы" description="Ежедневно 10:00-00:00" /> */}
      {/* <PlaceContacts phoneNum="912013010301" socialNetwork="vk.com" /> */}

      {place && place.events && place.events.length > 0 && <EventsArticles eventsInPlace={place.events} />}
    </Box>
  );
};

interface AboutEvent {
  event: EventById;
}

export const AboutEvent = ({ event }: AboutEvent) => {
  console.log(event);
  return (
    <Box component={'section'} sx={{ padding: '0 16px', width: '100%' }}>
      <LinksEvents />

      <AboutDrawerTextEvent description={event?.description} tags={event?.tags} />

      {/* <EventDate dates={['2025-04-04T11:00:00Z']} zone_offset="+06:00">
        <CalendarIconEvent />
      </EventDate> */}

      <EventDetails description="5 км от вас" title={event?.address}>
        <RouteIcon />
      </EventDetails>

      {/* <EventPerformers /> */}

      {/* Расписание */}
      {event?.dates && <Schedule dates={event.dates} zoneOffset={event.zone_offset} />}
      {/*
      <EventContacts />

      <EventOrganizations /> */}
    </Box>
  );
};
