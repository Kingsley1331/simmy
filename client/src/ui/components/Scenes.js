import React, { Component } from "react";
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

let canvas;
class Scenes extends Component {
  componentDidMount() {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate();
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    doubleClick(
      canvas,
      this.props.selectShape,
      this.props.addRules,
      this.props.selectedEvent
    );
    click(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(this.props.scene).length) {
      createWalls();
    }
    updateScene(this.props.scene);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedEvent !== this.props.selectedEvent) {
      doubleClick(
        canvas,
        this.props.selectShape,
        this.props.addRules,
        this.props.selectedEvent
      );
    }
  }

  componentWillUnmount() {
    clearShapes();
    this.props.getScene();
  }

  render() {
    return (
      <div className="scenesWrapper">
        <Buttons />
        <canvas id="canvas" width="1000" height="600" />
        {/* <EventForm type="local" />
        <EventForm type="global" /> */}
        <EventForm />
      </div>
    );
  }
}

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
