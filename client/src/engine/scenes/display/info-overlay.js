import ShapesController from "../../shapes/ShapesController";
import { shapes } from "../../shapes/shapes";
import Scene from "../scene";
import Vector from "../../utils/maths/Vector";
import {
  screenWriter,
  drawLine,
  drawDot,
  drawShape,
  drawArrow
} from "./drawing/drawings";

export const displayInfo = (
  shapeIndex,
  bufferCtx,
  centreOfMass,
  vertices,
  boundingRect
) => {
  const centreOfRotation = ShapesController.getProperty(
    shapeIndex,
    "centreOfRotation"
  );
  const type = ShapesController.getProperty(shapeIndex, "type");
  var collisionDataB = ShapesController.getProperty(
    shapeIndex,
    "collisionData"
  );

  const collisionPointVelocityA = collisionDataB.collisionPointVelocityA;
  const collisionPointVelocityB = collisionDataB.collisionPointVelocityB;
  const collisionPoint = collisionDataB.collisionPoint;
  const boundingRectCentre = {
    x: boundingRect.centre.x + centreOfMass.x,
    y: boundingRect.centre.y + centreOfMass.y
  };

  // Reference Vectors
  var referenceVectors = ShapesController.getProperty(
    shapeIndex,
    "referenceVectors"
  );
  var referenceUnitNormal = referenceVectors.unitNormal;
  var referenceSideVector = referenceVectors.sideVector;
  //var referenceLocation = referenceVectors.location;
  var referenceLocation = {
    x: referenceVectors.location.x + centreOfMass.x,
    y: referenceVectors.location.y + centreOfMass.y
  };

  const rectVertices = boundingRect.vertices;
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

  if (collisionDataB.collisionPoint) {
    drawDot(
      bufferCtx,
      4,
      {
        x: collisionPoint.x,
        y: collisionPoint.y
      },
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
      { strokeStyle: "black", lineWidth: 0.5 }
    );
  }

  drawShape(bufferCtx, rectVertices, centreOfMass, {
    lineWidth: 0.5,
    fillStyle: "transparent"
  });

  screenWriter(
    bufferCtx,
    Number(ShapesController.getProperty(shapeIndex, "id")),
    {
      x: centreOfMass.x - 4,
      y: centreOfMass.y - 5
    }
  );

  screenWriter(bufferCtx, Math.round(Scene.time / 100) / 10, {
    x: 950,
    y: 20
  });

  screenWriter(bufferCtx, Scene.time / Scene.timeStep, {
    x: 900,
    y: 20
  });

  // drawDot(bufferCtx, 3, centreOfMass, 'black');
  // drawDot(bufferCtx, 3, boundingRectCentre, 'red');
  // drawDot(bufferCtx,3, centreOfRotation, 'green');

  let unitNormal = collisionDataB.unitNormal;
  const sideVector = collisionDataB.sideVector;
  const arrowHead = shapes.arrowHead;

  if (unitNormal) {
    unitNormal = unitNormal.scalProd
      ? unitNormal.scalProd(50)
      : new Vector({
          x: unitNormal.x,
          y: unitNormal.y
        }).scalProd(50);

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
    // drawArrow(bufferCtx, arrowHead, [collisionDataB.side[0], sideVector], {fillStyle: 'blue', strokeStyle: 'blue'});
    // drawArrow(bufferCtx, arrowHead, [{x: vertices[0].x + centreOfMass.x, y: vertices[0].y + centreOfMass.y}, referenceSideVector], {fillStyle: 'red', strokeStyle: 'red'});
    // drawArrow(bufferCtx, arrowHead, [referenceLocation, referenceUnitNormal], {fillStyle: 'black', strokeStyle: 'black'}, 30);
  }
};
