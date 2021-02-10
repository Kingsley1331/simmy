import Scene from "../scenes/scene";
import ShapesController from "../shapes/ShapesController";
import { calculateBoolean } from "./maths/operators";
import { getObjectValueFromString, setObjectValueFromString } from "./objects";

const convertShapeIdsToIndices = ids => {
  const shapesIndices = [];
  const shapes = Scene.shapes;
  ids.forEach(id => {
    shapes.forEach((shape, index) => {
      if (shape.id === id) {
        shapesIndices.push(index);
      }
    });
  });
  return shapesIndices;
};

const getShapesFromIds = ids =>
  ids.map(id => Scene.shapes.filter(shape => shape.id === id)[0]);

const evaluteCondition = (shape, condition) => {
  const { propertyName, comparisonValue, operator } = condition;

  const propertyValue = getObjectValueFromString(shape, propertyName);

  return calculateBoolean(propertyValue, operator, comparisonValue);
};

const appendConditionsBasedOnEventype = (
  eventType,
  conditions,
  logicalOperators
) => {
  let defaultCondition = {};

  switch (eventType) {
    case "collision":
      defaultCondition = {
        comparisonValue: true,
        operator: "===",
        propertyName: "colliding"
      };
      break;
    case "hover":
      defaultCondition = {
        comparisonValue: true,
        operator: "===",
        propertyName: "onShape"
      };
      break;
    case "drag":
      defaultCondition = {
        comparisonValue: true,
        operator: "===",
        propertyName: "dragging"
      };
      break;
    case "click":
      defaultCondition = {
        comparisonValue: true,
        operator: "===",
        propertyName: "onClick"
      };
      break;
    case "doubleClick":
      defaultCondition = {
        comparisonValue: true,
        operator: "===",
        propertyName: "doubleClick"
      };
      break;
    default:
      break;
  }

  const appendedLogicalOperators = ["AND", ...logicalOperators];
  const appendedCondition = [defaultCondition, ...conditions];

  return [appendedCondition, appendedLogicalOperators];
};

const evaluteConditions = (
  shape,
  eventType,
  conditionsData,
  logicalOperatorsData
) => {
  const [conditions, logicalOperators] = appendConditionsBasedOnEventype(
    eventType,
    conditionsData,
    logicalOperatorsData
  );

  console.log({ conditions });
  console.log({ logicalOperators });

  if (conditions.length === 0) {
    return true;
  }

  if (conditions.length === 1) {
    const { propertyName, comparisonValue, operator } = conditions[0];

    const propertyValue = getObjectValueFromString(shape, propertyName);

    return calculateBoolean(propertyValue, operator, comparisonValue);
  }

  const conditionTestResults = conditions.map(condition =>
    evaluteCondition(shape, condition)
  );

  const passesTest = conditionTestResults.reduce(
    (cumulativeResult, result, index) => {
      const logicalOperator = logicalOperators[index - 1];
      return calculateBoolean(cumulativeResult, logicalOperator, result);
    }
  );

  return passesTest;
};

/** checkMultipleShapes: returns an array of shape ids for shapes that satisfy the conditions */
const checkMultipleShapes = (shapes, eventType, conditions, logicalOperators) =>
  shapes
    .filter(shape =>
      evaluteConditions(shape, eventType, conditions, logicalOperators)
    )
    .map(({ id }) => id);

const evaluateRules = (rules, events, self) => {
  const numOfRules = rules.length;
  const numOfCurrentEvents = events.length;
  for (let n = 0; n < numOfCurrentEvents; n++) {
    let eventBeingChecked = events[n];
    const interactingPairs = Scene.currentEvents[eventBeingChecked].pairs || [];

    for (let i = 0; i < numOfRules; i++) {
      let partnerShapes = [];
      let shapesArray = [];
      let conditionsList = [];
      let logicalOperatorsList = [];
      let matchingShapeIds = [];

      const {
        conditions,
        logicalOperators,
        emitterConditions,
        emitterLogicalOperators,
        receiverConditions,
        receiverLogicalOperators,
        ruleType,
        eventType,
        id: ruleId
      } = rules[i];

      const isComplexRule =
        ruleType === "oneToMany" ||
        ruleType === "manyToMany" ||
        ruleType === "oneToPartner" ||
        ruleType === "manyToPartner";

      if (eventType === eventBeingChecked) {
        if (ruleType === "oneToOne" || ruleType === "manyToOne") {
          shapesArray = [self];
          conditionsList = conditions;
          logicalOperatorsList = logicalOperators;
        }

        if (ruleType === "oneToMany" || ruleType === "manyToMany") {
          shapesArray = Scene.shapes;
        }

        if (ruleType === "oneToPartner" || ruleType === "manyToPartner") {
          const partnerIds = interactingPairs
            .filter(pair => pair.some(shapeId => shapeId === self.id))
            .map(pair => (pair[0] !== self.id ? pair[0] : pair[1]));
          partnerShapes = getShapesFromIds(partnerIds);
          // console.log({
          //   self: self.id,
          //   partnerShapes: partnerShapes.map(({ id }) => id)
          // });
          shapesArray = partnerShapes;
        }

        if (isComplexRule) {
          conditionsList = receiverConditions;
          logicalOperatorsList = receiverLogicalOperators;
        }

        if (
          !(
            isComplexRule === true &&
            !evaluteConditions(
              self,
              eventType,
              emitterConditions,
              emitterLogicalOperators
            )
          )
        ) {
          matchingShapeIds = checkMultipleShapes(
            shapesArray,
            eventType,
            conditionsList,
            logicalOperatorsList
          );
          if (matchingShapeIds.length) {
            Scene.matches[ruleId] = matchingShapeIds;
          }
        }
        // console.log({ matchingShapeIds });
      }
    }

    /** SPACE */
  }
};

const applyRules = scene => {
  const { matches, rules } = scene;
  if (Object.keys(matches).length) {
    console.log("****************rules", rules);
    console.log("****************matches", matches);
  }

  for (let ruleId in matches) {
    const shapeIds = matches[ruleId];
    const actions = rules.filter(rule => ruleId === rule.id.toString())[0]
      .actions;
    const shapes = getShapesFromIds(shapeIds);
    shapes.forEach(shape => {
      actions.forEach(action => {
        const { actionPropertyName, newValue } = action;
        setObjectValueFromString(shape, actionPropertyName, newValue);
      });
    });
  }
};

function checkEvents(stop) {
  Scene.matches = {};
  if (this.events.subscribed) {
    const { rules, currentEvents } = Scene;
    let events = [];
    for (let eventType in currentEvents) {
      if (currentEvents[eventType].state) {
        events.push(eventType);
      }
    }
    evaluateRules(rules, events, this);

    applyRules(Scene);
    if (Object.keys(Scene.matches).length) {
      console.log("Scene.matches", Scene.matches);
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
  }
}

export default checkEvents;
