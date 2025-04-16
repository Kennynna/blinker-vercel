import React, { useEffect, useState } from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';

import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';

import { BottomElements } from '../map-elements/bottom-elements';
import { DrawerContent, DrawerFooter } from './default-drawer-components';

interface DrawerProps {
  handleUserLocationClick: () => void;
}

type DrawerState = 'closed' | 'open' | 'fullOpen';

export function DefaultDrawer({ handleUserLocationClick }: DrawerProps): React.JSX.Element {
  const { isListingOpen, setIsListingOpen, item, setWhatOpen } = useDrawerValue();

  // Заменяем логику на единое состояние
  const { drawerState, setDrawerState } = DrawerOpenAndFullOpen();

  useEffect(() => {
    if (isListingOpen === 'fullOpen') {
      setDrawerState('fullOpen');
    }
    let startTouchY = 0;
    let endTouchY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startTouchY = event.changedTouches[0].pageY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      endTouchY = event.changedTouches[0].pageY;
      const screenHeight = window.innerHeight;
      const swipeZone = screenHeight - 240;
      const swipeDistance = startTouchY - endTouchY;
      const minSwipeDistance = 50;
      const isSwipeDown = endTouchY - startTouchY > minSwipeDistance;
      console.log(startTouchY, endTouchY);
      console.log(drawerState);
      /**
       * Логика переходов:
       * Состояния: close → open → fullOpen
       * Свайп вверх: close -> open, open -> fullOpen
       * Свайп вниз: fullOpen -> open, open -> close
       *
       * При условии что свайп вверх должен происходить из зоны нижней части экрана для открытия,
       * а свайп вниз из верхней части "ручки".
       */

      // Если мы сейчас в close и делаем свайп вверх
      // if (drawerState === 'closed' && screenHeight - 100 < startTouchY && startTouchY > swipeZone) {
      //   setDrawerState('open');
      //   return;
      // }

      // // Если мы в open:
      // // Свайп вверх из зоны свайпа -> fullOpen
      // if (drawerState === 'open') {
      //   if (item !== null && screenHeight - 305 < startTouchY && startTouchY > endTouchY) {
      //     setWhatOpen('markItem');
      //     setDrawerState('open');
      //     setIsListingOpen('open');
      //     return;
      //   } else if (item === null && swipeZone < startTouchY && startTouchY > endTouchY) {
      //     setDrawerState('fullOpen');
      //     setIsListingOpen('fullOpen');
      //     return;
      //   }
      // }

      // // Свайп вниз в open -> close
      // if (drawerState === 'open' && swipeZone < startTouchY && startTouchY < endTouchY) {
      //   setDrawerState('closed');
      //   return;
      // }

      // Если мы в fullOpen:
      // Свайп вниз из верхней зоны -> open
      // if (drawerState === 'fullOpen' && isSwipeDown && startTouchY < 70) {
      //   setIsListingOpen('open');
      //   setDrawerState('open');
      //   return;
      // }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [drawerState, item]);

  // Определим стили для каждого состояния:
  const transformMap: Record<DrawerState, string> = {
    closed: 'translateY(0)', // Закрыто. Можно задать так, чтобы не было видно элементов, например, translateY(100%) если блок изначально снизу.
    open: 'translateY(-11.25rem)',
    fullOpen: 'translateY(-26.5rem)',
  };


  return (
    <>
      <DrawerContent drawerState={drawerState} />
      <DrawerFooter drawerState={drawerState} />
    </>
  );
}
