import { deleteContactByID } from 'operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const removedContactOBJ = {
    id: id,
    token: token,
  };
  return (
    <li>
      <div className="itemContainer">
        <span>{name}: </span>
        <span>{number}</span>
        <button onClick={() => dispatch(deleteContactByID(removedContactOBJ))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
