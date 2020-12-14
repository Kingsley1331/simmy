import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
// import EventForm from "./events/local";
import EventForm from "./events/EventForm";
import { draw } from "../../engine/scenes/draw";
import Scene, { updateScene } from "../../engine/scenes/scene";
import {
  createShape,
  clearShapes,
  shapeSelection,
  forEachShape,
  Shape
} from "../../engine/shapes/shapes";
import { createWalls } from "../../engine/shapes/walls";
import reCentre from "../../engine/shapes/reCentre";
import getMousePos from "../../engine/utils/position";
import {
  mouseDown,
  mouseMove,
  mouseUp,
  doubleClick,
  click
} from "../../engine/utils/listeners";
import { applyMotion } from "../../engine/physics/motion";
import animate from "../../engine/utils/animation";

const data = [
  {
    event_type: "hover",
    rule_type: "oneToPartner",
    apply_to_partner: false,
    emmitter_conditions: [
      {
        property_name: "lineColour",
        operator: ">",
        comparison: "yellow",
        logical_operator: "OR"
      }
    ],
    receiver_conditions: [
      {
        property_name: "lineColour",
        operator: "===",
        comparison: "blue",
        logical_operator: "OR"
      }
    ],
    actions: [{ property_name: "velocity.y", new_value: "24" }]
  },
  {
    event_type: "click",
    rule_type: "manyToPartner",
    apply_to_partner: false,
    emmitter_conditions: [
      {
        property_name: "fillColour",
        operator: "<",
        comparison: "blue",
        logical_operator: "AND"
      }
    ],
    receiver_conditions: [
      {
        property_name: "linewidth",
        operator: "===",
        comparison: "4",
        logical_operator: "NOT"
      }
    ],
    actions: [{ property_name: "velocity.x", new_value: "25" }]
  }
];

let canvas;
const Scenes = ({ selectShape, addRules, selectedEvent, scene, getScene }) => {
  const [rules, setRules] = useState(data);

  const addRule = () => {
    const id = new Date().getTime();
    setRules(rulesArray => [...rulesArray, { id }]);
  };

  useEffect(() => {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate();
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    doubleClick(canvas, selectShape, addRules, selectedEvent);
    click(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(scene).length) {
      createWalls();
    }
    updateScene(scene);
  }, [selectShape, addRules, selectedEvent]);

  useEffect(() => {
    doubleClick(canvas, selectShape, addRules, selectedEvent);
  }, [selectedEvent, selectShape, addRules]);

  useEffect(() => {
    return () => {
      clearShapes();
      getScene();
    };
  }, [clearShapes, getScene]);
  console.log({ rules });
  return (
    <div className="scenesWrapper">
      <Buttons />
      <canvas id="canvas" width="1000" height="600" />
      {rules.map(rule => (
        <EventForm key={rule.id} rule={rule} setRules={setRules} />
      ))}
      <button onClick={addRule}>Add rule</button>
    </div>
  );
};

const mapStateToProps = ({ buttons, scene, event }) => {
  return {
    buttons,
    scene,
    selectedEvent: event
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: shapeId => {
      // dispatch({ type: "SELECTED_SHAPE", shapeId });
      dispatch({ type: "SELECT_SHAPE", payload: shapeId });
    },
    getScene: () => {
      dispatch({ type: "GET_SCENE", payload: {} });
    },
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules })
  };
};

// export default connect(mapStateToProps)(Scenes);
export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
