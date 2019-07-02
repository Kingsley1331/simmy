import axios from "axios";

export function fetchScenes() {
  return function(dispatch) {
    axios
      .get("/scenes/")
      .then(function(scenes) {
        dispatch({
          type: "GET_SCENES",
          payload: scenes.data
        });
      })
      .catch(function(err) {
        dispatch({
          type: "ERROR",
          payload: err
        });
      });
  };
}

export function fetchScene(sceneId) {
  return function(dispatch) {
    axios
      .get(`/scenes/${sceneId}`)
      .then(function(scene) {
        dispatch({
          type: "GET_SCENE",
          payload: scene.data
        });
      })
      .catch(function(err) {
        dispatch({
          type: "ERROR",
          payload: err
        });
      });
  };
}

export function deleteScene(sceneId) {
  return function(dispatch) {
    axios
      .delete(`/scenes/${sceneId}`)
      .then(function(response) {
        console.log("delete response", response);
        axios.get("/scenes/").then(function(scenes) {
          dispatch({
            type: "GET_SCENES",
            payload: scenes.data
          });
        });
      })
      .catch(function(err) {
        dispatch({
          type: "ERROR",
          payload: err
        });
      });
  };
}
