import Scene from "../scenes/scene";
import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

const checkGlobalEvents = function(stop, shape) {
  const globalEvents = Scene.currentEvents;

  if (shape.events.global.subscribed) {
    for (let event in globalEvents) {
      //   if (event !== "subscribed") {
      const rules = Scene.events[event].rules;
      const length = rules.length;
      const propertyValueCache = {};

      for (let i = 0; i < length; i++) {
        let bool = false;
        const rule = rules[i];

        const { conditions, actions, logicalOperators } = rule;
        const numOfConditions = conditions.length;

        for (let j = 0; j < numOfConditions; j++) {
          const condition = conditions[j];
          let logicalOperator =
            numOfConditions > 1 ? logicalOperators[j - 1] : "";
          const propertyName = condition.propertyName;
          const comparisonValue = condition.comparisonValue;
          const operator = condition.operator;
          const propertyValue =
            propertyName in propertyValueCache
              ? propertyValueCache[propertyName]
              : getObjectValueFromString(shape, propertyName);

          propertyValueCache[propertyName] = propertyValue;

          const newBool = calculateBoolean(
            propertyValue,
            operator,
            comparisonValue
          );
          if (j === 0) {
            bool = newBool;
          } else {
            bool = calculateBoolean(bool, logicalOperator, newBool);
          }

          bool = event === "collision" ? shape.colliding && bool : bool;
          bool = event === "hover" ? shape.onShape && bool : bool;
          bool = event === "drag" ? shape.dragging && bool : bool;
          bool = event === "click" ? shape.onClick && bool : bool;
        }

        if (!numOfConditions) {
          if (event === "collision" && shape.colliding) {
            bool = true;
          }
          if (event === "hover" && shape.onShape) {
            bool = true;
          }
          if (event === "drag" && shape.dragging) {
            bool = true;
          }
          if (event === "click" && shape.onClick) {
            bool = true;
          }
        }

        const numOfActions = actions.length;
        if (bool) {
          for (let k = 0; k < numOfActions; k++) {
            let actionPropertyName = actions[k].actionPropertyName;
            let action = actions[k];
            setObjectValueFromString(
              shape,
              actionPropertyName,
              action.newValue
            );
          }
        }
      }
      //   }
    }
  }
  if (stop) {
    Scene.currentEvents = {
      click: false,
      doubleClick: false,
      collision: false
    };
  }
  // this.onClick = false;
};

const checkGlobalEvents1 = function(stop, shape) {
  const globalEvents = Scene.currentEvents;
  if (shape.events.global.subscribed) {
    for (let event in globalEvents) {
      const numOfClickActions = Scene.events[event].rules.length;
      const clickActions = Scene.events[event].rules;
      if (globalEvents[event] && numOfClickActions) {
        for (let j = 0; j < numOfClickActions; j++) {
          if (clickActions[j].condition()) {
            clickActions[j].action(shape);
          }
        }
      }
    }
  }
  if (stop) {
    Scene.currentEvents = {
      click: false,
      doubleClick: false,
      collision: false
    };
  }
};

export default checkGlobalEvents;
