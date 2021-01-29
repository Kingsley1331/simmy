import { forEachShape } from "../../shapes/shapes";
import ShapesController from "../../shapes/ShapesController";

export const manageShapeMousedown = (Scene, setManagedShapeIndex) => {
  if (Scene.selected === "manageShape") {
    forEachShape(function(idx) {
      const onShape = ShapesController.getProperty(idx, "onShape");
      if (onShape) {
        setManagedShapeIndex(idx);
      }
    }, false);
  }
};
