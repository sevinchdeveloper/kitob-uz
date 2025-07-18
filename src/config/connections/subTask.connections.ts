import { apiAdmin } from "@/hooks/api_admin"
import { AddSubTaskFormData, AddSubTaskResponse, GetSubTasksResponse } from "../hooks-query/sub-task-query/sub-task.types";

// ========================== GET SUB TASKS
export const getSubTasks = async (page: number, per_page: number): Promise<GetSubTasksResponse>=> {
    const response = await apiAdmin<GetSubTasksResponse>("GET", `/task-subcategories?page=${page}&per_page=${per_page}`);
    return response.data;
}

// ========================== ADD SUB TASK
export const addSubTask = async (data: AddSubTaskFormData): Promise<AddSubTaskResponse> => {
    const response = await apiAdmin<AddSubTaskResponse>("POST", "/task-subcategories/create", data);
    return response.data
}