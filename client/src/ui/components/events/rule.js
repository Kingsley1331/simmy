import React from "react";
import { connect } from "react-redux";

const Rule = ({
  index,
  rule,
  rules,
  globalRules,
  type,
  selectedShapeId,
  addRules,
  addGlobalRules,
  applyRules,
  eventType,
  globalEventType
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

  /** TODO: refactor to avoid checking 'type' in each function by storing rules[eventType][selectedShapeId] and globalRules[globalEventType] in variable **/
  const resetRules = () => {
    if (type === "local") {
      addRules({
        [eventType]: {
          [selectedShapeId]: [...rules[[eventType]][selectedShapeId]]
        }
      });
    }
    if (type === "global") {
      addGlobalRules({
        [globalEventType]: [...globalRules[[globalEventType]]]
      });
    }
  };

  const Delete = e => {
    const deleteThisRule = window.confirm(
      "Are you sure you want to delete this rule"
    );
    if (deleteThisRule) {
      if (type === "local") {
        rules[eventType][selectedShapeId].splice(index, 1);
      }
      if (type === "global") {
        globalRules[globalEventType].splice(index, 1);
      }
      resetRules();
      applyRules();
    }
  };

  const deleteAction = actionIndex => {
    const deleteThisAction = window.confirm(
      "Are you sure you want to delete this action"
    );
    if (deleteThisAction) {
      if (type === "local") {
        rules[eventType][selectedShapeId][index].actions.splice(actionIndex, 1);
      }
      if (type === "global") {
        globalRules[globalEventType][index].actions.splice(actionIndex, 1);
      }
      resetRules();
      applyRules();
    }
  };

  const deleteCondition = conditionIndex => {
    const deleteThisCondition = window.confirm(
      "Are you sure you want to delete this condition"
    );
    if (deleteThisCondition) {
      if (type === "local") {
        rules[eventType][selectedShapeId][index].conditions.splice(
          conditionIndex,
          1
        );
      }
      if (type === "global") {
        globalRules[globalEventType][index].conditions.splice(
          conditionIndex,
          1
        );
      }
      resetRules();
      applyRules();
    }
  };

  const updateRules = (valueName, role, typeIndex) => e => {
    if (type === "local") {
      rules[eventType][selectedShapeId][index][role][typeIndex][valueName] =
        e.target.value;
    }
    if (type === "global") {
      globalRules[globalEventType][index][role][typeIndex][valueName] =
        e.target.value;
    }
    resetRules();
  };

  const updateLogicalOperator = (e, operatorIndex) => {
    if (type === "local") {
      rules[eventType][selectedShapeId][index].logicalOperators[operatorIndex] =
        e.target.value;
    }
    if (type === "global") {
      globalRules[globalEventType][index].logicalOperators[operatorIndex] =
        e.target.value;
    }
    resetRules();
  };

  const addAction = () => {
    if (type === "local") {
      rules[eventType][selectedShapeId][index].actions.push({
        actionPropertyName: "",
        newValue: ""
      });
    }
    if (type === "global") {
      globalRules[globalEventType][index].actions.push({
        actionPropertyName: "",
        newValue: ""
      });
    }
    resetRules();
  };

  const addCondition = () => {
    if (type === "local") {
      rules[eventType][selectedShapeId][index].conditions.push({
        comparisonValue: "",
        operator: "",
        propertyName: ""
      });
      rules[eventType][selectedShapeId][index].logicalOperators.push("OR");
    }
    if (type === "global") {
      globalRules[globalEventType][index].conditions.push({
        comparisonValue: "",
        operator: "",
        propertyName: ""
      });
      globalRules[globalEventType][index].logicalOperators.push("OR");
    }
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
              defaultValue={condition.operator}
              onChange={updateRules("operator", "conditions", idx)}
            >
              {operatorsArray.map(property => (
                <option key={property[1]} value={property[0]}>
                  {property[1]}
                </option>
              ))}
            </select>
            &nbsp; &nbsp; comparison value:&nbsp; &nbsp;
            <input
              onBlur={updateRules("comparisonValue", "conditions", idx)}
              defaultValue={condition.comparisonValue}
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
            <div key={idx}>
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
    addRules: rules => dispatch({ type: "ADD_RULES", payload: rules }),
    addGlobalRules: rules =>
      dispatch({ type: "ADD_GLOBAL_RULES", payload: rules })
  };
};

const mapStateToProps = ({
  event,
  rules,
  selectedShape,
  globalRules,
  globalEvent
}) => {
  return {
    eventType: event,
    globalEventType: globalEvent,
    rules,
    selectedShapeId: selectedShape,
    globalRules
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
