import React, { Component } from 'react';
import Buttons from './buttons';
class Scenes extends Component {
  constructor(){
    super();
    console.log('hello simmy!');
  }
  componentDidMount(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    const bufferCanvas = document.createElement('canvas');
    const bufferCtx = bufferCanvas.getContext("2d");
    bufferCtx.canvas.width = context.canvas.width;
    bufferCtx.canvas.height = context.canvas.height;

    bufferCtx.fillStyle = '#E0E0E0';
    bufferCtx.fillRect(0, 0, 1000, 600);
    bufferCtx.fill();

    context.drawImage(bufferCanvas,0,0, canvas.width, canvas.height);
  }
  render() {
    return (
      <div>
        <canvas id='canvas' width='1000' height='600'></canvas>
        <Buttons/>
      </div>
    );
  }
}

export default Scenes;
