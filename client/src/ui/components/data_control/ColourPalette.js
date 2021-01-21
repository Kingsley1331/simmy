import React, { useState, useEffect, useCallback } from "react";
import { ColourInterface } from "../../../engine/shapes/shapes";
import ShapesController from "../../../engine/shapes/ShapesController";
import DatGui, { DatButton, DatColor, DatString } from "react-dat-gui";
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
  const colourOptions = colours.map(colour => {
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
  const { setCurrentColour, getSelectedShapeIndex } = ColourInterface();

  const [colour, setColour] = useState("");

  const updateColour = useCallback(
    colour => {
      const selectedShapeIndex = getSelectedShapeIndex();
      setColour(colour);
      setCurrentColour(colour);
      if (selectedShapeIndex) {
        ShapesController.setProperty(selectedShapeIndex, "fillColour", colour);
      }
    },
    [
      setColour,
      setCurrentColour,
      getSelectedShapeIndex,
      ShapesController.setProperty
    ]
  );

  useEffect(() => {
    updateColour(colour);
  }, [setColour, colour]);

  const handleUpdate = useCallback(
    data => {
      const { colour } = data;
      updateColour(colour);
    },
    [updateColour]
  );

  return (
    <DatGui data={{ colour }} onUpdate={handleUpdate}>
      <DatString path="colour" label="Colour" />
      <Palette colours={COLOURS} setColour={colour => setColour(colour)} />
      <DatColor path="colour" label="Colour" />
    </DatGui>
  );
};

export default ColourPalette;
