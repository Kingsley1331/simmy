import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Scene from "../../../engine/scenes/scene";
import {
  // addRulesAction,
  // addGlobalRulesAction,
  selectEventAction
  // selectGlobalEventAction,
} from "../../actions/events";

const propertyMap = {
  fillColour: "fillColour",
  lineColour: "strokeStyle",
  linewidth: "linewidth",
  "centreOfMass.x": "centreOfMass.x",
  "centreOfMass.y": "centreOfMass.y",
  "velocity.x": "physics.velocity.x",
  "velocity.y": "physics.velocity.y"
};

const eventMap = {
  collision: "collision",
  drag: "drag",
  hover: "hover",
  click: "click",
  "double click": "doubleClick"
};
const propertiesArray = [
  "velocity.x",
  "velocity.y",
  "fillColour",
  "linewidth",
  "lineColour"
];
const operatorsArray = [
  [">", "greater than"],
  ["<", "less than"],
  ["===", "equal"],
  ["!==", "not equal"]
];

const EventForm = ({
  rule,
  setRules,
  selectedShapeId,
  eventType,
  selectEvent,
  deleteRule,
  updateRule,
  index
}) => {
  const onSubmit = ruleData => {
    console.log({ ruleData });
    updateRule({ ...ruleData, id: rule.id });
  };

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: rule
  });
  const {
    fields: emitter_fields,
    append: emitter_append,
    remove: emitter_remove
  } = useFieldArray({
    control,
    name: "emmitter_conditions"
  });

  const {
    fields: receiver_fields,
    append: receiver_append,
    remove: receiver_remove
  } = useFieldArray({
    control,
    name: "receiver_conditions"
  });

  const {
    fields: action_fields,
    append: action_append,
    remove: action_remove
  } = useFieldArray({
    control,
    name: "actions"
  });
  console.log({ rule });
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
          <select name="event_type" ref={register}>
            <option value="">none</option>
            <option value="collision">collision</option>
            <option value="drag">drag</option>
            <option value="click">click</option>
            <option value="hover">hover</option>
            <option value="double click">double click</option>
          </select>
          <label>Rule Type:</label>
          <select name="rule_type" ref={register}>
            <option value="oneToOne">oneToOne</option>
            <option value="manyToOne">manyToOne</option>
            <option value="oneToMany">oneToMany</option>
            <option value="manyToMany">manyToMany</option>
            <option value="oneToPartner">oneToPartner</option>
            <option value="manyToPartner">manyToPartner</option>
          </select>
        </div>
        <h3>Conditions</h3>
        <div className="form-condition-group">
          <h4>Emitter</h4>
          {emitter_fields.map((field, index) => (
            <div key={field.id}>
              <div className="form-condition">
                <label>Property name:</label>
                <select
                  ref={register()}
                  name={`emmitter_conditions[${index}].property_name`}
                  defaultValue={field.property_name}
                >
                  {Object.entries(propertyMap).map(prop => (
                    <option key={prop[0]} value={prop[0]}>
                      {prop[1]}
                    </option>
                  ))}
                </select>
                <label>Operator:</label>
                <select
                  ref={register()}
                  name={`emmitter_conditions[${index}].operator`}
                  defaultValue={field.operator}
                >
                  {operatorsArray.map(operator => (
                    <option key={operator[0]} value={operator[0]}>
                      {operator[1]}
                    </option>
                  ))}
                </select>
                <label>Comparison:</label>{" "}
                <input
                  ref={register()}
                  name={`emmitter_conditions[${index}].comparison`}
                  defaultValue={field.comparison}
                ></input>
                <button type="button" onClick={() => emitter_remove(index)}>
                  delete
                </button>
              </div>
              <div className="form-logical_operator">
                <select
                  ref={register()}
                  name={`emmitter_conditions[${index}].logical_operator`}
                  defaultValue={field.logical_operator}
                >
                  <option value="OR">OR</option>
                  <option value="AND">AND</option>
                  <option value="NOT">NOT</option>
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => emitter_append({})}>
            Add condition
          </button>
        </div>
        <div className="form-condition-group">
          <h4>Receiver</h4>
          {receiver_fields.map((field, index) => (
            <div key={field.id}>
              <div className="form-condition">
                <label>Property name:</label>
                <select
                  ref={register()}
                  name={`receiver_conditions[${index}].property_name`}
                  defaultValue={field.property_name}
                >
                  {Object.entries(propertyMap).map(prop => (
                    <option key={prop[0]} value={prop[0]}>
                      {prop[1]}
                    </option>
                  ))}
                </select>
                <label>Operator:</label>
                <select
                  ref={register()}
                  name={`receiver_conditions[${index}].operator`}
                  defaultValue={field.operator}
                >
                  {operatorsArray.map(operator => (
                    <option key={operator[0]} value={operator[0]}>
                      {operator[1]}
                    </option>
                  ))}
                </select>
                <label>Comparison:</label>{" "}
                <input
                  ref={register()}
                  name={`receiver_conditions[${index}].comparison`}
                  defaultValue={field.comparison}
                ></input>
                <button type="button" onClick={() => receiver_remove(index)}>
                  delete
                </button>
              </div>
              <div className="form-logical_operator">
                <select
                  ref={register()}
                  name={`receiver_conditions[${index}].logical_operator`}
                  defaultValue={field.logical_operator}
                >
                  <option value="OR">OR</option>
                  <option value="AND">AND</option>
                  <option value="NOT">NOT</option>
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => receiver_append({})}>
            Add condition
          </button>
        </div>
        <h3>Actions</h3>
        {action_fields.map((field, index) => (
          <div key={field.id}>
            <div className="form-action">
              <label>Property name:</label>
              <select
                ref={register()}
                name={`actions[${index}].property_name`}
                defaultValue={field.property_name}
              >
                {Object.entries(propertyMap).map(prop => (
                  <option key={prop[0]} value={prop[0]}>
                    {prop[1]}
                  </option>
                ))}
              </select>
              <label>New Value:</label>
              <input
                ref={register()}
                name={`actions[${index}].new_value`}
                defaultValue={field.new_value}
              ></input>
              <button onClick={() => action_remove(index)}>delete</button>
            </div>
          </div>
        ))}
        <label>Apply to partner</label>
        <input
          ref={register()}
          name={`apply_to_partner`}
          type="checkbox"
        ></input>
        <br />
        <br />
        <button type="button" onClick={() => action_append({})}>
          Add Action
        </button>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  // addRules: addRulesAction,
  // addGlobalRules: addGlobalRulesAction,
  selectEvent: selectEventAction
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
export default connect(mapStateToProps, mapStateToProps)(EventForm);
