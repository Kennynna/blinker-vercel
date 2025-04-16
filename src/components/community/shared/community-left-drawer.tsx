import * as React from 'react';
import { useState } from 'react';
import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { StepPlaceChoose } from '../community-add-palce-steps/step-place-choose';

interface DrawerProps {
  open: boolean;
  close: () => void;
  whatChoose: string;
}

export default function CommunityLeftDrawer({ open, close, whatChoose }: DrawerProps) {
  const DrawerList = (
    <Box sx={{ width: '100%' }} role="presentation">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            borderRadius: '0',
            width: '100%',
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // Задаём фиксированную высоту *внутреннему* контейнеру
          // и включаем прокрутку
          height: '100vh',
          overflowY: 'auto',
          bgcolor: 'white',
          padding: '0 16px 16px 16px',
          color: '#424242',
        }}
      >
        <StepPlaceChoose closeDrawer={close} whatChoose={whatChoose} />
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={close}>
      {DrawerList}
    </Drawer>
  );
}
