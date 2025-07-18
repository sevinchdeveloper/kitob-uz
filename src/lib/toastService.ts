// src/lib/toast/toastService.ts

import { toast, ToastOptions, TypeOptions } from "react-toastify";
import { DEFAULT_TOAST_OPTIONS } from "./toastConfig";

const show = (message: string, type: TypeOptions = "default", options: Partial<ToastOptions> = {}, toastId?: string) => {

  const config: ToastOptions = {
    ...DEFAULT_TOAST_OPTIONS,
    ...options,
    type,
    ...(toastId ? { toastId } : {}),
  };

  toast(message, config);
};

const showSuccess = (message: string, options?: Partial<ToastOptions>, id?: string) => show(message, "success", options, id);
const showError = (message: string, options?: Partial<ToastOptions>, id?: string) => show(message, "error", options, id);
const showInfo = (message: string, options?: Partial<ToastOptions>, id?: string) => show(message, "info", options, id);
const showWarning = (message: string, options?: Partial<ToastOptions>, id?: string) => show(message, "warning", options, id);
const showLoading = (message: string, options?: Partial<ToastOptions>, id?: string) => toast.loading(message, { ...DEFAULT_TOAST_OPTIONS, ...options, toastId: id });

const dismiss = (id?: string) => {
  if (id) {
    toast.dismiss(id);
  } else {
    toast.dismiss();
  }
};

export const ToastService = {
  show,
  showSuccess,
  showError,
  showInfo,
  showWarning,
  showLoading,
  dismiss,
};
