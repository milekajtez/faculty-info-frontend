import React, { useState } from 'react';
import API from '../../../api';
import { registerStudentPath } from '../../../helpers/requestPaths';
import {
  EmailString,
  FirstNameString,
  LastNameString,
  PasswordString,
  passwordString,
  submitString,
  textString
} from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import {
  validateEmail,
  validateName,
  validatePassword
} from '../../Validators/InputValidatior/InputValidator';
import { toast } from 'react-toastify';
import { plaseInsertValidCredentials } from '../../Validators/validatorMessages';
import { registrationIsSuccessful } from './RegistrationMessages';
import { signUp } from '../../shared/Button/ButtonMessages';

export function Registration() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailValidate, setEmailValidate] = useState({ isValid: true, text: '' });
  const [passwordValidate, setPasswordValidate] = useState({ isValid: true, text: '' });
  const [firstNameValidate, setFirstNameValidate] = useState({ isValid: true, text: '' });
  const [lastNameValidate, setLastNameValidate] = useState({ isValid: true, text: '' });

  const register = () => {
    setPasswordValidate(validatePassword(password));
    setEmailValidate(validateEmail(email));
    setFirstNameValidate(validateName(firstName));
    setLastNameValidate(validateName(lastName));

    if (
      !emailValidate.isValid ||
      !passwordValidate.isValid ||
      !firstNameValidate.isValid ||
      !lastNameValidate.isValid
    ) {
      toast(plaseInsertValidCredentials);
      return;
    }

    API.post(registerStudentPath, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .then(() => {
        toast(registrationIsSuccessful);
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <>
      <Input
        inputType={textString}
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
      <Input
        inputType={textString}
        placeholder={FirstNameString}
        onChangeMethod={setFirstName}
        isValid={firstNameValidate.isValid}
      />
      <InputMessage text={firstNameValidate.text} />
      <Input
        inputType={textString}
        placeholder={LastNameString}
        onChangeMethod={setLastName}
        isValid={lastNameValidate.isValid}
      />
      <InputMessage text={lastNameValidate.text} />
      <Button type={submitString} text={signUp} onClickMethod={register} />
    </>
  );
}
