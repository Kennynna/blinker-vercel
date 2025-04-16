import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiTooltip = {
  defaultProps: { placement: 'top' },
  styleOverrides: { tooltip: { backdropFilter: 'blur(0.375rem)' } },
} satisfies Components<Theme>['MuiTooltip'];
