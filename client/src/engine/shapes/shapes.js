import Scene from "../scenes/scene";
import ShapesController from "./ShapesController";
import getMousePos from "../utils/position";
import { throwVelocity } from "../utils/throw";
import { findMass } from "../physics/mass/mass";
import referenceVectors from "../physics/collisions/referenceVectors";
import { findMomentOfInertiaCOM } from "../physics/mass/momentOfInertia";
import { magnitude } from "../utils/maths/Vector";
import reCentre from "./reCentre";
import findBoundingRect from "./findBoundingRect";

export const shapeSelection = {
  square: [
    { x: -18, y: -18 },
    { x: 18, y: -18 },
    { x: 18, y: 18 },
    { x: -18, y: 18 }
  ],
  bar: [
    { x: -18, y: -126 },
    { x: 18, y: -126 },
    { x: 18, y: 126 },
    { x: -18, y: 126 }
  ],
  triangle: [
    { x: -40 / 2, y: (Math.sqrt(3) / 6) * 40 },
    { x: 40 / 2, y: (Math.sqrt(3) / 6) * 40 },
    { x: 0, y: ((-2 * Math.sqrt(3)) / 6) * 40 }
  ],
  star: [
    { x: 0, y: -50 },
    {
      x: 19.0983 * Math.sin(2 * Math.PI * (36 / 360)),
      y: -19.0983 * Math.cos(2 * Math.PI * (36 / 360))
    },
    {
      x: 50 * Math.cos(2 * Math.PI * (18 / 360)),
      y: -50 * Math.sin(2 * Math.PI * (18 / 360))
    },
    {
      x: 19.0983 * Math.cos(2 * Math.PI * (18 / 360)),
      y: 19.0983 * Math.sin(2 * Math.PI * (18 / 360))
    },
    {
      x: 50 * Math.sin(2 * Math.PI * (36 / 360)),
      y: 50 * Math.cos(2 * Math.PI * (36 / 360))
    },
    { x: 0, y: 19.0983 },
    {
      x: -50 * Math.sin(2 * Math.PI * (36 / 360)),
      y: 50 * Math.cos(2 * Math.PI * (36 / 360))
    },
    {
      x: -19.0983 * Math.cos(2 * Math.PI * (18 / 360)),
      y: 19.0983 * Math.sin(2 * Math.PI * (18 / 360))
    },
    {
      x: -50 * Math.cos(2 * Math.PI * (18 / 360)),
      y: -50 * Math.sin(2 * Math.PI * (18 / 360))
    },
    {
      x: -19.0983 * Math.sin(2 * Math.PI * (36 / 360)),
      y: -19.0983 * Math.cos(2 * Math.PI * (36 / 360))
    }
  ],
  plus: [
    { x: -6, y: -6 },
    { x: -6, y: -30 },
    { x: 6, y: -30 },
    { x: 6, y: -6 },
    { x: 30, y: -6 },
    { x: 30, y: 6 },
    { x: 6, y: 6 },
    { x: 6, y: 30 },
    { x: -6, y: 30 },
    { x: -6, y: 6 },
    { x: -30, y: 6 },
    { x: -30, y: -6 }
  ],
  tShape: [
    { x: 30, y: -6 },
    { x: 30, y: 6 },
    { x: 6, y: 6 },
    { x: 6, y: 54 },
    { x: -6, y: 54 },
    { x: -6, y: 6 },
    { x: -30, y: 6 },
    { x: -30, y: -6 }
  ],
  arrow: [
    { x: 30, y: -6 },
    { x: 30, y: -18 },
    { x: 55, y: 0 },
    { x: 30, y: 18 },
    { x: 30, y: 6 },
    { x: -20, y: 6 },
    { x: -20, y: -6 }
  ],
  pentagon: [
    { x: 0, y: -22 },
    {
      x: 22 * Math.cos(2 * Math.PI * (18 / 360)),
      y: -22 * Math.sin(2 * Math.PI * (18 / 360))
    },
    {
      x: 22 * Math.sin(2 * Math.PI * (36 / 360)),
      y: 22 * Math.cos(2 * Math.PI * (36 / 360))
    },
    {
      x: -22 * Math.sin(2 * Math.PI * (36 / 360)),
      y: 22 * Math.cos(2 * Math.PI * (36 / 360))
    },
    {
      x: -22 * Math.cos(2 * Math.PI * (18 / 360)),
      y: -22 * Math.sin(2 * Math.PI * (18 / 360))
    }
  ],
  hexagon: [
    {
      x: 22 * Math.sin(2 * Math.PI * (30 / 360)),
      y: -22 * Math.cos(2 * Math.PI * (30 / 360))
    },
    { x: 22, y: 0 },
    {
      x: 22 * Math.sin(2 * Math.PI * (30 / 360)),
      y: 22 * Math.cos(2 * Math.PI * (30 / 360))
    },
    {
      x: -22 * Math.sin(2 * Math.PI * (30 / 360)),
      y: 22 * Math.cos(2 * Math.PI * (30 / 360))
    },
    { x: -22, y: 0 },
    {
      x: -22 * Math.sin(2 * Math.PI * (30 / 360)),
      y: -22 * Math.cos(2 * Math.PI * (30 / 360))
    }
  ],
  concave: [
    { x: -18, y: 54 },
    { x: -18, y: 90 },
    { x: -90, y: 90 },
    { x: -90, y: -90 },
    { x: 90, y: -90 },
    { x: 90, y: 90 },
    { x: 18, y: 90 },
    { x: 18, y: 54 },
    { x: 54, y: 54 },
    { x: 54, y: -54 },
    { x: -54, y: -54 },
    { x: -54, y: 54 }
  ],
  box: [
    { x: 0, y: 54 },
    { x: 0, y: 90 },
    { x: -90, y: 90 },
    { x: -90, y: -90 },
    { x: 90, y: -90 },
    { x: 90, y: 90 },
    { x: 0, y: 90 },
    { x: 0, y: 54 },
    { x: 54, y: 54 },
    { x: 54, y: -54 },
    { x: -54, y: -54 },
    { x: -54, y: 54 }
  ],
  verticalWall: [
    { x: -18, y: -300 },
    { x: 18, y: -300 },
    { x: 18, y: 300 },
    { x: -18, y: 300 }
  ],
  horizontalWall: [
    { x: -500, y: -18 },
    { x: 500, y: -18 },
    { x: 500, y: 18 },
    { x: -500, y: 18 }
  ]
};

