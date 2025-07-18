import { apiAdmin } from "@/hooks/api_admin"
import { AddTaskFormData, AddTaskResponse, GetTasksResponse } from "../hooks-query/task-query/task.types";

// ========================== GET TASKS
export const getTasks = async (page: number, per_page: number): Promise<GetTasksResponse> =>{
    const response = await apiAdmin<GetTasksResponse>("GET",    `/task-categories?page=${page}&per_page=${per_page}`);
    return response.data
}

// ========================== ADD TASK
export const addTask = async (data: AddTaskFormData): Promise<AddTaskResponse> => {
    const response = await apiAdmin<AddTaskResponse>("POST", "/task-categories/create", data);
    return response.data
}