import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory} from "../../models/category";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://185.178.44.117/api/v1/categories'}),
    tagTypes: ['Categories'],
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], undefined>({
            query: () => '/',
            providesTags: result => ['Categories']
        })
    })
})