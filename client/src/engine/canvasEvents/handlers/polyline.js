import Scene from "../../scenes/scene";
import {
  PolylineInterface,
  createShapeFromPolyline
} from "../../shapes/shapes";

export const polylineMousedown = () => {
  if (Scene.selected === "polyline") {
    const {
      isCursorOnFirstPoint,
      isCursorOnLastPoint,
      setLastPoint,
      removeLastVertex,
      addVertex
    } = PolylineInterface();

    if (isCursorOnFirstPoint) {
      createShapeFromPolyline();
    }

    if (isCursorOnLastPoint) {
      removeLastVertex();
      setLastPoint(false);
    }

    if (!Scene.cursorOnshape && !isCursorOnFirstPoint && !isCursorOnLastPoint) {
      addVertex(Scene.mousePos);
    }
  }
};
