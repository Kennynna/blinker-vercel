import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCardActions = {
  styleOverrides: { root: { padding: '0.5rem 1rem 1rem' } },
} satisfies Components<Theme>['MuiCardActions'];
