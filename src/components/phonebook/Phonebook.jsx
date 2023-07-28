import React, { useEffect } from 'react';
import css from './Phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from '../contactList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { autoLogOut } from 'slice';
// import { checkTokenValidity } from 'operations';

const Phonebook = () => {
  const currentUser = useSelector(store => store.user);
  const tokenValidate = useSelector(store => store.tokenValidate);
  // const authFail = useSelector(store => store.contactsStore.authFail);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.user.name && location.pathname === '/contacts') {
      navigate('/');
    }
  }, [currentUser.user.name, location.pathname, navigate]);

  useEffect(() => {
    if (currentUser.user.name !== '') {
      dispatch(autoLogOut());
    }
  }, [
    currentUser.token,
    currentUser.user.name,
    dispatch,
    navigate,
    tokenValidate.valid,
  ]);

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
