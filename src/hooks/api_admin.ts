import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { getToken, removeToken } from "@/helpers/token-storage";
import i18n from "@/locales/i18next";
import { LOCAL_STORAGE_KEYS } from "@/helpers/localStorageKeys";
import { ToastService } from "@/lib/toastService";

const BASE_URL = import.meta.env.VITE_API_URL + "/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ====================================================== HAR BIR REQUESTDAN OLDINGI MIDDLEWARE
api.interceptors.request.use(
  (config) => {
    const token = getToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ======================================================= HAR BIR RESPONSEDAN OLDINGI MIDDLEWARE
api.interceptors.response.use((response) => response,(error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      removeToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN);
    }
    if (error.code === "ERR_NETWORK") {
      const messages = {
        uz: "Tarmoqda muammo yuz berdi. Iltimos, qaytadan urinib ko'ring.",
        ru: "Произошла ошибка сети. Пожалуйста, попробуйте снова.",
      };
      const lang = i18n.language as keyof typeof messages;
      ToastService.showError(messages[lang] || messages["uz"]);
    }
    return Promise.reject(error);
  }
);

/**
 * Umumiy API so‘rov funksiyasi
 * @param method - "GET", "POST", "PUT", "DELETE" va boshqalar
 * @param url - API endpoint masalan "/users"
 * @param data - So‘rov body yoki query param (GET uchun kerak bo‘lsa)
 * @param config - Qo‘shimcha konfiguratsiyalar (headers va h.k.)
**/

export const apiAdmin = async <T = unknown>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.request<T>({method, url, data, ...config });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(`[${method}] ${url} =>`, error.response?.data);
      throw error;
    } else {
      console.error("Noma'lum xatolik:", error);
      throw new Error("Tarmoq yoki ilova xatosi");
    }
  }
};

