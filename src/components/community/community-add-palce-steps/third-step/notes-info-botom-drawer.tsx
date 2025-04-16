import * as React from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';





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
/**
 * Компонент нижнего дровера, в котором контент
 * заменён на то, что было на картинке.
 */
export default function BottomInfoDrawer() {
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
      {/* Верхняя картинка — "Получить скидку" и теги */}
      {/* В качестве примера — просто placeholder-картинка.
          Замените src на свою реальную. */}
      <img
        src="img/notes-drawer-screen.png"
        alt="Скриншот"
        style={{
          width: '100%',
          borderRadius: 16,
          marginBottom: 16,
        }}
      />

      {/* Заголовок */}
      <h2
        style={{
          color: '#424242',
          fontSize: '20px',
          fontWeight: 700,
          margin: '0 0 8px',
        }}
      >
        Встречайте заметки!
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
        Благодаря вашей заметке пользователи могут узнать интеренсые факты, полезные советы или ваше мнение о месте
      </p>

      {/* Основная кнопка "Добавить заметку" */}
      <Button
        onClick={toggleDrawer(false)}
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
      >
        Понятно
      </Button>
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
      <SwipeableDrawer anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {drawerContent()}
      </SwipeableDrawer>
    </div>
  );
}
