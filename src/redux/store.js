import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { valuesReducer } from './valuesSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    values: valuesReducer,
  },
});
