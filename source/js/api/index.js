// File Name: api/index.js
// Description: API
// Used by:
// Dependencies:
// --------------------------------------------------------

import axios from 'axios';

const ROOT_URL = process.env.NODE_ENV === 'production'
  ? 'https://vhms-web.appspot.com/'
  : 'http://localhost:8080/api';

function xhrRequest(method, route, data, isWithCredentials) {
  return axios({
    method: `${method}`,
    url: `${ROOT_URL}/${route}`,
    data: data,
    withCredentials: `${isWithCredentials}`,
    validateStatus: (status) => status === 200 || status === 201
  })
  .then(data => data.data)
  .catch(err =>  throw err);
}


  // GET USER
export function getUser() {
  return xhrRequest('get', 'users', null, true);
}

// POST Token - Get token
export function getToken({ email, password }) {
  return xhrRequest(
    'post',
    'token',
    {
      email: email,
      password: password,
    },
    true
  );
}

  // Renew Token
export function renewToken() {
  return xhrRequest('get', 'token/renew', null, true);
}

  // Get Token - Check for Valid
export function isLoggedIn() {
  return xhrRequest('get', 'token',  null, true);
}

  // Delete Token
export function deleteToken() {
  return xhrRequest('delete', 'token', null, true);
}

  // POST User (Register User)
export function registerUser(userObj) {
  const {
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    address1,
    address2,
    zip
  } = userObj;

  return xhrRequest(
    'post',
    'users',
    {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      city: city,
      state: state,
      address1: address1,
      address2: address2,
      zip: zip,
    },
    null,
    true
  );
}

  // PATCH USER
export function patchUser(userObj) {
  const {
    city,
    state,
    address1,
    address2,
    zip
  } = userObj;

  return xhrRequest(
    'patch',
    'users',
    {
      city: city,
      state: state,
      address1: address1,
      address2: address2,
      zip: zip,
    },
    null,
    true
  );
}
