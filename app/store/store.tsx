import { create } from 'zustand';

type Store = {
  email: string;
  setEmail: (email: string) => void;
};

export const useStore = create<Store>((set) => ({
  email: '',  // initial state
  setEmail: (email: string) => set({ email }),  // action to update state
}));
