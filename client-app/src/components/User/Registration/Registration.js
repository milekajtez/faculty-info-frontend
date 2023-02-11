import React from 'react';
import { passwordString, submitString, textString } from '../../../helpers/strings';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';

export function Registration() {
  return (
    <>
      <Input inputType={textString} placeholder={'Username'} />
      <Input inputType={passwordString} placeholder={'Password'} />
      <Input inputType={textString} placeholder={'Email'} />
      <Input inputType={textString} placeholder={'First name'} />
      <Input inputType={textString} placeholder={'Last name'} />
      <Button type={submitString} text={'Sign up'} />
    </>
  );
}
