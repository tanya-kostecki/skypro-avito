import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types';

export interface UserState {
  user: IUser;
}
const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: '',
    sells_from: '',
    phone: '',
    role: '',
    surname: '',
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
