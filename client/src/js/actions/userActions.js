import axios from 'axios';

export function fetchUser() {console.log('fetchUser');
  return function(dispatch) {
    axios.get('http://rest.learncode.academy/api/western/users').then(function(users){
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
