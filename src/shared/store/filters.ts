import { create } from 'zustand';

import { Tag } from '@/components/community/constants';

interface IFiltersState {
  activeTab: 'EVENT' | 'PLACE';
  setActiveTab: (activeTab: 'EVENT' | 'PLACE') => void;
  selectedPlaceCategory: string[];
  togglePlaceCategory: (idCategory: string) => void;
  selectedEventCategory: string[];
  toggleEventCategory: (idCategory: string) => void;
  tagsOfPlace: Tag[];
  setTagsOfPlace: (tag: Tag) => void;
  removeUnavailableTagsOfPlace: (validTagIds: string[]) => void;
  tagsOfEvent: Tag[];
  setTagsOfEvent: (tag: Tag) => void;
  removeUnavailableTagsOfEvent: (validTagIds: string[]) => void;
  selectedCollectionId: string | null;
  selectedCollectionCategories: string[];
  setSelectedCollection: (collectionId: string | null, collectionCategoryIds: string[]) => void;
  clearSelectedCollection: () => void;
}

export const useStoreFilters = create<IFiltersState>((set, get) => ({
  activeTab: 'EVENT',
  selectedPlaceCategory: [],
  selectedEventCategory: [],
  tagsOfPlace: [],
  tagsOfEvent: [],
  selectedCollectionId: null,
  selectedCollectionCategories: [],

  setActiveTab(activeTab) {
    if (get().activeTab !== activeTab) {
      if (activeTab === 'PLACE') {
        set({
          activeTab,
          selectedEventCategory: [],
          tagsOfEvent: [],
          selectedCollectionId: null,
          selectedCollectionCategories: [],
        });
      } else {
        set({
          activeTab,
          selectedPlaceCategory: [],
          tagsOfPlace: [],
          selectedCollectionId: null,
          selectedCollectionCategories: [],
        });
      }
    }
  },

  togglePlaceCategory(idCategory: string) {
    set((state) => {
      const isSelected = state.selectedPlaceCategory.includes(idCategory);
      const updatedCategories = isSelected
        ? state.selectedPlaceCategory.filter((id) => id !== idCategory)
        : [...state.selectedPlaceCategory, idCategory];

      const collectionCategories = state.selectedCollectionCategories;
      const shouldDeselectCollection = collectionCategories.some((cat) => !updatedCategories.includes(cat));

      return {
        selectedPlaceCategory: updatedCategories,
        selectedCollectionId: shouldDeselectCollection ? null : state.selectedCollectionId,
      };
    });
  },

  toggleEventCategory(idCategory: string) {
    set((state) => {
      const isSelected = state.selectedEventCategory.includes(idCategory);
      const updatedCategories = isSelected
        ? state.selectedEventCategory.filter((id) => id !== idCategory)
        : [...state.selectedEventCategory, idCategory];

      const collectionCategories = state.selectedCollectionCategories;
      const shouldDeselectCollection = collectionCategories.some((cat) => !updatedCategories.includes(cat));

      return {
        selectedEventCategory: updatedCategories,
        selectedCollectionId: shouldDeselectCollection ? null : state.selectedCollectionId,
      };
    });
  },

  setSelectedCollection(collectionId: string | null, collectionCategoryIds: string[]) {
    set((state) => {
      if (state.activeTab === 'PLACE') {
        return {
          selectedCollectionId: collectionId,
          selectedCollectionCategories: collectionCategoryIds,
          selectedPlaceCategory: collectionId ? collectionCategoryIds : state.selectedPlaceCategory,
        };
      } else {
        return {
          selectedCollectionId: collectionId,
          selectedCollectionCategories: collectionCategoryIds,
          selectedEventCategory: collectionId ? collectionCategoryIds : state.selectedEventCategory,
        };
      }
    });
  },

  clearSelectedCollection() {
    set({ selectedCollectionId: null, selectedCollectionCategories: [] });
  },

  setTagsOfPlace(tag: Tag) {
    set((state) => {
      const exists = state.tagsOfPlace.some((t) => t.string_representation === tag.string_representation);
      return {
        tagsOfPlace: exists
          ? state.tagsOfPlace.filter((t) => t.string_representation !== tag.string_representation)
          : [...state.tagsOfPlace, tag],
      };
    });
  },

  removeUnavailableTagsOfPlace(validTagIds: string[]) {
    set((state) => ({
      tagsOfPlace: state.tagsOfPlace.filter((tag) => validTagIds.includes(tag.value_id)),
    }));
  },

  setTagsOfEvent(tag: Tag) {
    set((state) => {
      const exists = state.tagsOfEvent.some((t) => t.string_representation === tag.string_representation);
      return {
        tagsOfEvent: exists
          ? state.tagsOfEvent.filter((t) => t.string_representation !== tag.string_representation)
          : [...state.tagsOfEvent, tag],
      };
    });
  },

  removeUnavailableTagsOfEvent(validTagIds: string[]) {
    set((state) => ({
      tagsOfEvent: state.tagsOfEvent.filter((tag) => validTagIds.includes(tag.value_id)),
    }));
  },
}));
