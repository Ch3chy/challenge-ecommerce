import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CoreStore } from "../types/store.type";

export const useCoreStore = create<CoreStore>()(
  persist(
    (set) => ({
      countries: [],
      setCountries: (countries) => set({ countries }),
    }),
    {
      name: "core-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
