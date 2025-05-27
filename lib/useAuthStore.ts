import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  userName: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userName: '',
      isLoggedIn: false,
      login: (name) => set({ userName: name, isLoggedIn: true }),
      logout: () => set({ userName: '', isLoggedIn: false }),
    }),
    {
      name: 'auth-storage', // key in localStorage
    }
  )
);
