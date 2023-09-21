import React from 'react';
import { TextAreaElement } from './Input.styled';

export function TextArea(props) {
  const { inputType, placeholder, onChangeMethod, isValid, value } = props;

  return (
    <TextAreaElement
      type={inputType}
      placeholder={placeholder}
      onChange={(e) => {
        onChangeMethod(e.target.value);
      }}
      isValid={isValid}
      value={value}
      rows={8}
      cols={40}
    />
  );
}
