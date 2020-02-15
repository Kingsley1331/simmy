import React, { useRef, useCallback } from "react";
import { connect } from "react-redux";
import Scene from "../../../engine/scenes/scene";
import Rule from "./rule";

const EventForm = ({ selectedShapeId, addRules, rules }) => {
  const eventTypes = useRef(null);
  const event = useRef(null);
  const rulesArray = rules[selectedShapeId] || [];

  const propertyMap = {
    fillColour: "fillColour",
    lineColour: "lineColour",
    linewidth: "linewidth",
    "centreOfMass.x": "centreOfMass.x",
    "centreOfMass.y": "centreOfMass.y",
    "velocity.x": "physics.velocity.x",
    "velocity.y": "physics.velocity.y"
  };

  const applyRules = () => {
    const eventType = eventTypes.current.value;

    const selectedShape = Scene.selectedShape;
    const shape = Scene.shapes.filter(shape => shape.id === selectedShape)[0];

    const numOfRules = rulesArray.length;
    if (shape) {
      shape.events.local[eventType].rules = [];
    }
    for (let i = 0; i < numOfRules; i++) {
      let rule = {};
      rule.condition = {
        propertyName: propertyMap[rulesArray[i].propertyName],
        operator: rulesArray[i].operatorValue,
        comparisonValue: rulesArray[i].comparison
      };
      rule.action = {
        propertyName: propertyMap[rulesArray[i].actionPropertyName],
        newValue: rulesArray[i].newValue
      };
      if (shape) {
        shape.events.local[eventType].rules.push(rule);
      }
    }
  };

  const addRule = useCallback(() => {
    const newRule = {
      propertyName: "",
      actionPropertyName: "",
      newValue: "",
      comparison: "",
      operatorValue: ""
    };

    addRules({
      shapeId: selectedShapeId,
      rules: [...rulesArray, newRule]
    });
  }, [rulesArray, selectedShapeId, addRules]);

  return (
    <div ref={event} className="eventsWrapper">
      selectedShapeId: {selectedShapeId}
      <h2>Event:</h2>
      <select ref={eventTypes}>
        <option value="collision">collision</option>
        <option value="drag">drag</option>
        <option value="click">click</option>
        <option value="double click">double click</option>
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
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules })
  };
};

const mapStateToProps = ({ rules, selectedShape }) => {
  return {
    rules,
    selectedShapeId: selectedShape
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
