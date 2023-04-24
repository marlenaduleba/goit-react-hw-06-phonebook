import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import css from './Phonebook.module.css';

export const Phonebook = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const renderContacts = useMemo(() => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
  // }, [filter, contacts]);

  return (
    <div className={css.box}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {/* {contacts.length !== 0 ? ( */}
          <Filter />
        {/* ) : (
          <p className={css.message}>
            Looks like you don`t have any contacts yet or just clear them all.
            Please add new contact.
          </p>
        )} */}

        <ContactList />
      </Section>
    </div>
  );
};
