import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {transformCouponProfile, transformCoupons} from "../middlewares/transformCoupons";
import {ICouponCard, ICouponsResponse, ISearchByTitle, ISearchSortArg} from "../../models/coupon";

export const couponsApi: any = createApi({
    reducerPath: 'couponsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.178.44.117/api/v1/coupons' }),
    tagTypes: ['coupons', 'couponProfile', 'categoryCoupons', 'searchCoupons', 'searchCouponsByTitle'],

    endpoints: (build) => ({

        getCoupons: build.query<ICouponsResponse, string | number>({
            query: (page: string | number) => `/?page=${page ? page : 1}`,
            providesTags: () => ['coupons'],
            transformResponse: (result: any) => transformCoupons(result),
        }),

        getCouponProfile: build.query<ICouponCard, string | undefined | void>({
            query: (id: string) => ({
                url: `/${id}`
            }),
            providesTags: () => ['couponProfile'],
            transformResponse: (coupon: ICouponCard) => transformCouponProfile(coupon)
        }),

        getCategoryCoupons: build.query<ICouponsResponse, string | void>({
            query: ( categoryId: string | void) => ({
                url: `/subcategory/${categoryId}`
            }),
            providesTags: () => ['categoryCoupons'],
            transformResponse: (result: any) => transformCoupons(result),
        }),

        searchCoupons: build.query<ICouponsResponse, ISearchSortArg >({
            query: (obj) => ({
                url: `/search/?search=${obj.value}&sort_by=${obj.sort}/`,
            }),
            providesTags: () => ['searchCoupons']
        }),

        searchByTitle: build.query<ISearchByTitle[], string>({
            query: (value) => ({
                url: `/search-text/?name=${value}/`,
            }),
            providesTags: () => ['searchCouponsByTitle']
        })
    })
})