export const shapes = {
  arrowHead: [{ x: -2.5, y: 0 }, { x: 2.5, y: 0 }, { x: 0, y: 5 }]
};

//TODO: add settings to Scene object
// export const settings = {
//   display: true,
//   restitution: 0
// };

function circleMaker(radius, n) {
  var circle = [];
  var angle = (2 * Math.PI) / n;
  for (var i = 0; i < n; i++) {
    var point = {};
    point.x = radius * Math.sin(i * angle);
    point.y = radius * Math.cos(i * angle);
    circle.push(point);
  }
  return circle;
}

var circle = circleMaker(20, 30);
shapeSelection.circle = circle;

export function Shape(centre, vertices) {
  var boundingRect = findBoundingRect(vertices);
  var massData = findMass(centre, vertices, boundingRect);
  var centreOfMass = massData.centreOfMass;
  var momentOfInertiaCOM = findMomentOfInertiaCOM(
    centreOfMass,
    vertices,
    boundingRect
  );
  var references = referenceVectors(centre, vertices);
  this.id;
  this.type = "";
  this.fillColour = "#6495ED";
  this.lineColour = "black";
  this.linewidth = 0.7;
  this.centreOfMass = centreOfMass;
  this.centreOfRotation = centreOfMass;
  this.vertices = vertices;
  this.colliding = false;
  this.physics = {
    density: 1,
    mass: massData.mass,
    momentOfInertiaCOM: momentOfInertiaCOM,
    velocity: { x: 0, y: 0 },
    acceleration: { x: 0, y: 0 },
    angularVelocity: 0,
    angularAcceleration: 0,
    forcesCOM: [{ x: 0, y: 0 }],
    torque: 0
  };
  this.onShape = false;
  this.dragging = false;
  this.selected = false;
  this.touchPoint = [];
  this.display = [];
  this.boundingRect = boundingRect;
  var boundingRectCentre = {
    x: this.boundingRect.centre.x,
    y: this.boundingRect.centre.y
  };
  var radius = magnitude({
    x: boundingRectCentre.x - this.boundingRect.vertices[0].x,
    y: boundingRectCentre.y - this.boundingRect.vertices[0].y
  });
  this.boundingRect.radius = radius;
  this.collisionData = {};
  this.referenceVectors = references;
  this.subscriptions = {
    collision: {
      runningActions: false,
      actions: [
        {
          condition: () => this.physics.velocity.x > 0,
          execute: () => {
            this.fillColour = "red";
          }
        },
        {
          condition: () => this.physics.velocity.x <= 0,
          execute: () => {
            this.fillColour = "green";
          }
        }
      ]
    },
    click: {
      runningActions: false,
      actions: [
        () => console.log("shape clicked"),
        () => console.log("turn shape green")
      ]
    }
  };
  this.tags = [];
  this.checkSubscriptions = function() {
    const collision = this.subscriptions.collision;
    if (collision.runningActions) {
      const length = collision.actions.length;
      for (let i = 0; i < length; i++) {
        if (collision.actions[i].condition()) {
          collision.actions[i].execute();
        }
        if (i === length - 1) {
          collision.runningActions = false;
        }
      }
    }
  };
}

