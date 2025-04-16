import { create } from 'zustand';





interface IUserAuthData {
  telNumber: number | null;
  email: string | null;

  setTelNumber: (number: number) => void;
  setNewEmail: (email: string) => void;
}

export const useUserAuthData = create<IUserAuthData>((set) => ({
  telNumber: null,
  email: null,
  setTelNumber: (newTelNumber: number) =>
    set((state) => {
      return { telNumber: newTelNumber };
    }),
  setNewEmail: (newEmail: string) =>
    set((state) => {
      return { email: newEmail };
    }),
}));
