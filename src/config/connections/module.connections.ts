import { apiAdmin } from "@/hooks/api_admin";
import { AddModuleFormData, AddModuleResponse, EditModuleResponse, GetModulesResponse, Module } from "../hooks-query/module-query/module.types";

// ========================== GET MODULES
export const getModules = async (page: number, per_page: number): Promise<GetModulesResponse> => {
  const response = await apiAdmin<GetModulesResponse>("GET", `/module?page=${page}&per_page=${per_page}`);
  return response.data;
};


// ========================== GET MODULE
export const getModule = async (id: number | null): Promise<Module> => {
  const response = await apiAdmin<Module>("GET", `/module/${id}`);
  return response.data;
};


// ========================== ADD MODULE
export const addModule = async (data: AddModuleFormData): Promise<AddModuleResponse> => {
  const response = await apiAdmin<AddModuleResponse>("POST", "/module/create", data);
  return response.data;
};


// ========================== UPDATE MODULE
export const updateModule = async (id: number | null, data: AddModuleFormData): Promise<EditModuleResponse> => {
  const response = await apiAdmin<EditModuleResponse>("PUT", `/module/${id}`, data);
  return response.data;
};