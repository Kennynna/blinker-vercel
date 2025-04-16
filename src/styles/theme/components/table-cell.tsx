import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiTableCell = {
  styleOverrides: {
    root: { borderBottom: 'var(--TableCell-borderWidth, 0.0625rem) solid var(--mui-palette-TableCell-border)' },
    paddingCheckbox: { padding: '0 0 0 1.5rem' },
  },
} satisfies Components<Theme>['MuiTableCell'];
