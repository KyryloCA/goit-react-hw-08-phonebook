import React from 'react';
import ContactListItem from './ContactListItem';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const currentFilter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contactsStore.contacts);

  return (
    <ul>
      {contacts.map(
        value =>
          value.name.includes(currentFilter) && (
            <ContactListItem
              key={value.id}
              id={value.id}
              name={value.name}
              number={value.number}
            />
          )
      )}
    </ul>
  );
};

export default ContactList;
