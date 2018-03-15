import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons/';
import { draw1 } from '../../physics/scenes/draw';
import Scene from '../../physics/scenes/scene';
import { createShape, shapeSelection, forEachShape } from '../../physics/shapes/shapes';
import getMousePos from '../../physics/utils/position';
import { mouseDown, mouseMove, mouseUp } from '../../physics/utils/listeners';
import { applyMotion } from '../../physics/physics/motion';

let canvas;
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
		function(callback) {
		    window.setTimeout(callback, 1000 / 60);
	    };
})();

function animate(){
  // console.log('==========================canvas', canvas);
  var date = new Date();
  var currentTime = date.getTime();
  let time = Scene.time;
  var tDelta = (currentTime - time);
  forEachShape(function(i){
    applyMotion(i, tDelta);
    // applyForces(i);
  });
  // collisionDetector();
	draw1(canvas);
	window.requestAnimFrame(animate);
  Scene.time = currentTime;
}

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
    // setInterval(draw1, 17, canvas);
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
