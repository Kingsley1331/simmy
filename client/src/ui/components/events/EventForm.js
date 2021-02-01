import React from "react";
import { connect } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import Scene from "../../../engine/scenes/scene";
import { Condition, Action } from "./EventFormComponents";
// import { propertyMap, operatorsArray } from "../../../constants/events";
import {
  // addRulesAction,
  // addGlobalRulesAction,
  selectEventAction,
  updateRulesAction
  // selectGlobalEventAction,
} from "../../actions/events";

const EventForm = ({
  rule,
  selectedShapeId,
  eventType,
  selectEvent,
  onUpdateRules,
  updateRule
}) => {
  const onSubmit = ruleData => {
    console.log({ ruleData });
    updateRule({ ...ruleData, id: rule.id });
  };

  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues: rule
  });

  const watchAllFields = watch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "conditions"
  });

  const {
    fields: emitterFields,
    append: emitterAppend,
    remove: emitterRemove
  } = useFieldArray({
    control,
    name: "emitterConditions"
  });

  const {
    fields: receiverFields,
    append: receiverAppend,
    remove: receiverRemove
  } = useFieldArray({
    control,
    name: "receiverConditions"
  });

  const {
    fields: actionFields,
    append: actionAppend,
    remove: actionRemove
  } = useFieldArray({
    control,
    name: "actions"
  });
  console.log({ rule });
  console.log("watchAllFields", watchAllFields);
  const showSimpleConditions =
    watchAllFields.ruleType === "oneToOne" ||
    watchAllFields.ruleType === "manyToOne";

  const deleteRule = ruleId => {
    const deleteThisRule = window.confirm(
      "Are you sure you want to delete this rule"
    );
    if (deleteThisRule) {
      const sceneRules = [...Scene.rules];

      const filteredArray = sceneRules.filter(({ id }) => !(id === ruleId));
      Scene.rules = filteredArray;
      console.log({ filteredArray });
      onUpdateRules(filteredArray);
      return filteredArray;
    }
  };

  return (
    <div className="event-form_wrapper">
      <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="button-holder">
          <button className="event-button" onClick={() => deleteRule(rule.id)}>
            Delete rule
          </button>
          <button className="event-button">Edit rule</button>
        </div>
        selectedShapeId: {selectedShapeId}
        <div className="form-types">
          <label>Event Type:</label>
          <select name="eventType" ref={register}>
            <option value="">none</option>
            <option value="collision">collision</option>
            <option value="drag">drag</option>
            <option value="click">click</option>
            <option value="hover">hover</option>
            <option value="double click">double click</option>
          </select>
          <label>Rule Type:</label>
          <select name="ruleType" ref={register}>
            <option value="oneToOne">oneToOne</option>
            <option value="manyToOne">manyToOne</option>
            <option value="oneToMany">oneToMany</option>
            <option value="manyToMany">manyToMany</option>
            <option value="oneToPartner">oneToPartner</option>
            <option value="manyToPartner">manyToPartner</option>
          </select>
        </div>
        <h3>Conditions</h3>
        {showSimpleConditions && (
          <Condition
            fields={fields}
            conditionType="conditions"
            append={append}
            remove={remove}
            register={register}
          />
        )}
        {!showSimpleConditions && (
          <div>
            <Condition
              title="Emitter"
              fields={emitterFields}
              conditionType="emitterConditions"
              append={emitterAppend}
              remove={emitterRemove}
              register={register}
            />
            <Condition
              title="Receiver"
              fields={receiverFields}
              conditionType="receiverConditions"
              append={receiverAppend}
              remove={receiverRemove}
              register={register}
            />
          </div>
        )}
        <h3>Actions</h3>
        <Action
          fields={actionFields}
          actionName="actions"
          append={actionAppend}
          remove={actionRemove}
          register={register}
        ></Action>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  // addRules: addRulesAction,
  // addGlobalRules: addGlobalRulesAction,
  selectEvent: selectEventAction,
  onUpdateRules: updateRulesAction
  // selectGlobalEvent: selectGlobalEventAction,
};

const mapStateToProps = ({
  event,
  // rules,
  selectedShape
  // globalEvent,
  // globalRules,
}) => {
  return {
    eventType: event,
    // globalEventType: globalEvent,
    // globalRules,
    // rules,
    selectedShapeId: selectedShape
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
