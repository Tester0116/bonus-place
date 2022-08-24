import './CouponsList.scss'
import CouponCard from "../couponCard/CouponCard";
import {ICouponCard} from "../../models/coupon";

interface Props {
    coupons: ICouponCard[]
    setFavoriteCoupons?: any,
    favoriteCoupons?: ICouponCard[]
}

const CouponsList = ({coupons, setFavoriteCoupons, favoriteCoupons}: Props) => {

    return coupons && (
        <section className="couponsList">
            <div className={"couponsList__content"}>
                {
                    coupons.map((coupon) =>
                        <CouponCard coupon={coupon}
                                    setFavoriteCoupons={setFavoriteCoupons}
                                    favoriteCoupons={favoriteCoupons}
                                    key={coupon.id}/>
                    )
                }
            </div>
        </section>
    );
};

export default CouponsList;