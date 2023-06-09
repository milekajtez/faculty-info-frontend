import { emptyString } from '../../../helpers/strings';
import {
  invalidEmailAddress,
  passwordMustBeAtLeast8Chars,
  passwordMustContainLowercase,
  passwordMustContainOneNumber,
  passwordMustContainUppercase,
  thisFieldIsRequired
} from '../validatorMessages';

export const validValue = () => ({
  isValid: true,
  text: emptyString
});

export const validatePassword = (value) => {
  if (value.length < 8) return { isValid: false, text: passwordMustBeAtLeast8Chars };

  if (value.search(/[a-z]/) < 0)
    return {
      isValid: false,
      text: passwordMustContainLowercase
    };

  if (value.search(/[A-Z]/) < 0)
    return {
      isValid: false,
      text: passwordMustContainUppercase
    };

  if (value.search(/[0-9]/) < 0)
    return {
      isValid: false,
      text: passwordMustContainOneNumber
    };

  return validValue();
};

export const validateEmail = (value) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!value.match(validRegex))
    return {
      isValid: false,
      text: invalidEmailAddress
    };

  return validValue();
};

export const validateName = (value) => {
  if (value === emptyString)
    return {
      isValid: false,
      text: thisFieldIsRequired
    };

  return validValue();
};
