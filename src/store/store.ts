import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './slices/AdvertSlice';
import { userReducer } from './slices/UserSlice';
import { advertsApi } from '../services/adverts';

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
    user: userReducer,
    [advertsApi.reducerPath]: advertsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
