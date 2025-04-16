import { create } from 'zustand';

interface useAuthStepStore {
  step: number;
  maxStep: number;
  incrementStep: (num?: number) => void;
  decrementStep: (num?: number) => void;

  // --- Добавляем поля для управления Toast ---
  isToastOpen: boolean; // флаг, открыт ли Toast
  openToast: () => void; // метод для открытия Toast
  closeToast: () => void; // метод для закрытия Toast

  toastMessage: string; // сообщение в Toast
  setToastMessage: (message: string) => void;
}

export const useAuthStepStore = create<useAuthStepStore>((set) => ({
  communityDrawer: false,
  step: 0,
  maxStep: 4,
  isDrawersClose: false,
  isToastOpen: false, // изначально Toast закрыт
  currentPlace: null,
  toastMessage: 'Сообщение в Toast',

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

      return { step: newStep };
    }),

  openToast: () => set({ isToastOpen: true }),
  closeToast: () => set({ isToastOpen: false }),

  setToastMessage: (message) => set({ toastMessage: message }),
}));
