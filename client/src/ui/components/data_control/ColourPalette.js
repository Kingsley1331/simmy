import React, { useState, useEffect, useCallback } from "react";
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
import "./ColourPalette.css";

const COLOURS = [
  "blue",
  "green",
  "red",
  "yellow",
  "black",
  "orange",
  "purple",
  "white",
  "violet",
  "transparent"
];

const Palette = ({ colours, setColour }) => {
  const {
    getCurrentColour,
    setCurrentColour,
    getSelectedShapeIndex
  } = ColourInterface();
  const colourOptions = colours.map(colour => {
    // setCurrentColour(colour);
    return (
      <div
        onClick={() => setColour(colour)}
        className={`${colour} colour_option`}
        data-colour={colour}
        style={{ backgroundColor: colour }}
      ></div>
    );
  });
  return <div className={"colour_options"}>{colourOptions}</div>;
};

const ColourPalette = () => {
  const {
    getCurrentColour,
    setCurrentColour,
    getSelectedShapeIndex
  } = ColourInterface();

  const [colour, setColour] = useState({});

  useEffect(() => {
    if (colour) {
      setColour(colour);
      setCurrentColour(colour.colour);
      const selectedShapeIndex = getSelectedShapeIndex();
      if (selectedShapeIndex) {
        ShapesController.setProperty(
          selectedShapeIndex,
          "fillColour",
          colour.colour
        );
      }
    }
  }, [setColour, colour]);

  console.log("colour2", colour);
  const handleUpdate = useCallback(
    data => {
      const selectedShapeIndex = getSelectedShapeIndex();
      const { colour: currentColour } = data;
      setColour({ colour: currentColour });
      setCurrentColour(currentColour);
      // console.log("data", data);
      if (selectedShapeIndex) {
        console.log("currentColour", currentColour);
        ShapesController.setProperty(
          selectedShapeIndex,
          "fillColour",
          currentColour
        );
      }
    },
    [colour, setColour, setCurrentColour]
  );

  return (
    <DatGui data={colour} onUpdate={handleUpdate}>
      <DatString path="colour" label="Colour" />
      <Palette
        colours={COLOURS}
        setColour={colour => setColour({ colour })}
      ></Palette>
      <DatColor path="colour" label="Colour" />
    </DatGui>
  );
};

export default ColourPalette;
