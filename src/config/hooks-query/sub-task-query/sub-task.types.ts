import { Pagination } from "@/types/common.types";

export type SubTask = {
    id: number,
    name: string,
    description: string,
    parent_id: number | null,
    sort_order: number,
    is_active: boolean,
    created_at: string,
    updated_at: string
}
export type AddSubTaskFormData = {
    name: string;
    description?: string | null;
    task_category_id: string;
    sort_order?: number | null;
    is_active?: boolean | null;
};

// ===============================================================  RESPONSE TYPES  ==============================================================

// ======================================  GET SUB TASKS RESPONSE
export type GetSubTasksResponse = {
    data: SubTask[];
    pagination: Pagination;
    filter: unknown[]; // agar bilsam, konkret tip qo‘yib ketaman 
};

// ======================================  ADD SUB TASK RESPONSE
export interface AddSubTaskResponseData {
    id: number,
    name: string,
    description: string | null,
    task_category_id: number,
    created_at: string,
    updated_at: string
}

export interface AddSubTaskResponse {
    message: string;
    data: AddSubTaskResponseData;
}
