import * as React from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const StyledDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiDrawer-paper': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    overflow: 'visible',
    padding: '16px'
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
export default function OtherInfoBottomDrawer() {
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
        height: '70%',
        width: '100%',
        px: 2,
        pt: 2,
        pb: 4,
        textAlign: 'start',
        bgcolor: '#fff',
      }}
      role="presentation"
    >
      <Puller />
      {/* Верхняя картинка — "Получить скидку" и теги */}
      {/* В качестве примера — просто placeholder-картинка.
          Замените src на свою реальную. */}

      {/* Заголовок */}
      <h2
        style={{
          color: '#424242',
          fontSize: '16px',
          fontWeight: 700,
        }}
      >
        Дополнительные сведения
      </h2>

      {/* Описание */}
      <p
        style={{
          color: '#424242',
          marginTop: '4px',
          lineHeight: 1.4,
        }}
      >
        Если вы являетесь владельцем места, телефон, сайт и ссылки на соц.сети позволят связаться с вашим местом
        большему числу клиентов
      </p>
    </Box>
  );

  return (
    <div>
      {/* Кнопка, открывающая Drawer */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={toggleDrawer(true)}
      >
        <g clip-path="url(#clip0_2398_284426)">
          <path
            d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="#00A3FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_2398_284426">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Сам Drawer, закреплённый снизу */}
      <StyledDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} sx={{}}>
        {drawerContent()}
      </StyledDrawer>
    </div>
  );
}
