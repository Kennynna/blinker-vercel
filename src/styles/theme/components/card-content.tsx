import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCardContent = {
  styleOverrides: { root: { padding: '1rem 1.5rem 2rem 1.5rem', '&:last-child': { paddingBottom: '2rem' } } },
} satisfies Components<Theme>['MuiCardContent'];
