import { forEachShape, PolylineInterface } from "../shapes/shapes";
import Scene from "./scene";
import ShapesController from "../shapes/ShapesController";
import { drawShape, drawPolyline, drawDot } from "./display/drawing/drawings";
import { displayShapeInfo, displaySceneInfo } from "./display/info-overlay";
import { magnitude } from "../../engine/utils/maths/Vector";

// export const canvas = document.getE/lementById("canvas");

export const draw = canvas => {
  const {
    backgroundColour,
    mousePos,
    selected,
    settings: { display }
  } = Scene;

  const {
    vertices: polyLineVertices,
    isCursorOnFirstPoint,
    isCursorOnLastPoint
  } = PolylineInterface();

  var context = canvas.getContext("2d");
  /** TODO: store buffer canvas globally in Scene to make it less expensive **/
  const bufferCanvas = document.createElement("canvas");
  const bufferCtx = bufferCanvas.getContext("2d");
  let width = (bufferCtx.canvas.width = context.canvas.width);
  let height = (bufferCtx.canvas.height = context.canvas.height);
  bufferCtx.fillStyle = backgroundColour;
  bufferCtx.fillRect(0, 0, width, height);

  forEachShape(i => {
    var onShape = ShapesController.getProperty(i, "onShape");
    if (onShape) {
      var shadowColor = (shadowColor = "rgba( 9, 9, 9, 0.3)");
      var shadowOffsetX = (shadowOffsetX = 10);
      var shadowOffsetY = (shadowOffsetY = 10);
      var shadowBlur = (shadowBlur = 10);
    }

    var fillColour = ShapesController.getProperty(i, "fillColour");
    var strokeStyle = ShapesController.getProperty(i, "strokeStyle");
    var lineWidth = ShapesController.getProperty(i, "linewidth");
    var centreOfMass = ShapesController.getCentreOfMass(i);
    var vertices = ShapesController.getProperty(i, "vertices");

    var config = {
      shadowColor: shadowColor,
      shadowOffsetX: shadowOffsetX,
      shadowOffsetY: shadowOffsetY,
      shadowBlur: shadowBlur,
      fillStyle: fillColour,
      strokeStyle: strokeStyle,
      lineWidth: lineWidth
    };

    drawShape(bufferCtx, vertices, centreOfMass, config);

    if (display) {
      displayShapeInfo(i, bufferCtx, centreOfMass, vertices);
    }
  });

  const numOfPolyLineVertices = polyLineVertices.length;
  if (selected === "polyline" || selected === "draw") {
    const firstPoint = polyLineVertices[0] || [];
    const lastPoint = polyLineVertices[numOfPolyLineVertices - 1] || [];
    const firstPointColour = isCursorOnFirstPoint ? "red" : "blue";
    const lastPointColour = isCursorOnLastPoint ? "green" : "black";
    const firstPointDotSize = isCursorOnFirstPoint ? 5 : 2;
    const lastPointDotSize = isCursorOnLastPoint ? 5 : 1;

    drawDot(bufferCtx, firstPointDotSize, firstPoint, firstPointColour);
    drawDot(bufferCtx, lastPointDotSize, lastPoint, lastPointColour);
    for (let v = 0; v < numOfPolyLineVertices; v++) {
      const point = polyLineVertices[v];
      drawDot(bufferCtx, 1, point, "black");
    }
    drawPolyline(
      bufferCtx,
      [...polyLineVertices, mousePos],
      {
        strokeStyle: "black",
        lineWidth: 1,
        globalAlpha: 0.15,
        fillStyle: "blue"
      },
      true
    );
  }
  displaySceneInfo(bufferCtx);
  Scene.context.buffer = bufferCtx;
  context.drawImage(bufferCanvas, 0, 0, width, height);
};
