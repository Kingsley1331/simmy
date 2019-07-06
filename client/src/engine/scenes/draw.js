import { forEachShape } from "../shapes/shapes";
import Scene from "./scene";
import ShapesController from "../shapes/ShapesController";
import { shapes, shapeSelection } from "../shapes/shapes";
import {
  screenWriter,
  drawLine,
  drawDot,
  drawShape,
  drawArrow
} from "./display/drawing/drawings";

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
    var type = ShapesController.getProperty(i, "type");
    //bufferCtx.save();
    if (onShape) {
      var shadowColor = (shadowColor = "rgba( 9, 9, 9, 0.3)");
      var shadowOffsetX = (shadowOffsetX = 10);
      var shadowOffsetY = (shadowOffsetY = 10);
      var shadowBlur = (shadowBlur = 10);
    }

    var fillColour = ShapesController.getProperty(i, "fillColour");
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
      lineWidth: lineWidth
    };
    /*if (
      ShapesController.getProperty(i, "colliding") &&
      (Scene.selected === "play" || Scene.selected === "step")
    ) {
      // config.lineWidth = 10;
    }*/
    var boundingRect = ShapesController.getProperty(i, "boundingRect");
    var boundingRectCentre = {
      x: boundingRect.centre.x + centreOfMass.x,
      y: boundingRect.centre.y + centreOfMass.y
    };
    var rectVertices = boundingRect.vertices;
    var centreOfRotation = ShapesController.getProperty(i, "centreOfRotation");
    var collisionDataB = ShapesController.getProperty(i, "collisionData");
    var collisionPointVelocityA = collisionDataB.collisionPointVelocityA;
    var collisionPointVelocityB = collisionDataB.collisionPointVelocityB;
    var referenceVectors = ShapesController.getProperty(i, "referenceVectors");
    // Reference Vectors
    var referenceUnitNormal = referenceVectors.unitNormal;
    var referenceSideVector = referenceVectors.sideVector;
    //var referenceLocation = referenceVectors.location;
    var referenceLocation = {
      x: referenceVectors.location.x + centreOfMass.x,
      y: referenceVectors.location.y + centreOfMass.y
    };

    var unitNormal = collisionDataB.unitNormal;
    var sideVector = collisionDataB.sideVector;
    var collisionPoint = collisionDataB.collisionPoint;
    var arrowHead = shapes.arrowHead;
    //console.log('****collisionDataB*****', collisionDataB);

    var radius = boundingRect.radius;
    var idPos = { x: centreOfMass.x - 4, y: centreOfMass.y - 5 };
    drawShape(bufferCtx, vertices, centreOfMass, config);

    if (Scene.settings.display) {
      //if(10 < counter && selectedShape === 'play' && vertices[4] && vertices.length === 6) {console.log(vertices[4].isColliding);}
      for (var n = 0; n < vertices.length; n++) {
        if (vertices[n] && vertices[n].isColliding) {
          drawDot(
            bufferCtx,
            10,
            {
              x: centreOfMass.x + vertices[n].x,
              y: centreOfMass.y + vertices[n].y
            },
            "blue"
          );
        }
      }
      screenWriter(
        bufferCtx,
        Number(ShapesController.getProperty(i, "id")) - 1,
        idPos
      );
      screenWriter(bufferCtx, Math.round(Scene.time / 100) / 10, {
        x: 950,
        y: 20
      });
      screenWriter(bufferCtx, Scene.time / Scene.timeStep, { x: 900, y: 20 });
      // drawShape(bufferCtx, rectVertices, centreOfMass, {lineWidth: 0.5, fillStyle: 'transparent'});
      // drawDot(bufferCtx, 3, centreOfMass, 'black');
      // drawDot(bufferCtx, 3, boundingRectCentre, 'red');
      // drawDot(bufferCtx,3, centreOfRotation, 'green');
      if (collisionDataB.collisionPoint) {
        //drawDot(4, {x: collisionDataB.collisionPoint.x, y:collisionDataB.collisionPoint.y}, 'red');
        drawDot(
          bufferCtx,
          4,
          { x: collisionPoint.x, y: collisionPoint.y },
          "red"
        );
        drawLine(bufferCtx, collisionDataB.side[0], collisionDataB.side[1], {
          strokeStyle: "red",
          lineWidth: 2
        });
      }
      if (type === "circle") {
        drawLine(
          bufferCtx,
          centreOfMass,
          {
            x: centreOfMass.x + vertices[0].x,
            y: centreOfMass.y + vertices[0].y
          },
          { strokeStyle: "black", lineWidth: 1 }
        );
      }

      if (unitNormal) {
        unitNormal = unitNormal.scalProd(50);
        drawArrow(
          bufferCtx,
          arrowHead,
          [
            {
              x: collisionDataB.side[0].x + sideVector.x / 2,
              y: collisionDataB.side[0].y + sideVector.y / 2
            },
            unitNormal
          ],
          { fillStyle: "purple", strokeStyle: "purple" },
          30
        );
        // drawArrow(bufferCtx, arrowHead, [collisionDataB.side[0], sideVector], {fillStyle: 'blue', strokeStyle: 'blue'});
        // drawArrow(bufferCtx, arrowHead, [{x: vertices[0].x + centreOfMass.x, y: vertices[0].y + centreOfMass.y}, referenceSideVector], {fillStyle: 'red', strokeStyle: 'red'});
        // drawArrow(bufferCtx, arrowHead, [referenceLocation, referenceUnitNormal], {fillStyle: 'black', strokeStyle: 'black'}, 30);
        drawArrow(
          bufferCtx,
          arrowHead,
          [collisionPoint, collisionPointVelocityA],
          { fillStyle: "blue", strokeStyle: "blue" },
          30
        );
        drawArrow(
          bufferCtx,
          arrowHead,
          [collisionPoint, collisionPointVelocityB],
          { fillStyle: "green", strokeStyle: "green" },
          60
        );
      }
      // bufferCtx.save();
      // bufferCtx.beginPath();
      // bufferCtx.arc(boundingRectCentre.x, boundingRectCentre.y, radius, 0, 2*Math.PI);
      // bufferCtx.stroke();
      // bufferCtx.restore();
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
