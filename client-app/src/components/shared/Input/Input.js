import React from 'react';
import { InputElement } from './Input.styled';

export function Input(props) {
  const { inputType, placeholder, onChangeMethod, isValid, value } = props;

  return (
    <InputElement
      type={inputType}
      placeholder={placeholder}
      onChange={(e) => {
        onChangeMethod(e.target.value);
      }}
      isValid={isValid}
      value={value}
    />
  );
}
