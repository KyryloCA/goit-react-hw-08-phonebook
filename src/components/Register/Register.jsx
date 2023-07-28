import { addUserOBJ } from 'operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();

    const fieldResult = {
      name: evt.target.elements.userName.value.trim(),
      email: evt.target.elements.userEmail.value.trim(),
      password: evt.target.elements.password.value.trim(),
    };

    dispatch(addUserOBJ(fieldResult));
    // evt.target.reset();
  };
  return (
    <div className={css.container}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="userName">Name</label>
        <input id="userName" name="userName" type="text" />
        <label htmlFor="userEmail">Email</label>
        <input id="userEmail" name="userEmail" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="text" />

        <button type="submit" className="submitButton">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
