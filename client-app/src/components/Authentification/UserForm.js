import React, { useState } from 'react';
import { UserFormContent, UserFormTitle, UserFormWrapper } from './UserForm.styled';
import { Login } from '../Authentification/Login/Login';
import { Registration } from '../Authentification/Registration/Registration';
import { H2 } from '../shared/Headers/Headers.styled';
import { alreadyLoggedText } from './Login/LoginMessages';
import { Button } from '../shared/Button/Button';
import { loginString, registerString, textString, userString } from '../../helpers/strings';

export function UserForm() {
  const [option, setOption] = useState(loginString);
  const [logged, setLogged] = useState(localStorage.getItem(userString));

  const changeUserForm = (option) => {
    setOption(option);
  };

  const renderUserFormContent = () => (
    <UserFormContent>
      <UserFormTitle>
        <H2 onClick={() => changeUserForm(loginString)} userForm={option === loginString}>
          Sign In
        </H2>
        <H2 onClick={() => changeUserForm(registerString)} userForm={option === registerString}>
          Sign Up
        </H2>
      </UserFormTitle>
      {option === loginString ? (
        <Login setLogged={setLogged} />
      ) : (
        <Registration setLogged={setLogged} />
      )}
    </UserFormContent>
  );

  return (
    <UserFormWrapper>
      {logged !== null ? (
        <Button type={textString} text={alreadyLoggedText} />
      ) : (
        renderUserFormContent()
      )}
    </UserFormWrapper>
  );
}
