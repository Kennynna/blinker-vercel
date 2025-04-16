import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open?: boolean;
  sx?: object;
  children?: React.ReactNode;
}

export function Toast({ children, sx }: State) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <div onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>{children}</div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Ссылка скопирована"
        autoHideDuration={2000}
        key={vertical + horizontal}
        ContentProps={{
          sx: {
            backgroundColor: '#00A3FF',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '16px',
            marginBottom: '16px',
            padding: '8px 16px',
            ...sx,
          },
        }}
        sx={{
          maxWidth: '760px',
          left: '16px',
          right: '16px',

        }}
      />
    </div>
  );
}
