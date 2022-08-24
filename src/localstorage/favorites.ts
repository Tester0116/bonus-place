import {ICouponCard} from "../models/coupon";

export const addCouponToFavoritesLocalstorage = (coupon: ICouponCard) => {
    const favoriteCoupons = getFavoriteCouponsFromLocalstorage()
    localStorage.setItem('favorites', JSON.stringify([
        ...favoriteCoupons,
        coupon
    ]))
}

export const removeCouponFromFavoritesLocalstorage = (coupon: ICouponCard) => {
    const favoriteCoupons = getFavoriteCouponsFromLocalstorage()
    localStorage.setItem('favorites', JSON.stringify(
        favoriteCoupons.filter(item => item.id !== coupon.id)
    ))
}

export const getFavoriteCouponsFromLocalstorage = () : ICouponCard[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export const isCouponFavorite = (coupon: ICouponCard) : boolean => {
    const favoriteCoupons = getFavoriteCouponsFromLocalstorage()
    return !!favoriteCoupons.find(item => item.id === coupon.id)
}