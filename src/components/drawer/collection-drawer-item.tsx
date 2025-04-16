import React, { useEffect, useState } from 'react';
import { CollectionItem, collectionsItems } from '@/constants/collections';
import { useDrawerValue } from '@/shared/store/drawer-value';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

import { DrawerOpenAndFullOpen } from '@/hooks/use-drawer-open';

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: 9;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 2.1875rem 0.3125rem;
`;

const Block = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0.125rem solid #007aff;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 0.125rem 0px #007aff;
  font-size: 0.875rem;
  text-align: start;
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  width: 50%;
  padding-left: 0.3125rem;
  font-weight: 700;
  gap: 0.625rem;
`;

const InfinitySymbol = styled.span`
  font-size: 1.25rem;
`;

const RightSection = styled.div`
  width: 50%;
  line-height: 1;
  padding: 0.3125rem;
  padding-left: 0.3125rem;
  display: flex;
  flex-direction: column;
`;

const Border = styled.div`
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.125rem;
    height: 100%;
    background-color: #007aff;
  }
`;

const variants = {
  open: {
    height: '100%',
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  closed: {
    height: '0',
    opacity: 0.5,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

interface CollectionDrawerItemProps {
  onClose: (value: string) => void;
}

export function CollectionDrawerItem({ onClose }: CollectionDrawerItemProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { setActiveFilters, setWhatOpen } = useDrawerValue();

  function handleItemClick(item: CollectionItem) {
    setActiveFilters(item.type, item.spanText || '', item.fullText || '');
    setWhatOpen('default');
  }

  const handleClose = () => {
    onClose('default');
  };
  const handleCloseFilters = () => {
    setIsOpen(false); // Запускаем анимацию закрытия
    setTimeout(() => {
      setWhatOpen('default');
    }, 300); // Задержка должна соответствовать длительности анимации
  };

  const { open, setOpen, fullOpen, setFullOpen } = DrawerOpenAndFullOpen();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 7);

    let startTouchY = 0;
    let endTouchY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startTouchY = event.changedTouches[0].pageY;
    };
    const handleTouchEnd = (event: TouchEvent) => {
      endTouchY = event.changedTouches[0].pageY;

      if (fullOpen || (open && startTouchY < 70 && endTouchY > startTouchY)) {
        setFullOpen(false);
        setOpen(true);
        handleCloseFilters();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timer);
    };
  }, [fullOpen, open]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper variants={variants} initial="closed" animate="open" exit="closed">
          {collectionsItems.map((item) => (
            <Block key={item.title} onClick={() => handleItemClick(item)}>
              <LeftSection>
                <InfinitySymbol>{item.itemSymbol}</InfinitySymbol> {item.title}
              </LeftSection>
              <Border />
              <RightSection>
                {item.description.map((description) => (
                  <Typography key={description}>{description}</Typography>
                ))}
              </RightSection>
            </Block>
          ))}

          <Button
            onClick={handleClose}
            type="button"
            sx={{
              width: 'max-content',
              alignSelf: 'center',
              borderRadius: '1rem',
              bgcolor: '#007aff',
              color: 'white',
              padding: '0.75rem 0.75rem',
            }}
          >
            <X size={15} />
          </Button>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}
