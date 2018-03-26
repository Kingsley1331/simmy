import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons/';
import { draw } from '../../engine/scenes/draw';
import Scene from '../../engine/scenes/scene';
import { createShape, shapeSelection, forEachShape } from '../../engine/shapes/shapes';
import createWalls from '../../engine/shapes/walls';
import reCentre from '../../engine/shapes/reCentre';
import getMousePos from '../../engine/utils/position';
import { mouseDown, mouseMove, mouseUp } from '../../engine/utils/listeners';
import { applyMotion } from '../../engine/physics/motion';
import animate from '../../engine/utils/animation';

let canvas;
class Scenes extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    /** TODO: move functions into single index file and import **/
    canvas = document.getElementById('canvas');
    animate();
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    reCentre(shapeSelection);
    createWalls();
  }
  render() {
    return (
      <div>
        <Buttons/>
        <canvas id='canvas' width='1000' height='600' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttons: state.buttons
  };
}

export default connect(mapStateToProps)(Scenes);
