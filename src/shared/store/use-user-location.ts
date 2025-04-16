'use client';

import { create } from 'zustand';





export enum Crimea {
lon = 82.935733
lat = 55.008353
}

interface UserLocationState {
  userLat: number | null;
  userLon: number | null;
  newUserLocation: (lat: number , lan: number ) => void;
}

export const userLocationState = create<UserLocationState>((set) => ({
  userLat: null,
  userLon: null,
  newUserLocation: (lat: number, lan: number) => {
    set({ userLat: lat, userLon: lan });
  },
}));
