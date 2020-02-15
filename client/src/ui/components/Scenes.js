import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
import Events from "./events/local";
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
    doubleClick(canvas, this.props.selectShape);
    click(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(this.props.scene).length) {
      createWalls();
    }
    updateScene(this.props.scene);
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
        <Events />
      </div>
    );
  }
}

const mapStateToProps = ({ buttons, scene }) => {
  return {
    buttons,
    scene
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
    }
  };
};

// export default connect(mapStateToProps)(Scenes);
export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
