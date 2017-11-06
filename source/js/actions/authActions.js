// File Name: actions/userActions.js
// Description: USERS - Register User & Get User Data
// Used by:
// Dependencies:
// ------------------------------------------------------

import axios from 'axios';
import * as api from '../api';
import {
    // Auth
  AUTH_USER,
  UNAUTH_USER,
  AUTH_USER_START,
  AUTH_USER_ERROR,
  AUTH_USER_SUCCESS,
  DELETE_TOKEN,

} from '../constants/actionTypes';

  // =============================
    // Synchronous USERS Action
  // =============================

// -----------------------------
  // Register User
// -----------------------------
  // START
export function registerUserStart() {
  return {
    type: REGISTER_USER_START,
  };
}
  // SUCCESS
export function registerUserSuccess(data) {
  return {
    type: REGISTER_USER_SUCCESS,
    data
  };
}
  // ERROR
export function registerUserError(err) {
  return {
    type: REGISTER_USER_ERROR,
    err
  };
}
// -----------------------------
  // Auth User (signin user)
// -----------------------------
  // START
export function signinStart() {
  return {
    type: REGISTER_USER_START,
  };
}
  // SUCCESS
export function signinSuccess(data) {
  return {
    type: REGISTER_USER_SUCCESS,
    data
  };
}
  // ERROR
export function signinError(err) {
  return {
    type: REGISTER_USER_ERROR,
    err
  };
}

// -----------------------------
  // Sign Out User:
// -----------------------------
      // Sign Out - SUCCESS
export function deleteTokenSuccess() {
  return {
    type: DELETE_TOKEN,
  };
}


// =======================
  // Async USERS Action
// =======================

// -----------------------------
  // Register User
// -----------------------------
export function registerUser(userObj) {
  const { email, password } = userObj;

  return (dispatch) => {
    api.registerUser(userObj)
      .then(data => {
        dispatch(registerUserSuccess(data));
        dispatch(loginUser({ email: email, password: password }));
      })
      .catch(err => dispatch(registerUserError(err)));
  };
}

// ----------------------------------
  // Log In/Sign in User (GET Token)
// ----------------------------------
export function signinUser({ email, password }) {

  return (dispatch) => {
    dispatch(signinStart());
    api.getToken({ email, password })
      .then(data => {
          localStorage.setItem('token', data.token)
          dispatch(getTokenSuccess());
          // dispatch(getUser());
        }
      })
      .catch(err => {
        dispatch(getTokenError(err))
      });
  };
}

// -------------------------------
  // Log Out User (DELETE Token)
// -------------------------------
export function signoutUser(cb) {
  localStorage.removeItem('token')

  return (dispatch) => {
    api.deleteToken()
      .then(data => {
        dispatch(deleteTokenSuccess());
      })
  };
}

// -----------------------------
  // Patch User (PATCH User)
// -----------------------------
export function patchUser(userObj) {

  return (dispatch) => {
    api.patchUser(userObj)
      .then(data => {
        if (data instanceof Error) {
          dispatch(patchUserError(data.response.data));
        } else {
          dispatch(userHasAddress(true));
          dispatch(patchUserSuccess(data));
          // dispatch(getUser());
        }
      })
      .catch(err => dispatch(patchUserError(err)));
  };
}
