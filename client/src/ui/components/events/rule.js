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

  const updateRules = valueName => e => {
    rules[selectedShapeId][index][valueName] = e.target.value;
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
          onChange={updateRules("propertyName")}
          defaultValue={rule.propertyName}
          className="propertyName"
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
          onChange={updateRules("operatorValue")}
        >
          {operatorsArray.map(property => (
            <option key={property[1]} value={property[0]}>
              {property[1]}
            </option>
          ))}
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input
          onBlur={updateRules("comparison")}
          // onChange={{updateRules("comparison")}
          defaultValue={rule.comparison}
        />
      </div>
      <div>
        <h3>Action:</h3>
        Property name:&nbsp; &nbsp;
        <select
          defaultValue={rule.actionPropertyName}
          onChange={updateRules("actionPropertyName")}
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
          onBlur={updateRules("newValue")}
          // onChange={updateRules("newValue")}
          defaultValue={rule.newValue}
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
