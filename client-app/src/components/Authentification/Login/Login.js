import React, { useState } from 'react';
import API from '../../../api';
import { loginPath } from '../../../helpers/requestPaths';
import {
  EmailString,
  emailString,
  PasswordString,
  passwordString,
  submitString,
  tokenString
} from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import { validateEmail, validatePassword } from '../../Validators/InputValidatior/InputValidator';
import { toast } from 'react-toastify';
import { plaseInsertValidCredentials } from '../../Validators/validatorMessages';
import { loginInvalidCredentials, signIn } from './LoginMessages';
import { useNavigate } from 'react-router-dom';
import { checkSession, redirectLoggedUserToExpectedPage } from '../../../helpers/sessionHelper';

export function Login(props) {
  const { setSession } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState({ isValid: true, text: '' });
  const [passwordValidate, setPasswordValidate] = useState({ isValid: true, text: '' });
  const navigate = useNavigate();

  const login = () => {
    setEmailValidate(validateEmail(email));
    setPasswordValidate(validatePassword(password));

    if (!emailValidate.isValid || !passwordValidate.isValid) {
      toast(plaseInsertValidCredentials);
      return;
    }

    API.get(`${loginPath}/${email}/${password}`)
      .then((response) => {
        localStorage.setItem(tokenString, response.data);
        var session = checkSession();
        setSession({
          logged: true,
          userRole: session.userRole,
          email: session.email
        });

        redirectLoggedUserToExpectedPage(session, navigate);
      })
      .catch(() => {
        toast(loginInvalidCredentials);
      });
  };

  return (
    <>
      <Input
        inputType={emailString}
        placeholder={EmailString}
        onChangeMethod={setEmail}
        isValid={emailValidate.isValid}
      />
      <InputMessage text={emailValidate.text} />
      <Input
        inputType={passwordString}
        placeholder={PasswordString}
        onChangeMethod={setPassword}
        isValid={passwordValidate.isValid}
      />
      <InputMessage text={passwordValidate.text} />
      <Button type={submitString} text={signIn} onClickMethod={login} />
    </>
  );
}
