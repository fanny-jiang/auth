import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });

/* ------------       REDUCERS     ------------------ */

export default function reducer(user = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const setUser = user => dispatch => {
  console.log('from axios post request');
  axios.post('/login', user)
    .then(res => dispatch(setCurrentUser(res.data)))
    .catch(err => console.error('error is in the post axios request', err));
};
