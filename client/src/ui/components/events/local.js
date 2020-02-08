import React, { useRef } from "react";
import Scene from "../../../engine/scenes/scene";

const EventForm = () => {
  const properties2 = useRef(null);
  const propertiesc2 = useRef(null);
  const newPropValue1 = useRef(null);
  const newPropValue2 = useRef(null);
  const comparisonValue = useRef(null);
  const comparisonValuec2 = useRef(null);
  const eventTypes = useRef(null);
  const operator = useRef(null);
  const operatorc2 = useRef(null);
  const actionProperty = useRef(null);
  const actionProperty2 = useRef(null);

  const propertyMap = {
    fillColour: "fillColour",
    lineColour: "lineColour",
    linewidth: "linewidth",
    "centreOfMass.x": "centreOfMass.x",
    "centreOfMass.y": "centreOfMass.y",
    "velocity.x": "physics.velocity.x",
    "velocity.y": "physics.velocity.y"
  };

  const showEvent = () => {
    const propertyName = properties2.current.value;
    const propertyName2 = propertiesc2.current.value;
    const actionPropertyName = actionProperty.current.value;
    const actionPropertyName2 = actionProperty2.current.value;
    const newValue1 = newPropValue1.current.value;
    const newValue2 = newPropValue2.current.value;
    const comparison = comparisonValue.current.value;
    const comparison2 = comparisonValuec2.current.value;
    const eventType = eventTypes.current.value;
    const operatorValue = operator.current.value;
    const operatorValue2 = operatorc2.current.value;

    const selectedShape = Scene.selectedShape;
    const shape = Scene.shapes.filter(shape => shape.id === selectedShape)[0];

    const rule1 = {};
    const rule2 = {};

    rule1.condition = {
      propertyName: propertyMap[propertyName],
      operator: operatorValue,
      comparisonValue: comparison
    };
    rule2.condition = {
      propertyName: propertyMap[propertyName2],
      operator: operatorValue2,
      comparisonValue: comparison2
    };

    rule1.action = {
      propertyName: propertyMap[actionPropertyName],
      newValue: newValue1
    };
    rule2.action = {
      propertyName: propertyMap[actionPropertyName2],
      newValue: newValue2
    };

    if (shape) {
      shape.events.local[eventType].rules.push(rule1);
      shape.events.local[eventType].rules.push(rule2);
    }
    /**TEMP: consider using shapesController */
  };

  return (
    <div className="eventsWrapper">
      <h2>Event:</h2>
      <select ref={eventTypes}>
        <option value="collision">collision</option>
        <option value="drag">drag</option>
        <option value="click">click</option>
        <option value="double click">double click</option>
        <option value="hover">hover</option>
      </select>
      <div className="rule">
        <h2> Rule 1:</h2>
        <div>
          <h3>Condition 1:</h3>
          Property name:&nbsp; &nbsp;
          <select ref={properties2}>
            <option value="velocity.x">velocity.x</option>
            <option value="velocity.y">velocity.y</option>
            <option value="fillColour">fillcolour</option>
            <option value="linewidth">linewidth</option>
          </select>
          &nbsp; &nbsp; operator &nbsp; &nbsp;
          <select ref={operator}>
            <option value=">">greater than</option>
            <option value="<">less than</option>
            <option value="===">equal</option>
            <option value="!==">not equal</option>
          </select>
          &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
          <input defaultValue="0" ref={comparisonValue} />
        </div>

        <div>
          <h3>Execution 1:</h3>
          Property name:&nbsp; &nbsp;
          <select ref={actionProperty}>
            <option value="fillColour">fillcolour</option>
            <option value="linewidth">linewidth</option>
            <option value="velocity.x">velocity.x</option>
            <option value="velocity.y">velocity.y</option>
          </select>
          &nbsp; &nbsp; New value1:{" "}
          <input defaultValue="red" ref={newPropValue1} />
        </div>
      </div>

      <div className="rule">
        <h2> Rule 2:</h2>

        <div>
          <h3>Condition 2:</h3>
          Property name:&nbsp; &nbsp;
          <select ref={propertiesc2}>
            <option value="velocity.x">velocity.x</option>
            <option value="velocity.y">velocity.y</option>
            <option value="fillColour">fillcolour</option>
            <option value="linewidth">linewidth</option>
          </select>
          &nbsp; &nbsp; operator &nbsp; &nbsp;
          <select ref={operatorc2}>
            <option value="<">less than</option>
            <option value=">">greater than</option>
            <option value="===">equal</option>
            <option value="!==">not equal</option>
          </select>
          &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
          <input defaultValue="0" ref={comparisonValuec2} />
        </div>

        <br />
        <div>
          <h3>Execution 2:</h3>
          Property name:&nbsp; &nbsp;
          <select ref={actionProperty2}>
            <option value="fillColour">fillcolour</option>
            <option value="linewidth">linewidth</option>
            <option value="velocity.x">velocity.x</option>
            <option value="velocity.y">velocity.y</option>
          </select>
          &nbsp; &nbsp; New value2:{" "}
          <input defaultValue="green" ref={newPropValue2} />
        </div>
      </div>

      <br />
      <button onClick={showEvent}>submit</button>
    </div>
  );
};

export default EventForm;
