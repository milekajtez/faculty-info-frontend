import React, { useState } from 'react';
import API from '../../../api';
import { loginPath } from '../../../helpers/paths';
import { emailString, passwordString, submitString, userString } from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import { validateEmail, validatePassword } from '../../Validators/InputValidatior/InputValidator';
import { toast } from 'react-toastify';
import { plaseInsertValidCredentials } from '../../Validators/validatorMessages';

export function Login(props) {
  const { setLogged } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState({ isValid: true, text: '' });
  const [passwordValidate, setPasswordValidate] = useState({ isValid: true, text: '' });

  const login = () => {
    setEmailValidate(validateEmail(email));
    setPasswordValidate(validatePassword(password));

    if (!emailValidate.isValid || !passwordValidate.isValid) {
      toast(plaseInsertValidCredentials);
      return;
    }

    API.get(loginPath, {
      email: email,
      password: password
    })
      .then((response) => {
        localStorage.setItem(userString, response.data);
        setLogged(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Input
        inputType={emailString}
        placeholder={'Email'}
        onChangeMethod={setEmail}
        isValid={emailValidate.isValid}
      />
      <InputMessage text={emailValidate.text} />
      <Input
        inputType={passwordString}
        placeholder={'Password'}
        onChangeMethod={setPassword}
        isValid={passwordValidate.isValid}
      />
      <InputMessage text={passwordValidate.text} />
      <Button type={submitString} text={'Sign in'} onClickMethod={login} />
    </>
  );
}
