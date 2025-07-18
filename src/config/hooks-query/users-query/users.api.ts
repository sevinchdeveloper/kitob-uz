import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { QueryKeys } from "@/config/query-keys";
import { addUser, getUser, getUsers, updateUser } from "@/config/connections/users.connections";
import { AddUserFormData, AddUserResponse, EditUserResponse, GetUsersResponse, UpdateUserVariables } from "./users.types";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";
import { UnauthorizedResponse, ValidationErrorResponse } from "../auth-query/auth.types";
import { showToastify } from "@/helpers/show-toastify";

// ================================================================= GET USERS
export const useUsersQuery = (page: number = 1, per_page: number = 10): UseQueryResult<GetUsersResponse, AxiosError> => {
  return useQuery<GetUsersResponse, AxiosError>({
    queryKey: [QueryKeys.USERS, page, per_page],
    queryFn: () => getUsers(page, per_page),
  });
};



// ================================================================= GET USER
export const useUserQuery = (id: number | null, enabled: boolean = true): UseQueryResult<EditUserResponse, AxiosError> => {
  return useQuery<EditUserResponse, AxiosError>({
    queryKey: [QueryKeys.USER, id],
    queryFn: () => getUser(id),
    enabled,
  });
};



// ================================================================= CREATE USER
export const useAddUserMutation = (): UseMutationResult<AddUserResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, AddUserFormData> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      showToastify({ message: t("users.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
};



// ================================================================= UPDATE USER
export const useUpdateUserMutation = (): UseMutationResult<EditUserResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, UpdateUserVariables> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }) => updateUser(id, data),
    onSuccess: () => {
      showToastify({ message: t("users.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
}; 