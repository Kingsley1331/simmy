import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons/';
import { draw1 } from '../../physics/scenes/draw';
import Scene from '../../physics/scenes/scene';
import { createShape, shapeSelection } from '../../physics/shapes/shapes';
import getMousePos from '../../physics/utils/position';
import { mouseDown, mouseMove } from '../../physics/utils/listeners';

class Scenes extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    mouseDown(canvas, this);
    mouseMove(canvas);
    setInterval(draw1, 17, canvas);
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
