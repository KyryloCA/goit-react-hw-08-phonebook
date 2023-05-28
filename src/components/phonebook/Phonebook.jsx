import React, { useEffect } from 'react';
import css from './Phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from '../contactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Phonebook = () => {
  const currentUser = useSelector(store => store.user);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!currentUser.user.name && location.pathname === '/contacts') {
      navigate('/');
    }
  });

  return (
    <div className={css.goitTemplateMarkup}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Phonebook;
