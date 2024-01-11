import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdv, IComment } from '../types';
import { baseQueryWithReauth } from './fetchBaseQuearyWithReauth';
import { baseUrl } from '../api/AdvApi';

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

    addAdv: builder.mutation<IAdv, {
      title: string,
      description?: string,
      price?: string,
      images?: File | null
    }>({
      query:(arg) => {
        const {title, description, price, images} = arg
        const formData = new FormData();
        if (images) {
          formData.append('file', images)
        }
        return {
          url: `${baseUrl}ads?title=${title}&description=${description}&price=${price}`,
          method: 'POST',
          body: formData,
          header: {'content-type': 'multipart/form-data'},
        }
      },
      invalidatesTags:() => [{ type: 'Advert', id: 'LIST'}],
    }),

    addAdvWithoutImage: builder.mutation<IAdv, {
      title: string,
      description?: string,
      price?: number,
    }>({
      query: (body) => ({
        url: 'adstext',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    addImageToAdv: builder.mutation<
      IAdv,
      {
        pk: number;
        image: File;
      }
    >({
      query: (data) => {
        const formData = new FormData();
        if (data.image) {
          formData.append('file', data.image);
        }
        return {
          url: `/ads/${data.pk}/image`,
          method: 'POST',
          body: formData,
          header: { 'content-type': 'multipart/form-data' },
        };
      },
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
        body: { text },
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
  useAddAdvMutation,
  useAddImageToAdvMutation,
  useAddAdvWithoutImageMutation
} = advertsApi;
