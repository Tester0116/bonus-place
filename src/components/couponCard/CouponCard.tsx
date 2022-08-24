import sale from "../../assets/icons/card/sale-light.svg";
import dollar from "../../assets/icons/card/dollar.svg";
import "./CouponCard.scss";
import { Link } from "react-router-dom";
import { ICouponCard } from "../../models/coupon";
import { useFavoriteCoupon } from "../../hooks/useFavoriteCoupon";
import imgNo from "../../assets/img/no_img.png";
interface Props {
  coupon: ICouponCard;
  setFavoriteCoupons?: any;
  favoriteCoupons?: ICouponCard[];
}

const CouponCard = ({coupon}: Props) => {

  const {setFavoriteCoupon, isCouponCardFavorite} = useFavoriteCoupon(coupon)

  const isFavorite = isCouponCardFavorite(coupon)
  return (
    coupon && (
      <div className="couponCard">
           <svg onClick={setFavoriteCoupon} className="couponCard__favorite"  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.50098 0.312506C3.35763 0.313796 2.26147 0.768562 1.453 1.57703C0.644532 2.3855 0.189767 3.48166 0.188477 4.62501C0.188477 9.99923 7.48091 14.6804 9.00098 15.5972C10.521 14.6804 17.8135 9.99923 17.8135 4.62501C17.8133 3.62825 17.4679 2.66233 16.836 1.89146C16.2041 1.12059 15.3247 0.59236 14.3474 0.39657C13.3701 0.20078 12.3551 0.349519 11.475 0.817497C10.5949 1.28548 9.90412 2.04381 9.51998 2.96357C9.4772 3.06594 9.4051 3.15337 9.31275 3.21486C9.2204 3.27636 9.11193 3.30917 9.00098 3.30917C8.89003 3.30917 8.78156 3.27636 8.68921 3.21486C8.59686 3.15337 8.52476 3.06594 8.48198 2.96357C8.15501 2.17748 7.60226 1.50603 6.89364 1.03413C6.18501 0.562237 5.35235 0.311106 4.50098 0.312506Z" fill={isFavorite? "red" : "white"}/>
        </svg>
          <Link to={`/coupons/${coupon.id}`}>
          {coupon.preview_image ? (
            <img
              src={coupon.preview_image}
              alt="coupon"
              className="couponCard__img"
              onClick={e => {
                e.preventDefault()
              }}
              onDoubleClick={setFavoriteCoupon}
            />
          ) : (
            <img src={imgNo}
                 onClick={e => {
                    e.preventDefault()
                  }}
                 onDoubleClick={setFavoriteCoupon} alt="coupon" className="couponCard__img" />
          )}
          <div className="couponCard__sales">
            <p>{coupon.discount_percent}%</p>

          </div>
          <div className="couponCard__brand">
            <img src={coupon.company_logo} alt="" className="company__logo" />
            <p className="company__title">{coupon.company_name}</p>
          </div>
          <div className="company__description">
            <p>{coupon.title}</p>
          </div>
          <div className="couponCard__block-sales">
            <div className="couponCard__block-sale">
              <div className="sale__fire">
                <img src={sale} alt="" className="fire__icon" />
              </div>
              <div className="sale__text">
                <p className="text__title">Цена скидки с купоном:</p>
                <p className="text__price">
                  {coupon.price} с
                  <span className="span__price">
                    {coupon.old_price}
                    {coupon.old_price ? "c" : null}{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="couponCard__block-sale">
              <div className="sale__fire">
                <img src={dollar} alt="" className="fire__icon" />
              </div>
              <div className="sale__text">
                <p className="text__title">Цена за купон:</p>
                <p className="text__price">{coupon.price_for_coupon} сом</p>
              </div>
            </div>
          </div>
      </Link>
        </div>
    )
  );
};

export default CouponCard;
