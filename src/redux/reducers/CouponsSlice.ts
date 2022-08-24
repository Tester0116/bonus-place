import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICouponCard} from "../../models/coupon";
import {getFavoriteCouponsFromLocalstorage} from "../../localstorage/favorites";

interface CouponsState {
    favoriteCoupons: ICouponCard[],
    homePageNumber: number
}

const initialState: CouponsState = {
    favoriteCoupons: getFavoriteCouponsFromLocalstorage(),
    homePageNumber: 1
}

export const couponsSlice = createSlice({
    name: 'coupons',
    initialState,
    reducers: {
        addCouponToFavoriteCoupons(state, action: PayloadAction<ICouponCard>){
            state.favoriteCoupons = [...state.favoriteCoupons, action.payload]
        },
        removeCouponFromFavoriteCoupons(state, action: PayloadAction<ICouponCard>){
            state.favoriteCoupons = state.favoriteCoupons.filter(coupon => coupon.id !== action.payload.id)
        },
        increaseHomePageNumber(state, action: PayloadAction<number>){
            state.homePageNumber = action.payload
        }
    },
})

export const {addCouponToFavoriteCoupons, removeCouponFromFavoriteCoupons, increaseHomePageNumber} = couponsSlice.actions

export default couponsSlice.reducer;