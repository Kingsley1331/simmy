import React, { useState } from "react";
import Scene from "../../../engine/scenes/scene";
import { ColourInterface } from "../../../engine/shapes/shapes";
import ShapesController from "../../../engine/shapes/ShapesController";
import DatGui, {
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatPresets,
  DatSelect,
  DatString
} from "react-dat-gui";

const ColourPalette = () => {
  // const colourData = {
  //   currentColour: null,
  // };

  const {
    getCurrentColour,
    setCurrentColour,
    getSelectedShapeIndex
  } = ColourInterface();

  const [colour, setColour] = useState({
    colour: getCurrentColour() || "white"
  });
  // console.log("colour1", colour);
  const handleUpdate = data => {
    const selectedShapeIndex = getSelectedShapeIndex();
    const { colour } = data;
    setColour({ colour });
    setCurrentColour(colour);
    // Scene.backgroundColour = backgroundColour;
    // console.log("colour2", colour);
    console.log("data", data);
    if (selectedShapeIndex) {
      console.log("colour3", colour);
      ShapesController.setProperty(selectedShapeIndex, "fillColour", colour);
    }
  };

  return (
    <DatGui data={colour} onUpdate={handleUpdate}>
      <DatString path="colour" label="Colour" />
      <DatColor path="colour" label="Colour" />
    </DatGui>
  );
};

export default ColourPalette;
