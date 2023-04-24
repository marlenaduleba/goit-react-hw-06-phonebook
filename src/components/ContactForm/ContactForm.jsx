import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { setContacts } from 'redux/contactsSlice';
import { useReducer, useEffect } from 'react';
//import { Notify } from 'notiflix';

//import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const initialValues = {
  nameValue: '',
  numberValue: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, nameValue: action.payload };
    case 'number':
      return { ...state, numberValue: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { name, number } = contacts;
  
  const [state, dispatchReducer] = useReducer(reducer, initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(addContact(state.nameValue, state.numberValue));
    dispatchReducer({ type: 'reset', payload: initialValues });
    
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
