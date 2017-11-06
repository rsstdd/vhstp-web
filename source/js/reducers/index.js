// File Name: reducers/index
// Description: Application Reducers
// Used by:
// Dependencies:
// ------------------------------------------------------------

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form/immutable';
import auth from './authReducer';

export default combineReducers({
  auth,
  routing: routerReducer
});
