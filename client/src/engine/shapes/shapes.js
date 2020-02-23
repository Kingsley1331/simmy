import Scene from "../scenes/scene";
import ShapesController from "./ShapesController";
import getMousePos from "../utils/position";
import { throwVelocity } from "../utils/throw";
import { calculateBoolean } from "../utils/maths/operators";
import {
  getObjectValueFromString,
  setObjectValueFromString
} from "../utils/objects";
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
  arrowHead: [
    { x: -2.5, y: 0 },
    { x: 2.5, y: 0 },
    { x: 0, y: 5 }
  ]
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
  this.strokeStyle = "black";
  this.linewidth = 0.7;
  this.centreOfMass = centreOfMass;
  this.centreOfRotation = centreOfMass;
  this.vertices = vertices;
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
  this.colliding = false;
  this.onShape = false;
  this.dragging = false;
  this.onClick = false;
  // this.onDoubleClick = false;
  this.selected = false;
  this.events = {
    local: {
      subscribed: true,
      collision: {
        rules: [
          // {
          //   conditions: [
          //     {
          //       propertyName: "physics.velocity.x",
          //       operator: ">",
          //       comparisonValue: "0"
          //     },
          //     {
          //       propertyName: "fillColour",
          //       operator: "===",
          //       comparisonValue: "green"
          //     }
          //   ],
          //   logicalOperators: ["AND"],
          //   actions: [
          //     { propertyName: "fillColour", newValue: "red" },
          //     { propertyName: "linewidth", newValue: 0.1 }
          //   ]
          // },
          // {
          //   conditions: [
          //     {
          //       propertyName: "physics.velocity.x",
          //       operator: ">",
          //       comparisonValue: "0"
          //     },
          //     {
          //       propertyName: "fillColour",
          //       operator: "===",
          //       comparisonValue: "green"
          //     }
          //   ],
          //   logicalOperators: ["NOT"],
          //   actions: [
          //     { propertyName: "fillColour", newValue: "green" },
          //     { propertyName: "linewidth", newValue: 20 }
          //   ]
          // },
          // {
          //   conditions: [
          //     {
          //       propertyName: "physics.velocity.x",
          //       operator: "<",
          //       comparisonValue: "0"
          //     }
          //   ],
          //   logicalOperators: [],
          //   actions: [{ propertyName: "fillColour", newValue: "yellow" }]
          // }
        ]
      },
      // doubleClick: {
      //   rules: []
      // },
      click: {
        rules: []
      },
      drag: {
        rules: []
      },
      hover: {
        rules: []
      }
    },
    global: {
      subscribed: true,
      collision: {
        rules: []
      },
      doubleClick: {
        rules: [
          {
            condition: () => true,
            action: () => {
              this.fillColour = "black";
            }
          }
        ]
      },
      click: {
        rules: [
          // {
          //   condition: () => this.onShape,
          //   action: () => {
          //     console.log("id", this.id);
          //     this.selected = true;
          //     Scene.selectedShape = this.id;
          //   }
          // }
        ]
      }
    }
  };
  this.tags = [];

  this.checkLocalEvents = function() {
    const localEvents = this.events.local;

    if (localEvents.subscribed) {
      for (let event in localEvents) {
        if (event !== "subscribed") {
          const rules = localEvents[event].rules;
          const length = rules.length;
          const propertyValueCache = {};

          for (let i = 0; i < length; i++) {
            let bool = false;
            const rule = rules[i];

            const { conditions, actions, logicalOperators } = rule;
            const numOfConditions = conditions.length;

            for (let j = 0; j < numOfConditions; j++) {
              const condition = conditions[j];
              let logicalOperator =
                numOfConditions > 1 ? logicalOperators[j - 1] : "";
              const propertyName = condition.propertyName;
              const comparisonValue = condition.comparisonValue;
              const operator = condition.operator;
              const propertyValue =
                propertyName in propertyValueCache
                  ? propertyValueCache[propertyName]
                  : getObjectValueFromString(this, propertyName);

              propertyValueCache[propertyName] = propertyValue;

              const newBool = calculateBoolean(
                propertyValue,
                operator,
                comparisonValue
              );
              if (j === 0) {
                bool = newBool;
              } else {
                bool = calculateBoolean(bool, logicalOperator, newBool);
              }

              bool = event === "collision" ? this.colliding && bool : bool;
              bool = event === "hover" ? this.onShape && bool : bool;
              bool = event === "drag" ? this.dragging && bool : bool;
              bool = event === "click" ? this.onClick && bool : bool;
            }

            if (!numOfConditions) {
              if (event === "collision" && this.colliding) {
                bool = true;
              }
              if (event === "hover" && this.onShape) {
                bool = true;
              }
              if (event === "drag" && this.dragging) {
                bool = true;
              }
              if (event === "click" && this.onClick) {
                bool = true;
              }
            }

            const numOfActions = actions.length;
            if (bool) {
              for (let k = 0; k < numOfActions; k++) {
                let actionPropName = actions[k].propertyName;
                let action = actions[k];
                setObjectValueFromString(this, actionPropName, action.newValue);
              }
            }
          }
        }
      }
    }
    // this.onClick = false;
  };

  this.checkGlobalEvents = function(stop) {
    const globalEvents = Scene.currentEvents;
    if (this.events.global.subscribed) {
      for (let event in globalEvents) {
        const numOfClickActions = this.events.global[event].rules.length;
        const clickActions = this.events.global[event].rules;
        if (globalEvents[event] && numOfClickActions) {
          for (let j = 0; j < numOfClickActions; j++) {
            if (clickActions[j].condition()) {
              clickActions[j].action();
            }
          }
        }
      }
    }
    if (stop) {
      Scene.currentEvents = {
        click: false,
        doubleClick: false,
        collision: false
      };
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
  let shapeIndex;
  var centreOfMass = ShapesController.getCentreOfMass(i);
  var vertices = ShapesController.getProperty(i, "vertices");
  var pointInShape = isPointInShape(centreOfMass, vertices, Scene.mousePos);
  if (pointInShape) {
    shapeIndex = i;
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
  return shapeIndex;
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
