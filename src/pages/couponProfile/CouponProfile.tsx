import React, { useEffect, useState } from "react";
import "./CouponProfile.scss";
import Address from "./address/Address";
import Carousel from "./carousel/Carousel";
import Description from "./description/Description";
import Terms from "./terms/Terms";
import HTMLReactParser from "html-react-parser";

import ticket from "../../assets/icons/contact/tiket.svg";
import time from "../../assets/icons/contact/oclock.svg";

import vk from "../../assets/icons/social_meadia/vk.svg";
import fb from "../../assets/icons/social_meadia/fa.svg";
import ok from "../../assets/icons/social_meadia/ok.svg";
import tg from "../../assets/icons/social_meadia/tg.svg";
import wa from "../../assets/icons/social_meadia/wa.svg";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import QrModal from "../../components/qrModal/QrModal";
import { useParams } from "react-router-dom";
import { couponsApi } from "../../redux/api/couponsApi";
import { Link } from "react-router-dom";
import { useFavoriteCoupon } from "../../hooks/useFavoriteCoupon";
import CouponsList from "../../components/couponsList/CouponsList";
import Map from "../../components/map/map";
import { treatmentCompanyCoordinates } from "../../hooks/treatmentCoordinates";

const CouponProfile = () => {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [visibleQr, setVisibleQr] = useState<boolean>(false);
  const { id } = useParams();
  const { data } = couponsApi.useGetCouponProfileQuery(id);

  const { setFavoriteCoupon, isCouponFavorite } = useFavoriteCoupon(data);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="couponProfile">
      {visibleQr && <QrModal setVisibleQr={setVisibleQr} />}
      <div className="container">
        <BreadCrumbs
          location={[
            {
              folder: `/coupons/${id}`,
              name: "Профиль",
            },
          ]}
        />
        <div className="couponProfile__block">
          <div className="couponProfile__info">
            <div className="corousel">
              {data && <Carousel images={data?.images} />}
            </div>
            <div className="companyProfile__btns">
              <button
                className={`bnt__stock ${activeBtn === 0 ? "active" : ""}`}
                onClick={() => setActiveBtn(0)}
              >
                Условия
              </button>
              <button
                className={`bnt__stock ${activeBtn === 1 ? "active" : ""}`}
                onClick={() => setActiveBtn(1)}
              >
                Описание
              </button>
              <button
                className={`bnt__stock ${activeBtn === 2 ? "active" : ""}`}
                onClick={() => setActiveBtn(2)}
              >
                Адреса
              </button>
            </div>
            {activeBtn === 0 ? <Terms texts={data?.conditions} /> : null}
            {activeBtn === 1 ? <Description texts={data?.description} /> : null}
            {activeBtn === 2 ? <Address /> : null}
          </div>
          <div className="couponProfile__buy">
            <div className="brend">
              <img src={data?.company_logo} alt="company" />
              <Link to={`/companies/${data?.company_id}`} className="brend__text">
                {data?.company_name}
              </Link>
            </div>
            <div className="descr">
              <p className="descr-title">Купон на скидку 50%</p>
              {data?.title && HTMLReactParser(data?.title)}
            </div>
            <div className="price">
              <div className="price-ticket">
                <p className="ticket__title">Цена за купон:</p>
                <p className="ticket__number">
                  от {data?.price_for_coupon} сом
                </p>
              </div>
              <div className="price-ticket">
                <p className="ticket__title">Цена с купоном:</p>
                <p className="ticket__number">
                  {data?.price} сом<span>{data?.old_price} сом</span>
                </p>
              </div>
            </div>
            <div className="btns">
              <button
                className="btn__buy"
                onClick={() => {
                  document.body.classList.add("scrollNo");
                  setVisibleQr(true);
                }}
              >
                Купить купон
              </button>
              <button
                className="buy__favor"
                onClick={setFavoriteCoupon}
                style={{ background: `${isCouponFavorite ? "#fe8181" : ""}` }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.001 20.8125C11.9047 20.8126 11.8101 20.7879 11.7261 20.7408C10.0166 19.7395 8.41224 18.5688 6.93716 17.2463C3.70316 14.3357 2.06348 11.4351 2.06348 8.62503C2.06384 7.46198 2.437 6.32966 3.1282 5.39428C3.8194 4.4589 4.79224 3.76971 5.90392 3.42786C7.01561 3.08602 8.2076 3.10953 9.30494 3.49493C10.4023 3.88034 11.3472 4.60735 12.001 5.56925C12.6548 4.60735 13.5997 3.88034 14.697 3.49493C15.7944 3.10953 16.9863 3.08602 18.098 3.42786C19.2097 3.76971 20.1826 4.4589 20.8738 5.39428C21.565 6.32966 21.9381 7.46198 21.9385 8.62503C21.9385 11.4351 20.2988 14.3357 17.0647 17.2463C15.5896 18.5688 13.9852 19.7395 12.2758 20.7408C12.1918 20.7878 12.0972 20.8125 12.001 20.8125ZM7.50098 4.31253C6.35763 4.31382 5.26147 4.76859 4.453 5.57706C3.64453 6.38553 3.18977 7.48168 3.18848 8.62503C3.18848 13.9993 10.4809 18.6804 12.001 19.5973C13.521 18.6804 20.8135 13.9993 20.8135 8.62503C20.8133 7.62828 20.4679 6.66236 19.836 5.89149C19.2041 5.12062 18.3247 4.59239 17.3474 4.3966C16.3701 4.20081 15.3551 4.34955 14.475 4.81753C13.5949 5.2855 12.9041 6.04384 12.52 6.9636C12.4772 7.06597 12.4051 7.1534 12.3127 7.21489C12.2204 7.27639 12.1119 7.3092 12.001 7.3092C11.89 7.3092 11.7816 7.27639 11.6892 7.21489C11.5969 7.1534 11.5248 7.06597 11.482 6.9636C11.155 6.17751 10.6023 5.50605 9.89363 5.03416C9.18501 4.56226 8.35235 4.31113 7.50098 4.31253Z"
                    fill={isCouponFavorite ? "white" : "#4B5FA5"}
                  />
                </svg>
              </button>
            </div>
            <div className="period">
              <p className="period__title">Период действия акции:</p>
              <div className="period__block">
                <p className="with">с {data?.start_active_date}</p>
                <p className="on">по {data?.end_active_date}</p>
              </div>
              <div className="tikets">
                <div className="tiket">
                  <img src={ticket} alt="" />
                  <p className="tiket__text">
                    {data?.bought_quantity} купонов купили
                  </p>
                </div>
                <div className="tiket">
                  <img src={time} alt="" />
                  <p className="tiket__text">Время продаж ограничено!</p>
                </div>
              </div>
            </div>
            <div className="social__media">
              <p>Поделиться</p>
              <div className="media">
                <a
                  target="__blank"
                  href="https://vk.com/"
                  className="media__block"
                >
                  <img src={vk} alt="" />
                </a>
                <a
                  target="__blank"
                  href="https://ru-ru.facebook.com/"
                  className="media__block"
                >
                  <img src={fb} alt="" />
                </a>
                <a
                  target="__blank"
                  href="https://ok.ru/"
                  className="media__block"
                >
                  <img src={ok} alt="" />
                </a>
                <a
                  target="__blank"
                  href="https://vk.com/"
                  className="media__block"
                >
                  <img src={tg} alt="" />
                </a>
                <a
                  target="__blank"
                  href="https://vk.com/"
                  className="media__block"
                >
                  <img src={wa} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket__block">
          {data?.similar_products && data?.similar_products.length>0 &&
              <>
              <h1 className="ticket__title">Похожие товары</h1>
              <CouponsList coupons={data?.similar_products} />
            </>
          }
        </div>
          { 
            data && data?.map_locations.length !== 0 ?
            <Map coordinates={treatmentCompanyCoordinates(data.map_locations)}/>:""
          }
      </div>
    </div>
  );
};

export default CouponProfile;
