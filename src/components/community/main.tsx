import React, { useEffect, useState } from 'react';
import { Place } from '@/constants/markeritems';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/system/Box';

import { AboutCommunityText } from './about-text';
import { Chanel } from './chanel';
import { CommunityAddButton } from './community-add-button';
import { CommunityAuthor } from './community-author';
import { CommunityCollections } from './community-collections';
import { CommunityEvents } from './community-events';
import { CommunityLinks } from './community-links';
import { HeaderCommunity } from './header';
import { NearEvents } from './near-events';
import { Toast } from './shared/toast';
import { Sub } from './sub';

interface MarkerDrawerContentProps {
  item: Place;
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#fff',
    },
  },
});
export function Main({ item }: MarkerDrawerContentProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShareClick = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.community-drawer');

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
      <HeaderCommunity images={item?.pictures_urls} isScrolled={isScrolled} />
      <Box component={'section'} sx={{ padding: '0 16px', width: '100%' }}>
        <CommunityLinks isScroll={isScrolled} />
        <AboutCommunityText />
        <Sub />
        <NearEvents />
        <Chanel />
        <CommunityCollections />
        <CommunityEvents />
        <CommunityAuthor />
        <CommunityAddButton />
        <ThemeProvider theme={theme}>
          <Toast />
        </ThemeProvider>
      </Box>
    </>
  );
}
