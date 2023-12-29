import { createSlice } from '@reduxjs/toolkit';
import { IAdv } from '../../types';

interface AdvertState {
  filteredAdverts: IAdv[];
}
const initialState: AdvertState = {
  filteredAdverts: [],
};

export const advertSlice = createSlice({
  name: 'Adverts',
  initialState,
  reducers: {
    setFilteredAdverts: (state, action) => {
      state.filteredAdverts = action.payload;
    },
  },
});

export const { setFilteredAdverts } = advertSlice.actions
export const advertReducer =  advertSlice.reducer
