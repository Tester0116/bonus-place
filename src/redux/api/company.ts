import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { ICompanyData } from "../../models/company";

export const companyApi = createApi({
    reducerPath: 'companyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.178.44.117/api/v1/company' }),
    tagTypes: ['Сompany'],
    endpoints: (build) => ({
        getCompanyProfile: build.query<ICompanyData, void | string>({
            query: (id: string | void) => ({
                url: `/${id}/`
            }),
            providesTags: result => ['Сompany']
        }),
    })
})