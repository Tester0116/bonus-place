import {ICouponCard, ICouponsResponse} from "../../models/coupon";
import {isCouponFavorite} from "../../localstorage/favorites";

export const transformCoupons = (
    data: ICouponsResponse
) : ICouponsResponse => {
    return {
        ...data,
        results: data.results.map(coupon => ({
            ...coupon,
            is_favorite: isCouponFavorite(coupon)
        }))
    }
}

export const transformCouponProfile = (coupon: ICouponCard) : ICouponCard => {
    return {
        ...coupon,
        is_favorite: isCouponFavorite(coupon),
        similar_products: coupon.similar_products?.map(product => ({
            ...product,
            is_favorite: isCouponFavorite(product)
        }))
    }
}


