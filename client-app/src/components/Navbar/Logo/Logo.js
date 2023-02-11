import React from 'react';
import iconImage from '../../../images/faculty_icon.png';
import { LogoElement } from './Logo.styled';

export function Logo() {
  return <LogoElement src={iconImage} width={'60'} height={'60'} />;
}
