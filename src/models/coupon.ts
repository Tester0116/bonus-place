import { ICompanyCoordinates } from "./company"

export interface ICouponsResponse {
    count: number,
    next: any,
    previous: any,
    results: ICouponCard[]
}

export interface ICouponCard {
    id: string,
    title: string,
    conditions: string,
    description: string,
    preview_image: string,
    discount_percent: number,
    price: string,
    old_price: string,
    is_active: boolean,
    company_name: string,
    company_logo: string,
    order: number,
    price_for_coupon: string,
    is_favorite?: boolean,
    start_active_date?: string,
    end_active_date?: string,
    bought_quantity?: number,
    images?: ICouponProfileImage[],
    map_locations?: [],
    qr_coupon?: any,
    similar_products?: ICouponCard[] | [],
    company_id: string,
    is_bought: boolean
}

export interface ICouponProfileImage {
    id: string,
    image: string
}

export interface ICouponProfile {
    id: string,
    title: string,
    conditions: string,
    description: string,
    preview_image: string,
    discount_percent: number,
    price: string,
    old_price: string,
    is_active: boolean,
    company_name: string,
    company_logo: string,
    order: number,
    price_for_coupon: string,
    start_active_date: string,
    end_active_date: string,
    bought_quantity: number,
    images: ICouponProfileImage[],
    map_locations: ICompanyCoordinates[],
    qr_coupon: any,
    similar_products: []
}
export interface ISearchByTitle{
    title: string
}
export interface ISearchSortArg{
    value: string,
    sort:string
}
