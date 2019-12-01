import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

export const getScene = path => axios.get(path);

export function* deleteScene(sceneId) {
  yield axios.delete(`/scenes/${sceneId}`);
  const scenes = yield axios.get("/allscenes/");
  try {
    yield put({
      type: "GET_SCENES",
      payload: scenes.data
    });
  } catch (error) {
    yield put({ type: "ERROR", payload: error });
  }
}

export function* sceneSaga(sceneId) {
  const scene = yield getScene(`/scene/${sceneId}`);
  yield put({
    type: "GET_SCENE",
    payload: scene.data
  });
}

export function* sceneIdSaga({ type, sceneId }) {
  if (type === "GET_SCENE_ID") {
    yield sceneSaga(sceneId);
  }
  if (type === "DELETE_SCENE") {
    yield deleteScene(sceneId);
  }
}

export function* scenesSaga() {
  const scenes = yield axios.get("/allscenes/");
  try {
    yield put({
      type: "GET_SCENES",
      payload: scenes.data
    });
  } catch (error) {
    yield put({ type: "ERROR", payload: error });
  }
}
