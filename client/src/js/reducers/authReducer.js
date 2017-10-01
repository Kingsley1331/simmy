import { FETCH_CURRENT_USER } from '../actions/types';

// the reducer returns 1 of 3 values null, false or the user object
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
    return action.payload || false;
    default:
      return state;
  }
}
