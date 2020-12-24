import React, { Component } from "react";
import Scene from "../../../../src/engine/scenes/scene";

export const update = () => {
  const name = prompt("Please enter a name for the scene", Scene.name);
  const imageURL = Scene.context.buffer.canvas.toDataURL();

  if (name !== null) {
    fetch(`/scenes/${Scene._id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...Scene, name, imageURL }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("result", res);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
};

export const save = () => {
  const name = prompt("Please enter a name for the scene", "untitled");
  const imageURL = Scene.context.buffer.canvas.toDataURL();
  delete Scene._id;
  if (name !== null) {
    fetch("/scenes", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ ...Scene, name, imageURL }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("result", res);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
};

export const ImgButton = ({ alt, id, src, width, selected, selectShape }) => {
  return (
    <img
      className={selected ? "selected" : ""}
      alt={alt}
      id={id}
      src={src}
      width={width}
      onClick={selectShape}
    />
  );
};
