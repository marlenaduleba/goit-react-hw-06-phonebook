import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getNameValue, getNumberValue } from 'redux/selectors';
import { setNameValue, setNumberValue } from 'redux/valuesSlice';


import PropTypes from 'prop-types';


import css from './ContactForm.module.css';

export const ContactForm = () => {

  const dispatch = useDispatch();

  const nameValue = useSelector(getNameValue);
  const numbervalue = useSelector(getNumberValue);


  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(addContact(nameValue, numbervalue));
    dispatch(setNameValue(''));
    dispatch(setNumberValue(''));

    e.currentTarget.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        dispatch(setNameValue(value));
        break;
      case 'number':
        dispatch(setNumberValue(value));
        break;
      default:
        return;
    }
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
          value={nameValue}
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
          value={numbervalue}
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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
