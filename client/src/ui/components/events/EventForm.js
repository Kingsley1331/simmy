import React, { useCallback } from "react";
import { connect } from "react-redux";
import Scene from "../../../engine/scenes/scene";

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
const EventForm = () => {
  return (
    <div className="event-form_wrapper">
      <form className="event-form">
        <div className="button-holder">
          <button className="event-button">Delete rule</button>
          <button className="event-button">Edit rule</button>
        </div>
        <div className="form-types">
          <label>Event Type:</label>
          <select>
            <option value="">none</option>
            <option value="collision">collision</option>
            <option value="drag">drag</option>
            <option value="click">click</option>
            <option value="hover">hover</option>
            <option value="double click">double click</option>
          </select>
          <label>Rule Type:</label>
          <select>
            <option value="oneToOne">oneToOne</option>
            <option value="manyToOne">manyToOne</option>
            <option value="oneToMany">oneToMany</option>
            <option value="manyToMany">manyToMany</option>
          </select>
        </div>
        <h3>Conditions</h3>
        <div className="form-condition-group">
          <div className="form-condition">
            <h4>Emitter</h4>
            <label>Property name:</label>
            <select>
              {Object.entries(propertyMap).map(prop => (
                <option value={prop[0]}>{prop[1]}</option>
              ))}
            </select>
            <label>Operator:</label>
            <select>
              {operatorsArray.map(operator => (
                <option value={operator[0]}>{operator[1]}</option>
              ))}
            </select>
            <label>Comparison:</label> <input></input>
            <button>delete</button>
          </div>
          <div className="form-logical_operator">
            <select>
              <option value="OR">OR</option>
              <option value="AND">AND</option>
              <option value="NOT">NOT</option>
            </select>
          </div>

          <div className="form-condition">
            <label>Property name:</label>
            <select>
              {Object.entries(propertyMap).map(prop => (
                <option value={prop[0]}>{prop[1]}</option>
              ))}
            </select>
            <label>Operator:</label>
            <select>
              {operatorsArray.map(operator => (
                <option value={operator[0]}>{operator[1]}</option>
              ))}
            </select>
            <label>Comparison:</label> <input></input>
            <button>delete</button>
          </div>

          <button>Add condition</button>
        </div>
        <div className="form-condition-group">
          <div className="form-condition">
            <h4>Receiver</h4>
            <label>Property name:</label>
            <select>
              {Object.entries(propertyMap).map(prop => (
                <option value={prop[0]}>{prop[1]}</option>
              ))}
            </select>
            <label>Operator:</label>
            <select>
              {operatorsArray.map(operator => (
                <option value={operator[0]}>{operator[1]}</option>
              ))}
            </select>
            <label>Comparison:</label> <input></input>
            <button>delete</button>
          </div>
          <div className="form-logical_operator">
            <select>
              <option value="OR">OR</option>
              <option value="AND">AND</option>
              <option value="NOT">NOT</option>
            </select>
          </div>

          <div className="form-condition">
            <label>Property name:</label>
            <select>
              {Object.entries(propertyMap).map(prop => (
                <option value={prop[0]}>{prop[1]}</option>
              ))}
            </select>
            <label>Operator:</label>
            <select>
              {operatorsArray.map(operator => (
                <option value={operator[0]}>{operator[1]}</option>
              ))}
            </select>
            <label>Comparison:</label> <input></input>
            <button>delete</button>
          </div>

          <button>Add condition</button>
        </div>
        <h3>Actions</h3>
        <div className="form-action">
          <label>Property name:</label>{" "}
          <select>
            {Object.entries(propertyMap).map(prop => (
              <option value={prop[0]}>{prop[1]}</option>
            ))}
          </select>
          <label>New Value:</label> <input></input>
          <button>delete</button>
        </div>
        <div className="form-action">
          <label>Property name:</label>{" "}
          <select>
            {Object.entries(propertyMap).map(prop => (
              <option value={prop[0]}>{prop[1]}</option>
            ))}
          </select>
          <label>New Value:</label> <input></input>
          <button>delete</button>
        </div>
        <label>Apply to partner</label> <input type="checkbox"></input> <br />
        <br />
        <button>Add Action</button>
      </form>
    </div>
  );
};

export default EventForm;
