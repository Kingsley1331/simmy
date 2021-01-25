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
  const isFixed = ShapesController.getProperty(shapeIndex, "isFixed");
  const isShapeFixed = ShapesController.getProperty(shapeIndex, "isShapeFixed");
  const fillColour = ShapesController.getProperty(shapeIndex, "fillColour");
  const physics = ShapesController.getProperty(shapeIndex, "physics");
  const [shapeData, setShapeData] = useState({
    id,
    fillColour,
    physics,
    isShapeFixed,
    isFixed
  });

  useEffect(() => {
    const data = { id, isFixed, physics, isShapeFixed, fillColour };

    setShapeData({ ...data });
  }, [id, isFixed, physics, isShapeFixed, fillColour]);

  const handleUpdate = data => {
    const { isShapeFixed, fillColour, physics: physicsData } = data;

    setShapeData({ ...data });
    ShapesController.setProperty(shapeIndex, "fillColour", fillColour);
    ShapesController.setProperty(shapeIndex, "physics", physicsData);
    ShapesController.setProperty(shapeIndex, "isFixed", isShapeFixed);
  };

  return (
    <DatGui data={shapeData} onUpdate={handleUpdate}>
      <DatString path="id" label="shape id" />
      <DatString path="fillColour" label="Colour" />
      <DatFolder title="Physics">
        <DatNumber
          path={"physics.velocity.x"}
          label="velocity.x"
          step={0.01}
        ></DatNumber>
        <DatNumber
          path={"physics.velocity.y"}
          label="velocity.y"
          step={0.01}
        ></DatNumber>
        <DatNumber path={"physics.mass"} label="Mass"></DatNumber>
      </DatFolder>
      <DatBoolean path="isShapeFixed" label="isFixed" labelWidth="90px" />
    </DatGui>
  );
};

export default ShapeManager;
