import { apiAdmin } from "@/hooks/api_admin";
import { AddUserFormData, AddUserResponse, EditUserResponse, GetUsersResponse } from "../hooks-query/users-query/users.types";

// ========================== GET USERS
export const getUsers = async (page: number, per_page: number): Promise<GetUsersResponse> => {
  const response = await apiAdmin<GetUsersResponse>("GET", `/users?page=${page}&per_page=${per_page}`);
  return response.data;
};


// ========================== GET USER
export const getUser = async (id: number | null): Promise<EditUserResponse> => {
  const response = await apiAdmin<EditUserResponse>("GET", `/users/${id}`);
  return response.data;
};


// ========================== ADD USER
export const addUser = async (data: AddUserFormData): Promise<AddUserResponse> => {
  const response = await apiAdmin<AddUserResponse>("POST", "/users/create", data);
  return response.data;
};


// ========================== UPDATE USER
export const updateUser = async (id: number | null, data: AddUserFormData): Promise<EditUserResponse> => {
  const response = await apiAdmin<EditUserResponse>("PUT", `/users/${id}`, data);
  return response.data;
};