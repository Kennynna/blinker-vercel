import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { display, padding, width } from '@mui/system';

const style = {
  width: '90%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: '16px',
  backgroundColor: '#F9F9F9',
  borderRadius: '16px',

};

const styleButtonBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
};
const styleButton = {
  flex: '1',
  borderRadius: '39px',
  border: ' 1px solid #E9E9E9',
  padding: '12px 16px',
};

const styleTypography = {
  fonSize: '20px',
  fontWeight: '700',
  marginBottom: '16px',
};

export default function ModalSaveText({ children, handleCloseAndReset }: any) {
  // Для закрытия модального окна и drawer и сброса текста
  const handleCloseModalAndCloseDrawer = () => {
    handleCloseAndReset();
    handleClose();
  };
  //Для закрытия модального окна
  const handleCloseModal = () => {
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box onClick={handleOpen}>{children}</Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p style={styleTypography}>Сбросить изменения?</p>
          <div style={styleButtonBox}>
            <Button style={styleButton} sx={{ color: '#424242' }} onClick={handleCloseModal}>
              Назад
            </Button>
            <Button style={styleButton} sx={{ color: '#E22E2E' }} onClick={handleCloseModalAndCloseDrawer}>
              Сбросить
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
