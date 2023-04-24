import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: defaultContacts,
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contact = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(contact, 1);
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items', 'filter'],
}


export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, setContacts, setFilter } = contactsSlice.actions;
