import React from 'react';
import { passwordString, submitString, textString } from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';

export function Login() {
  return (
    <>
      <Input inputType={textString} placeholder={'Username'} />
      <Input inputType={passwordString} placeholder={'Password'} />
      <Button type={submitString} text={'Sign in'} />
    </>
  );
}
