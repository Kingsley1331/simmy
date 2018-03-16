import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons/';
import { draw1 } from '../../physics/scenes/draw';
import Scene from '../../physics/scenes/scene';
import { createShape, shapeSelection, forEachShape } from '../../physics/shapes/shapes';
import getMousePos from '../../physics/utils/position';
import { mouseDown, mouseMove, mouseUp } from '../../physics/utils/listeners';
import { applyMotion } from '../../physics/physics/motion';
import animate from '../../physics/utils/animation';

let canvas;
class Scenes extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    canvas = document.getElementById('canvas');
    animate();
    mouseDown(canvas, this);
    mouseMove(canvas);
    mouseUp(canvas);
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
