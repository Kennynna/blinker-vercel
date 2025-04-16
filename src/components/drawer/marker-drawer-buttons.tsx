import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface MarkerDrawerPrewProps {

  discount?: number | null;
}

export function MarkerDrawerButtons({ discount }: MarkerDrawerPrewProps): React.JSX.Element {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          color: '#007aff',
          fontWeight: '800',
          fontSize: '1.5rem',
        }}
      >
      </Box>
      <Button
        sx={{
          width: '100%',
          color: 'white',
          background: 'linear-gradient(to right, rgba(122,221,127,1) 0%, rgba(0,128,128,1) 100%)',
          padding: ' 0.625rem 1.25rem',
          borderRadius: '0.9375rem',
          border: 'none',
          fontSize: '1rem',
          fontWeight: '900',
          cursor: 'pointer',
        }}
      >
        {discount !== undefined && discount !== null ? `Получить скидку ${discount * 100}%` : 'Получить скидку'}
      </Button>
      <Button
        type="button"
        sx={{
          color: 'white',
          width: '100%',
          background: 'linear-gradient(to right, rgba(0,176,255,1) 0%, rgba(0,0,255,1) 100%)',
          padding: ' 0.625rem 1.25rem',
          borderRadius: '0.9375rem',
          border: 'none',
          fontSize: '1rem',
          fontWeight: '900',
          cursor: 'pointer',
          marginBottom: ' 0.625rem',
        }}
      >
        Наше меню
      </Button>
    </>
  );
}
