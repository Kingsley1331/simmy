import React, { useRef, useCallback } from "react";
import { connect } from "react-redux";

const Rule = ({
  index,
  rule,
  deleteRule,
  rules,
  selectedShapeId,
  addRules,
  applyRules
}) => {
  console.log({ index, rule, rules, selectedShapeId });
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

  const Delete = e => {
    const deleteThisRule = window.confirm(
      "Are you sure you want to delete this rule"
    );
    if (deleteThisRule) {
      rules[selectedShapeId].splice(index, 1);

      addRules({
        shapeId: selectedShapeId,
        rules: [...rules[selectedShapeId]]
      });
      applyRules();
    }
  };

  const updatePropertyName = e => {
    rules[selectedShapeId][index].propertyName = e.target.value;
    addRules({
      shapeId: selectedShapeId,
      rules: [...rules[selectedShapeId]]
    });
  };

  const updateActionPropertyName = e => {
    rules[selectedShapeId][index].actionPropertyName = e.target.value;
    addRules({
      shapeId: selectedShapeId,
      rules: [...rules[selectedShapeId]]
    });
  };
  const updateOperator = e => {
    rules[selectedShapeId][index].operatorValue = e.target.value;
    addRules({
      shapeId: selectedShapeId,
      rules: [...rules[selectedShapeId]]
    });
  };
  const updateComparisonValue = e => {
    rules[selectedShapeId][index].comparison = e.target.value;
    addRules({
      shapeId: selectedShapeId,
      rules: [...rules[selectedShapeId]]
    });
  };
  const updateNewPropValue = e => {
    console.log("BLURRING!!!!");
    rules[selectedShapeId][index].newValue = e.target.value;
    addRules({
      shapeId: selectedShapeId,
      rules: [...rules[selectedShapeId]]
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
