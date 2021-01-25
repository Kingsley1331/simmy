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
  const centreOfMass = ShapesController.getProperty(shapeIndex, "centreOfMass");
  const physics = ShapesController.getProperty(shapeIndex, "physics");
  const [shapeData, setShapeData] = useState({
    id,
    fillColour,
    physics,
    isShapeFixed,
    isFixed,
    centreOfMass
  });

  useEffect(() => {
    const data = {
      id,
      isFixed,
      physics,
      isShapeFixed,
      fillColour,
      centreOfMass
    };
    setShapeData({ ...data });
  }, [id, isFixed, physics, isShapeFixed, fillColour]);

  const handleUpdate = data => {
    const {
      isShapeFixed,
      fillColour,
      physics: physicsData,
      centreOfMass
    } = data;

    setShapeData({ ...data });
    ShapesController.setProperty(shapeIndex, "fillColour", fillColour);
    ShapesController.setProperty(shapeIndex, "physics", physicsData);
    ShapesController.setProperty(shapeIndex, "isFixed", isShapeFixed);
    ShapesController.setProperty(shapeIndex, "centreOfMass", centreOfMass);
  };

  return (
    <DatGui data={shapeData} onUpdate={handleUpdate}>
      <DatString path="id" label="shape id" />
      <DatString path="fillColour" label="Colour" />
      <DatNumber path={"centreOfMass.x"} label="x" step={1}></DatNumber>
      <DatNumber path={"centreOfMass.y"} label="y" step={1}></DatNumber>
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
        <DatNumber
          path={"physics.angularVelocity"}
          label="Angular velocity"
          step={0.001}
        ></DatNumber>
        <DatNumber path={"physics.mass"} label="Mass"></DatNumber>
      </DatFolder>
      <DatBoolean path="isShapeFixed" label="isFixed" labelWidth="90px" />
    </DatGui>
  );
};

export default ShapeManager;
