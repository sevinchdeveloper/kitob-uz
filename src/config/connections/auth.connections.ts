import { apiAdmin } from "@/hooks/api_admin";
import { AuthLoginData, AuthLoginResponse } from "../hooks-query/auth-query/auth.types";

export const authLogin = async (data: AuthLoginData): Promise<AuthLoginResponse> => {
  const response = await apiAdmin<AuthLoginResponse>("POST", "/login", data);
  return response.data;
};