import { Pagination } from "@/types/common.types";

export type Task = {
  id: number,
  name: string,
  description: string,
  sort_order: number,
  is_active: boolean,
  parent_id: number | null,
  created_at: string,
  updated_at: string
}

export type AddTaskFormData = {
  name: string;
  description?: string | null;
  parent_id?: number | null;
  sort_order?: number | null;
  is_active?: boolean | null;
};

// ===============================================================  RESPONSE TYPES  ==============================================================

// ======================================  GET TASKS RESPONSE
export type GetTasksResponse = {
  data: Task[],
  pagination: Pagination;
  filter: unknown[]; // agar bilsam, konkret tip qo‘yib ketaman 
}

// ======================================  ADD TASK RESPONSE
export interface AddTaskResponseData {
  id: number;
  name: string;
  description: string | null;
  sort_order: number;
  is_active: boolean;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface AddTaskResponse {
  message: string;
  data: AddTaskResponseData;
}


// ======================================  EDIT TASK RESPONSE