import React from 'react';
import { Routing } from '../../routes/Routing';
import { Logo } from './Logo/Logo';
import '../../index.css';
import { NavBarWrapper } from './Navbar.styled';

export function Navbar() {
  return (
    <>
      <NavBarWrapper>
        <Logo />
      </NavBarWrapper>
      <Routing />
    </>
  );
}
