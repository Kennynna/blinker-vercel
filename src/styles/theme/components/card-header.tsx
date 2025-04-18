import { avatarClasses } from '@mui/material/Avatar';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCardHeader = {
  defaultProps: { titleTypographyProps: { variant: 'h6' }, subheaderTypographyProps: { variant: 'body2' } },
  styleOverrides: {
    root: { padding: '2rem 1.5rem 1rem' },
    avatar: {
      [`& .${avatarClasses.root}`]: {
        '--Icon-fontSize': 'var(--icon-fontSize-lg)',
        backgroundColor: 'var(--mui-palette-background-paper)',
        boxShadow: 'var(--mui-shadows-8)',
        color: 'var(--mui-palette-text-primary)',
      },
    },
  },
} satisfies Components<Theme>['MuiCardHeader'];
