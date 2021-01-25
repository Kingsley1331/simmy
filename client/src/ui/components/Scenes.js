import React, { useEffect, useState, useContext } from "react";
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
import { createWall } from "../../engine/shapes/walls";
import reCentre from "../../engine/shapes/reCentre";
import { ShapeManagerInterface } from "../../engine/shapes/shapes";
import getMousePos from "../../engine/utils/position";
import {
  mouseDown,
  mouseMove,
  mouseUp,
  doubleClick,
  click,
  rightClick
} from "../../engine/utils/listeners";
import { applyMotion } from "../../engine/physics/motion";
import animate from "../../engine/utils/animation";
import { Condition } from "./events/EventFormComponents";
import DatGuiDemo from "./data_control/DatGuiDemo";
import SceneManager from "./data_control/SceneManager";
import ShapeManager from "./data_control/ShapeManager";
import ColourPalette from "./data_control/ColourPalette";

// export const SelectedContext = React.createContext({});

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
/**TODO: place in new utility file e.g rulesAndFormIntegration.js  */
const convertSceneRulesToFormRules = rules => {
  console.log("convertSceneRulesToFormRules", rules);
  const convertedRules = [];
  const numOfRules = rules.length;
  for (let i = 0; i < numOfRules; i++) {
    const rule = rules[i];
    const convertedRule = { ...rule };
    const conditionTypeList = [
      ["conditions", "logicalOperators"],
      ["emitterConditions", "emitterLogicalOperators"],
      ["receiverConditions", "receiverLogicalOperators"]
    ];
    const numOfConditionTypes = conditionTypeList.length;
    for (let j = 0; j < numOfConditionTypes; j++) {
      const conditionType = conditionTypeList[j][0];
      const operatorType = conditionTypeList[j][1];

      if (convertedRule[conditionType]) {
        const operators = convertedRule[operatorType];
        const conditions = convertedRule[conditionType];
        const convertedConditions = conditions.map((condition, idx) => {
          const newCondition = {
            ...condition
          };
          if (idx > 0) {
            newCondition.logicalOperator = operators[idx - 1];
          }
          return newCondition;
        });
        convertedRule[conditionType] = convertedConditions;
        delete convertedRule[operatorType];
      }
    }
    convertedRules.push(convertedRule);
  }
  return convertedRules;
};

const Scenes = ({
  selectShape,
  selectedShapeId,
  addRules,
  selectedEvent,
  scene,
  getScene,
  buttons
}) => {
  const [rules, setRules] = useState([]);
  const [selected, setSelected] = useState();
  const [managedShapeIndex, setManagedShapeIndex] = useState(null);

  useEffect(() => {
    for (let button in buttons) {
      if (buttons[button]) {
        setSelected(button);
      }
    }
  }, [buttons, setSelected]);

  useEffect(() => {
    if (!rules.length) {
      setRules(convertSceneRulesToFormRules(Scene.rules));
    }
  }, []);

  /**TODO: place in new utility file e.g rulesAndFormIntegration.js  */
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

    const rules = [...Scene.rules];
    const ruleIndex = rules.findIndex(({ id }) => id === rule.id);
    if (ruleIndex === -1) {
      Scene.rules.push(rule);
    } else {
      Scene.rules.splice(ruleIndex, 1, rule);
    }
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

    setRules(rulesArray => {
      const rules = [...rulesArray];
      const ruleIndex = rules.findIndex(({ id }) => id === rule.id);
      rules.splice(ruleIndex, 1, rule);
      return rules;
    });
    applyRule(rule);
  };

  useEffect(() => {
    // Scene.shapes = this.props.scene.shapes;
    /** TODO: move functions into single index file and import **/

    canvas = document.getElementById("canvas");
    animate();
    mouseDown(canvas, setManagedShapeIndex);
    mouseMove(canvas);
    mouseUp(canvas);
    doubleClick(canvas, selectShape, addRules, selectedEvent);
    click(canvas);
    rightClick(canvas);
    reCentre(shapeSelection);
    if (!Object.keys(scene).length) {
      createWall(canvas, 10);
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
      <div className="canvasWrapper">
        <Buttons />
        <canvas id="canvas" width="1200" height="700" />
        {/* <canvas id="canvas" width="1400" height="800" /> */}
        {/* <SceneManager /> */}

        {/* <canvas id="canvas" width="1000" height="600" /> */}
      </div>
      {selected === "colour" && <ColourPalette />}
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
      {selected === "manageShape" && managedShapeIndex && (
        <ShapeManager shapeIndex={managedShapeIndex} />
      )}
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
