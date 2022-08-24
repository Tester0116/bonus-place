import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coupons from "./reducers/CouponsSlice";
import categories from "./reducers/CategoriesSlice";
import searchCoupons from "./reducers/searchSlice";
import { couponsApi } from "./api/couponsApi";
import { infoApi } from "./api/infoApi";
import { categoriesApi } from "./api/categoriesApi";
import { companyApi } from "./api/company";
import {userApi} from "./api/userApi";

const rootReducer = combineReducers({
    coupons,
    categories,
    searchCoupons,
    [couponsApi.reducerPath]: couponsApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [companyApi.reducerPath]:companyApi.reducer,
    [userApi.reducerPath]: userApi.reducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat([
                couponsApi.middleware,
                categoriesApi.middleware,
                infoApi.middleware,
                companyApi.middleware,
                userApi.middleware
            ])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]