// import createWalls from "../shapes/walls";
// import { clearShapes } from "../../engine/shapes/shapes";
import checkEvents from "../utils/checkEvents";

let Scene = {
  name: "",
  backgroundColour: "#E0E0E0",
  imagUrl: "",
  created: "",
  lastModified: "",
  shapes: [],
  mousePos: {},
  context: { buffer: {} },
  cursorOnshape: false,
  selected: "none",
  throwArray: [],
  timeStep: 16,
  time: 0,
  settings: {
    display: true,
    restitution: 1
  },
  propertyValueCache: {},
  currentEvents: {
    /**Change name from currentEvents to eventTypes */
    click: { state: false, ids: [] },
    doubleClick: { state: false, ids: [] },
    collision: { state: false, ids: [], pairs: [] },
    hover: { state: false, ids: [] },
    drag: { state: false, ids: [] }
  },

  rules: [
    // {
    //   shapeId: 5,
    //   eventType: "collision",
    //   ruleType: "oneToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "yellow" },
    //     { actionPropertyName: "linewidth", newValue: 0.1 }
    //   ]
    // },
    // {
    //   shapeId: 14,
    //   eventType: "collision",
    //   ruleType: "oneToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "yellow" },
    //     { actionPropertyName: "linewidth", newValue: 0.1 }
    //   ]
    // },
    {
      shapeId: 5,
      eventType: "hover",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "red" },
        { actionPropertyName: "linewidth", newValue: 0.1 }
      ]
    },
    {
      shapeId: 6,
      eventType: "hover",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "yellow" },
        { actionPropertyName: "linewidth", newValue: 0.1 }
      ]
    },
    // {
    //   shapeId: 5,
    //   eventType: "hover",
    //   ruleType: "oneToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "red" },
    //     { actionPropertyName: "linewidth", newValue: 0.1 },
    //   ],
    // },
    // {
    //   shapeId: 7,
    //   eventType: "hover",
    //   ruleType: "oneToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "red" },
    //     { actionPropertyName: "linewidth", newValue: 0.1 }
    //   ]
    // },
    // {
    //   shapeId: 8,
    //   eventType: "hover",
    //   ruleType: "oneToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "red" },
    //     { actionPropertyName: "linewidth", newValue: 0.1 }
    //   ]
    // },
    /*{
      shapeId: 5,
      eventType: "click",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "green" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },
    {
      shapeId: 6,
      eventType: "click",
      ruleType: "oneToOne",
      conditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "yellow",
        },
      ],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "white" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },*/
    /*{
      shapeId: 5,
      eventType: "click",
      ruleType: "oneToMany",
      selfConditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "yellow",
        },
      ],
      selfLogicalOperators: [],
      conditions: [
        // {
        //   propertyName: "fillColour",
        //   operator: "===",
        //   comparisonValue: "#6495ED",
        // },
      ],
      logicalOperators: [],

      actions: [
        { actionPropertyName: "linewidth", newValue: 0.7 },
        { actionPropertyName: "fillColour", newValue: "transparent" },
      ],
    },
    {
      eventType: "click",
      ruleType: "manyToMany",
      selfConditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "yellow"
        }
      ],
      selfLogicalOperators: [],
      conditions: [
        // {
        //   propertyName: "fillColour",
        //   operator: "===",
        //   comparisonValue: "red",
        // },
      ],
      logicalOperators: [],

      actions: [
        { actionPropertyName: "fillColour", newValue: "black" },
        { actionPropertyName: "strokeStyle", newValue: "yellow" },
        { actionPropertyName: "linewidth", newValue: "20" }
      ]
    }
*/
    /**END OF TESTS */

    /* {
      shapeId: 4,
      eventType: "hover",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "red" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },*/
    {
      // shapeId: 5,
      eventType: "collision",
      ruleType: "manyToOne",
      // ruleType: "oneToMany",
      selfConditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "red"
        }
      ],
      selfLogicalOperators: [],
      conditions: [
        // {
        //   propertyName: "fillColour",
        //   operator: "===",
        //   comparisonValue: "yellow",
        // },
      ],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "red" },
        { actionPropertyName: "linewidth", newValue: 0.1 }
      ],
      applyToPartner: true
    }
    /* {
      shapeId: 5,
      eventType: "collision",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "#6495ED" },
        { actionPropertyName: "linewidth", newValue: 0.7 },
      ],
    },
    {
      shapeId: 5,
      eventType: "click",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "violet" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },
    {
      shapeId: 5,
      eventType: "doubleClick",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "white" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },
    {
      shapeId: 6,
      eventType: "drag",
      ruleType: "oneToOne",
      conditions: [],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "purple" },
        { actionPropertyName: "linewidth", newValue: 0.7 },
      ],
    },*/
    /*{
      shapeId: 4,
      eventType: "collision",
      ruleType: "oneToOne",
      conditions: [
        {
          propertyName: "physics.velocity.x",
          operator: "<", // right wall
          comparisonValue: "0",
        },
      ],
      logicalOperators: [],
      actions: [
        { actionPropertyName: "fillColour", newValue: "white" },
        { actionPropertyName: "linewidth", newValue: 0.1 },
      ],
    },*/
    // {
    //   eventType: "click",
    //   ruleType: "manyToOne",
    //   conditions: [
    //     // {
    //     //   propertyName: "physics.velocity.x",
    //     //   operator: ">", // left wall
    //     //   comparisonValue: "0",
    //     // },
    //     {
    //       propertyName: "fillColour",
    //       operator: "===",
    //       comparisonValue: "yellow",
    //     },
    //   ],
    //   logicalOperators: [],
    //   actions: [{ actionPropertyName: "fillColour", newValue: "red" }],
    // },
    // {
    //   eventType: "click",
    //   ruleType: "manyToOne",
    //   conditions: [],
    //   logicalOperators: [],
    //   actions: [
    //     { actionPropertyName: "fillColour", newValue: "transparent" },
    //     { actionPropertyName: "linewidth", newValue: 0.7 },
    //   ],
    // },
    /*{
      shapeId: 4,
      eventType: "collision",
      ruleType: "oneToMany",
      selfConditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "yellow",
        },
      ],
      selfLogicalOperators: [],
      conditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "#6495ED",
        },
      ],
      logicalOperators: [],

      actions: [
        { actionPropertyName: "linewidth", newValue: 0.7 },
        { actionPropertyName: "fillColour", newValue: "transparent" },
      ],
    },
    {
      eventType: "collision",
      ruleType: "manyToMany",
      selfConditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "transparent",
        },
      ],
      selfLogicalOperators: [],
      conditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "red",
        },
      ],
      logicalOperators: [],

      actions: [
        { actionPropertyName: "fillColour", newValue: "black" },
        { actionPropertyName: "strokeStyle", newValue: "yellow" },
        { actionPropertyName: "linewidth", newValue: "20" },
      ],
    },
    {
      eventType: "collision",
      ruleType: "canvas",
      conditions: [
        {
          propertyName: "fillColour",
          operator: "===",
          comparisonValue: "red",
        },
      ],
      logicalOperators: [],

      actions: [
        { actionPropertyName: "fillColour", newValue: "black" },
        { actionPropertyName: "strokeStyle", newValue: "yellow" },
        { actionPropertyName: "linewidth", newValue: "20" },
      ],
    },*/
  ]
};

