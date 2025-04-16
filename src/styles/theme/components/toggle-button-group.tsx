import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiToggleButtonGroup = {
  styleOverrides: {
    root: {
      border: '0.0625rem solid var(--mui-palette-divider)',
      boxShadow: 'var(--mui-shadows-1)',
      gap: '0.25rem',
      padding: '0.25rem',
    },
    grouped: { border: 0, margin: 0 },
    firstButton: { borderRadius: '0.5rem' },
    middleButton: { borderRadius: '0.5rem' },
    lastButton: { borderRadius: '0.5rem' },
  },
} satisfies Components<Theme>['MuiToggleButtonGroup'];
