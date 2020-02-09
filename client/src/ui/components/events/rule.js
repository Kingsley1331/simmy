import React, { useRef, useState, useCallback } from "react";

const Rule = ({ index, rulesArray, setRulesArray, rules }) => {
  const properties = useRef({});
  const newPropValue = useRef({});
  const comparisonValue = useRef({});
  const operator = useRef({});
  const actionProperty = useRef({});

  const [propertyName, setPropertyName] = useState("");
  const [actionPropertyName, setActionPropertyName] = useState("");
  const [newValue, setNewValue] = useState("");
  const [comparison, setComparison] = useState("");
  const [operatorValue, setOperatorValue] = useState("");

  const updateRules = useCallback(() => {
    const propertyName = properties.current.value;
    const actionPropertyName = actionProperty.current.value;
    const newValue = newPropValue.current.value;
    const comparison = comparisonValue.current.value;
    const operatorValue = operator.current.value;

    rulesArray[index] = {
      propertyName,
      actionPropertyName,
      newValue,
      comparison,
      operatorValue
    };

    setRulesArray([...rulesArray]);
  }, [properties, actionProperty, newPropValue, comparisonValue, operator]);

  const setPopertyName = e => {
    setPropertyName(e.target.value);
    updateRules();
  };
  const setActionPopertyName = e => {
    setActionPropertyName(e.target.value);
    updateRules();
  };
  const setOperator = e => {
    setOperatorValue(e.target.value);
    updateRules();
  };
  const setComparisonValue = e => {
    setComparison(e.target.value);
    updateRules();
  };
  const setNewPropValue = e => {
    setNewValue(e.target.value);
    updateRules();
  };

  return (
    <div className="rule">
      <h2> Rule:</h2>
      <div>
        <h3>Condition:</h3>
        Property name:&nbsp; &nbsp;
        <select
          onChange={setPopertyName}
          className="propertyName"
          ref={properties}
        >
          <option value="">none</option>
          <option value="velocity.x">velocity.x</option>
          <option value="velocity.y">velocity.y</option>
          <option value="fillColour">fillcolour</option>
          <option value="linewidth">linewidth</option>
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select onChange={setOperator} ref={operator}>
          <option value="">none</option>
          <option value=">">greater than</option>
          <option value="<">less than</option>
          <option value="===">equal</option>
          <option value="!==">not equal</option>
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input
          onChange={setComparisonValue}
          defaultValue="0"
          ref={comparisonValue}
        />
      </div>

      <div>
        <h3>Action:</h3>
        Property name:&nbsp; &nbsp;
        <select onChange={setActionPopertyName} ref={actionProperty}>
          <option value="">none</option>
          <option value="fillColour">fillcolour</option>
          <option value="linewidth">linewidth</option>
          <option value="velocity.x">velocity.x</option>
          <option value="velocity.y">velocity.y</option>
        </select>
        &nbsp; &nbsp; New value:{" "}
        <input
          onChange={setNewPropValue}
          defaultValue="red"
          ref={newPropValue}
        />
      </div>
    </div>
  );
};

export default Rule;
