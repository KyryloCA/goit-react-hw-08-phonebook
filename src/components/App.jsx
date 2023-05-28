import { fetchContacts } from 'operations';
import ContactsPage from 'Pages/ContactsPage';
import Layout from 'Pages/Layout';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import Header from './Header';
// import Phonebook from './Phonebook';

const App = () => {
  const token = useSelector(state => state.user.token);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* <Header />
      <Phonebook /> */}
    </>
  );
};

export default App;
