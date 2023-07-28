import { logoutUserToken } from 'operations';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeContactRedux } from 'slice';
import {
  CurrentUser,
  HeaderContainer,
  InactiveStyledLink,
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
        {!currentUser.user.name ? (
          <StyledLink to="/">Login</StyledLink>
        ) : (
          <InactiveStyledLink>Login</InactiveStyledLink>
        )}
        {!currentUser.user.name ? (
          <StyledLink to="register">Register</StyledLink>
        ) : (
          <InactiveStyledLink>Register</InactiveStyledLink>
        )}
        {!currentUser.user.name ? (
          <InactiveStyledLink>Contacts</InactiveStyledLink>
        ) : (
          <StyledLink to="contacts">Contacts</StyledLink>
        )}
      </NavigationLinksContainer>
      {currentUser.user.name ? (
        <UserMenu>
          <CurrentUser>{currentUser.user.name}</CurrentUser>

          <button onClick={logoutHandler}>Logout</button>
        </UserMenu>
      ) : (
        <div> </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
