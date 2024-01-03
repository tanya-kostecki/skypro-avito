import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../api/AdvApi';
import { IAdv } from '../types';

export const advertsApi = createApi({
  reducerPath: 'advertsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['Advert'],
  endpoints: (builder) => ({
    getAdverts: builder.query<IAdv[], null>({
      query: () => ({
        url: '/ads?sorting=new',
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),
  }),
});

export const { useGetAdvertsQuery } = advertsApi;
