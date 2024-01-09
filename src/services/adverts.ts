import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdv, IComment } from '../types';
import { baseQueryWithReauth } from './fetchBaseQuearyWithReauth';

export const advertsApi = createApi({
  reducerPath: 'advertsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Advert', 'Comment'],
  endpoints: (builder) => ({
    getAdverts: builder.query<IAdv[], null>({
      query: () => ({
        url: '/ads?sorting=new',
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    getComments: builder.query<IComment[], null>({
      query: () => ({
        url: '/comments',
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Comment', id: 'LIST' }],
    }),

    getCommentsByAd: builder.query<IComment[], { pk: number }>({
      query: (args) => ({
        url: `/ads/${args.pk}/comments`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Comment', id: 'LIST' }],
    }),

    addCommentsByAd: builder.mutation<IComment, { pk: number; text: string }>({
      query: ({ pk, text }) => ({
        url: `/ads/${pk}/comments`,
        method: 'POST',
        body: text,
        headers: { 'content-type': 'application/json'},
      }),
      invalidatesTags: () => [{ type: 'Comment', id: 'ID' }],
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useGetCommentsQuery,
  useGetCommentsByAdQuery,
  useAddCommentsByAdMutation,
  useLazyGetCommentsByAdQuery,
} = advertsApi;
