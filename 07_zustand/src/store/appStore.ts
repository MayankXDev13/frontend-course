import { create } from "zustand";

type Theme = "light" | "dark";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  // Auth slice
  user: User | null;
  login: (user: User) => void;
  logout: () => void;

  // UI slice
  theme: Theme;
  toggleTheme: () => void;
}


export const useAppStore = create<AppState>((set) => ({
  // Auth slice
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),

  // UI slice
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
