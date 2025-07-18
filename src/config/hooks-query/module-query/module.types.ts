import { Pagination } from "@/types/common.types";

export type Module = {
  id: number;
  name: string;
  description: string;
  module_type: "call" | "sms" | string;
  active: boolean;
  created_at: string | null;
  updated_at: string | null;
};

export type AddModuleFormData = {
  name: string;
  description?: string | null; 
  module_type: string;
  is_active?: boolean; 
};


export type UpdateModuleVariables = {
  id: number | null;
  data: AddModuleFormData;
};

// ===============================================================  RESPONSE TYPES  ==============================================================


// ======================================  GET MODULES RESPONSE
export type GetModulesResponse = {
  data: Module[];
  pagination: Pagination;
  filter: unknown[]; // agar bilsam, konkret tip qo‘yib ketaman 
};


// ======================================  ADD MODULE RESPONSE
export type AddModuleResponse = {
  message: string;
  data: Module
};


// ======================================  EDIT MODULE RESPONSE
export type EditModuleResponse = {
  name: string;
  description?: string | null; 
  module_type: string;
  is_active?: boolean; 
}