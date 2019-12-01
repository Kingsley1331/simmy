import { takeEvery, put, call } from "redux-saga/effects";
import usersSaga from "./users";
import { scenesSaga, sceneSaga, sceneIdSaga } from "./scenes";

export default function* rootSaga() {
  yield takeEvery("USERS", usersSaga);
  yield takeEvery("SCENES", scenesSaga);
  yield takeEvery("GET_SCENE_ID", sceneIdSaga);
  yield takeEvery("DELETE_SCENE", sceneIdSaga);
}
