import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
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
import { mouseDown, mouseMove, mouseUp } from "../../engine/utils/listeners";
import { applyMotion } from "../../engine/physics/motion";
import animate from "../../engine/utils/animation";
import { getScene } from "../actions/scenes";

let canvas;
class Scenes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate(this.props.scene);
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(this.props.scene).length) {
      createWalls();
    }
    updateScene(this.props.scene);
  }

  componentWillUnmount() {
    clearShapes();
    this.props.dispatch({
      type: "GET_SCENE",
      payload: {}
    });
  }

  render() {
    return (
      <div>
        <Buttons />
        <canvas id="canvas" width="1000" height="600" />
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

export default connect(mapStateToProps)(Scenes);
