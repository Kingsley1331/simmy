import React, { Component } from "react";
import Scene from "../../../../src/engine/scenes/scene";

const update = that => {
  that.props.selectShape();
  const name = prompt("Please enter a name for the scene", Scene.name);
  if (name !== null) {
    fetch(`/scenes/${Scene._id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...Scene, name }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("result", res);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
};

const save = that => {
  that.props.selectShape();

  const name = prompt("Please enter a name for the scene", "untitled");
  if (name !== null) {
    fetch("/scenes", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ ...Scene, name }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("result", res);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
};

export class PlayButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="play button"
        id="play"
        src="images/play.png"
        width="25"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class NoneButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="none"
        onClick={this.props.selectShape}
      >
        none
      </h1>
    );
  }
}

export class SquareButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="square button"
        id="square"
        src="images/square.png"
        width="25"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class TriangleButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="triangle button"
        id="triangle"
        src="images/triangle.png"
        width="25"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class PentagonButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="pentagon button"
        id="pentagon"
        src="images/pentagon.png"
        width="25"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class HexagonButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="hexagon button"
        id="hexagon"
        src="images/hexagon.png"
        width="30"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class CircleButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="circle button"
        id="circle"
        src="images/circle.png"
        width="29"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class PlusButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="plus button"
        id="plus"
        src="images/plus.png"
        width="29"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class ArrowButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="arrow button"
        id="arrow"
        src="images/arrow.png"
        width="29"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class StarButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="star button"
        id="star"
        src="images/star.png"
        width="32"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class TshapeButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="tShape button"
        id="tShape"
        src="images/tShape.png"
        width="30"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class BarButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="bar button"
        id="bar"
        src="images/bar.png"
        width="10"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class ConcaveButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="concave"
        onClick={this.props.selectShape}
      >
        C
      </h1>
    );
  }
}

export class BoxButton extends Component {
  render() {
    return (
      <img
        className={this.props.selected ? "selected" : ""}
        alt="box button"
        id="box"
        src="images/box.png"
        width="25"
        onClick={this.props.selectShape}
      />
    );
  }
}

export class DeleteButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="_delete"
        onClick={this.props.selectShape}
      >
        delete
      </h1>
    );
  }
}

export class StepButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="step"
        onClick={this.props.selectShape}
      >
        Step
      </h1>
    );
  }
}

export class SaveButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="save"
        onClick={() => {
          save(this);
        }}
      >
        Save
      </h1>
    );
  }
}

export class UpdateButton extends Component {
  render() {
    return (
      <h1
        className={this.props.selected ? "selected" : ""}
        id="update"
        onClick={() => {
          update(this);
        }}
      >
        Update
      </h1>
    );
  }
}
