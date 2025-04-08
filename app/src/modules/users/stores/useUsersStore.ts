import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UsersStore } from "../types/store.types";

export const useUsersStore = create<UsersStore>()(
  persist(
    (set) => ({
      logged: false,
      login: () => set({ logged: true }),
      logout: () => set({ logged: false }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
