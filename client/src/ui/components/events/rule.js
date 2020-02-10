import React, { useRef, useState, useCallback } from "react";

const Rule = ({ index, rule, rulesArray, setRulesArray, rulesList }) => {
  console.log({ index, rule, rulesArray, setRulesArray, rulesList });
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

  //   properties.current !== false
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

    rulesArray[index] = {
      propertyName,
      actionPropertyName,
      newValue,
      comparison,
      operatorValue
    };

    setRulesArray([...rulesArray]);
  }, [
    properties,
    actionProperty,
    newPropValue,
    comparisonValue,
    operator,
    rulesArray
  ]);

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
          defaultValue={rule.propertyName}
          className="propertyName"
          ref={properties}
        >
          {propertiesArray.map(property => (
            <option value={property}>{property}</option>
          ))}
        </select>
        &nbsp; &nbsp; operator &nbsp; &nbsp;
        <select
          defaultValue={rule.operatorValue}
          onChange={setOperator}
          ref={operator}
        >
          {operatorsArray.map(property => (
            <option value={property[0]}>{property[1]}</option>
          ))}
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input
          onChange={setComparisonValue}
          defaultValue={rule.comparison}
          ref={comparisonValue}
        />
      </div>

      <div>
        <h3>Action:</h3>
        Property name:&nbsp; &nbsp;
        <select
          defaultValue={rule.actionPropertyName}
          onChange={setActionPopertyName}
          ref={actionProperty}
        >
          {propertiesArray.map(property => (
            <option value={property}>{property}</option>
          ))}
        </select>
        &nbsp; &nbsp; New value:{" "}
        <input
          onChange={setNewPropValue}
          defaultValue={rule.newValue}
          ref={newPropValue}
        />
      </div>
    </div>
  );
};

export default Rule;
