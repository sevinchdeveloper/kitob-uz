import { Pagination } from "@/types/common.types";

export type User = {
  id: number;
  name: string;
  phone: string;
  ext_number: string | null;
};

export type AddUserFormData = {
  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
  ext_number?: string;
  is_new_ext?: boolean | undefined;
}

export type UpdateUserVariables = {
  id: number | null;
  data: AddUserFormData;
};

// ===============================================================  RESPONSE TYPES  ==============================================================


// ======================================  GET USERS RESPONSE
export type GetUsersResponse = {
  data: User[];
  pagination: Pagination;
  filter: unknown[]; // agar bilsam, konkret tip qo‘yib ketaman 
};


// ======================================  ADD USER RESPONSE
export type AddUserResponse = {
  id: number;
  name: string;
  phone: string;
  phone_verified_at: string | null;
  ext_number: string | null;
  created_at: string;
  updated_at: string;
};

// ======================================  EDIT USER RESPONSE
export type EditUserResponse = {
  id: number;
  name: string;
  phone: string;
  ext_number: string | null;
  is_new_ext: boolean;
  created_at: string;
  updated_at: string
}