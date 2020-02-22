import React, { useRef, useCallback } from "react";
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
  // const eventTypes = useRef(null);
  // const event = useRef(null);
  // debugger;
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
    // const eventType = eventTypes.current.value;

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
      // Conditions loop
      const condition = {
        propertyName: propertyMap[rulesArray[i].conditions[0].propertyName],
        operator: rulesArray[i].conditions[0].operatorValue,
        comparisonValue: rulesArray[i].conditions[0].comparison
      };
      rule.conditions.push(condition);
      // Actions loop
      const action = {
        propertyName: propertyMap[rulesArray[i].actions[0].actionPropertyName],
        newValue: rulesArray[i].actions[0].newValue
      };
      rule.actions.push(action);

      if (shape) {
        shape.events.local[eventType].rules.push(rule);
      }
    }
  };

  const addRule = useCallback(() => {
    const newRule = {
      conditions: [{ propertyName: "", actionPropertyName: "", newValue: "" }],
      actions: [{ comparison: "", operatorValue: "" }],
      logicalOperators: []
    };
    // const newRule = {
    //   propertyName: "",
    //   actionPropertyName: "",
    //   newValue: "",
    //   comparison: "",
    //   operatorValue: ""
    // };

    addRules({
      eventType,
      shapeId: selectedShapeId,
      rules: [...rulesArray, newRule]
    });
  }, [rulesArray, selectedShapeId, addRules]);

  return (
    <div className="eventsWrapper">
      {/* <div ref={event} className="eventsWrapper"> */}
      selectedShapeId: {selectedShapeId}
      <h2>Event:</h2>
      <select onChange={handleEventChange}>
        {/* <select ref={eventTypes} onChange={handleEventChange}> */}
        <option value="">none</option>
        <option value="collision">collision</option>
        <option value="drag">drag</option>
        <option value="click">click</option>
        {/* <option value="double click">double click</option> */}
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
