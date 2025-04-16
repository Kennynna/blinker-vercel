import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiFormControlLabel = {
  defaultProps: { slotProps: { typography: { variant: 'subtitle2' } } },
  styleOverrides: { root: { gap: '0.5rem', margin: 0 } },
} satisfies Components<Theme>['MuiFormControlLabel'];
