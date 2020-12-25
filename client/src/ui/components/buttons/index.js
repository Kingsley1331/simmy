import React from "react";
import { connect } from "react-redux";
import selectShape from "../../actions/buttons";
import Scene, { updateSelected } from "../../../engine/scenes/scene";

import { ImgButton, BUTTONS } from "./buttons";

const Buttons = ({ buttons, selectShape }) => {
  return (
    <div className="buttons">
      {BUTTONS.map(({ name, width = "25", onClick = () => {} }) => (
        <ImgButton
          alt={`${name} button`}
          id={name}
          src={`images/${name}.png`}
          width={width}
          selected={buttons[name]}
          selectShape={() => {
            selectShape(name);
            onClick();
          }}
        />
      ))}
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
