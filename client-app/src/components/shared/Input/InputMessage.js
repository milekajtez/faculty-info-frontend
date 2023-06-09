import React from 'react';
import { emptyString } from '../../../helpers/strings';
import { InputMessageElement } from './Input.styled';

export function InputMessage(props) {
  const { text } = props;
  return text !== emptyString ? <InputMessageElement>{text}</InputMessageElement> : null;
}
