import { ToastOptions, ToastPosition, Theme } from "react-toastify";

export const DEFAULT_TOAST_OPTIONS: ToastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored" as Theme,
};
