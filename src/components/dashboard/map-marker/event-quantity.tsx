import React from 'react';
import { Typography } from '@mui/material';

interface EventQuantityProps {
  quantity: number;
}

export function EventQuantity({ quantity }: EventQuantityProps): React.JSX.Element {
  return (
    <Typography
      sx={{
        position: 'absolute',
        bottom: '-20%',
        right: '-9%',
        color: 'white',
        width: '26px',
        fontWeight: 700,
        padding: '0 0.25rem',
        height: '26px',
        fontSize: '0.875rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#085cff',
        zIndex: 10,
      }}
    >
      {`+${quantity}`}
    </Typography>
  );
}
