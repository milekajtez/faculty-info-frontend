import React from 'react';
import { InputMessageElement } from './Input.styled';

export function InputMessage(props) {
  const { text } = props;
  return text !== '' ? <InputMessageElement>{text}</InputMessageElement> : null;
}
