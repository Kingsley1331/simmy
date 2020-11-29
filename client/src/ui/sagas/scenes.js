import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { TEMP_physicsBugIds, TEMP_showbugs } from "../../constants/bugs";

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

export function* getSceneId({ type, sceneId }) {
  if (type === "GET_SCENE_ID") {
    yield sceneSaga(sceneId);
  }
  if (type === "DELETE_SCENE") {
    yield deleteScene(sceneId);
  }
}

export function* getAllscenes() {
  const scenes = yield axios.get("/allscenes/");
  const { data } = scenes;
  const TEMP_filteredScenes = data.filter(
    scene => !TEMP_physicsBugIds.includes(scene._id)
  );
  const scenesData = TEMP_showbugs ? data : TEMP_filteredScenes;

  try {
    yield put({
      type: "GET_SCENES",
      payload: scenesData
      // payload: scenes.data,
    });
  } catch (error) {
    yield put({ type: "ERROR", payload: error });
  }
}

export function* scenesSaga() {
  yield call(getAllscenes);
  yield takeEvery("GET_SCENE_ID", getSceneId);
  yield takeEvery("DELETE_SCENE", getSceneId);
}
