'use client';

import React from 'react';

import { Box } from '@mui/material';



import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';


import { Main } from './main';


interface MarkerDrawerProps {
  eventId?: string;
  setWhatOpen: (value?: string) => void;
  handleCloseFullScreen: () => void;
  fullOpen?: boolean;
}

export let customPlace = {
  name: 'Co.mein Cafe',
  description:
    '\nLorem ipsum odor amet, consectetuer adipiscing elit. Diam ultrices at sociosqu fermentum tempus mattis id himenaeos\nmattis. Fusce at egestas feugiat ultrices sem est a efficitur ullamcorper. Magnis ultricies cras ridiculus neque velit\npenatibus laoreet. Inceptos ipsum natoque etiam ac senectus magna. Cursus consectetur nibh ad duis eleifend accumsan.\nCurae pretium class egestas laoreet proin ultrices himenaeos tempor?\n\nLacus sed iaculis per, non metus natoque quam ipsum! Erat dis hac placerat phasellus nascetur imperdiet porta\nconsectetur. Lobortis venenatis ligula ullamcorper imperdiet porta dignissim sagittis quis. Arcu scelerisque suspendisse\nin per eros donec facilisis facilisi semper. Luctus nam netus lobortis ultricies sem nisl quis magnis. Ut habitasse\nultricies primis donec sapien conubia lacus. Ultricies ex dignissim aliquam est pellentesque ridiculus nec semper.\n',
  types: ['BAR'],
  location_longitude: 83.09483064818008,
  location_latitude: 54.84279667858184,
  pictures: ['01924c74-a27a-7834-9b46-00efa4b9d007', '01924c74-9ae8-7d5e-b4fe-7842d52eac71'],
  general_picture: '01924c74-a3f3-71ce-a65f-a69ec8e36beb',
  optional_fields: [
    {
      field_type: 'CONTACTS_FIELD',
      phone: '+79231355816',
      site_url: '',
      social_networks: 'vk.com/comeincafe',
      priority: 90,
    },
  ],
  id: '01924c74-a57e-733a-9831-2a83ba4367e7',
  owner_id: '09477f71-d38a-4d8f-8e42-04e0d5b89148',
  distance: 834.62956875,
  events: [],
  entity_type: 'PLACE',
  pictures_urls: [
    'https://kartinki.pics/uploads/posts/2022-03/1648040201_6-kartinkin-net-p-kartinki-restoranov-8.jpg',
    'https://api.blinker-dev.ru/api/v1/images/01924c74-9ae8-7d5e-b4fe-7842d52eac71',
  ],
  general_picture_url: 'https://api.blinker-dev.ru/api/v1/images/01924c74-a3f3-71ce-a65f-a69ec8e36beb',
};

export function Community(): React.JSX.Element {



  return (
    <>
      <Box
        className="community-drawer"
        sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'white',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
          overflow:'auto',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          paddingBottom: '100px',
        }}
      >

        <Main item={customPlace} />
      </Box>
    </>
  );
}
