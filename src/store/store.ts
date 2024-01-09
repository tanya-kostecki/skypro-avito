import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './slices/AdvertSlice';
import { advertsApi } from '../services/adverts';
import { userApi } from '../services/user';
import { userReducer } from './slices/TokenSlice';

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
    user: userReducer,
    [advertsApi.reducerPath]: advertsApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertsApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
