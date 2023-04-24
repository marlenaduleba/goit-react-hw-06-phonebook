import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
        //state = action.payload;
      return produce(state, draftState => {
        draftState = action.payload;
      });
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
