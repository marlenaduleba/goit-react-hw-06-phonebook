import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/selectors';


import css from './ContactList.module.css';


export const ContactList = () => {
const contacts = useSelector(getContacts);

  return (
    <div>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
             
            />
          ))}
        </ul>
      )}
    </div>
  );
};


