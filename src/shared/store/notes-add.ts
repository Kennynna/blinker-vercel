'use client';

import { create } from 'zustand';

interface INotesState {
  notesValue: string;
  setNewNoteValue: (notesValue: string) => void;
}

export const useStoreNotesAdd = create<INotesState>((set) => ({
  notesValue: '',
  setNewNoteValue: (notesValue: string) => set({ notesValue }),
}));
