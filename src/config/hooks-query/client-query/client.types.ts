
export type Client = {
    id: number,
    pinfl: string,
    gender: number,
    birth_date: string,
    work_place: string | null,
    passport_address: string | null,
    area_code: string,
    external_client_id: string,
    address: string,
    region_code: string,
    passport_number: string,
    full_name: string,
    created_at: string | null,
    updated_at: string | null,
    contracts: unknown[]  // agar bilsam, konkret tip qo‘yib ketaman 
};



// ===============================================================  RESPONSE TYPES  ==============================================================

import { Pagination } from "@/types/common.types";

// ======================================  GET CLIENTS RESPONSE
export type GetClinetsResponse = {
    data: Client[];
    pagination: Pagination;
    filter: unknown[]; // agar bilsam, konkret tip qo‘yib ketaman 
};