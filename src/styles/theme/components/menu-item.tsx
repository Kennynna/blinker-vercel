import { listItemIconClasses } from '@mui/material/ListItemIcon';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiMenuItem = {
  defaultProps: { disableRipple: true },
  styleOverrides: {
    root: {
      borderRadius: '0.5rem',
      gap: 'var(--ListItem-gap)',
      paddingBlock: 'var(--MenuItem-paddingBlock, 0.25rem)',
      paddingInline: 'var(--MenuItem-paddingInline, 0.5rem)',
      [`& .${listItemIconClasses.root}`]: { minWidth: 'auto' },
    },
  },
} satisfies Components<Theme>['MuiMenuItem'];
