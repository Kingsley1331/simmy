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
    Scene.settings = { ...settings };
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
          width: "200px"
        }}
      >
        <DatBoolean path={"settings.display"} label="display"></DatBoolean>
        <DatNumber
          path={"settings.restitution"}
          label="Restitution"
          step={0.1}
        />
      </DatFolder>
    </DatGui>
  );
};

export default SceneManager;
