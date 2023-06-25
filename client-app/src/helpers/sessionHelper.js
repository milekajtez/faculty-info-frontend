import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import {
  loggedInAs,
  loginSessionUserRoleIsUnknown
} from '../components/Authentification/Login/LoginMessages';
import { faculitiesPath } from './routePaths';
import { emptyString, mainAdminTypeString, tokenString } from './strings';

export const checkSession = () => {
  var sessionObj = {
    logged: false,
    userRole: emptyString,
    email: emptyString
  };

  var token = localStorage.getItem(tokenString);

  if (!token) return sessionObj;

  var decodedToken = jwt_decode(token);
  var currentDateValue = Math.trunc(Date.now() / 1000);
  var expDateValue = decodedToken.exp;
  var tokenIsNotExpired = currentDateValue <= expDateValue;
  sessionObj.logged = tokenIsNotExpired;
  sessionObj.email = tokenIsNotExpired ? decodedToken.email : emptyString;
  sessionObj.userRole = tokenIsNotExpired ? decodedToken.type : emptyString;

  return sessionObj;
};

export const getUserRole = () => {
  var token = localStorage.getItem(tokenString);

  if (!token) return emptyString;

  return jwt_decode(token).type;
};

export const redirectLoggedUserToExpectedPage = (session, navigate) => {
  if (!session.logged) return;

  var currentDateValue = Math.trunc(Date.now() / 1000);
  if (session.exp > currentDateValue) {
    localStorage.removeItem(tokenString);
    navigate('/');
  }

  if (session.userRole === mainAdminTypeString) {
    navigate(faculitiesPath);
    toast(loggedInAs(session.userRole));
  } else {
    toast(loginSessionUserRoleIsUnknown);
  }
};

export const logout = (setSession, navigate) => {
  setSession({
    logged: false,
    userRole: emptyString,
    email: emptyString
  });

  localStorage.removeItem(tokenString);
  navigate('/');
};
