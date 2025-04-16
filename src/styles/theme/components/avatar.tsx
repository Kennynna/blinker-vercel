import * as React from 'react';
import type { Components } from '@mui/material/styles';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';

import type { Theme } from '../types';

export const MuiAvatar = {
  defaultProps: { children: <UserIcon fontSize="var(--Icon-fontSize)" /> },
  styleOverrides: {
    root: {
      '--Icon-fontSize': 'var(--icon-fontSize-md)',
      fontSize: '0.875rem',
      fontWeight: 500,
      height: 'var(--Avatar-size,  2.5rem)',
      letterSpacing: 0,
      width: 'var(--Avatar-size,  2.5rem)',
    },
  },
} satisfies Components<Theme>['MuiAvatar'];
