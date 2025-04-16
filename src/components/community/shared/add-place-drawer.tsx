'use client';

import * as React from 'react';
import { useEffect } from 'react';
import { useStepStore } from '@/shared/store/community/steps';
import { Global } from '@emotion/react';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



import { AddListActions } from '../widgets/add-list-adctions';


const drawerBleeding = 56;

const Root = styled('div')({
  height: '100%',
  width: '100%',
  backgroundColor: grey[100],
  borderRadius: '16px 16px 0px 0px',
});

const StyledBox = styled('div')({
  backgroundColor: '#fff',
  borderRadius: '16px 16px 0px 0px',
});

const Puller = styled('div')({
  width: 32,
  height: 4,
  backgroundColor: grey[300],
  borderRadius: 100,
  position: 'absolute',
  top: 15,
  left: 'calc(50% - 15px)',
});

interface AddPlaceDrawerProps {
  /**
   * Если нужно запускать в iframe, можете передать сюда функцию,
   * возвращающую window (используется в SwipeableDrawer).
   */
  window?: () => Window;

  /**
   * Дочерний элемент – это, как правило, кнопка или любой другой
   * элемент, по клику на который Drawer открывается.
   */
  children: React.ReactNode;
}

export function AddPlaceDrawer({ window, children }: AddPlaceDrawerProps) {
  const [open, setOpen] = React.useState(false);

  // Если Drawer должен рендериться в определённом контейнере (например, в iframe),
  // передайте prop window, иначе по умолчанию будет body документа.
  const container = window !== undefined ? () => window().document.body : undefined;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { communityDrawer } = useStepStore();
  useEffect(() => {
    if (communityDrawer) {
      setOpen(false);
    }
  }, [communityDrawer]);
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            overflow: 'visible',
            borderRadius: '16px 16px 0px 0px',
          },
          '.MuiDrawer-root>.MuiPaper-root': {
            backgroundColor: 'transparent !important',
            bottom: '0px !important',
          },
        }}
      />
      {/*
         Здесь мы оборачиваем ваш children (кнопку) в React.cloneElement,
         чтобы "добавить" ей свой onClick и открыть Drawer
      */}
      {React.cloneElement(children as React.ReactElement, {
        onClick: () => setOpen(true),

      })}

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox sx={{ px: 2, pb: 2, overflow: 'auto', bgcolor: '#FFFFFF', }}>
          <Puller />
          {/*
            Содержимое Drawer. Вы можете заменить на что угодно.
            Сейчас здесь ваш <AddListActions />
          */}
          <AddListActions />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
