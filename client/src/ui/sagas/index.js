import { takeEvery } from "redux-saga/effects";
import usersSaga from "./users";
import { scenesSaga } from "./scenes";

export default function* rootSaga() {
  yield takeEvery("USERS", usersSaga);
  yield takeEvery("SCENES", scenesSaga);
}
