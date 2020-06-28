import Scene from "../scenes/scene";
import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

const eventNameMap = {
  click: "click",
  doubleClick: "doubleClick",
  collision: "colliding",
  hover: "onShape",
  drag: "dragging"
};

const checkGlobalEvents = function(stop) {
  const ruleType = "oneToOne";
  // const ruleType = 'oneToMany';

  /** Successfully tested */
  // const ruleType = "manyToOne";
  // const ruleType = "canvas";
  // const ruleType = "manyToMany";

  const globalEvents = Scene.currentEvents;

  if (this.events.global.subscribed) {
    for (let event in globalEvents) {
      const isEventHappening = globalEvents[event];
      //   if (event !== "subscribed") {

      // if (event === "collision" && isEventHappening) {
      //   console.log("******************************" + event);
      // }
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
          /** TODO: bool is true by default, this leads to bugs */
          if (ruleType === "manyToOne" || ruleType === "oneToOne") {
            bool = event === "collision" ? this.colliding && bool : bool;
            bool = event === "hover" ? this.onShape && bool : bool;
            bool = event === "drag" ? this.dragging && bool : bool;
            bool = event === "click" ? this.onClick && bool : bool;
            bool = event === "doubleClick" ? this.doubleClick && bool : bool;
          }
          if (ruleType === "canvas" || ruleType === "manyToMany") {
            bool = isEventHappening && bool;
          }
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
          if (event === "click" && isEventHappening) {
            bool = true;
          }
          if (event === "doubleClick" && isEventHappening) {
            bool = true;
          }

          if (ruleType !== "manyToOne" && ruleType !== "oneToOne") {
            if (this.onShape && isEventHappening) {
              bool = true;
            }
          }
          if (ruleType === "manyToMany") {
            if (isEventHappening) {
              bool = true;
            }
          }

          if (ruleType === "canvas") {
            if (isEventHappening) {
              bool = true;
            }
          }
        }

        const numOfActions = actions.length;
        if (bool) {
          for (let k = 0; k < numOfActions; k++) {
            let actionPropertyName = actions[k].actionPropertyName;
            let action = actions[k];
            setObjectValueFromString(this, actionPropertyName, action.newValue);
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
      collision: false,
      hover: false,
      drag: false
    };
  }
  // this.onClick = false;
};

export default checkGlobalEvents;
