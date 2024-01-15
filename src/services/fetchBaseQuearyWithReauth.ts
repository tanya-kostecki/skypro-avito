import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { setToken, setRemoveToken } from '../store/slices/TokenSlice';
import { RootState } from '../store/store';
import { baseUrl } from '../api/AdvApi';

type RefreshTokenResponse = {
  access_token: string;
  refresh_token: string;
};

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).user.accessToken;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/auth/login/',
        method: 'PUT',
        body: {
          refresh_token: (api.getState() as RootState).user.refreshToken,
          access_token: (api.getState() as RootState).user.accessToken,
        },
      },
      api,
      extraOptions,
    );


    if (refreshResult.data) {
      const { access_token, refresh_token } =
        refreshResult.data as RefreshTokenResponse;
      api.dispatch(
        setToken({
          accessToken: access_token,
          refreshToken: refresh_token,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setRemoveToken());
      window.location.href = '/login';
    }
  }

  return result;
};
