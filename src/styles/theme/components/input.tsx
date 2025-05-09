import { inputBaseClasses } from '@mui/material/InputBase';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiInput = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: { 'label + &': { marginTop: '0.5rem' } },
    input: {
      height: 'auto',
      padding: 0,
      [`label[data-shrink=false]+.${inputBaseClasses.formControl} &`]: {
        '&::placeholder': { opacity: '1 !important' },
      },
      '&:-webkit-autofill': {
        marginInline: 'calc(var(--Input-paddingInline) * -1)',
        paddingInline: 'var(--Input-paddingInline)',
      },
    },
  },
} satisfies Components<Theme>['MuiInput'];
