import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserOBJ } from 'operations';
import css from './Login.module.css';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();

    const fieldResult = {
      email: evt.target.elements.loginUserEmail.value.trim(),
      password: evt.target.elements.loginUserPassword.value.trim(),
    };
    if (
      evt.target.elements.loginUserEmail.value &&
      evt.target.elements.loginUserPassword.value
    ) {
      dispatch(loginUserOBJ(fieldResult));
      evt.target.reset();
    } else {
      toast.error('All fields should be filled');
    }
  };
  return (
    <div className={css.container}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="userEmail">Email</label>
        <input id="loginUserEmail" name="loginUserEmail" type="email" />
        <label htmlFor="password">Password</label>
        <input id="loginUserPassword" name="loginUserPassword" type="text" />
        <button type="submit" className="submitButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
