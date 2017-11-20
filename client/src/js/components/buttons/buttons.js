import React, { Component } from 'react';

export class PlayButton extends Component {
  render() {
    return (
      <img alt='play button' id='play' src='images/play.png' width="25" onClick={this.props.selectShape}/>
    );
  }
}

export class NoneButton extends Component {
  render() {
    return (
      <h1 className='selected' id='none' onClick={this.props.selectShape}>none</h1>
    );
  }
}

export class SquareButton extends Component {
  render() {
    return (
      <img alt='square button' id='square' src='images/square.png' width="25" onClick={this.props.selectShape}/>
    );
  }
}

export class TriangleButton extends Component {
  render() {
    return (
      <img alt='triangle button' id='triangle' src="images/triangle.png" width="25"/>
    );
  }
}

export class PentagonButton extends Component {
  render() {
    return (
      <img alt='pentagon button' id='pentagon' src="images/pentagon.png" width="25"/>
    );
  }
}

export class HexagonButton extends Component {
  render() {
    return (
      <img alt='hexagon button' id='hexagon' src="images/hexagon.png" width="30"/>
    );
  }
}

export class CircleButton extends Component {
  render() {
    return (
      <img alt='circle button' id='circle' src="images/circle.png" width="29"/>
    );
  }
}

export class PlusButton extends Component {
  render() {
    return (
      <img alt='plus button' id='plus' src="images/plus.png" width="29"/>
    );
  }
}

export class ArrowButton extends Component {
  render() {
    return (
      <img alt='arrow button' id='arrow' src="images/arrow.png" width="29"/>
    );
  }
}

export class StarButton extends Component {
  render() {
    return (
      <img alt='star button' id='star' src="images/star.png" width="32"/>
    );
  }
}

export class TshapeButton extends Component {
  render() {
    return (
      <img alt='tShape button' id='tShape' src="images/tShape.png" width="30"/>
    );
  }
}

export class BarButton extends Component {
  render() {
    return (
      <img alt='bar button' id='bar' src="images/bar.png" width="10"/>
    );
  }
}

export class ConcaveButton extends Component {
  render() {
    return (
      <h1 id='concave'>C</h1>
    );
  }
}

export class BoxButton extends Component {
  render() {
    return (
      <img alt='box button' id='box' src="images/box.png" width="25"/>
    );
  }
}
