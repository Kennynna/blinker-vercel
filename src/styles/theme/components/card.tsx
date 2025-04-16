import { paperClasses } from '@mui/material/Paper';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: '1.25rem',
        [`&.${paperClasses.elevation1}`]: {
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 0.3125rem 22px 0 rgba(0, 0, 0, 0.24), 0 0 0 0.0625rem rgba(255, 255, 255, 0.12)'
              : '0 0.3125rem 22px 0 rgba(0, 0, 0, 0.04), 0 0 0 0.0625rem rgba(0, 0, 0, 0.06)',
        },
      };
    },
  },
} satisfies Components<Theme>['MuiCard'];
