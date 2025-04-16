import React, { useEffect, useState } from 'react';
import { PlaceById } from '@/app/(marketing)/types/place-and-events';
import Box from '@mui/system/Box';

import { PlaceSlider } from '.';
import { About } from './body';
import { Title } from './body/about/title';
import ParticipantList from './participant-drawer';

interface MarkerDrawerContentProps {
  place: PlaceById;
}

export function PlaceDrawer({ place }: MarkerDrawerContentProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShareClick = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.marker-drawer');

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 350);
    };

    if (container) {
      console.log('container true');
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    } else {
    }
  }, []);

  console.log('place', place);
  return (
    <>
      <PlaceSlider
        images={[
          'https://sn.kz/cache/imagine/main_page_full/uploads/news/2022/09/28/63334dcd060ea102234999.jpg ',
          'https://biz-nes.ru/wp-content/uploads/2022/06/Novyj-proekt-21.jpg',
        ]}
        isScrolled={isScrolled}
        name={place?.name}
        address={place?.address}
        categoryArray={place?.categories}
      />

      <About place={place} />

      {/* Drawer  с организациями */}
      <Box
        sx={{
          padding: '0 16px',
          margin: '0',
          width: '100%',
        }}
      >
        {/* <Title title="Место добавлено при участии" styles={{ margin: '0', marginTop: '32px', marginBottom: '16px' }} /> */}

        {/* Место добавлено при участии */}
        {/* <ParticipantList /> */}
      </Box>
    </>
  );
}
