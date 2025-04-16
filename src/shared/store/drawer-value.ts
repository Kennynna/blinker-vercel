'use client';

import { type Event, type Place } from '@/constants/markeritems';
import { create } from 'zustand';

interface DrawerValueState {
  defaultItems: Place[];
  item: Place | Event | null;
  itemType: 'PLACE' | 'EVENT' | null;
  value: 'default' | 'filter' | 'collection' | 'markItem';
  setWhatOpen: (value: DrawerValueState['value']) => void;
  setMarkerMarkerClick: (obj: Place | Event) => void;
  mapMarkerClick: (obj: Place | Event) => void;
  resetItem: () => void;
  resetOnlyItem: () => void;
  activeTypes: string[];
  spanText: string;
  fullText: string;
  setActiveFilters: (types: string[], spanText: string, fullText: string) => void;
  setItemType: (itemType: 'PLACE' | 'EVENT' | null) => void;
  isListingOpen: 'open' | 'fullOpen' | 'close';
  setIsListingOpen: (value: 'open' | 'fullOpen' | 'close') => void;
  cardClick: (obj: Place | Event) => void;
}

export const useDrawerValue = create<DrawerValueState>((set) => ({
  isListingOpen: 'fullOpen',
  item: null,
  itemType: null,
  defaultItems: [],
  value: 'default',
  activeTypes: ['all'],
  spanText: 'Хочу всё-всё и сразу',
  fullText:
    '- это для тех, кто хочет охватить всё: от незабываемых вечеров в баре до утренних пробежек по набережной. Мы собрали самые крутые места и мероприятия, чтобы ваш отдых был незабываемым!',

  setWhatOpen: (newValue: DrawerValueState['value']) => set({ value: newValue }),
  setMarkerMarkerClick: (obj) => {
    set({ item: obj });
  },
  cardClick: (obj) => {
    set({ item: obj });
    set({ value: 'markItem' });
  },
  mapMarkerClick: (obj) => {
    set({ item: obj });
  },
  resetItem: () => {
    set({ item: null });
    set({ isListingOpen: 'open' });
    set({ value: 'default' });
  },
  resetOnlyItem: () => {
    set({ item: null });
  },
  setActiveFilters: (types, spanText, fullText) => {
    set({ activeTypes: types, spanText, fullText });
  },

  setItemType: (itemType) => set({ itemType }),
  setIsListingOpen: (value) => set({ isListingOpen: value }),
}));
