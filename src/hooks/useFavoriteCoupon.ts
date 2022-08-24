import {ICouponCard, ICouponsResponse} from "../models/coupon";
import {
    addCouponToFavoritesLocalstorage,
    isCouponFavorite,
    removeCouponFromFavoritesLocalstorage
} from "../localstorage/favorites";
import {addCouponToFavoriteCoupons, removeCouponFromFavoriteCoupons} from "../redux/reducers/CouponsSlice";
import {couponsApi} from "../redux/api/couponsApi";
import {useAppDispatch, useAppSelector} from "./redux";
import {useParams} from "react-router-dom";

export function useFavoriteCoupon(coupon: ICouponCard) {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const favoriteCoupons = useAppSelector(state => state.coupons.favoriteCoupons)

    const setFavorite = (response: ICouponsResponse) => {
        response?.results.forEach((post: ICouponCard) => {
            if(post.id === coupon.id){
                post.is_favorite = !isCouponFavorite(coupon);
            }
        })
    }

    return {
        setFavoriteCoupon: () => {
            dispatch(couponsApi.util.updateQueryData('getCategoryCoupons', id, setFavorite))
            dispatch(couponsApi.util.updateQueryData('getCoupons', undefined, setFavorite))

            const updatedCoupon = {
                ...coupon,
                is_favorite: !isCouponFavorite(coupon)
            }
            if(isCouponFavorite(coupon)){
                dispatch(removeCouponFromFavoriteCoupons(updatedCoupon))
                removeCouponFromFavoritesLocalstorage(updatedCoupon)
            } else{
                dispatch(addCouponToFavoriteCoupons(updatedCoupon))
                addCouponToFavoritesLocalstorage(updatedCoupon)
            }
        },

        isCouponFavorite: !!favoriteCoupons.find(item => item.id == id),
        isCouponCardFavorite: (card: ICouponCard) => !!favoriteCoupons.find(item => item.id == card.id)
    }
}