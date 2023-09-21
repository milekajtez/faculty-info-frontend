import { emptyString } from '../../../helpers/strings';
import {
  invalidEmailAddress,
  maxLengthValidatorMessage,
  passwordMustBeAtLeast8Chars,
  passwordMustContainLowercase,
  passwordMustContainOneNumber,
  passwordMustContainUppercase,
  thisFieldIsRequired,
  tin10Digits,
  tinMustBeNumber
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

export const validateFacultyTin = (value) => {
  if (value === emptyString)
    return {
      isValid: false,
      text: thisFieldIsRequired
    };

  if (value.length !== 10) {
    return {
      isValid: false,
      text: tin10Digits
    };
  }

  if (isNaN(value))
    return {
      isValid: false,
      text: tinMustBeNumber
    };

  return validValue();
};

export const validateFacultyName = (value) => {
  if (value === emptyString)
    return {
      isValid: false,
      text: thisFieldIsRequired
    };

  if (value.length > 200)
    return {
      isValid: false,
      text: maxLengthValidatorMessage(200)
    };

  return validValue();
};

export const validateFacultyDescription = (value) => {
  if (value === emptyString)
    return {
      isValid: false,
      text: thisFieldIsRequired
    };

  if (value.length > 500)
    return {
      isValid: false,
      text: maxLengthValidatorMessage(500)
    };

  return validValue();
};

export const validateFacultyLocation = (value) => {
  if (value === emptyString)
    return {
      isValid: false,
      text: thisFieldIsRequired
    };

  return validValue();
};
