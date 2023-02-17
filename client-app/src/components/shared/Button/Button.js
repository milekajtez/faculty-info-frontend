import React from 'react';
import { ButtonElement } from './Button.styled';

export function Button(props) {
  const { type, text, onClickMethod } = props;
  return (
    <ButtonElement type={type} onClick={() => onClickMethod()}>
      {text}
    </ButtonElement>
  );
}
