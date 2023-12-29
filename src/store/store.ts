import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './slices/AdvertSlice';

export const store = configureStore({
  reducer: {
    adverts: advertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
