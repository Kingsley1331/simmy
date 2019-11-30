import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

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
