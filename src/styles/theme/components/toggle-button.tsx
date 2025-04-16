import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiToggleButton = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: { color: 'var(--mui-palette-text-primary)', fontSize: 'var(--icon-fontSize-md)', padding: '0.375rem' },
  },
} satisfies Components<Theme>['MuiToggleButton'];
