import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TokenState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
}
const initialState: TokenState = {
  accessToken: localStorage.getItem('access_token'),
  refreshToken: localStorage.getItem('refresh_token'),
  isAuth: !!localStorage.getItem('auth')
};

export const tokenSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('auth', 'true');
    },
    setRemoveToken: (state) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('auth');
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, setRemoveToken } = tokenSlice.actions;
export const userReducer = tokenSlice.reducer;
