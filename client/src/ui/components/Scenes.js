import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
import { draw } from "../../engine/scenes/draw";
import Scene from "../../engine/scenes/scene";
import {
  createShape,
  shapeSelection,
  forEachShape
} from "../../engine/shapes/shapes";
import createWalls from "../../engine/shapes/walls";
import reCentre from "../../engine/shapes/reCentre";
import getMousePos from "../../engine/utils/position";
import { mouseDown, mouseMove, mouseUp } from "../../engine/utils/listeners";
import { applyMotion } from "../../engine/physics/motion";
import animate from "../../engine/utils/animation";

let canvas;
class Scenes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/
    console.log("scene =====>", this.props.scene);
    canvas = document.getElementById("canvas");
    animate(this.props.scene);
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    reCentre(shapeSelection);
    createWalls();
  }
  render() {
    console.log("scene2 =====>", this.props.scene);
    console.log("props =====>", this.props);
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
// const mapStateToProps = state => {
//   return {
//     buttons: state.buttons
//   };
// }

export default connect(mapStateToProps)(Scenes);
