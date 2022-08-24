import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import "./Favorites.scss";
import CouponsList from "../../components/couponsList/CouponsList";
import {useAppSelector} from "../../hooks/redux";

const Favorites = () => {
    const favoriteCoupons = useAppSelector(state => state.coupons.favoriteCoupons)
  return (
    <div className="favorites">
      <div className="container">
        <BreadCrumbs
          location={[
            {
              folder: "favorites",
              name: "Избранное",
            },
          ]}
        />
          {
              favoriteCoupons?.length > 0 ?
              <CouponsList coupons={favoriteCoupons}/> : <h3 className={'no-results-message'}>Купонов пока нет</h3>
          }
      </div>
    </div>
  );
};

export default Favorites;