export function createShape(centreOfMass, vertices) {
  // let id = 1000000 * Math.ceil(Math.random());
  let id = Scene.shapes.length + 1;
  var shape = new Shape(centreOfMass, vertices);
  shape.id = id;
  Scene.shapes.push(shape);
  return shape;
}
// order=true => FORWARD, order=false => REVERSE
export function forEachShape(callback, order) {
  var shapes = Scene.shapes;
  var length = shapes.length;
  if (!order) {
    for (var i = 0; i < length; i++) {
      var shape = shapes[i];
      if (shape) {
        callback(i);
      }
    }
  } else if (order) {
    for (var i = length - 1; i >= 0; i--) {
      var shape = shapes[i];
      if (shape) {
        callback(i);
      }
    }
  }
}

export function detectShape(i) {
  var centreOfMass = ShapesController.getCentreOfMass(i);
  var vertices = ShapesController.getProperty(i, "vertices");
  var pointInShape = isPointInShape(centreOfMass, vertices, Scene.mousePos);
  if (pointInShape) {
    if (!Scene.cursorOnshape) {
      ShapesController.setProperty(i, "onShape", true);
      Scene.cursorOnshape = true;
    }
    if (!ShapesController.getProperty(i, "onShape")) {
      Scene.shapes.forEach((shape, index) => {
        ShapesController.setProperty(index, "onShape", false);
      });
      ShapesController.setProperty(i, "onShape", true);
    }
  } else {
    ShapesController.setProperty(i, "onShape", false);
  }
  if (ShapesController.getProperty(i, "dragging")) {
    dragShape(i);
  }
}

function dragShape(i) {
  var touchPoint = ShapesController.getTouchPoint(i);
  let mousePos = Scene.mousePos;
  var centre = {
    x: mousePos.x - touchPoint.x,
    y: mousePos.y - touchPoint.y
  };
  ShapesController.setProperty(i, "centreOfMass", centre);
}

export function releaseShape(i) {
  var velocity = throwVelocity();
  if (
    Scene.throwArray.length > 0 &&
    ShapesController.getProperty(i, "dragging")
  ) {
    ShapesController.setProperty(
      i,
      "velocity",
      { x: velocity.x, y: velocity.y },
      true
    );
  }
  ShapesController.setProperty(i, "dragging", false);
}

export function isPointInShape(centreOfMass, vertices, point) {
  var x0 = centreOfMass.x + vertices[0].x;
  var y0 = centreOfMass.y + vertices[0].y;
  const bufferCtx = Scene.context.buffer;
  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for (var m = 1; m < vertices.length; m++) {
    var x = centreOfMass.x + vertices[m].x;
    var y = centreOfMass.y + vertices[m].y;
    bufferCtx.lineTo(x, y);
  }
  if (bufferCtx.isPointInPath(point.x, point.y)) {
    return true;
  } else {
    return false;
  }
}

export function prepareToMoveShape(i) {
  if (ShapesController.getProperty(i, "onShape")) {
    let mousePos = Scene.mousePos;
    if (Scene.selected === "play") {
      ShapesController.setProperty(i, "velocity", { x: 0, y: 0 }, true);
    }
    var centreOfMass = ShapesController.getCentreOfMass(i);
    ShapesController.setProperty(i, "dragging", true);
    var distanceX = mousePos.x - centreOfMass.x;
    var distanceY = mousePos.y - centreOfMass.y;
    ShapesController.setProperty(i, "touchPoint", {
      x: distanceX,
      y: distanceY
    });
  }
}

export function clearShapes() {
  Scene.shapes = [];
}
