import * as authActionTypes from './authActionTypes';

import axiosOrder from '../../axios-orders';

export const authStart = () => {
  return {
    type: authActionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, email) => {
  return {
    type: authActionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    email: email,
  };
};

export const authFail = (error) => {
  return {
    type: authActionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('email');
  localStorage.removeItem('userId');
  return {
    type: authActionTypes.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const authAttempt = (
  email,
  password,
  confirmPassword = null,
  isSignup
) => {
  return (dispatch) => {
    dispatch(authStart());

    let authData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    let url = '/signup';

    if (!isSignup) {
      url = '/login';
      authData = {
        password: password,
        email: email,
      };
    }

    axiosOrder
      .post(url, authData)
      .then((response) => {
        const decryptedJwtExpirationDate = atob(
          response.data.token.split('.')[1]
        );

        const expirationDate = JSON.parse(decryptedJwtExpirationDate).exp;

        const expiresIn = 3600;

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(
          authSuccess(
            response.data.token,
            response.data.userId,
            response.data.email
          )
        );
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(
        parseInt(localStorage.getItem('expirationDate'))
      );

      if (expirationDate <= new Date().getTime() / 1000) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem('userId');
        const email = localStorage.getItem('email');
        dispatch(authSuccess(token, userId, email));
        dispatch(
          checkAuthTimeout(expirationDate - new Date().getTime() / 1000)
        );
      }
    }
  };
};

