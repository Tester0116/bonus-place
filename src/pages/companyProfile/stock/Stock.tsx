import React, { FC } from 'react';
import CouponCard from '../../../components/couponCard/CouponCard';
import { ICouponCard } from '../../../models/coupon';
import './Stock.scss'

interface stokProp{
  coupons: ICouponCard[]
}
const Stock:FC<stokProp> =  ({coupons}) => {
    return (
        <div className="ticket">
        <p className="ticket__title">Акции</p>
        <div className="ticket__block">
          {
            coupons.map((element, index)=>(
              <CouponCard coupon={element} key={index}/>
            ))
          }
        </div>
      </div>
    );
};

export default Stock;