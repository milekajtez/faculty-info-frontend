import React, { useState } from 'react';
import API from '../../../api';
import { registerPath } from '../../../helpers/paths';
import { passwordString, submitString, textString, userString } from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername
} from '../../Validators/InputValidatior/InputValidator';
import { toast } from 'react-toastify';
import { plaseInsertValidCredentials } from '../../Validators/validatorMessages';

export function Registration(props) {
  const { setLogged } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [usernameValidate, setUsernameValidate] = useState({ isValid: true, text: '' });
  const [passwordValidate, setPasswordValidate] = useState({ isValid: true, text: '' });
  const [emailValidate, setEmailValidate] = useState({ isValid: true, text: '' });
  const [firstNameValidate, setFirstNameValidate] = useState({ isValid: true, text: '' });
  const [lastNameValidate, setLastNameValidate] = useState({ isValid: true, text: '' });

  const register = () => {
    setUsernameValidate(validateUsername(username));
    setPasswordValidate(validatePassword(password));
    setEmailValidate(validateEmail(email));
    setFirstNameValidate(validateName(firstName));
    setLastNameValidate(validateName(lastName));

    if (
      !usernameValidate.isValid ||
      !emailValidate.isValid ||
      !passwordValidate.isValid ||
      !firstNameValidate.isValid ||
      !lastNameValidate.isValid
    ) {
      toast(plaseInsertValidCredentials);
      return;
    }

    API.post(registerPath, {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName
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
        inputType={textString}
        placeholder={'Username'}
        onChangeMethod={setUsername}
        isValid={usernameValidate.isValid}
      />
      <InputMessage text={usernameValidate.text} />
      <Input
        inputType={passwordString}
        placeholder={'Password'}
        onChangeMethod={setPassword}
        isValid={passwordValidate.isValid}
      />
      <InputMessage text={passwordValidate.text} />
      <Input
        inputType={textString}
        placeholder={'Email'}
        onChangeMethod={setEmail}
        isValid={emailValidate.isValid}
      />
      <InputMessage text={emailValidate.text} />
      <Input
        inputType={textString}
        placeholder={'First name'}
        onChangeMethod={setFirstName}
        isValid={firstNameValidate.isValid}
      />
      <InputMessage text={firstNameValidate.text} />
      <Input
        inputType={textString}
        placeholder={'Last name'}
        onChangeMethod={setLastName}
        isValid={lastNameValidate.isValid}
      />
      <InputMessage text={lastNameValidate.text} />
      <Button type={submitString} text={'Sign up'} onClickMethod={register} />
    </>
  );
}
