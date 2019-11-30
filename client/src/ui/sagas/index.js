import { takeEvery, put, call } from "redux-saga/effects";
import userSaga from "./users";

export default function* rootSaga() {
  yield takeEvery("USERS", userSaga);
}
