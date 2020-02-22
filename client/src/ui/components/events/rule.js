import React from "react";
import { connect } from "react-redux";

const Rule = ({
  index,
  rule,
  rules,
  selectedShapeId,
  addRules,
  applyRules,
  eventType
}) => {
  console.log({ index, rule, rules, selectedShapeId });

  const propertiesArray = [
    "none",
    "velocity.x",
    "velocity.y",
    "fillColour",
    "linewidth",
    "lineColour"
  ];
  const operatorsArray = [
    ["", "none"],
    [">", "greater than"],
    ["<", "less than"],
    ["===", "equal"],
    ["!==", "not equal"]
  ];

  const resetRules = () => {
    console.log("rules8", rules);
    addRules({
      eventType,
      shapeId: selectedShapeId,
      rules: [...rules[[eventType]][selectedShapeId]]
    });
  };

  const Delete = e => {
    const deleteThisRule = window.confirm(
      "Are you sure you want to delete this rule"
    );
    if (deleteThisRule) {
      rules[eventType][selectedShapeId].splice(index, 1);
      resetRules();
      applyRules();
    }
  };

  const updateRules = (valueName, type, typeIndex) => e => {
    rules[eventType][selectedShapeId][index][type][typeIndex][valueName] =
      e.target.value;
    // rules[eventType][selectedShapeId][index][valueName] = e.target.value;
    resetRules();
  };

  return (
    <div className="rule">
      <button onClick={Delete}>delete this rule</button>
      <h2>Rule:</h2>
      <div>
        <h3>Condition:</h3>
        Property name:&nbsp; &nbsp;
        <select
          onChange={updateRules("propertyName", "conditions", 0)}
          defaultValue={rule.conditions[0].propertyName}
          // defaultValue={rule.propertyName}
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
          defaultValue={rule.conditions[0].operatorValue}
          // defaultValue={rule.operatorValue}
          onChange={updateRules("operatorValue", "conditions", 0)}
        >
          {operatorsArray.map(property => (
            <option key={property[1]} value={property[0]}>
              {property[1]}
            </option>
          ))}
        </select>
        &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
        <input
          onBlur={updateRules("comparison", "conditions", 0)}
          defaultValue={rule.conditions[0].comparison}
          // defaultValue={rule.comparison}
        />
      </div>
      <div>
        <h3>Action:</h3>
        Property name:&nbsp; &nbsp;
        <select
          defaultValue={rule.actions[0].actionPropertyName}
          // defaultValue={rule.actionPropertyName}
          onChange={updateRules("actionPropertyName", "actions", 0)}
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
          onBlur={updateRules("newValue", "actions", 0)}
          defaultValue={rule.actions[0].newValue}
          // defaultValue={rule.newValue}
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

const mapStateToProps = ({ event, rules, selectedShape }) => {
  return {
    eventType: event,
    rules,
    selectedShapeId: selectedShape
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
