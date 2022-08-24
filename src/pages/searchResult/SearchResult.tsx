import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import CouponCard from "../../components/couponCard/CouponCard";
import "./SearchResult.scss";
import DropDown from "../../components/dropDown/DropDown";
import { useAppSelector } from "../../hooks/redux";
import { couponsApi } from "../../redux/api/couponsApi";
import { FC, useEffect, useState } from "react";
import { ICouponCard, ISearchByTitle } from "../../models/coupon";


const SearchResult: FC = () => {
  const searchValue = useAppSelector(state => state.searchCoupons.searchValue);
  const [sortType, setSortType] = useState<string>("-created_at");
  const { data: searchResult } = couponsApi.useSearchCouponsQuery({ value: searchValue, sort: sortType });
  return (
    <div className="search">
      <div className="container">
        <BreadCrumbs
          location={[
            {
              folder: "search",
              name: "Результаты поиска",
            },
          ]}
        />
        <div className="ticket">
          <div className="ticket__header">
            <h1 className="ticket__title">Результаты поиска</h1>
            <DropDown setSortType={setSortType} />
          </div>
          <div className="ticket__block">
            {
              searchResult?.results.map((element: ICouponCard, index: number) => (
                <CouponCard coupon={element} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
