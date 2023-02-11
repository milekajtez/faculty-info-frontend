import React from 'react';
import { ButtonElement } from './Button.styled';

export function Button(props) {
  const { type, text } = props;
  return <ButtonElement type={type}>{text}</ButtonElement>;
}
