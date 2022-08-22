import * as authActionTypes from '../actions/authActionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  token: 'dummy',
  userId: null,
  error: null,
  loading: false,
  email: null,
};

const authStart = (state, _action) => {
  return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    token: action.token,
    userId: action.userId,
    email: action.email,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, _action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    email: null,
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.AUTH_START:
      return authStart(state, action);
    case authActionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case authActionTypes.AUTH_FAIL:
      return authFail(state, action);
    case authActionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
