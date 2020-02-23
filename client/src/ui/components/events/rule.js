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

  const deleteAction = actionIndex => {
    const deleteThisAction = window.confirm(
      "Are you sure you want to delete this action"
    );
    if (deleteThisAction) {
      rules[eventType][selectedShapeId][index].actions.splice(actionIndex, 1);
      resetRules();
      applyRules();
    }
  };
  const deleteCondition = conditionIndex => {
    const deleteThisCondition = window.confirm(
      "Are you sure you want to delete this condition"
    );
    if (deleteThisCondition) {
      rules[eventType][selectedShapeId][index].conditions.splice(
        conditionIndex,
        1
      );
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
  const numOfActions = actions.length;

  return (
    <div className="rule">
      <button onClick={Delete}>delete this rule</button>
      <h2>Rule:</h2>
      <div>
        <h3>Conditions:</h3>
        {conditions.map((condition, idx) => (
          <div>
            Property name:&nbsp; &nbsp;
            <select
              onChange={updateRules("propertyName", "conditions", idx)}
              defaultValue={condition.propertyName}
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
              onChange={updateRules("operatorValue", "conditions", idx)}
            >
              {operatorsArray.map(property => (
                <option key={property[1]} value={property[0]}>
                  {property[1]}
                </option>
              ))}
            </select>
            &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
            <input
              onBlur={updateRules("comparison", "conditions", idx)}
              defaultValue={condition.comparison}
            />
            <button onClick={() => deleteCondition(idx)}>X</button>
            <br></br>
            <br></br>
            {idx + 1 < numOfConditions && (
              <div>
                <select
                  defaultValue={rule.logicalOperators[idx]}
                  onChange={e => updateLogicalOperator(e, idx)}
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
        {actions.map((action, idx) => {
          return (
            <div>
              Property name:&nbsp; &nbsp;
              <select
                defaultValue={action.actionPropertyName}
                onChange={updateRules("actionPropertyName", "actions", idx)}
              >
                {propertiesArray.map(property => (
                  <option key={property} value={property}>
                    {property}
                  </option>
                ))}
              </select>
              &nbsp; &nbsp; New value:{" "}
              <input
                key={idx}
                onBlur={updateRules("newValue", "actions", idx)}
                defaultValue={action.newValue}
              />
              {numOfActions > 1 && (
                <button onClick={() => deleteAction(idx)}>X</button>
              )}
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
