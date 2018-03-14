import axios from 'axios';
import { FETCH_CURRENT_USER } from './types';

export function fetchUser() {console.log('fetchUser');
  return function(dispatch) {
    axios.get('/api/users').then(function(users) { console.log('=======================>users', users);
      dispatch({
        type: "GET_USERS",
        payload: users.data
      })
    }).catch(function(err) {
        dispatch({
        type: "ERROR",
        payload: err
      })
    });
  }
}

// export const fetchCurrentUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({type: FETCH_CURRENT_USER, payload: res}));
//   };
// }

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
