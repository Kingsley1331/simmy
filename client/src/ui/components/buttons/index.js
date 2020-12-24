import React from "react";
import { connect } from "react-redux";
import selectShape from "../../actions/buttons";
import Scene, { updateSelected } from "../../../engine/scenes/scene";

import { ImgButton, save, update } from "./buttons";

const Buttons = ({ buttons, selectShape }) => {
  return (
    <div className="buttons">
      <ImgButton
        alt="play button"
        id="play"
        src="images/play.png"
        width="25"
        selected={buttons["play"]}
        selectShape={() => selectShape("play")}
      />
      <ImgButton
        alt="step button"
        id="step"
        src="images/step.png"
        width="25"
        selected={buttons["step"]}
        selectShape={() => {
          selectShape("step");
        }}
      />
      <ImgButton
        alt="square button"
        id="square"
        src="images/square.png"
        width="25"
        selected={buttons["square"]}
        selectShape={() => selectShape("square")}
      />
      <ImgButton
        alt="triangle button"
        id="triangle"
        src="images/triangle.png"
        width="25"
        selected={buttons["triangle"]}
        selectShape={() => selectShape("triangle")}
      />
      <ImgButton
        alt="pentagon button"
        id="pentagon"
        src="images/pentagon.png"
        width="25"
        selected={buttons["pentagon"]}
        selectShape={() => selectShape("pentagon")}
      />
      <ImgButton
        alt="hexagon button"
        id="hexagon"
        src="images/hexagon.png"
        width="30"
        selected={buttons["hexagon"]}
        selectShape={() => selectShape("hexagon")}
      />
      <ImgButton
        alt="circle button"
        id="circle"
        src="images/circle.png"
        width="29"
        selected={buttons["circle"]}
        selectShape={() => selectShape("circle")}
      />
      <ImgButton
        alt="plus button"
        id="plus"
        src="images/plus.png"
        width="29"
        selected={buttons["plus"]}
        selectShape={() => selectShape("plus")}
      />
      <ImgButton
        alt="arrow button"
        id="arrow"
        src="images/arrow.png"
        width="29"
        selected={buttons["arrow"]}
        selectShape={() => selectShape("arrow")}
      />
      <ImgButton
        alt="star button"
        id="star"
        src="images/star.png"
        width="32"
        selected={buttons["star"]}
        selectShape={() => selectShape("star")}
      />
      <ImgButton
        alt="tShape button"
        id="tShape"
        src="images/tShape.png"
        width="30"
        selected={buttons["tShape"]}
        selectShape={() => selectShape("tShape")}
      />
      <ImgButton
        alt="bar button"
        id="bar"
        src="images/bar.png"
        width="10"
        selected={buttons["bar"]}
        selectShape={() => selectShape("bar")}
      />
      <ImgButton
        alt="box button"
        id="box"
        src="images/box.png"
        width="25"
        selected={buttons["box"]}
        selectShape={() => selectShape("box")}
      />
      <ImgButton
        alt="delete button"
        id="_delete"
        src="images/delete.png"
        width="25"
        selected={buttons["_delete"]}
        selectShape={() => selectShape("_delete")}
      />
      <ImgButton
        alt="save button"
        id="save"
        src="images/save.png"
        width="25"
        selected={buttons["save"]}
        selectShape={() => {
          selectShape("save");
          save();
        }}
      />
      <ImgButton
        alt="update button"
        id="update"
        src="images/update.png"
        width="25"
        selected={buttons["update"]}
        selectShape={() => {
          selectShape("update");
          update();
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  updateSelected(state, Scene);
  return {
    buttons: state.buttons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: shape => dispatch(selectShape(shape))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
