import React from 'react';
import { ProfileIcon, TicketIcon, WantedIcon } from '@/shared/icons';
import { Box, Button, Typography } from '@mui/material';

export function BottomIcons(): React.JSX.Element {
  return (
    <Box
      component="div"
      sx={{
        borderTop: '0.0625rem solid #f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        gap: 5,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        alignItems: 'stretch',
        bgcolor: 'white',
        zIndex: 11,
      }}
    >
      <Button
        component="button"
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}
      >
        <TicketIcon />
        <Typography component="p" sx={{ fontSize: '0.75rem' }} variant="h1">
          Билеты
        </Typography>
      </Button>

      <Button
        component="button"
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}
      >
        <WantedIcon />
        <Typography component="p" sx={{ fontSize: '0.75rem' }} variant="h1">
          Хочу
        </Typography>
      </Button>

      <Button
        component="button"
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}
      >
        <ProfileIcon />
        <Typography component="p" sx={{ fontSize: '0.75rem' }} variant="h1">
          Профиль
        </Typography>
      </Button>
    </Box>
  );
}
