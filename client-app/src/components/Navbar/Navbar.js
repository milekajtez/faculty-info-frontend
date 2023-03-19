import React, { useEffect, useState } from 'react';
import { Routing } from '../../routes/Routing';
import { Logo } from './Logo/Logo';
import '../../index.css';
import { NavBarWrapper } from './Navbar.styled';
import { checkSession } from '../../helpers/sessionHelper';
import { tokenString } from '../../helpers/strings';
import { useNavigate } from 'react-router-dom';
import { Options } from './Options';

export function Navbar() {
  const [session, setSession] = useState(checkSession());
  const navigate = useNavigate();

  useEffect(() => {
    if (!session.logged) {
      localStorage.removeItem(tokenString);
      navigate('/');
    }
  }, [session.logged]);

  return (
    <>
      <NavBarWrapper>
        <Logo />
        {session.logged ? <Options session={session} setSession={setSession} /> : null}
      </NavBarWrapper>
      <Routing session={session} setSession={setSession} />
    </>
  );
}
