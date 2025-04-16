import { create } from 'zustand';

interface StepState {
  step: number;
  maxStep: number;
  incrementStep: (num?: number) => void;
  decrementStep: (num?: number) => void;
  isDrawersClose: boolean;
  closeAllDrawers: () => void;

  // --- Добавляем поля для управления Toast ---
  isToastOpen: boolean; // флаг, открыт ли Toast
  openToast: () => void; // метод для открытия Toast
  closeToast: () => void; // метод для закрытия Toast

  toastMessage: string; // сообщение в Toast
  setToastMessage: (message: string) => void;

  // --- Добавляем поля для управления Drawer ---
  communityDrawer: boolean;
  openCommunityDrawer: () => void;
  closeCommunityDrawer: () => void;
  // New or existing place
  currentPlace: 'NEW' | 'EXISTING' | 'EVENT' | 'COLLECTION' | null;
  setCurrentPlace: (place: 'NEW' | 'EXISTING' | 'EVENT' | 'COLLECTION' | null) => void;
}

export const useStepStore = create<StepState>((set) => ({
  communityDrawer: false,
  step: 0,
  maxStep: 3,
  isDrawersClose: false,
  isToastOpen: false, // изначально Toast закрыт
  currentPlace: null,
  toastMessage: 'Сообщение в Toast',

  setCurrentPlace: (place) =>
    set(() => {
      let newMaxStep;
      let newCurrentPlace;
      switch (place) {
        case 'NEW':
          newMaxStep = 5;
          break;
        case 'EXISTING':
          newMaxStep = 3;
          break;
        case 'EVENT':
          newMaxStep = 6;
          newCurrentPlace = 1;
          break;
        case 'COLLECTION':
          newMaxStep = 3;
          newCurrentPlace = 1;
          break;
        default:
          newMaxStep = 0;
      }
      return {
        currentPlace: place,
        maxStep: newMaxStep,
        step: newCurrentPlace,
      };
    }),

  incrementStep: (num?: number) =>
    set((state) => {
      const incrementValue = typeof num === 'number' && !isNaN(num) ? num : 1; // Проверяем, что num — число
      const newStep = Math.min((state.step || 0) + incrementValue, state.maxStep); // Если step вдруг null, ставим 0

      return { step: newStep };
    }),
  decrementStep: (num?: number) =>
    set((state) => {
      const decrementValue = typeof num === 'number' && !isNaN(num) ? num : 1; // Проверяем, что num — число
      const newStep = Math.max((state.step || 0) - decrementValue, 0); // Если step вдруг null, ставим 0 и не уходим ниже 0

      // Если step стал 0, сбрасываем currentPlace
      if (newStep === 0) {
        return {
          step: newStep,
          currentPlace: null,
        };
      }

      return { step: newStep };
    }),

  closeAllDrawers: () => set({ isDrawersClose: true }),

  // --- Реализация Toast экшенов  и Drawer экшенов---
  openToast: () => set({ isToastOpen: true }),
  closeToast: () => set({ isToastOpen: false }),

  openCommunityDrawer: () => set({ communityDrawer: true }),
  closeCommunityDrawer: () => set({ communityDrawer: false, step: 0 }),
  setToastMessage: (message) => set({ toastMessage: message }),
}));
