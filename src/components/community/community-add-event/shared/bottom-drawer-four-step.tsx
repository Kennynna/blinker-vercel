import * as React from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { FixedButton } from './fixed-button';

const DrawerButton = styled.button`
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 39px;
  background: #00a3ff;
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;

const Puller = styled('div')({
  width: 32,
  height: 4,
  backgroundColor: '#636364',
  borderRadius: 100,
  position: 'absolute',
  opacity: 0.4,
  top: 15,
  left: 'calc(50% - 15px)',
});

{
  /* TODO: Не забываем, так как у нас разный сценарий для следующего шага разные мы должны передать пропс в условие, чтобы была разная реализация перехода в следующий шаг */
}
export default function BottomDrawerFiveStepEvent({ isCurrentCreateEvent }: { isCurrentCreateEvent?: boolean }) {
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);
  const [open, setOpen] = React.useState(false);
  const { incrementStep } = useStepStore();
  // Функция открытия/закрытия дровера
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  // Основное содержимое дровера
  const drawerContent = () => (
    <Box
      sx={{
        borderRadius: '16px 16px 0px 0px',
        height: '70%',
        width: '100%',
        px: 2,
        pt: 2,
        pb: 4,
        textAlign: 'center',
        bgcolor: '#fff',
      }}
      role="presentation"
    >
      <Puller />

      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '16px', marginTop: '16px' }}
      >
        <div
          style={{
            width: '128px',
            height: '128px',
            borderRadius: '32px',
            background: 'rgba(0, 0, 0, 0.10)',
          }}
        />
      </div>

      {/* Заголовок */}
      <h2
        style={{
          color: '#424242',
          fontSize: '20px',
          fontWeight: 700,
          margin: '0 0 8px',
        }}
      >
        Хотите создать событие без карточки места?
      </h2>

      {/* Описание */}
      <p
        style={{
          color: '#424242',
          marginTop: 0,
          marginBottom: 16,
          lineHeight: 1.4,
        }}
      >
        Карточка места позволит что то там
      </p>

      {/* Чекбокс "Больше не показывать" */}

      {/* Основная кнопка "Добавить заметку" */}
      <Button
        sx={{
          backgroundColor: '#00A3FF',
          color: '#fff',
          borderRadius: '24px',
          textTransform: 'none',
          width: '100%',
          mb: 2,
          fontWeight: 600,
          padding: '12px 16px',
        }}
        onClick={toggleDrawer(false)}
      >
        Настраивать дальше
      </Button>

      {/* Вторичная кнопка "Как нибудь потом" */}
      <Button
        variant="text"
        sx={{
          color: '#424242',
          textTransform: 'none',
          width: '100%',
          fontWeight: 600,
          borderRadius: '39px',
          background: ' #FFF',
          padding: '16px',
          boxShadow: '0px 8px 25px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        Перейти в событие
      </Button>
    </Box>
  );

  return (
    <div style={{ width: '100%' }}>
      {/* Кнопка, открывающая Drawer */}
      {/* Сам Drawer, закреплённый снизу */}
      <SwipeableDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {drawerContent()}
      </SwipeableDrawer>
    </div>
  );
}
