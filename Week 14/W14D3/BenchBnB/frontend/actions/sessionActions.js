export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

import {
    signup,
    login,
    logout
} from '../util/sessionApiUtil';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_ERRORS,
    errorsArr
});

const receiveSessionErrors = (errorsArr) => ({
    type: RECEIVE_SESSION_ERRORS,
    errorsArr
});

const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const signUp = user => dispatch => signup(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logIn = user => dispatch => login(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logOut = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));
