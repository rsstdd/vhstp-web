// File Name: reducers/index
// Description: Application Reducers
// Used by:
// Dependencies:
// ------------------------------------------------------------

import initialState from './initialState'
import { Map } from 'immutable';
import {
    // USER
  GET_TOKEN_START,
  DELETE_TOKEN,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,

  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../constants/actionTypes';


const actionsMap = {
  // --------------
    // ASYNC USER
  // --------------
    // Sign In User
  [GET_TOKEN_START]: (state) => {
    return state.merge(Map({
      isAuthenticated: false,
      tokenLoading: true,
      tokenError: null,
      tokenSuccess: false,
    }));
  },
  [GET_TOKEN_SUCCESS]: (state) => {
    return state.merge(Map({
      tokenLoading: false,
      tokenError: false,
      tokenSuccess: true,
      isAuthenticated: true,
    }));
  },
  [GET_TOKEN_ERROR]: (state, action) => {
    return state.merge(Map({
      tokenLoading: false,
      tokenSuccess: false,
      isAuthenticated: false,
      tokenError: action.data,
    }));
  },

    // Sign Out User
  [DELETE_TOKEN]: (state) => {
    return state.merge(Map({
      isAuthenticated: false,
      userData: null
    }));
  },

    // Register User
  [REGISTER_USER_START]: (state) => {
    return state.merge(Map({
      registerUserLoading: true,
      registerUserError: null,
      registerUserSuccess: null,
    }));
  },
  [REGISTER_USER_SUCCESS]: (state) => {
    return state.merge(Map({
      registerUserLoading: false,
      registerUserError: false,
      registerUserSuccess: true,
    }));
  },
  [REGISTER_USER_ERROR]: (state, action) => {
    return state.merge(Map({
      registerUserLoading: false,
      registerUserSuccess: false,
      registerUserError: action.err,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