export function updateSelected(state, Scene) {
  let selectedShape;
  const buttons = state.buttons;
  for (let button in buttons) {
    if (buttons[button]) {
      selectedShape = button;
      Scene.selected = button;
    }
  }
}

export function updateScene(scene) {
  if (scene.shapes) {
    for (let key in scene) {
      if (key !== "shapes") {
        Scene[key] = scene[key];
      }
      if (key === "shapes") {
        for (let i = 0; i < scene.shapes.length; i++) {
          Scene.shapes[i] = {};
          Scene.shapes[i].centreOfMass = {};

          Scene.shapes[i].vertices = [...scene.shapes[i].vertices];
          Scene.shapes[i].boundingRect = {
            ...scene.shapes[i].boundingRect,
            vertices: [...scene.shapes[i].boundingRect.vertices]
          };

          Scene.shapes[i].centreOfMass = { ...scene.shapes[i].centreOfMass };
          Scene.shapes[i].centreOfRotation = {
            ...scene.shapes[i].centreOfRotation
          };

          Scene.shapes[i].physics = { ...scene.shapes[i].physics };
          Scene.shapes[i].referenceVectors = {
            ...scene.shapes[i].referenceVectors
          };

          Scene.shapes[i].colliding = scene.shapes[i].colliding;
          Scene.shapes[i].dragging = scene.shapes[i].dragging;
          Scene.shapes[i].fillColour = scene.shapes[i].fillColour;
          Scene.shapes[i].id = scene.shapes[i].id;
          Scene.shapes[i].strokeStyle = scene.shapes[i].strokeStyle;
          Scene.shapes[i].linewidth = scene.shapes[i].linewidth;
          Scene.shapes[i].onShape = scene.shapes[i].onShape;
          Scene.shapes[i].selected = scene.shapes[i].selected;
          Scene.shapes[i].touchPoint = scene.shapes[i].touchPoint;
          Scene.shapes[i].type = scene.shapes[i].type;
          Scene.shapes[i].collisionData = scene.shapes[i].collisionData || {};
          Scene.shapes[i].events = scene.shapes[i].events || {};
          Scene.shapes[i].checkEvents = checkEvents;

          if (scene.shapes[i].type === "fixed") {
            Scene.shapes[i].physics.mass = Infinity;
            Scene.shapes[i].physics.momentOfInertia = Infinity;
            Scene.shapes[i].physics.momentOfInertiaCOM = Infinity;
          }
        }
      }
    }
  }
}

export default Scene;

/**
 * All events are also canvas events, in this sense the ruleType canvas is redundant
 * Rules are going to be ranked according to specificity with more specific rules taken precedence
 * this means canvas rules will always be overidden by other rules whenever there is a clash
 * to achieve this canvas rules will always be moved to the top of the array
 */
