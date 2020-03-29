const fixPropertyName = rules => {
  if (rules) {
    const length = rules.length;
    for (let i = 0; i < length; i++) {
      const rule = rules[i];
      const { conditions, actions } = rule;
      const numOfConditions = conditions.length;
      const numOfActions = actions.length;

      for (let j = 0; j < numOfConditions; j++) {
        const condition = conditions[j];
        const { propertyName } = condition;
        condition.propertyName = propertyName.replace("physics.", "");
      }
      for (let k = 0; k < numOfActions; k++) {
        const action = actions[k];
        const { actionPropertyName } = action;
        action.actionPropertyName = actionPropertyName.replace("physics.", "");
      }
    }
    console.log("rules after", rules);
  }
  return rules;
};

export const retrieveLocalRules = (
  currentRules,
  newRules,
  shapeId,
  selectedEvent
) => {
  let selectedRules;
  for (let eventType in newRules) {
    if (eventType !== "subscribed" && eventType === selectedEvent) {
      const { rules } = newRules[eventType];
      //   console.log("eventType", eventType);
      //   console.log("rules1", rules);
      if (!currentRules[eventType]) {
        currentRules[eventType] = {};
      }
      if (!currentRules[eventType][shapeId]) {
        currentRules[eventType][shapeId] = rules;
        selectedRules = rules;
      }
    }
  }

  const rulesForRedux = {
    eventType: selectedEvent,
    shapeId,
    rules: fixPropertyName(selectedRules)
    // rules: selectedRules
  };
  return rulesForRedux;
};
