import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const USER_SIGNUP = 'USER_SIGNUP';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });
const userSignUp = user => ({ type: USER_SIGNUP, user });

/* ------------       REDUCERS     ------------------ */

export default function reducer(user = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    case USER_SIGNUP:
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
