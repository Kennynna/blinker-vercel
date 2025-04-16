import type { Components } from '@mui/material/styles';
import { tabClasses } from '@mui/material/Tab';
import { tabsClasses } from '@mui/material/Tabs';

import type { Theme } from '../types';

export const MuiTabs = {
  styleOverrides: {
    flexContainer: { [`&:not(.${tabsClasses.flexContainerVertical})`]: { gap: '1.5rem' } },
    indicator: { height: '0.25rem', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem' },
    vertical: {
      [`& .${tabsClasses.indicator}`]: {
        borderBottomRightRadius: '0.25rem',
        borderTopRightRadius: '0.25rem',
        left: 0,
        right: 'auto',
        width: '0.25rem',
      },
      [`& .${tabClasses.root}`]: { justifyContent: 'flex-start', paddingInline: '1.5rem' },
    },
  },
} satisfies Components<Theme>['MuiTabs'];
