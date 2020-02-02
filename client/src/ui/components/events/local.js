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

    const action1 = {};
    const action2 = {};

    const property = propertyMap[propertyName];
    const property2 = propertyMap[propertyName2] || true;
    const actionProperty1 = propertyMap[actionPropertyName];
    const actionProperty2a = propertyMap[actionPropertyName2];

    const conditionFunction = eval(
      `(shape) => shape.colliding && shape.${property}${operatorValue}'${comparison}'`
    );

    const conditionFunction2 = eval(
      `(shape) => shape.colliding && shape.${property2}${operatorValue2}'${comparison2}'`
    );

    action1.condition = conditionFunction;
    action2.condition = conditionFunction2;

    const executionFunction = eval(
      `(shape)=>{shape.${actionProperty1}='${newValue1}'}`
    );
    const executionFunction2 = eval(
      `(shape)=>{shape.${actionProperty2a}='${newValue2}'}`
    );
    action1.execute = executionFunction;
    action2.execute = executionFunction2;
    shape.events.local[eventType].actions.push(action1);
    shape.events.local[eventType].actions.push(action2);
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
      <h2> Conditions:</h2>
      <div>
        <h3>Condition 1:</h3>
        Property name:&nbsp; &nbsp;
        <select ref={properties2}>
          <option value="fillColour">fillcolour</option>
          <option value="linewidth">linewidth</option>
          <option value="velocity.x">velocity.x</option>
          <option value="velocity.y">velocity.y</option>
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select ref={operator}>
          <option value="===">equal</option>
          <option value="!==">not equal</option>
          <option value=">">greater than</option>
          <option value="<">less than</option>
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input defaultValue="#6495ED" ref={comparisonValue} />
      </div>
      <div>
        <h3>Condition 2:</h3>
        Property name:&nbsp; &nbsp;
        <select ref={propertiesc2}>
          <option value="fillColour">fillcolour</option>
          <option value="linewidth">linewidth</option>
          <option value="velocity.x">velocity.x</option>
          <option value="velocity.y">velocity.y</option>
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select ref={operatorc2}>
          <option value="===">equal</option>
          <option value="!==">not equal</option>
          <option value=">">greater than</option>
          <option value="<">less than</option>
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input defaultValue="#6495ED" ref={comparisonValuec2} />
      </div>
      <h2> Code Execution1:</h2>
      <div>
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
      <br />
      <div>
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
      <br />
      <button onClick={showEvent}>submit</button>
    </div>
  );
};

export default EventForm;
