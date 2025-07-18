import { addTask, getTasks } from "@/config/connections/task.connections";
import { QueryKeys } from "@/config/query-keys";
import { showToastify } from "@/helpers/show-toastify";
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { AddTaskFormData, AddTaskResponse, GetTasksResponse } from "./task.types";
import { AxiosError } from "axios";
import { UnauthorizedResponse, ValidationErrorResponse } from "../auth-query/auth.types";

// ================================================================= GET TASKS
export const useTaksQuery = (page: number = 1, per_page: number = 10): UseQueryResult<GetTasksResponse, AxiosError> => {
  return useQuery<GetTasksResponse, AxiosError>({
    queryKey: [QueryKeys.TASKS, page, per_page],
    queryFn: () => getTasks(page, per_page),
  })
}

// ================================================================= CREATE TASK
export const useAddTaskMutation = (): UseMutationResult<AddTaskResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, AddTaskFormData> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      showToastify({ message: t("users.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TASKS] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
};