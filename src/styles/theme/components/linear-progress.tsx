import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiLinearProgress = {
  styleOverrides: { root: { borderRadius: '0.5rem', overflow: 'hidden' } },
} satisfies Components<Theme>['MuiLinearProgress'];
