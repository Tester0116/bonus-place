import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "./redux";
import {couponsApi} from "../redux/api/couponsApi";
import {ICouponCard} from "../models/coupon";
import {increaseHomePageNumber} from "../redux/reducers/CouponsSlice";

export const useInfiniteList = () => {
    const [coupons, setCoupons] = useState<ICouponCard[]>([])
    const dispatch = useAppDispatch()
    const page = useAppSelector(state => state.coupons.homePageNumber)
    const setPage = () => dispatch(increaseHomePageNumber(page + 1))

    const [count, setCount] = useState(0)

    useEffect(() => {
        Promise.all(
            [...new Array(page)]
                .map((_, i) => i + 1)
                .map((page) => dispatch(couponsApi.endpoints.getCoupons.initiate(page)))
        )
            .then((result) => {
                setCount(result[0].data.count)
                return result.flatMap(({ data }) => data?.results as ICouponCard[])
            })
            .then((result) => setCoupons(result))
    }, [page])

    return {
        isLoading: !coupons,
        coupons,
        page,
        setPage,
        count
    }
}