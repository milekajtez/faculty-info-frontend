import React from 'react';
import { LogoElement } from './Logo.styled';

export function Logo(props) {
  const { title, iconImage, logoWidth, logoHeight, onClickMethod } = props;

  return (
    <LogoElement
      title={title}
      src={iconImage}
      width={logoWidth}
      height={logoHeight}
      onClick={() => onClickMethod()}
    />
  );
}
