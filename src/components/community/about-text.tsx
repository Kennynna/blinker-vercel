'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';

import { MarkerDrawerText } from '../drawer/marker-drawer-components/body/about-drawer-text';

export const AboutCommunityText = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShareClick = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Box sx={{ marginTop: '24px' }} >
      <MarkerDrawerText 
        description="Сообщество в котором много чего происходит и даже больше, очень интересное описание, 3 строки долгое назв Сообщество в котором много чего происходит и даже больше, очень интересное описание, 3 строки долгое назвСообщество в котором много чего происходит и даже больше, очень интересное описание, 3 строки долгое назв"
        handleShareClick={handleShareClick}
      />
    </Box>
  );
};
