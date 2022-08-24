import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory} from "../../models/category";
import {IUserAuthData, IUserPostResponse, IUserSignInResponse} from "../../models/user";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://185.178.44.117/api/v1/users'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        authUser: build.mutation<IUserPostResponse, IUserAuthData>({
            query: body => ({
                url: '/auth/',
                method: 'POST',
                body
            }),
            invalidatesTags: result => ['User']
        }),
        signIn: build.mutation<any, any>({
            query: body => ({
                url: '/login/',
                method: 'POST',
                body
            })
        })

    })
})