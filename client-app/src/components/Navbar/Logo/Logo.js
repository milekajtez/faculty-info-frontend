import React from 'react';
import { LogoElement } from './Logo.styled';

export function Logo(props) {
  const { iconImage, logoWidth, logoHeight } = props;

  return <LogoElement src={iconImage} width={logoWidth} height={logoHeight} />;
}
