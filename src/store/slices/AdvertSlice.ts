import { createSlice } from '@reduxjs/toolkit';
import { IAdv } from '../../types';

export interface Filters {
  status: boolean;
  searchValue: string;
}

interface AdvertState {
  filteredAdverts: IAdv[];
  filters: Filters;
}
const initialState: AdvertState = {
  filteredAdverts: [],
  filters: {
    status: false,
    searchValue: '',
  },
};

export const advertSlice = createSlice({
  name: 'Adverts',
  initialState,
  reducers: {
    setFilteredAdverts: (state, action) => {
      state.filteredAdverts = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilteredAdverts, setFilters } = advertSlice.actions
export const advertReducer =  advertSlice.reducer
