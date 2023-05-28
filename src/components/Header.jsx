import { logoutUserToken } from 'operations';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeContactRedux } from 'slice';
import {
  HeaderContainer,
  NavigationLinksContainer,
  StyledLink,
  UserMenu,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.user.name) {
      navigate('/contacts');
    }
  }, [currentUser.user.name, navigate]);

  const logoutHandler = () => {
    dispatch(removeContactRedux());
    dispatch(logoutUserToken(currentUser.token));
  };
  return (
    <HeaderContainer>
      <NavigationLinksContainer>
        <StyledLink to="/">Login</StyledLink>
        <StyledLink to="register">Register</StyledLink>
        <StyledLink to="contacts">Contacts</StyledLink>
      </NavigationLinksContainer>
      {currentUser.user.name ? (
        <UserMenu>
          <p>{currentUser.user.name}</p>
          <button onClick={logoutHandler}>Logout</button>
        </UserMenu>
      ) : (
        <div> </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
