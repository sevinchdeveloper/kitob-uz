import { useState, ReactNode, useEffect } from "react";
import { DataContext } from "./DataContext";
import i18next from "i18next";
import { getToken } from "@/helpers/token-storage";
import { LOCAL_STORAGE_KEYS } from "@/helpers/localStorageKeys";
import { getStorage, setStorage } from "@/helpers/other-storage";

type Theme = "light" | "dark" | "system";

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  const storedTheme = getStorage(LOCAL_STORAGE_KEYS.THEME);
  const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(storedTheme === "dark" || storedTheme === "light" || storedTheme === "system" ? storedTheme : systemTheme);

  useEffect(() => {
    if (!storedTheme) {
      setStorage(LOCAL_STORAGE_KEYS.THEME, theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lang: string) => {
    if (lang !== "uz" && lang !== "ru") return;
    i18next.changeLanguage(lang);
  };

  const changeTheme = (newTheme: Theme) => {
    if (newTheme !== "light" && newTheme !== "dark" && newTheme !== "system") return;
    setTheme(newTheme);
    setStorage(LOCAL_STORAGE_KEYS.THEME, newTheme);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const token = getToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN);

    if (token) {
      setToken(token);
    } else {
      const isPublicPath = currentPath.startsWith("/auth") || currentPath === "/";
      if (!isPublicPath) {
        window.location.pathname = "/auth/login";
      }
    }
  }, []);


  return (
    <DataContext.Provider
      value={{
        setLanguage: changeLanguage,
        theme,
        setTheme: changeTheme,
        token,
        generateToken: setToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
