import React, { useRef, useState, useCallback } from "react";

const Rule = ({ index, rule, setRulesArray, updateRule, deleteRule }) => {
  console.log({ index, rule, setRulesArray });
  const properties = useRef({});
  const newPropValue = useRef({});
  const comparisonValue = useRef({});
  const operator = useRef({});
  const actionProperty = useRef({});

  const propertiesArray = [
    "none",
    "velocity.x",
    "velocity.y",
    "fillColour",
    "linewidth"
  ];
  const operatorsArray = [
    ["", "none"],
    [">", "greater than"],
    ["<", "less than"],
    ["===", "equal"],
    ["!==", "not equal"]
  ];

  const [propertyName, setPropertyName] = useState();
  const [actionPropertyName, setActionPropertyName] = useState();
  const [newValue, setNewValue] = useState();
  const [comparison, setComparison] = useState();
  const [operatorValue, setOperatorValue] = useState();

  const updateRules = useCallback(() => {
    const propertyName = properties.current.value;
    const actionPropertyName = actionProperty.current.value;
    const newValue = newPropValue.current.value;
    const comparison = comparisonValue.current.value;
    const operatorValue = operator.current.value;

    const newRule = {
      propertyName,
      actionPropertyName,
      newValue,
      comparison,
      operatorValue
    };

    updateRule(newRule, index);
  }, [properties, actionProperty, newPropValue, comparisonValue, operator]);

  const Delete = useCallback(() => {
    const deleteThisRule = window.confirm(
      "Are you sure you want to delete this rule"
    );
    if (deleteThisRule) {
      deleteRule(index);
    }
  }, [setRulesArray]);

  const updatePropertyName = useCallback(
    e => {
      console.log("value", e.target.value);
      setPropertyName(e.target.value);
      updateRules();
    },
    [setPropertyName, updateRules]
  );

  const updateActionPropertyName = e => {
    setActionPropertyName(e.target.value);
    updateRules();
  };
  const updateOperator = e => {
    setOperatorValue(e.target.value);
    updateRules();
  };
  const updateComparisonValue = e => {
    setComparison(e.target.value);
    updateRules();
  };
  const updateNewPropValue = e => {
    console.log("BLURRING!!!!");
    setNewValue(e.target.value);
    updateRules();
  };

  return (
    <div className="rule">
      <button onClick={Delete}>delete this rule</button>
      <h2>Rule:</h2>
      <div>
        <h3>Condition:</h3>
        Property name:&nbsp; &nbsp;
        <select
          onChange={updatePropertyName}
          defaultValue={rule.propertyName}
          className="propertyName"
          ref={properties}
        >
          {propertiesArray.map(property => (
            <option key={property} value={property}>
              {property}
            </option>
          ))}
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select
          defaultValue={rule.operatorValue}
          onChange={updateOperator}
          ref={operator}
        >
          {operatorsArray.map(property => (
            <option key={property[1]} value={property[0]}>
              {property[1]}
            </option>
          ))}
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input
          onBlur={updateComparisonValue}
          // onChange={updateComparisonValue}
          defaultValue={rule.comparison}
          ref={comparisonValue}
        />
        {rule.comparison}
        {comparisonValue.current.value}
      </div>
      {/* rule: {rule.propertyName}
      <br></br>
      ref: {properties.current.value}
      <br></br>
      rulesArray: {rulesArray[index].propertyName}
      <br></br> */}
      <div>
        <h3>Action:</h3>
        Property name:&nbsp; &nbsp;
        <select
          defaultValue={rule.actionPropertyName}
          onChange={updateActionPropertyName}
          ref={actionProperty}
        >
          {propertiesArray.map(property => (
            <option key={property} value={property}>
              {property}
            </option>
          ))}
        </select>
        &nbsp; &nbsp; New value:{" "}
        <input
          // autofocus
          key={index}
          onBlur={updateNewPropValue}
          // onChange={updateNewPropValue}
          defaultValue={rule.newValue}
          ref={newPropValue}
        />
      </div>
    </div>
  );
};

export default Rule;
