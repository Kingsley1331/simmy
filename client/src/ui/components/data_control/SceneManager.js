import React, { useEffect, useState } from "react";
import Scene from "../../../engine/scenes/scene";
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

const SceneManager = ({ localScene, setLocalScene }) => {
  useEffect(() => {
    setLocalScene({
      backgroundColour: Scene.backgroundColour,
      timeStep: Scene.timeStep,
      time: Scene.time,
      settings: Scene.settings
    });
  }, [
    setLocalScene,
    Scene.backgroundColour,
    Scene.timeStep,
    Scene.time,
    Scene.settings
  ]);

  const handleUpdate = data => {
    const { backgroundColour, timeStep, time, settings } = data;
    setLocalScene({ ...data });
    Scene.backgroundColour = backgroundColour;
    Scene.timeStep = timeStep;
    Scene.time = time;
    Scene.settings = settings;
  };

  return (
    <DatGui data={localScene} onUpdate={handleUpdate}>
      <DatNumber path="time" label="Time" />
      <DatNumber path="timeStep" label="TimeStep" />
      <DatString path="backgroundColour" label="BackgroundColour" />
      <DatColor path="backgroundColour" label="Color" />
      <DatFolder
        title="Settings"
        style={{
          width: "500px"
        }}
      >
        <DatBoolean path={"settings.display"} label="display"></DatBoolean>
        <DatNumber
          path={"settings.restitution"}
          label="Restitution"
          step={0.1}
        />
        <DatFolder title="Display Data">
          <DatFolder title="Scene">
            <DatBoolean
              path={"settings.displayData.scene.mousePos"}
              label="mousePos"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.scene.time"}
              label="time"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.scene.steps"}
              label="steps"
            ></DatBoolean>
          </DatFolder>

          <DatFolder title="Shape">
            <DatBoolean
              path={"settings.displayData.shape.id"}
              label="id"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.index"}
              label="index"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.collisionPoint"}
              label="collisionPoint"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.collidinSide"}
              label="collidinSide"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.boundingRect"}
              label="boundingRect"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.normal"}
              label="normal"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.collisionPointVA"}
              label="collisionPointVA"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.collisionPointVB"}
              label="collisionPointVB"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.showCentreOfMass"}
              label="showCentreOfMass"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.showCentreOfRotation"}
              label="showCentreOfRotation"
            ></DatBoolean>
            <DatBoolean
              path={"settings.displayData.shape.showBoundingRectCentre"}
              label="showBoundingRectCentre"
            ></DatBoolean>
          </DatFolder>
        </DatFolder>
      </DatFolder>
    </DatGui>
  );
};

export default SceneManager;
