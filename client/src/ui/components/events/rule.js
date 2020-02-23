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
    resetRules();
  };

  const updateLogicalOperator = (e, operatorIndex) => {
    rules[eventType][selectedShapeId][index].logicalOperators[operatorIndex] =
      e.target.value;
    resetRules();
  };

  const addAction = () => {
    rules[eventType][selectedShapeId][index].actions.push({
      comparison: "",
      operatorValue: ""
    });
    resetRules();
  };
  const addCondition = () => {
    rules[eventType][selectedShapeId][index].conditions.push({
      propertyName: "",
      actionPropertyName: "",
      newValue: ""
    });
    rules[eventType][selectedShapeId][index].logicalOperators.push("OR");
    resetRules();
  };

  const conditions = rule.conditions;
  const numOfConditions = conditions.length;
  const actions = rule.actions;

  return (
    <div className="rule">
      <button onClick={Delete}>delete this rule</button>
      <h2>Rule:</h2>
      <div>
        <h3>Conditions:</h3>
        {conditions.map((condition, index) => (
          <div>
            Property name:&nbsp; &nbsp;
            <select
              onChange={updateRules("propertyName", "conditions", index)}
              defaultValue={condition.propertyName}
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
              defaultValue={condition.operatorValue}
              // defaultValue={rule.operatorValue}
              onChange={updateRules("operatorValue", "conditions", index)}
            >
              {operatorsArray.map(property => (
                <option key={property[1]} value={property[0]}>
                  {property[1]}
                </option>
              ))}
            </select>
            &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
            <input
              onBlur={updateRules("comparison", "conditions", index)}
              defaultValue={condition.comparison}
              // defaultValue={rule.comparison}
            />
            <br></br>
            <br></br>
            {index + 1 < numOfConditions && (
              <div>
                <select
                  defaultValue={rule.logicalOperators[index]}
                  onChange={e => updateLogicalOperator(e, index)}
                >
                  <option value="OR">OR</option>
                  <option value="AND">AND</option>
                  <option value="NOT">NOT</option>
                </select>
                <br></br>
                <br></br>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={addCondition}>Add condition</button>
      <div>
        <h3>Actions:</h3>
        {actions.map((action, index) => {
          return (
            <div>
              Property name:&nbsp; &nbsp;
              <select
                defaultValue={action.actionPropertyName}
                onChange={updateRules("actionPropertyName", "actions", index)}
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
                onBlur={updateRules("newValue", "actions", index)}
                defaultValue={action.newValue}
              />
            </div>
          );
        })}
        <button onClick={addAction}>Add action</button>
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
