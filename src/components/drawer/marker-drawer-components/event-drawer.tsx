import React, { useEffect, useState } from 'react';
import { EventById } from '@/constants/markeritems';

import { EventSlider } from '.';
import { AboutEvent } from './body/about/about';

interface MarkerDrawerContentProps {
  item: EventById;
}

export function MarkerDrawerEvent({ item }: MarkerDrawerContentProps) {
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

  return (
    <>
      <EventSlider
        item={item}
        isScrolled={isScrolled}
        address={item?.address}
        name={item?.name}
        categoryArray={item?.categories}
      />

      <AboutEvent event={item} />
    </>
  );
}
