import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons/";
// import EventForm from "./events/local";
import EventForm from "./events/EventForm";
import { draw } from "../../engine/scenes/draw";
import Scene, { updateScene } from "../../engine/scenes/scene";
import {
  createShape,
  clearShapes,
  shapeSelection,
  forEachShape,
  Shape
} from "../../engine/shapes/shapes";
import { createWalls } from "../../engine/shapes/walls";
import reCentre from "../../engine/shapes/reCentre";
import getMousePos from "../../engine/utils/position";
import {
  mouseDown,
  mouseMove,
  mouseUp,
  doubleClick,
  click
} from "../../engine/utils/listeners";
import { applyMotion } from "../../engine/physics/motion";
import animate from "../../engine/utils/animation";

const data = [];
/*const data = [
  {
    id: 4548569872,
    eventType: "hover",
    ruleType: "oneToOne",
    conditions: [
      {
        propertyName: "lineColour",
        operator: "===",
        comparisonValue: "aqua blue"
      },
      {
        propertyName: "linewidth",
        operator: "<",
        comparisonValue: "red",
        logicalOperator: "AND"
      }
    ],
    actions: [
      { actionPropertyName: "velocity.y", newValue: "24" },
      { actionPropertyName: "velocity.x", newValue: "256" }
    ]
  },
  {
    id: 4548567128,
    eventType: "hover",
    ruleType: "oneToPartner",
    emitterConditions: [
      {
        propertyName: "lineColour",
        operator: "===",
        comparisonValue: "yellow"
      },
      {
        propertyName: "linewidth",
        operator: "<",
        comparisonValue: "red",
        logicalOperator: "AND"
      }
    ],
    receiverConditions: [
      {
        propertyName: "lineColour",
        operator: "===",
        comparisonValue: "blue",
        logicalOperator: "OR"
      }
    ],
    actions: [{ actionPropertyName: "velocity.y", newValue: "24" }]
  },
  {
    id: 4548567895,
    eventType: "click",
    ruleType: "manyToPartner",
    emitterConditions: [
      {
        propertyName: "fillColour",
        operator: "<",
        comparisonValue: "blue"
      }
    ],
    receiverConditions: [
      {
        propertyName: "linewidth",
        operator: "===",
        comparisonValue: "4"
      }
    ],
    actions: [{ actionPropertyName: "velocity.x", newValue: "25" }]
  },
  {
    id: 4544586785,
    eventType: "drag",
    ruleType: "oneToPartner",
    emitterConditions: [
      {
        propertyName: "fillColour",
        operator: "<",
        comparisonValue: "pink"
      }
    ],
    receiverConditions: [
      {
        propertyName: "linewidth",
        operator: "===",
        comparisonValue: "82"
      }
    ],
    actions: [{ actionPropertyName: "velocity.x", newValue: "256" }]
  }
];*/

let canvas;
const Scenes = ({
  selectShape,
  selectedShapeId,
  addRules,
  selectedEvent,
  scene,
  getScene
}) => {
  const [rules, setRules] = useState(data);

  const applyRule = ruleData => {
    const logicalOperatorArray = [];
    const emitterLogicalOperatorArray = [];
    const receiverLogicalOperatorArray = [];
    const areConditionsSimple =
      ruleData.ruleType === "oneToOne" || ruleData.ruleType === "manyToOne";
    const triggeredFromOneShape =
      ruleData.ruleType === "oneToOne" || ruleData.ruleType === "oneToMany";
    let rule = { ...ruleData };
    for (let prop in ruleData) {
      if (
        prop === "conditions" ||
        prop === "emitterConditions" ||
        prop === "receiverConditions"
      ) {
        const conditions = ruleData[prop];
        const numOfCondtions = conditions.length;

        for (let i = 0; i < numOfCondtions; i++) {
          const { logicalOperator } = conditions[i];
          if (prop === "conditions" && logicalOperator) {
            logicalOperatorArray.push(logicalOperator);
          }
          if (prop === "emitterConditions" && logicalOperator) {
            emitterLogicalOperatorArray.push(logicalOperator);
          }
          if (prop === "receiverConditions" && logicalOperator) {
            receiverLogicalOperatorArray.push(logicalOperator);
          }
        }
      }
    }
    if (areConditionsSimple) {
      rule.logicalOperators = logicalOperatorArray;
      rule.conditions = rule.conditions || [];
    } else {
      rule.emitterLogicalOperators = emitterLogicalOperatorArray;
      rule.receiverLogicalOperators = receiverLogicalOperatorArray;
      rule.emitterConditions = rule.emitterConditions || [];
      rule.receiverConditions = rule.receiverConditions || [];
    }
    if (triggeredFromOneShape) {
      rule.shapeId = selectedShapeId;
    }
    console.log("New Rule", rule);

    Scene.rules.push(rule);
  };

  const addRule = () => {
    const id = new Date().getTime();
    setRules(rulesArray => [...rulesArray, { id }]);
  };

  const deleteRule = ruleId => {
    setRules(rulesArray => {
      const filteredArray = rulesArray.filter(({ id }) => !(id === ruleId));
      return filteredArray;
    });
  };

  const updateRule = rule => {
    console.log("updateRule", rule);
    // deleteRule(rule.id);
    setRules(rulesArray => {
      const rules = [...rulesArray];
      const ruleIndex = rules.findIndex(({ id }) => id === rule.id);
      rules.splice(ruleIndex, 1, rule);
      return rules;
    });
  };

  useEffect(() => {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate();
    mouseDown(canvas);
    mouseMove(canvas);
    mouseUp(canvas);
    doubleClick(canvas, selectShape, addRules, selectedEvent);
    click(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(scene).length) {
      createWalls();
    }
    updateScene(scene);
  }, [selectShape, addRules, selectedEvent]);

  useEffect(() => {
    doubleClick(canvas, selectShape, addRules, selectedEvent);
  }, [selectedEvent, selectShape, addRules]);

  useEffect(() => {
    return () => {
      clearShapes();
      getScene();
    };
  }, [clearShapes, getScene]);
  console.log({ rules });
  return (
    <div className="scenesWrapper">
      <Buttons />
      <canvas id="canvas" width="1000" height="600" />
      {rules.map((rule, index) => (
        <EventForm
          key={rule.id}
          rule={rule}
          setRules={setRules}
          deleteRule={deleteRule}
          updateRule={updateRule}
          applyRule={applyRule}
        />
      ))}
      <button className="add_rule" onClick={addRule}>
        Add rule
      </button>
    </div>
  );
};

const mapStateToProps = ({ buttons, scene, event, selectedShape }) => {
  return {
    buttons,
    scene,
    selectedEvent: event,
    selectedShapeId: selectedShape
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: shapeId => {
      // dispatch({ type: "SELECTED_SHAPE", shapeId });
      dispatch({ type: "SELECT_SHAPE", payload: shapeId });
    },
    getScene: () => {
      dispatch({ type: "GET_SCENE", payload: {} });
    },
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules })
  };
};

// export default connect(mapStateToProps)(Scenes);
export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
