import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { LandingBannerResponse, LandingGenreResponse, LandingNewAgeLibraryResponse } from "./landing.types";
import { AxiosError } from "axios";
import { QueryKeys } from "@/config/query-keys";
import { getLandingBanners, getLandingGenres, getLandingNewAgeLibrary } from "@/config/connections/landing.connections";

export const useLandingBannersQuery = (): UseQueryResult<LandingBannerResponse, AxiosError> => {
  return useQuery<LandingBannerResponse, AxiosError> ({
    queryKey: [QueryKeys.LANDING_BANNERS],
    queryFn: getLandingBanners
  })
}

export const useLandingGenresQuery = (): UseQueryResult<LandingGenreResponse, AxiosError> => {
  return useQuery<LandingGenreResponse, AxiosError> ({
    queryKey: [QueryKeys.LANDING_GENRES],
    queryFn: getLandingGenres
  })
}

export const useLandingNewAgeLibraryQuery = (): UseQueryResult<LandingNewAgeLibraryResponse, AxiosError> => {
  return useQuery<LandingNewAgeLibraryResponse, AxiosError> ({
    queryKey: [QueryKeys.LANDING_NEW_AGE_LIBRARY],
    queryFn: getLandingNewAgeLibrary
  })
}