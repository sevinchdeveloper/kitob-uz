import { ContextType } from "@/types/globalInterfaces";
import { createContext } from "react";

const defaultContextValue: ContextType = {
  language: "uz",
  setLanguage: () => {},
  theme: "light",
  setTheme: () => {},
};

export const DataContext = createContext(defaultContextValue);
