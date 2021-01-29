import { magnitude } from "../../utils/maths/Vector";
import {
  PolylineInterface,
  createShapeFromPolyline
} from "../../shapes/shapes";

export const polylineMousedown = Scene => {
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

export const polylineMousemove = (Scene, cursorOnshape) => {
  const { selected, mousePos, isDrawing } = Scene;
  if (selected === "polyline" || selected === "draw") {
    const {
      vertices,
      firstPointRadius,
      lastPointRadius,
      setFirstPoint,
      setLastPoint
    } = PolylineInterface();
    /**** TODO: consider using ShapesController to get shape properties ****/

    if (selected === "draw" && isDrawing && !cursorOnshape) {
      vertices.push(mousePos);
    } /** detect hovering over first polyline vertex */
    const numOfVertices = vertices.length;
    const firstPoint = vertices[0] || [];
    const distanceVector = {
      x: firstPoint.x - mousePos.x,
      y: firstPoint.y - mousePos.y
    };
    const cursorDotDistance = magnitude(distanceVector);
    if (cursorDotDistance <= firstPointRadius && numOfVertices > 2) {
      setFirstPoint(true);
    } else {
      setFirstPoint(false);
    }
    /** detect hovering over last polyline vertex */
    const lastPoint = vertices[numOfVertices - 1] || [];
    const distanceVector2 = {
      x: lastPoint.x - mousePos.x,
      y: lastPoint.y - mousePos.y
    };
    const cursorDotDistance2 = magnitude(distanceVector2);
    if (cursorDotDistance2 <= lastPointRadius) {
      setLastPoint(true);
    } else {
      setLastPoint(false);
    }
  }
};

export const polylineRightClick = (Scene, evt) => {
  if (Scene.selected === "polyline") {
    const { resetVertices } = PolylineInterface();
    evt.preventDefault();
    resetVertices();
  }
};
