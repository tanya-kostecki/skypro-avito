import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdv } from '../types';
import { baseQueryWithReauth } from './fetchBaseQuearyWithReauth';

export const advertsApi = createApi({
  reducerPath: 'advertsApi',
  baseQuery: baseQueryWithReauth,
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
