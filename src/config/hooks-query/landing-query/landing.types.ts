export interface LandingBanner {
    _id: string,
    title: string,
    link: string,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface LandingBannerResponse {
    status: "success" | "error",
    message: string,
    data: LandingBanner[],
    totalUsers: number,
    totalPages: number
}

export interface LandingGenre {
    _id: string,
    name: string,
    bookCount: number,
    imgUrl: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface LandingGenreResponse {
    status: "success" | "error",
    message: string,
    data: LandingGenre[]
}

export interface LandingNewAgeLibraryBook {
    _id: string,
    name: string,
    author: {
        _id: string,
        fullName: string
    },
    amount: number,
    bookPrice: number,
    discount: number,
    hasDiscount: boolean,
    state: string,
    imgUrl: string,
    additionalImages: string[],
    rateCount: number,
    rating: number
}

export interface LandingNewAgeLibraryCategory {
    imgUrl: string;
    name: string;
    books: LandingNewAgeLibraryBook[];
}

export interface LandingNewAgeLibraryResponse {
    status: "success" | "error";
    message: string;
    data: LandingNewAgeLibraryCategory;
}
