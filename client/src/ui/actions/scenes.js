import axios from "axios";

export function fetchScenes() {
  return function(dispatch) {
    axios
      .get("/allscenes/")
      .then(function(scenes) {
        console.log("fetchScenes");
        return dispatch({
          type: "GET_SCENES",
          payload: scenes.data
        });
      })
      .catch(function(err) {
        return dispatch({
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
        return dispatch({
          type: "GET_SCENE",
          payload: scene.data
        });
      })
      .catch(function(err) {
        return dispatch({
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
          return dispatch({
            type: "GET_SCENES",
            payload: scenes.data
          });
        });
      })
      .catch(function(err) {
        return dispatch({
          type: "ERROR",
          payload: err
        });
      });
  };
}
