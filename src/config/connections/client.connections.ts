import { apiAdmin } from "@/hooks/api_admin";
import { GetClinetsResponse } from "../hooks-query/client-query/client.types";

// ========================== GET CLIENTS
export const getClients = async (page: number, per_page: number): Promise<GetClinetsResponse> => {
  const response = await apiAdmin<GetClinetsResponse>("GET", `/clients?page=${page}&per_page=${per_page}`);
  return response.data;
};