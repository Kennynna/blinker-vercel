import React from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';

export const Toast = () => {
  // Читаем состояние и экшены из стора
  const { isToastOpen, closeToast, toastMessage } = useStepStore();

  // Закрываем Toast по таймеру или по клику
  const handleClose = () => {
    closeToast();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={isToastOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      key="bottom-center"
    >
      <SnackbarContent
        message={toastMessage}
        sx={{
          backgroundColor: '#00A3FF !important',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 600,
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '16px',
        }}
      />
    </Snackbar>
  );
};
