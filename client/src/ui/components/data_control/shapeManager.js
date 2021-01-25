import React, { useState, useEffect } from "react";
import Scene from "../../../engine/scenes/scene";
import { ShapeManagerInterface } from "../../../engine/shapes/shapes";
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

const ShapeManager = ({ shapeIndex }) => {
  const id = ShapesController.getProperty(shapeIndex, "id");
  const type = ShapesController.getProperty(shapeIndex, "type");
  const fillColour = ShapesController.getProperty(shapeIndex, "fillColour");
  const physics = ShapesController.getProperty(shapeIndex, "physics");

  const [shapeData, setShapeData] = useState({
    id,
    type,
    fillColour,
    physics
  });

  useEffect(() => {
    const data = { id, type };
    setShapeData({ ...shapeData, ...data });
  }, [id, type]);

  const handleUpdate = data => {
    console.log({ data });
    const { isFixed, fillColour, physics: physicsData } = data;
    setShapeData(shapeData => ({
      ...shapeData,
      ...data
    }));

    ShapesController.setProperty(shapeIndex, "fillColour", fillColour);
    ShapesController.setProperty(shapeIndex, "physics", physicsData);
    ShapesController.setProperty(shapeIndex, "isFixed", isFixed);
  };

  return (
    <DatGui data={shapeData} onUpdate={handleUpdate}>
      <DatString path="id" label="shape id" />
      <DatString path="type" label="type" />
      <DatString path="fillColour" label="Colour" />
      <DatFolder title="Physics">
        <DatNumber path={"physics.velocity.x"} label="velocity.x"></DatNumber>
        <DatNumber path={"physics.velocity.y"} label="velocity.y"></DatNumber>
      </DatFolder>
      <DatBoolean path="isFixed" label="isFixed" />
    </DatGui>
  );
};

export default ShapeManager;
