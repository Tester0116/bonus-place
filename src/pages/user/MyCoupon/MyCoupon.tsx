import React, { useEffect, useId, useState } from 'react';
import CouponCard from '../../../components/couponCard/CouponCard';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { couponsSlice } from '../../../redux/reducers/CouponsSlice';
import "./MyCoupon.scss";
interface sortType{
  sort: string,
  name: string,
}
const sort:sortType[]=[
  {
    sort: "active",
    name: "Активные"
  },
  {
    sort: "activated",
    name: "Активированные",
  },
  {
    sort: "expired",
    name: "Истекшие"
  }
]
function MyCoupon() {
  const [activeSort, setActiveSort]=useState<number>(0);
  const uniqId=useId();
  const dispatch = useAppDispatch()

  // const {getCards} = couponsSlice.actions
  // const {cards} = useAppSelector(state=> state.couponsList);

  // useEffect(()=>{
  //   dispatch(getCards());
  // },[])

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  
  return (
    <section className='my-coupon'>
      <h2 className='my-coupon__title'>Мои купоны</h2>
      <div className="line"></div>
      <div className="my-coupon__inner">
        <div className="my-coupon-sort">
          {
            sort.map((item:sortType, index)=>(
              <button key={`${uniqId}__sort__${index}`} className={index===activeSort?"active--sort":""} onClick={()=>{setActiveSort(index)}}>{item.name}</button>
            ))
          }
        </div>
        {/*<div className="my-coupon__coupons">*/}
        {/*  {*/}
        {/*    cards.map((coupon: any ,index: number )=>(*/}
        {/*      <CouponCard {...coupon} key={`${uniqId}__coupon__${index}`}/>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default MyCoupon