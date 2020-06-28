import React, { useCallback } from "react";
import { connect } from "react-redux";
import Scene from "../../../engine/scenes/scene";
import Rule from "./rule";
import {
  addRulesAction,
  addGlobalRulesAction,
  selectEventAction,
  selectGlobalEventAction
} from "../../actions/events";

import { retrieveGlobalRules } from "../../../engine/utils/eventRules";

const EventForm = ({
  selectedShapeId,
  selectEvent,
  selectGlobalEvent,
  addRules,
  addGlobalRules,
  rules,
  globalRules,
  eventType,
  globalEventType,
  type
}) => {
  let eventTypeObject;
  let rulesArray;

  console.log("rules", rules);
  if (type === "local") {
    eventTypeObject = rules[eventType] || {};
    rulesArray = eventTypeObject[selectedShapeId] || [];
  }
  if (type === "global") {
    rulesArray = globalRules[globalEventType] || [];
  }

  console.log("rulesArray", rulesArray);
  const propertyMap = {
    fillColour: "fillColour",
    lineColour: "strokeStyle",
    linewidth: "linewidth",
    "centreOfMass.x": "centreOfMass.x",
    "centreOfMass.y": "centreOfMass.y",
    "velocity.x": "physics.velocity.x",
    "velocity.y": "physics.velocity.y"
  };

  const eventMap = {
    collision: "collision",
    drag: "drag",
    hover: "hover",
    click: "click",
    "double click": "doubleClick"
  };

  const handleEventChange = e => {
    if (type === "local") {
      selectEvent(eventMap[e.target.value]);
    }
    if (type === "global") {
      selectGlobalEvent(eventMap[e.target.value]);
      const globalRules = Scene.events;
      console.log("globalRules", globalRules);
      const rules = retrieveGlobalRules(globalRules);
      console.log("RULES", rules);
      addGlobalRules(rules);
    }
  };
  /** TODO: refactor to use combine applyLocalRules and applyGlobalRules in one function applyGlobalRules applyRules   **/
  const applyGlobalRules = () => {
    const numOfRules = rulesArray.length;
    Scene.events[globalEventType].rules = [];
    for (let i = 0; i < numOfRules; i++) {
      let rule = {};
      rule.conditions = [];
      rule.actions = [];
      rule.logicalOperators = [];
      const numOfConditions = rulesArray[i].conditions.length;
      const numOfActions = rulesArray[i].actions.length;
      const numOfLogicalOperators = rulesArray[i].logicalOperators.length;
      // Conditions loop
      for (let j = 0; j < numOfConditions; j++) {
        const condition = {
          propertyName: propertyMap[rulesArray[i].conditions[j].propertyName],
          operator: rulesArray[i].conditions[j].operator,
          comparisonValue: rulesArray[i].conditions[j].comparisonValue
        };
        rule.conditions.push(condition);
      }
      // Actions loop
      for (let k = 0; k < numOfActions; k++) {
        const action = {
          actionPropertyName:
            propertyMap[rulesArray[i].actions[k].actionPropertyName],
          newValue: rulesArray[i].actions[k].newValue
        };
        rule.actions.push(action);
      }
      // LogicalOperators loop
      for (let n = 0; n < numOfLogicalOperators; n++) {
        const logicalOperator = rulesArray[i].logicalOperators[n];
        rule.logicalOperators.push(logicalOperator);
      }

      Scene.events[globalEventType].rules.push(rule);
      // if (shape) {
      //   shape.events.local[eventType].rules.push(rule);
      // }
    }
    console.log("RULES", Scene.events[globalEventType].rules);
  };

  const applyLocalRules = () => {
    const selectedShape = Scene.selectedShape;
    const shape = Scene.shapes.filter(shape => shape.id === selectedShape)[0];
    const numOfRules = rulesArray.length;
    if (shape) {
      shape.events.local[eventType].rules = [];
    }
    for (let i = 0; i < numOfRules; i++) {
      let rule = {};
      rule.conditions = [];
      rule.actions = [];
      rule.logicalOperators = [];
      const numOfConditions = rulesArray[i].conditions.length;
      const numOfActions = rulesArray[i].actions.length;
      const numOfLogicalOperators = rulesArray[i].logicalOperators.length;
      // Conditions loop
      for (let j = 0; j < numOfConditions; j++) {
        const condition = {
          propertyName: propertyMap[rulesArray[i].conditions[j].propertyName],
          operator: rulesArray[i].conditions[j].operator,
          comparisonValue: rulesArray[i].conditions[j].comparisonValue
        };
        rule.conditions.push(condition);
      }
      // Actions loop
      for (let k = 0; k < numOfActions; k++) {
        const action = {
          actionPropertyName:
            propertyMap[rulesArray[i].actions[k].actionPropertyName],
          newValue: rulesArray[i].actions[k].newValue
        };
        rule.actions.push(action);
      }
      // LogicalOperators loop
      for (let n = 0; n < numOfLogicalOperators; n++) {
        const logicalOperator = rulesArray[i].logicalOperators[n];
        rule.logicalOperators.push(logicalOperator);
      }
      if (shape) {
        shape.events.local[eventType].rules.push(rule);
        console.log("RULES", shape.events.local[eventType].rules);
      }
    }
  };

  let applyRules;
  if (type === "local") {
    applyRules = applyLocalRules;
  }
  if (type === "global") {
    applyRules = applyGlobalRules;
  }

  const addRule = useCallback(() => {
    const newRule = {
      conditions: [],
      actions: [{ actionPropertyName: "", newValue: "" }],
      logicalOperators: []
    };
    if (type === "local") {
      addRules({
        [eventType]: {
          [selectedShapeId]: [...rulesArray, newRule]
        }
      });
    }
    if (type === "global") {
      addGlobalRules({
        [globalEventType]: [...rulesArray, newRule]
      });
    }
  }, [rulesArray, selectedShapeId, addRules]);

  return (
    <div className="eventsWrapper">
      {type === "local" && `selectedShapeId: ${selectedShapeId}`}

      <h2>Event:</h2>
      <select onChange={handleEventChange}>
        <option value="">none</option>
        <option value="collision">collision</option>
        <option value="drag">drag</option>
        <option value="click">click</option>
        <option value="hover">hover</option>
        <option value="double click">double click</option>
      </select>
      {rulesArray &&
        rulesArray.map((rule, index) => (
          <Rule
            key={Math.random()}
            index={index}
            rule={rule}
            applyRules={applyRules}
            type={type}
          />
        ))}
      <button onClick={addRule}>Add rule</button>
      <br />
      <button onClick={applyRules}>Apply rules</button>
    </div>
  );
};

const mapDispatchToProps = {
  addRules: addRulesAction,
  addGlobalRules: addGlobalRulesAction,
  selectEvent: selectEventAction,
  selectGlobalEvent: selectGlobalEventAction
};

const mapStateToProps = ({
  event,
  rules,
  selectedShape,
  globalEvent,
  globalRules
}) => {
  return {
    eventType: event,
    globalEventType: globalEvent,
    rules,
    selectedShapeId: selectedShape,
    globalRules
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
