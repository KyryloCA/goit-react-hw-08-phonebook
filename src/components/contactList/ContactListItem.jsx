import { deleteContactByID } from 'operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number }) => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const removedContactOBJ = {
    id: id,
    token: token,
  };
  return (
    <li className={css.contact}>
      <div className={css.itemContainer}>
        <span>{name}: </span>
        <span className={css.spanner}>{number}</span>

        <button onClick={() => dispatch(deleteContactByID(removedContactOBJ))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
