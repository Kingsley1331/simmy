export function addRulesAction(rules) {
  return {
    type: "ADD_RULES",
    payload: rules
  };
}
export function selectEventAction(eventType) {
  return {
    type: "SELECT_EVENT",
    payload: eventType
  };
}
