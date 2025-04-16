// 'use client';

// import { useCallback, useEffect } from 'react';





// interface UseTouchDrawerOpenProps {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   fullOpen: boolean;
//   setFullOpen: (fullOpen: boolean) => void;
//   onDrawerClose?: (text: string) => void;
// }
// /**
//  * Хук для управления открытием drawer с помощью жестов с useEffect с последующем удаления прослушек
//  * @param {UseTouchDrawerOpenProps} props - Пропсы для хука.
//  */

// export function useTouchDrawerOpen({ open, setOpen, fullOpen, setFullOpen, onDrawerClose }: UseTouchDrawerOpenProps) {
//   const closeDrawer = useCallback(() => {
//     setFullOpen(false);
//     setOpen(true);
//     onDrawerClose?.();
//   }, [setFullOpen, setOpen, onDrawerClose]);

//   useEffect(() => {
//     let startTouchY = 0;
//     let endTouchY = 0;
//         /**
//      * Обработчик начала касания
//      * @param {TouchEvent} event - Событие касания
//      */
//     const handleTouchStart = (event: TouchEvent) => {
//       startTouchY = event.changedTouches[0].pageY;
//       console.log('start', startTouchY);
//     };
//    /**
//      * Обработчик окончания касания
//      * @param {TouchEvent} event - Событие касания
//      */
//     const handleTouchEnd = (event: TouchEvent) => {
//       endTouchY = event.changedTouches[0].pageY;
//       console.log('end', fullOpen, endTouchY);


//       if (open && startTouchY > 688 && endTouchY < startTouchY) {
//         setFullOpen(true);
//         setOpen(false);
//       }
//       if (fullOpen && startTouchY < 70 && endTouchY > startTouchY) {
//         closeDrawer();
//       }
//     };

//     document.addEventListener('touchstart', handleTouchStart);
//     document.addEventListener('touchend', handleTouchEnd);

//     return () => {
//       document.removeEventListener('touchstart', handleTouchStart);
//       document.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [fullOpen]);
// }
