import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICarousel, IContact, ICoordinates, IFaq, IPrivacyPolicy, IPublicOffer } from "../../models/info";
interface aboutUs {
  description: string,
}

export const infoApi = createApi({
  reducerPath: 'infoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://185.178.44.117/api/v1/info' }),
  tagTypes:["about-us","faq", "networks", "coordinates", "privacy-policy","image-slider"],
  endpoints: (build) => ({
    fetchInfo: build.query<aboutUs, void>({
      query: () => ({
        url: `/about-us/`
      }),
      providesTags: result => ["about-us"],
    }),
    fetchFaq: build.query<IFaq[], void>({
      query: () => ({
        url: `/faq/`,
      }),
      providesTags: result => ['faq'],
    }),
    fetchContact: build.query<IContact, void>({
      query: () => ({
        url: `/networks/`,
      }),
      providesTags: result => ['networks'],
    }),
    fetchCoordinates: build.query<ICoordinates[], void>({
      query: () => ({
        url: `/our-map-coordinates/`,
      }),
      providesTags: result => ['coordinates'],
    }),
    fetchPrivacyPolicy: build.query<IPrivacyPolicy, void>({
      query: () => ({
        url: `/privacy-policy/`,
      }),
      providesTags: result => ['privacy-policy'],
    }),
    fetchCarousel: build.query<ICarousel[], void>({
      query: () => ({
        url: `/image-slider/`,
      }),
      providesTags: result => ['image-slider'],
    })
  })
})