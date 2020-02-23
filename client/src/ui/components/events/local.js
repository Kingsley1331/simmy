import React, { useCallback } from "react";
import { connect } from "react-redux";
import Scene from "../../../engine/scenes/scene";
import Rule from "./rule";

const EventForm = ({
  selectedShapeId,
  selectEvent,
  addRules,
  rules,
  eventType
}) => {
  const eventTypeObject = rules[eventType] || {};
  const rulesArray = eventTypeObject[selectedShapeId] || [];
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
    selectEvent(eventMap[e.target.value]);
  };

  const applyRules = () => {
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
          operator: rulesArray[i].conditions[j].operatorValue,
          comparisonValue: rulesArray[i].conditions[j].comparison
        };
        rule.conditions.push(condition);
      }
      // Actions loop
      for (let k = 0; k < numOfActions; k++) {
        const action = {
          propertyName:
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
      }
    }
    console.log("RULES", shape.events.local[eventType].rules);
  };

  const addRule = useCallback(() => {
    const newRule = {
      conditions: [{ propertyName: "", actionPropertyName: "", newValue: "" }],
      actions: [{ comparison: "", operatorValue: "" }],
      logicalOperators: ["OR"]
    };

    addRules({
      eventType,
      shapeId: selectedShapeId,
      rules: [...rulesArray, newRule]
    });
  }, [rulesArray, selectedShapeId, addRules]);

  return (
    <div className="eventsWrapper">
      selectedShapeId: {selectedShapeId}
      <h2>Event:</h2>
      <select onChange={handleEventChange}>
        <option value="">none</option>
        <option value="collision">collision</option>
        <option value="drag">drag</option>
        <option value="click">click</option>
        <option value="hover">hover</option>
      </select>
      {rulesArray &&
        rulesArray.map((rule, index) => (
          <Rule
            key={Math.random()}
            index={index}
            rule={rule}
            applyRules={applyRules}
          />
        ))}
      <button onClick={addRule}>Add rule</button>
      <br />
      <button onClick={applyRules}>Apply rules</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules }),
    selectEvent: eventType =>
      dispatch({ type: "SELECT_EVENT", payload: eventType })
  };
};

const mapStateToProps = ({ event, rules, selectedShape }) => {
  return {
    eventType: event,
    rules,
    selectedShapeId: selectedShape
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
