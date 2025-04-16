import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const NullItems = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  transition: all 0.3s ease; /* Плавное изменение */

  h3 {
    color: #424242;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    color: #958a8a;
    font-size: 14px;
    font-weight: 400;
  }
`;

interface Props {
  title?: string;
  description?: string;
  sx?: object;
}

export const NoFoundSearch = ({ title, description, sx }: Props) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsKeyboardOpen(window.innerHeight < windowHeight);
    };

    setWindowHeight(window.innerHeight); // Запоминаем начальную высоту окна

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NullItems
      sx={{
        ...sx,
        height: '65vh', // Заполняем всю высоту экрана
        justifyContent: isKeyboardOpen ? 'flex-end' : 'center',
        paddingBottom: isKeyboardOpen ? '20vh' : 0, // Смещение при появлении клавиатуры
      }}
    >
      <h3>{title || 'Пусто'}</h3>
      <p>{description || 'Попробуйте ввести другой запрос'}</p>
    </NullItems>
  );
};
