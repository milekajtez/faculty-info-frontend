import React, { useState } from 'react';
import { UserFormContent, UserFormTitle, UserFormWrapper } from './UserForm.styled';
import { Login } from '../Authentification/Login/Login';
import { Registration } from '../Authentification/Registration/Registration';
import { H2 } from '../shared/Headers/Headers.styled';
import { loginString, registerString } from '../../helpers/strings';
import { signUpAsAStudent } from './Registration/RegistrationMessages';
import { signIn } from '../shared/Button/ButtonMessages';

export function UserForm(props) {
  const [option, setOption] = useState(loginString);

  const changeUserForm = (option) => {
    setOption(option);
  };

  return (
    <UserFormWrapper>
      <UserFormContent>
        <UserFormTitle>
          <H2 onClick={() => changeUserForm(loginString)} userForm={option === loginString}>
            {signIn}
          </H2>
          <H2 onClick={() => changeUserForm(registerString)} userForm={option === registerString}>
            {signUpAsAStudent}
          </H2>
        </UserFormTitle>
        {option === loginString ? <Login setSession={props.setSession} /> : <Registration />}
      </UserFormContent>
    </UserFormWrapper>
  );
}
