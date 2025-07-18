import { QueryKeys } from "@/config/query-keys";
import { showToastify } from "@/helpers/show-toastify";
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";
import { UnauthorizedResponse, ValidationErrorResponse } from "../auth-query/auth.types";
import { AddSubTaskFormData, AddSubTaskResponse, GetSubTasksResponse} from "./sub-task.types";
import { addSubTask, getSubTasks } from "@/config/connections/subTask.connections";

// ================================================================= GET SUB TASK
export const useSubTasksQuery = (page: number = 1, per_page: number = 10): UseQueryResult<GetSubTasksResponse, AxiosError> => {
  return useQuery<GetSubTasksResponse, AxiosError>({
    queryKey: [QueryKeys.SUBTASKS, page, per_page],
    queryFn: () => getSubTasks(page, per_page),
  });
};

// ================================================================= CREATE SUB TASK
export const useAddSubTaskMutation = (): UseMutationResult<AddSubTaskResponse, AxiosError<UnauthorizedResponse | ValidationErrorResponse>, AddSubTaskFormData> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: addSubTask,
    onSuccess: () => {
      showToastify({ message: t("taskSubCategory.messages.success"), type: "success" });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.SUBTASKS] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        showToastify({ message: t("users.messages.error"), type: "error" });
      }
    },
  });
};