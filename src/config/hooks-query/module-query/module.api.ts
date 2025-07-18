import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { QueryKeys } from "@/config/query-keys";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";
import { UnauthorizedResponse, ValidationErrorResponse } from "../auth-query/auth.types";
import { showToastify } from "@/helpers/show-toastify";
import { addModule, getModule, getModules, updateModule } from "@/config/connections/module.connections";
import { AddModuleFormData, AddModuleResponse, EditModuleResponse, GetModulesResponse, Module, UpdateModuleVariables } from "./module.types";

// ================================================================= GET MODULES
export const useModulesQuery = (page: number = 1, per_page: number = 10): UseQueryResult<GetModulesResponse, AxiosError> => {
  return useQuery<GetModulesResponse, AxiosError>({
    queryKey: [QueryKeys.MODULES, page, per_page],
    queryFn: () => getModules(page, per_page),
  });
};



// ================================================================= GET MODULE
export const useModuleQuery = (id: number | null, enabled: boolean = true): UseQueryResult<Module, AxiosError> => {
  return useQuery<Module, AxiosError>({
    queryKey: [QueryKeys.MODULE, id],
    queryFn: () => getModule(id),
    enabled,
  });
};



// ================================================================= CREATE MODULE
export const useAddModuleMutation = (): UseMutationResult<AddModuleResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, AddModuleFormData> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: addModule,
    onSuccess: () => {
      showToastify({ message: t("users.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.MODULES] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
};



// ================================================================= UPDATE MODULE
export const useUpdateModuleMutation = (): UseMutationResult<EditModuleResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, UpdateModuleVariables> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }) => updateModule(id, data),
    onSuccess: () => {
      showToastify({ message: t("users.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.MODULES] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
}; 