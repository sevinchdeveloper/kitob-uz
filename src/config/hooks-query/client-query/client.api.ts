import { QueryKeys } from "@/config/query-keys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetClinetsResponse } from "./client.types";
import { AxiosError } from "axios";
import { getClients } from "@/config/connections/client.connections";

// ================================================================= GET CLIENTS
export const useClientsQuery = (page: number = 1, per_page: number = 10): UseQueryResult<GetClinetsResponse, AxiosError> => {
  return useQuery<GetClinetsResponse, AxiosError>({
    queryKey: [QueryKeys.CLIENTS, page, per_page],
    queryFn: () => getClients(page, per_page),
  });
};