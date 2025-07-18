import { AxiosError } from "axios";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { QueryKeys } from "@/config/query-keys";
import { DataContext } from "@/context/DataContext";
import { showToastify } from "@/helpers/show-toastify";
import { LOCAL_STORAGE_KEYS } from "@/helpers/localStorageKeys";
import { authLogin } from "@/config/connections/auth.connections";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthLoginResponse, UnauthorizedResponse, ValidationErrorResponse } from "./auth.types";
import { setToken } from "@/helpers/token-storage";

// ================================================================= AUTH LOGIN
export const useAuthLogin = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { generateToken } = useContext(DataContext)
  return useMutation({
    mutationFn: authLogin,
    onSuccess: ({ token }: AuthLoginResponse) => {
      setToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN, token)
      showToastify({ message: `${t("auth.messages.success")}`, type: "success" });
      if (generateToken) {
        generateToken(token);
      }
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LOGIN] });
    },
    onError: (error: AxiosError<UnauthorizedResponse | ValidationErrorResponse>) => {
      if(error.status === 401){
        showToastify({ message: t("auth.messages.error_unauthorized"), type: "error" });
      }
    },
  });
};