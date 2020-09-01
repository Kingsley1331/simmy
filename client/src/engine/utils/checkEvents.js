import Scene from "../scenes/scene";
import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

/** Evaluate a set of conditions for multiple shapes and only return true if at least one shape passes the test  */
const evaluteMultipleShapes = (
  shapes,
  conditions,
  logicalOperators,
  ruleType,
  eventBeingChecked,
  rule,
  isCheckingReiverShape
) => {
  let triggerShapesBool = false;
  const numofShapes = shapes.length;
  for (let s = 0; s < numofShapes; s++) {
    const shape = shapes[s];
    triggerShapesBool =
      evaluateCondtions(
        shape,
        conditions,
        logicalOperators,
        ruleType,
        eventBeingChecked,
        rule,
        isCheckingReiverShape
      ) || triggerShapesBool;
  }
  return triggerShapesBool;
};

/**TODO: from evaluateCondtions remove the following 3 parameters: conditions, logicalOperators, ruleType as they already exist in the rule parameter */
const evaluateCondtions = (
  shape,
  conditions,
  logicalOperators,
  ruleType,
  eventBeingChecked,
  rule,
  isCheckingReiverShape
) => {
  let bool = false;

  const numOfConditions = conditions.length;

  for (let j = 0; j < numOfConditions; j++) {
    const condition = conditions[j];
    let logicalOperator = numOfConditions > 1 ? logicalOperators[j - 1] : "";
    const propertyName = condition.propertyName;
    const comparisonValue = condition.comparisonValue;
    const operator = condition.operator;

    if (!Scene.propertyValueCache[shape.id]) {
      Scene.propertyValueCache[shape.id] = {};
    }
    const propertyValue =
      propertyName in Scene.propertyValueCache[shape.id]
        ? Scene.propertyValueCache[shape.id][propertyName]
        : getObjectValueFromString(shape, propertyName);

    const newBool = calculateBoolean(propertyValue, operator, comparisonValue);
    if (j === 0) {
      bool = newBool;
    } else {
      bool = calculateBoolean(bool, logicalOperator, newBool);
    }

    /** TODO: bool is true by default, this leads to bugs */

    if (ruleType === "manyToOne" || ruleType === "oneToOne") {
      bool = eventBeingChecked === "collision" ? shape.colliding && bool : bool;
      bool = eventBeingChecked === "hover" ? shape.onShape && bool : bool;
      bool = eventBeingChecked === "drag" ? shape.dragging && bool : bool;
      bool = eventBeingChecked === "click" ? shape.onClick && bool : bool;
      bool =
        eventBeingChecked === "doubleClick" ? shape.doubleClick && bool : bool;
    }
  }
  if (!numOfConditions) {
    if (eventBeingChecked === "collision" && shape.colliding) {
      bool = true;
    }
    if (eventBeingChecked === "hover" && shape.onShape) {
      bool = true;
    }
    if (eventBeingChecked === "drag" && shape.dragging) {
      bool = true;
    }
    if (eventBeingChecked === "click" && shape.onShape) {
      bool = true;
    }
    if (eventBeingChecked === "doubleClick" && shape.doubleClick) {
      bool = true;
    }
    if (isCheckingReiverShape) {
      bool = true;
    }
  }

  if (rule.ruleType === "oneToOne" && !rule.applyToPartner) {
    bool =
      shape.id === rule.shapeId &&
      bool; /** IDEA: doing the same thing as CODE:123 */
  }

  if (
    (rule.ruleType === "oneToOne" && rule.applyToPartner) ||
    (rule.ruleType === "manyToOne" && rule.applyToPartner)
  ) {
    if (eventBeingChecked === "collision") {
      bool = shape.colliding && bool;
    }
    if (eventBeingChecked === "hover") {
      bool = shape.onShape && bool;
    }
    if (eventBeingChecked === "drag") {
      bool = shape.dragging && bool;
    }
    if (eventBeingChecked === "click") {
      bool = shape.onShape && bool;
    }
    if (eventBeingChecked === "doubleClick") {
      bool = shape.doubleClick && bool;
    }
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
      let partnerId;

      const triggerShapeIds = Scene.currentEvents[eventBeingChecked].ids;

      const interactingPairs =
        Scene.currentEvents[eventBeingChecked].pairs || [];
      const numOfInteractingPairs = interactingPairs.length;
      const hasInteractingPairs = !!numOfInteractingPairs;

      for (let i = 0; i < numOfRules; i++) {
        let bool = false;
        const rule = rules[i];
        const ruleType = rule.ruleType; // use destructuring
        const currentEventType = rule.eventType; // use destructuring
        let shapes = [this];
        let partnerShape = {};

        if (hasInteractingPairs && rule.applyToPartner) {
          for (let i = 0; i < numOfInteractingPairs; i++) {
            if (interactingPairs[i][0] === this.id) {
              partnerId = interactingPairs[i][1];
            }
            if (interactingPairs[i][1] === this.id) {
              partnerId = interactingPairs[i][0];
            }
          }
        }

        let {
          conditions,
          actions,
          logicalOperators,
          selfConditions,
          selfLogicalOperators
        } = rule;
        if (ruleType === "oneToMany") {
          /**Check the self conditions of the trigger shape */
          shapes = Scene.shapes.filter(
            currentShape => currentShape.id === rule.shapeId
          );
        }
        if (ruleType === "manyToMany") {
          /**Check the self conditions of the trigger shape */
          shapes = Scene.shapes.filter(currentShape =>
            triggerShapeIds.some(id => currentShape.id === id)
          );
        }

        if (ruleType === "oneToOne" && rule.applyToPartner) {
          /**Check the self conditions of the trigger shape */
          shapes = Scene.shapes.filter(
            currentShape => currentShape.id === rule.shapeId
          );
        }

        if (ruleType === "manyToOne" && rule.applyToPartner) {
          /**Check the self conditions of the trigger shape */
          shapes = Scene.shapes.filter(currentShape =>
            triggerShapeIds.some(id => currentShape.id === id)
          );
        }
        if (partnerId && rule.applyToPartner) {
          /**Check the self conditions of the trigger shape */
          partnerShape = Scene.shapes.filter(
            currentShape => currentShape.id === partnerId
          );
        }

        if (currentEventType === eventBeingChecked) {
          if (selfConditions && selfLogicalOperators) {
            bool = evaluteMultipleShapes(
              shapes /** Trigger shapes are checked */,
              selfConditions,
              selfLogicalOperators,
              ruleType,
              eventBeingChecked,
              rule
            );

            /** Make sure to check the the conditions of the receiver shape */

            if (ruleType === "oneToMany") {
              /**CODE:123 */
              /**Only apply rule if the trigger shape contains the rule */
              bool = triggerShapeIds.some(id => id === rule.shapeId) && bool;
            }

            if (rule.applyToPartner) {
              shapes = partnerShape;
            }

            /** Set bool = true if at least one of the trigger shapes satifisfies the rule conditions */
            bool =
              evaluteMultipleShapes(
                [this],
                conditions,
                logicalOperators,
                ruleType,
                eventBeingChecked,
                rule,
                true
              ) &&
              bool; /**IDEA: If no conditions don't call evaluteMultipleShapes */
          } else {
            bool = evaluteMultipleShapes(
              shapes,
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
      click: { state: false, ids: [] },
      doubleClick: { state: false, ids: [] },
      collision: { state: false, ids: [], pairs: [] },
      hover: { state: false, ids: [] },
      drag: { state: false, ids: [] }
    };
    Scene.propertyValueCache = {};
  }
  this.onClick = false;
  this.doubleClick = false;
};

export default checkEvents;
