import * as React from 'react';
import { ArrowRightV2 } from '@/shared/icons/marker-drawer/arrow-right-v2';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { PrivateCheckboxGroup } from './private-checkbox-group';

const StyledDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiDrawer-paper': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    overflow: 'visible',
  },
}));

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
/**
 * Компонент нижнего дровера, в котором контент
 * заменён на то, что было на картинке.
 */
export default function PrivateEventBottomDrawer({
  setInputValue,
  children,
}: {
  setInputValue: (value: string) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  // Функция открытия/закрытия дровера
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(open);
  };

  // Основное содержимое дровера
  const drawerContent = () => (
    <Box
      sx={{
        borderRadius: '16px 16px 0px 0px',
        height: '70%',
        width: '100%',
        objectFit: 'cover',
        px: 2,
        pt: 2,
        pb: 4,
        textAlign: 'start',
        bgcolor: '#fff',
      }}
      role="presentation"
    >
      <Puller />

      {/* Заголовок */}
      <h2
        style={{
          color: '#424242',
          fontSize: '20px',
          fontWeight: 700,
          marginTop: '16px',
        }}
      >
        Приватность
      </h2>

      {/* Описание */}
      <PrivateCheckboxGroup setInputValue={setInputValue} />
    </Box>
  );

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
        onClick={toggleDrawer(true)}
      >
        {children}
      </div>

      {/* Сам Drawer, закреплённый снизу */}
      <StyledDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {drawerContent()}
      </StyledDrawer>
    </div>
  );
}
