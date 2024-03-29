import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  align-items: center;
`;
export const StyledLink = styled(NavLink)`
  padding: 0px;
  margin: 15px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &.active {
    font-weight: bold;
  }
`;
export const InactiveStyledLink = styled.span`
  position: relative;
  padding: 0px;
  margin: 15px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: grey;
`;

export const UserMenu = styled.div`
  display: flex;
`;
export const NavigationLinksContainer = styled.div``;

export const CurrentUser = styled.div`
  margin-right: 20px;
  font-weight: bold;
  font-size: 22px;
  text-transform: capitalize;
`;
