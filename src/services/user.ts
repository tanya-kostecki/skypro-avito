import { createApi } from '@reduxjs/toolkit/query/react';;
import { IUser } from '../types';
import { baseQueryWithReauth } from './fetchBaseQuearyWithReauth';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAuthLogin: builder.mutation<
      {
        access_token: string;
        refresh_token: string;
        token_type: string;
      },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getAuthRegistration: builder.mutation<
      IUser,
      {
        email: string;
        password: string;
        name?: string;
        surname?: string;
        phone?: string;
        city?: string;
        role?: string;
      }
    >({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getCurrentUser: builder.query<IUser, null>({
      query: () => ({
        url: '/user',
        mrthod: 'GET',
      }),
      providesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    updateUserInfo: builder.mutation<
      IUser,
      {
        name?: string;
        surname?: string;
        phone?: string;
        city?: string;
      }
    >({
      query: (body) => ({
        url: '/user',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    uploadUserAvatar: builder.mutation<IUser, File | null>({
      query: (data) => {
        const formData = new FormData();
        if (data) {
          formData.append('file', data);
        }
        return {
          url: '/user/avatar',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),
  }),
});

export const { useGetAuthLoginMutation, useGetAuthRegistrationMutation, useGetCurrentUserQuery, useUpdateUserInfoMutation, useUploadUserAvatarMutation, useLazyGetCurrentUserQuery } = userApi;
