import { forEachShape } from "../shapes/shapes";
import Scene from "./scene";
import ShapesController from "../shapes/ShapesController";
import { shapeSelection } from "../shapes/shapes";
import { screenWriter, drawShape } from "./display/drawing/drawings";
import { displayInfo } from "./display/info-overlay";

// export const canvas = document.getElementById("canvas");
export const draw = canvas => {
  let mousePos = Scene.mousePos;
  var context = canvas.getContext("2d");
  /** TODO: store buffer canvas globally in Scene to make it less expensive **/
  const bufferCanvas = document.createElement("canvas");
  const bufferCtx = bufferCanvas.getContext("2d");
  let width = (bufferCtx.canvas.width = context.canvas.width);
  let height = (bufferCtx.canvas.height = context.canvas.height);
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, width, height);

  forEachShape(i => {
    var onShape = ShapesController.getProperty(i, "onShape");
    //bufferCtx.save();
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

    /** TODO: store config globally in Scene**/
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

    if (Scene.settings.display) {
      displayInfo(i, bufferCtx, centreOfMass, vertices);
    }
  });
  if (shapeSelection[Scene.selected] && !Scene.cursorOnshape) {
    // (hoveringOnShape <= 0) means not hovering on shape
    drawShape(bufferCtx, shapeSelection[Scene.selected], mousePos, {
      globalAlpha: 0.15,
      fillStyle: "blue",
      lineWidth: 0.000001
    });
  }
  screenWriter(
    bufferCtx,
    "x:" + Math.round(mousePos.x) + ",  " + "y:" + Math.round(mousePos.y),
    { x: 10, y: 20 }
  );

  //TODO: do this only once rather than in every frame
  Scene.context.buffer = bufferCtx;
  context.drawImage(bufferCanvas, 0, 0, width, height);
};
