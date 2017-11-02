// File Name: reducers/index
// Description: Application Reducers
// Used by:
// Dependencies:
// ------------------------------------------------------------

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form/immutable';

import authReducer from './authReducer';

export default combineReducers({
  authReducer,
  routing: routerReducer
});
