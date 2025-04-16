import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiMenu = {
  defaultProps: { disableScrollLock: true },
  styleOverrides: { list: { display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0.5rem' } },
} satisfies Components<Theme>['MuiMenu'];
