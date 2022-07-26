/* eslint-disable react/function-component-definition */
import React from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navbar.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'starred' },
];

const Navbar = () => {
    const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled 
                to={item.to}
                className={item.to === location.pathname ? 'active' : ''}
                >{item.text}
                </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default Navbar;
