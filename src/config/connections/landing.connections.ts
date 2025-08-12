import { apiAdmin } from "@/hooks/api_admin"
import { LandingBannerResponse, LandingGenreResponse, LandingNewAgeLibraryResponse } from "../hooks-query/landing-query/landing.types"

export const getLandingBanners = async () => {
    const response = await apiAdmin<LandingBannerResponse>("GET", "/banners")
    return response.data
}

export const getLandingGenres = async () => {
    const response = await apiAdmin<LandingGenreResponse>("GET", "/genres")
    return response.data
}

export const getLandingNewAgeLibrary = async () => {
    const response = await apiAdmin<LandingNewAgeLibraryResponse>(
        "GET", 
        "/landing/new-age-library"
    );
    return response.data;
}
