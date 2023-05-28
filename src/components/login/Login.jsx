import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserOBJ } from 'operations';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = evt => {
    evt.preventDefault();

    const fieldResult = {
      email: evt.target.elements.loginUserEmail.value.trim(),
      password: evt.target.elements.loginUserPassword.value.trim(),
    };

    dispatch(loginUserOBJ(fieldResult));
    evt.target.reset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="userEmail">Email</label>
      <input id="loginUserEmail" name="loginUserEmail" type="email" />
      <label htmlFor="password">Password</label>
      <input id="loginUserPassword" name="loginUserPassword" type="text" />
      <button type="submit" className="submitButton">
        Login
      </button>
    </form>
  );
};

export default Login;
