import React, {useEffect} from "react";
import "./Category.scss";
import Categories from "../../components/categories/Categories";
import {couponsApi} from "../../redux/api/couponsApi";
import {categoriesApi} from "../../redux/api/categoriesApi";
import {useParams} from "react-router-dom";
import CouponsList from "../../components/couponsList/CouponsList";

const Category = () => {
    const {id} = useParams()
    const {data: categoriesData} = categoriesApi.useGetCategoriesQuery(undefined)
    const {data} = couponsApi.useGetCategoryCouponsQuery(id)

    const couponsData = data?.results

    return (
        <div className={'category'}>
            <div className="container">
                {categoriesData && <Categories categories={categoriesData}/>}
                <h1 className="couponsList__title">Новые купоны</h1>
                {couponsData?.length ?
                    <CouponsList coupons={couponsData}/> :
                    <h3 className={'no-results-message'}>
                        Купонов пока нет
                    </h3>
                }
            </div>
        </div>
    );
};

export default Category;