import axios from 'axios';
import { browserHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGOUT = 'USER_LOGOUT';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });
const userSignUp = user => ({ type: USER_SIGNUP, user });
const userLogout = user => ({ type: USER_LOGOUT, user });

/* ------------       REDUCERS     ------------------ */

export default function reducer(user = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    case USER_SIGNUP:
      return action.user;
    case USER_LOGOUT:
      return action.user;

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const setUser = user => dispatch => {
  axios.post('/login', user)
    .then(res => dispatch(setCurrentUser(res.data)))
    .catch(err => console.error('error is in the post axios request', err));
};

export const signUp = user => dispatch => {
  axios.post('/signup', user)
  .then(res => dispatch(userSignUp(res.data)))
  .catch(err => console.error('Error on Signup Axios Req', err));
};

export const logout = user => dispatch => {
  axios.get('/logout', user)
  .then(res => dispatch(userLogout(res.data)))
  .then(browserHistory.push('/'));
};
