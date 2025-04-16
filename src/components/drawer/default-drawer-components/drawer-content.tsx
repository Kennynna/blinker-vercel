import React from 'react';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';
import { motion } from 'framer-motion'; // Импортируем motion

import { DrawerBody, DrawerHeader } from '@/components/drawer/default-drawer-components';

interface DrawerContentProps {
  drawerState: string;
}

const DrawerContainer = styled(motion.div)<{ drawerState: string }>`
  // Оборачиваем в motion.div
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 9;
  overflow-y: hidden;
  background-color: white;
  z-index: ${(props) => (props.drawerState === 'fullOpen' ? 12 : 9)};
  border-radius: 0.9375rem 0.9375rem 0 0;
`;

export function DrawerContent({ drawerState }: DrawerContentProps): React.JSX.Element {
  const { defaultItems, item } = useDrawerValue();
  const variants = {
    fullOpen: {
      height: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: (custom) => ({
      height: custom.item ? 'auto' : '240px',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    }),
    closed: {
      height: '125px',
      overflow: 'hidden',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <DrawerContainer
      animate={variants[drawerState]} // Добавляем animate
      variants={variants} // Добавляем variants
      custom={{ item }}
    >
      {/* FullOpen это когда у нас полностью открыт drawer */}
      {drawerState !== 'fullOpen' && <DrawerHeader eventsAndPlaces={defaultItems} />}
      {drawerState === 'fullOpen' && <DrawerBody />}
    </DrawerContainer>
  );
}
