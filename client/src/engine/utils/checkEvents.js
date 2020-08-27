import Scene from "../scenes/scene";
import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

const evaluateCondtions = (
  self,
  conditions,
  logicalOperators,
  ruleType,
  eventBeingChecked,
  rule
) => {
  let bool = false;

  const numOfConditions = conditions.length;

  for (let j = 0; j < numOfConditions; j++) {
    const condition = conditions[j];
    let logicalOperator = numOfConditions > 1 ? logicalOperators[j - 1] : "";
    const propertyName = condition.propertyName;
    const comparisonValue = condition.comparisonValue;
    const operator = condition.operator;

    if (!Scene.propertyValueCache[self.id]) {
      Scene.propertyValueCache[self.id] = {};
    }
    const propertyValue =
      propertyName in Scene.propertyValueCache[self.id]
        ? Scene.propertyValueCache[self.id][propertyName]
        : getObjectValueFromString(self, propertyName);

    const newBool = calculateBoolean(propertyValue, operator, comparisonValue);
    if (j === 0) {
      bool = newBool;
    } else {
      bool = calculateBoolean(bool, logicalOperator, newBool);
    }

    /** TODO: bool is true by default, this leads to bugs */

    if (ruleType === "manyToOne" || ruleType === "oneToOne") {
      bool = eventBeingChecked === "collision" ? self.colliding && bool : bool;
      bool = eventBeingChecked === "hover" ? self.onShape && bool : bool;
      bool = eventBeingChecked === "drag" ? self.dragging && bool : bool;
      bool = eventBeingChecked === "click" ? self.onClick && bool : bool;
      bool =
        eventBeingChecked === "doubleClick" ? self.doubleClick && bool : bool;
    }
  }
  if (!numOfConditions) {
    if (eventBeingChecked === "collision" && self.colliding) {
      bool = true;
    }
    if (eventBeingChecked === "hover" && self.onShape) {
      bool = true;
    }
    if (eventBeingChecked === "drag" && self.dragging) {
      bool = true;
    }
    if (eventBeingChecked === "click" && self.onShape) {
      bool = true;
    }
    if (eventBeingChecked === "doubleClick" && self.doubleClick) {
      bool = true;
    }
  }

  if (rule.ruleType === "oneToOne") {
    bool = self.id === rule.shapeId && bool;
  }
  return bool;
};

const checkEvents = function(stop) {
  const subscribed = this.events.subscribed;

  if (subscribed) {
    const eventTypes = Scene.currentEvents;
    const rules = Scene.rules;
    let currentEvents = [];

    for (let eventType in eventTypes) {
      if (eventTypes[eventType].state) {
        currentEvents.push(eventType);
      }
    }

    const numOfCurrentEvents = currentEvents.length;

    const numOfRules = rules.length;

    for (let n = 0; n < numOfCurrentEvents; n++) {
      let eventBeingChecked = currentEvents[n];

      const triggerShapeId = Scene.currentEvents[eventBeingChecked].id;

      for (let i = 0; i < numOfRules; i++) {
        let bool = false;
        const rule = rules[i];
        const ruleType = rule.ruleType; // use destructuring
        const currentEventType = rule.eventType; // use destructuring
        let shape = this;

        let {
          conditions,
          actions,
          logicalOperators,
          selfConditions,
          selfLogicalOperators
        } = rule;
        if (ruleType === "oneToMany") {
          /**Check the self conditions of the trigger shape */
          shape = Scene.shapes.filter(
            currentShape => currentShape.id === rule.shapeId
          )[0];
        }
        if (ruleType === "manyToMany") {
          /**Check the self conditions of the trigger shape */
          shape = Scene.shapes.filter(
            currentShape => currentShape.id === triggerShapeId
          )[0];
        }

        if (currentEventType === eventBeingChecked) {
          if (selfConditions && selfLogicalOperators) {
            bool = evaluateCondtions(
              shape,
              selfConditions,
              selfLogicalOperators,
              ruleType,
              eventBeingChecked,
              rule
            );

            /** Make sure to check the the conditions of the receiver shape */
            shape =
              ruleType === "oneToMany" && this.id !== rule.shapeId
                ? this
                : shape;
            if (ruleType === "oneToMany") {
              /**Only apply rule if the trigger shape contains the rule */
              bool = triggerShapeId === rule.shapeId && bool;
            }

            /** Make sure to check the the conditions of the receiver shape */
            shape =
              ruleType === "manyToMany" && this.id !== triggerShapeId
                ? this
                : shape;

            bool =
              evaluateCondtions(
                shape,
                conditions,
                logicalOperators,
                ruleType,
                eventBeingChecked,
                rule
              ) && bool;
          } else {
            bool = evaluateCondtions(
              shape,
              conditions,
              logicalOperators,
              ruleType,
              eventBeingChecked,
              rule
            );
          }
        }

        const numOfActions = actions.length;
        if (bool) {
          for (let k = 0; k < numOfActions; k++) {
            let actionPropertyName = actions[k].actionPropertyName;
            let action = actions[k];

            if (!Scene.propertyValueCache[this.id]) {
              Scene.propertyValueCache[this.id] = {};
            }
            Scene.propertyValueCache[this.id][
              actionPropertyName
            ] = getObjectValueFromString(this, actionPropertyName);

            setObjectValueFromString(this, actionPropertyName, action.newValue);
          }
        }
      }
    }
  }
  if (stop) {
    Scene.currentEvents = {
      click: { state: false, id: "" },
      doubleClick: { state: false, id: "" },
      collision: { state: false, id: "" },
      hover: { state: false, id: "" },
      drag: { state: false, id: "" }
    };
    Scene.propertyValueCache = {};
  }
  // this.onClick = false;
};

export default checkEvents;
