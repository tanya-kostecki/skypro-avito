import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdv, IComment, IImg } from '../types';
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

    getAdvertsById: builder.query<IAdv, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    addAdv: builder.mutation<IAdv, {
      title: string,
      description?: string,
      price?: number,
      images?: File[] | null
    }>({
      query:(arg) => {
        const {title, description, price, images} = arg
        const formData = new FormData();
        
        images?.forEach((image) => formData.append('file', image))
  
        return {
          url: `${baseUrl}ads?title=${title}&description=${description}&price=${price}`,
          method: 'POST',
          body: formData,
          header: {'content-type': 'multipart/form-data'},
        }
      },
      invalidatesTags:() => [{ type: 'Advert', id: 'LIST'}],
    }),

    getCurrentUserAdverts: builder.query<IAdv[], null>({
      query: () => ({
        url: `/ads/me`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
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

      invalidatesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    deleteImage: builder.mutation<
      IAdv,
      {
        pk: number;
        file_url: string;
      }
    >({
      query: ({ pk, file_url }) => ({
        url: `/ads/${pk}/image`,
        params: `file_url=${file_url}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    changeAdvert: builder.mutation<
      IAdv,
      {
        title: string;
        description?: string;
        price?: number;
        pk: number;
      }
    >({
      query: (body) => ({
        url: `/ads/${body.pk}`,
        method: 'PATCH',
        body: {
          title: body.title,
          description: body.description,
          price: body.price,
        },
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    deleteAdvert: builder.mutation<void, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'LIST' }],
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

    getImagesByAd: builder.query<IImg[], { pk: number }>({
      query: (args) => ({
        url: `/images/${args.pk}`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
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
  useAddAdvWithoutImageMutation,
  useGetCurrentUserAdvertsQuery,
  useDeleteAdvertMutation,
  useChangeAdvertMutation,
  useGetAdvertsByIdQuery,
  useLazyGetAdvertsByIdQuery,
  useLazyGetCurrentUserAdvertsQuery,
  useGetImagesByAdQuery,
  useLazyGetAdvertsQuery,
  useDeleteImageMutation
} = advertsApi;
