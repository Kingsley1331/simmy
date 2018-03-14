import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons/';
import { draw1 } from '../../physics/scenes/draw';
import Scene from '../../physics/scenes/scene';
import { createShape, shapeSelection } from '../../physics/shapes/shapes';
import getMousePos from '../../physics/utils/position';

class Scenes extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('click', (evt) => {
      let mousePos = getMousePos(evt, canvas);
      let selectedShape;
      const buttons = this.props.buttons;
      for(let button in buttons){
        if(buttons[button]){
          selectedShape = button;
        }
      }
      createShape(mousePos, shapeSelection[selectedShape]);
      setInterval(draw1, 17, canvas);
    })
    draw1(canvas);
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
