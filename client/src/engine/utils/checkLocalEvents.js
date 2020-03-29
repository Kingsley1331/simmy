import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

const checkLocalEvents = function() {
  const localEvents = this.events.local;

  if (localEvents.subscribed) {
    for (let event in localEvents) {
      if (event !== "subscribed") {
        const rules = localEvents[event].rules;
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
                : getObjectValueFromString(this, propertyName);

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

            bool = event === "collision" ? this.colliding && bool : bool;
            bool = event === "hover" ? this.onShape && bool : bool;
            bool = event === "drag" ? this.dragging && bool : bool;
            bool = event === "click" ? this.onClick && bool : bool;
          }

          if (!numOfConditions) {
            if (event === "collision" && this.colliding) {
              bool = true;
            }
            if (event === "hover" && this.onShape) {
              bool = true;
            }
            if (event === "drag" && this.dragging) {
              bool = true;
            }
            if (event === "click" && this.onClick) {
              bool = true;
            }
          }

          const numOfActions = actions.length;
          if (bool) {
            for (let k = 0; k < numOfActions; k++) {
              let actionPropertyName = actions[k].actionPropertyName;
              let action = actions[k];
              setObjectValueFromString(
                this,
                actionPropertyName,
                action.newValue
              );
            }
          }
        }
      }
    }
  }
  // this.onClick = false;
};

export default checkLocalEvents;
