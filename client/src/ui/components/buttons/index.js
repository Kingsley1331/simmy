import React from "react";
import { connect } from "react-redux";
import selectShape from "../../actions/buttons";
import Scene, { updateSelected } from "../../../engine/scenes/scene";

import { ImgButton, BUTTONS } from "./buttons";

/**NOTE: Change confusing variable name selectShape refers to selecting features i.e clone, rotate etc */
const Buttons = ({ buttons, selectShape, setManagedShapeIndex }) => {
  return (
    <div className="buttons">
      {BUTTONS.map(({ name, width = "25", onClick = () => {} }) => (
        <ImgButton
          key={name}
          alt={`${name} button`}
          id={name}
          src={`images/${name}.png`}
          width={width}
          selected={buttons[name]}
          selectShape={() => {
            if (Scene.selected === name) {
              selectShape("");
            } else {
              selectShape(name);
              setManagedShapeIndex(null);
            }
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
