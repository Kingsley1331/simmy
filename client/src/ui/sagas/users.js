import { put } from "redux-saga/effects";
import axios from "axios";

// export const fetchCurrentUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({type: FETCH_CURRENT_USER, payload: res}));
//   };
// }

export default function* userSaga() {
  const users = yield axios.get("/api/users");
  try {
    yield put({
      type: "GET_USERS",
      payload: users.data
    });
  } catch (error) {
    yield put({
      type: "ERROR",
      payload: error
    });
  }
}
