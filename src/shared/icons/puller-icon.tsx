import React from 'react';
import Box from '@mui/material/Box';

import type { SvgProps } from './types';

export function PullerIcon({ color }: SvgProps): React.JSX.Element {
  return (
    <Box
      sx={{
        width: '100%', // Take full width of parent
        height: '100%', // Take full height of parent
        display: 'flex',
        alignItems: 'center', // Vertical centering
        justifyContent: 'center', // Horizontal centering
        position: 'relative', // Changed from sticky to relative
        cursor: 'pointer',
        borderRadius: '100px',
        opacity: '0.4',
      }}
    >
      {/* Removed unnecessary nested svg wrapper */}
      <svg fill={color || '#636364'} height="40" width="40" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 288H48c-17.69 0-32-14.32-32-32.01S30.31 224 48 224h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
      </svg>
    </Box>
  );
}
