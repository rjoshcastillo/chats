import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type ThemeType = "light" | "dark";

interface ThemeStore {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => Promise<void>;
  loadTheme: () => Promise<void>;
}
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",

  setTheme: async (newTheme) => {
    set({ theme: newTheme });
    await AsyncStorage.setItem("app-theme", newTheme);
  },

  loadTheme: async () => {
    const stored = await AsyncStorage.getItem("app-theme");
    if (stored === "light" || stored === "dark") {
      set({ theme: stored });
    }
  },
}));
