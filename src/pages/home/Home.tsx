import React, {useEffect, useRef, useState} from "react";
import Carousel from "./carousel/Carousel";
import footer_img from "../../assets/img/footer__img.png";
import FloatingBtn from "../../components/floatingBtn/FloatingBtn";
import "./Home.scss";
import { couponsApi } from "../../redux/api/couponsApi";
import { categoriesApi } from "../../redux/api/categoriesApi";
import Categories from "../../components/categories/Categories";
import CouponsList from "../../components/couponsList/CouponsList";
import SkeletonCategoryCard from "../../components/categories/categoryCard/SkeletonCategoryCard";
import {useInfiniteList} from "../../hooks/useInfiniteList";

const Home = () => {

  const {coupons: couponsData, page, setPage} = useInfiniteList()

  const { isLoading: isCategoriesLoading, data: categoriesData } =
    categoriesApi.useGetCategoriesQuery(undefined);
  const { isLoading: isCouponsLoading, data } =
    couponsApi.useGetCouponsQuery(page);

  return couponsData && (
    <section className="home">
      <FloatingBtn />
      <div className="container">
        {isCategoriesLoading ? (
          <SkeletonCategoryCard />
        ) : categoriesData ? (
          <Categories categories={categoriesData} />
        ) : (
          <h1>Нет категорий</h1>
        )}
        <h1 className="couponsList__title">Новые купоны</h1>
        {couponsData && <CouponsList coupons={couponsData} />}

        {couponsData?.length && data?.count > page*16 &&
            <button className="couponList__btn btn"
                    onClick={setPage}>
              Посмотреть все
            </button>}

        <div className="carousel">
          <Carousel />
        </div>
        <div className="blocks__img">
          <img src={footer_img} alt="1" />
          <img src={footer_img} alt="2" />
          <img src={footer_img} alt="3" />
        </div>
      </div>
    </section>
  );
};

export default Home;
