import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
import { draw } from "../../engine/scenes/draw";
import Scene, { updateScene, setScene } from "../../engine/scenes/scene";
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
    createWalls();
    // Scene.shapes = this.props.scene.shapes;
    updateScene(this.props.scene);
    // console.log("SCENE =====>", JSON.stringify(Scene.shapes[5]));
    // console.log("scene =====>", JSON.stringify(this.props.scene));
  }

  /*
  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.scene).length) {
      const newScene = setScene(this.props.scene);
      Scene.backgroundColour = newScene.backgroundColour;
      Scene.shapes = { ...newScene.shapes };
      //   mousePos: { },
      // context: { buffer: { } },
      // cursorOnshape: false,
      //   selected: "none",
      //     throwArray: [],
      //       timeStep: 16,
      //         time: 0,
      //           settings: {
      //   display: true,
      //     restitution: 1
    }
  }*/

  // componentDidUpdate(prevProps) {
  //   if (Object.keys(this.props.scene).length) {
  //     console.log(
  //       "888888888888888888888888888888888888888888888888888888888888888888888888888888888888"
  //     );
  //     Scene.backgroundColour = this.props.scene.backgroundColour;
  //     Scene.shapes = this.props.scene.shapes.map(shape => {
  //       return new Shape(shape.centreOfMass, shape.vertices);
  //     });
  //   }
  // }

  componentWillUnmount() {
    clearShapes();
  }

  render() {
    // console.log("scene2 =====>", this.props.scene);
    // console.log("props =====>", this.props);
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
