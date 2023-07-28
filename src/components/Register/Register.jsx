import { addUserOBJ } from 'operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Register.module.css';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();

    const fieldResult = {
      name: evt.target.elements.userName.value.trim(),
      email: evt.target.elements.userEmail.value.trim(),
      password: evt.target.elements.password.value.trim(),
    };
    if (
      evt.target.elements.userName.value &&
      evt.target.elements.userEmail.value &&
      evt.target.elements.password.value
    ) {
      dispatch(addUserOBJ(fieldResult));
      evt.target.reset();
    } else {
      toast.error('All fields should be filled');
    }
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
