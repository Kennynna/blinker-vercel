import { create } from 'zustand';

interface StepCategoryState {
  selectedCategories: number[];
  setSelectedCategories: (ids: number[] | ((prev: number[]) => number[])) => void;
}

export const useStepCategory = create<StepCategoryState>((set) => ({
  selectedCategories: [],
  setSelectedCategories: (ids) =>
    set((state) => ({
      selectedCategories: typeof ids === 'function' ? ids(state.selectedCategories) : ids,
    })),
}));
