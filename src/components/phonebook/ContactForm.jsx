import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addContactOBJ } from 'operations';
import Loader from 'components/loader/Loader';
import { toast } from 'react-toastify';

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
    if (
      evt.target.elements.contactName.value &&
      evt.target.elements.contactPhone.value
    ) {
      dispatch(addContactOBJ(fieldResult));
      evt.target.reset();
    } else {
      toast.error('name and number should be filled');
    }
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
