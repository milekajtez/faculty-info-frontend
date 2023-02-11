import React from 'react';
import { InputElement } from './Input.styled';

export function Input(props) {
  const { inputType, placeholder } = props;

  return <InputElement type={inputType} placeholder={placeholder} />;
}
