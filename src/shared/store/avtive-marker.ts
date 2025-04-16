'use client';

import { create } from 'zustand';





export interface ActiveMarker {
  markerValue: string | number;
  setActiveMarker: (newValue: string | number) => void
}


export const useActiveMarker = create<ActiveMarker>((set) => ({
  markerValue: 0,
  setActiveMarker: (newValue: string | number) => {
    set({ MarkerValue: newValue });
  },
}));
