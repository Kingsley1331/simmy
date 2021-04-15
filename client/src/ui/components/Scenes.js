import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
import EventForm from "./events/EventForm";
import updateScene from "../../engine/scenes/updateScene";
import { clearShapes, shapeSelection } from "../../engine/shapes/shapes";
import { createWall } from "../../engine/shapes/walls";
import reCentre from "../../engine/shapes/reCentre";
import { ShapeManagerInterface } from "../../engine/shapes/shapes";
import {
  mouseDown,
  mouseMove,
  mouseUp,
  doubleClick,
  click,
  rightClick
} from "../../engine/canvasEvents/listeners";
import animate from "../../engine/utils/animation";
import ShapeManager from "./data_control/ShapeManager";
import ColourPalette from "./data_control/ColourPalette";

let canvas;

const Scenes = ({
  selectShape,
  selectedShapeId,
  addRules,
  selectedEvent,
  scene,
  clearScene,
  buttons
  /*fetchScene*/
}) => {
  const [formRules, setFormRules] = useState([]);
  const [selected, setSelected] = useState();
  const [managedShapeIndex, setManagedShapeIndex] = useState(null);
  console.log({ scene });

  useEffect(() => {
    for (let button in buttons) {
      if (buttons[button]) {
        setSelected(button);
      }
    }
  }, [buttons, setSelected]);

  useEffect(() => {
    if (scene.rules) {
      setFormRules(scene.rules);
      console.log("scene.rules", scene.rules);
      // setFormRules(convertSceneRulesToFormRules(scene.rules));
    }
  }, [scene.rules]);

  const setManagedShapeIdx = useCallback(
    (idx = null) => {
      setManagedShapeIndex(idx);
      ShapeManagerInterface().selectShape(idx);
    },
    [setManagedShapeIndex]
  );

  const addRule = () => {
    const id = new Date().getTime();
    setFormRules(rulesArray => [...rulesArray, { id }]);
  };

  const resetScene = () => {
    updateScene(scene);
  };

  useEffect(() => {
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate();
    mouseDown(canvas, setManagedShapeIdx);
    mouseMove(canvas);
    mouseUp(canvas);
    doubleClick(canvas, selectShape, addRules, selectedEvent);
    click(canvas);
    rightClick(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(scene).length) {
      createWall(canvas, 250);
    }
    updateScene(scene);
  }, [selectShape, addRules, selectedEvent]);

  useEffect(() => {
    doubleClick(canvas, selectShape, addRules, selectedEvent);
  }, [selectedEvent, selectShape, addRules]);

  useEffect(() => {
    return () => {
      clearShapes();
      clearScene();
    };
  }, [clearShapes, clearScene]);
  console.log({ formRules });

  return (
    <div className="scenesWrapper">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center"
        }}
      >
        <h3 style={{ color: "blue", margin: "5px auto" }}>
          {scene.name || "Untitled"}
        </h3>
      </div>

      <div className="canvasWrapper">
        <Buttons setManagedShapeIndex={setManagedShapeIdx} />
        <canvas id="canvas" width="1200" height="700" />
        {/* <canvas id="canvas" width="1400" height="800" /> */}
        {/* <SceneManager /> */}

        {/* <canvas id="canvas" width="1000" height="600" /> */}
      </div>

      {selected === "colour" && <ColourPalette />}
      {formRules.map((rule, index) => (
        <EventForm key={rule.id} rule={rule} setFormRules={setFormRules} />
      ))}
      <button className="add_rule" onClick={addRule}>
        Add rule
      </button>

      <button className="reset" onClick={resetScene}>
        Reset scene
      </button>
      <br></br>
      {selected === "manageShape" && managedShapeIndex !== null && (
        <ShapeManager shapeIndex={managedShapeIndex} />
      )}
    </div>
  );
};

const mapStateToProps = ({ buttons, scene, event, selectedShape }) => {
  return {
    buttons,
    scene,
    selectedEvent: event,
    selectedShapeId: selectedShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: shapeId => {
      // dispatch({ type: "SELECTED_SHAPE", shapeId });
      dispatch({ type: "SELECT_SHAPE", payload: shapeId });
    },
    clearScene: () => {
      dispatch({ type: "GET_SCENE", payload: {} });
    },
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules })
    /*fetchScene: sceneId => dispatch({ type: "GET_SCENE_ID", sceneId })*/
  };
};

// export default connect(mapStateToProps)(Scenes);
export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
