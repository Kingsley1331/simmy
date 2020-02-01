import React, { useRef } from "react";
import Scene from "../../../engine/scenes/scene";

const EventForm = () => {
  const properties = useRef(null);
  const properties2 = useRef(null);
  const newPropValue = useRef(null);
  const newPropValue2 = useRef(null);
  const comparisonValue = useRef(null);
  const eventTypes = useRef(null);
  const operator = useRef(null);

  const showEvent = () => {
    // const property = properties.current.value;
    const propertyName = properties2.current.value;
    // const newValue = newPropValue.current.value;
    const newValue2 = newPropValue2.current.value;
    const comparison = comparisonValue.current.value;
    const eventType = eventTypes.current.value;
    const operatorValue = operator.current.value;

    const selectedShape = Scene.selectedShape;
    const shape = Scene.shapes.filter(shape => shape.id === selectedShape)[0];

    const action = {};

    const conditionFunction = eval(
      `(shape) => shape.colliding && shape.${propertyName}${operatorValue}'${comparison}'`
    );

    action.condition = conditionFunction;

    console.log("conditionFunction", conditionFunction);

    // const executionFunction = eval(`(shape)=>{shape.fillColour='red'}`);
    const executionFunction = eval(
      `(shape)=>{shape.${propertyName}='${newValue2}'}`
    );
    action.execute = executionFunction;

    console.log("executionFunction", executionFunction);
    // action.condition();
    console.log("action", action);
    shape.events.local[eventType].actions.push(
      action
    ); /**TEMP: consider using shapesController */
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
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select ref={operator}>
          <option value="===">equal</option>
          <option value="!==">not equal</option>
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input defaultValue="#6495ED" ref={comparisonValue} />
      </div>
      <h2> Actions:</h2>
      New value: <input defaultValue="red" ref={newPropValue2} />
      {/* <hr />
      choose property to modify:{" "}
      <select ref={properties}>
        <option value="fillColour">fillcolour</option>
        <option value="linewidth">linewidth</option>
      </select>
      <br />
      <br />
      New value: <input ref={newPropValue} />
      <br /> <br />*/}
      <button onClick={showEvent}>submit</button>
    </div>
  );
};

export default EventForm;
