import { createSlice } from '@reduxjs/toolkit';

const valuesInitialState = {
  nameValue: '',
  numberValue: '',
};

export const valuesSlice = createSlice({
  name: 'values',
  initialState: valuesInitialState,
  reducers: {
    setNameValue(state, action) {
      state.nameValue = action.payload;
    },
    setNumberValue(state, action) {
      state.numberValue = action.payload;
    },
  },
});

export const {setNameValue, setNumberValue} = valuesSlice.actions;
export const valuesReducer = valuesSlice.reducer;
