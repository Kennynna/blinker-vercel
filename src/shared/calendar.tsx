'use client';

import * as React from 'react';
import { ruRU as coreRuRU } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ruRU } from '@mui/x-date-pickers/locales';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#007aff' },
    },
    typography: {
      fontFamily: "'Marmelad', sans-serif",
    },
  },
  ruRU,
  coreRuRU
);

export function Calendar() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <DatePicker
          sx={{
            '& .MuiInputBase-root': {
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              padding: '0.3125rem 0.5rem',
              border: '0.125rem solid #007aff',
              borderRadius: '1rem',
              boxSizing: 'border-box',
              boxShadow: '0px 0.125rem 0px #007aff',
              margin: 0,
              fontSize: '0.875rem',
              fontFamily: "'Marmelad', sans-serif",
              '&:hover': {
                borderColor: '#007aff',
              },
              '&.Mui-focused': {
                borderColor: '#007aff',
                boxShadow: '0px 0.125rem 0px #007aff',
              },
            },
            '& .MuiInputBase-input': {
              padding: 0,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
