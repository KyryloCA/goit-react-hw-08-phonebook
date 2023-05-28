import React from 'react';

// import { addContactRedux } from 'slice';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { addContactOBJ } from 'operations';
import Loader from 'components/loader/Loader';

const ContactForm = () => {
  const pending = useSelector(state => state.contactsStore.pending);
  const currentToken = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();
    const fieldResult = {
      contact: {
        name: evt.target.elements.contactName.value.trim(),
        number: evt.target.elements.contactPhone.value.trim(),
      },
      token: currentToken,
    };
    dispatch(addContactOBJ(fieldResult));
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="contactName">Name</label>
      <input id="contactName" name="contactName" type="text" />
      <label htmlFor="contactPhone">Number</label>
      <input
        id="contactPhone"
        name="contactPhone"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit" className="submitButton">
        Add Contact
      </button>

      {pending && <Loader />}
    </form>
  );
};

export default ContactForm;
