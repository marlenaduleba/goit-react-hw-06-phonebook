export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
    const {contacts, filter} = state;

    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()).trim());
}