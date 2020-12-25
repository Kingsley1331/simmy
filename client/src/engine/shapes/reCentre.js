import { findMass } from "../physics/mass/mass";
import findBoundingRect from "./findBoundingRect";

export function reCentreVertices(vertices, centreOfMass) {
  var centre = { x: 0, y: 0 };
  var length = vertices.length;
  var diff = { x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y };
  for (var i = 0; i < length; i++) {
    vertices[i].x -= diff.x;
    vertices[i].y -= diff.y;
  }
  return vertices;
}

export default function reCentre(shapes) {
  for (var shape in shapes) {
    var centre = { x: 0, y: 0 };
    var vertices = shapes[shape];
    var boundingRect = findBoundingRect(vertices);
    var mass = findMass(centre, vertices, boundingRect);
    var centreOfMass = mass.centreOfMass;
    vertices = reCentreVertices(vertices, centreOfMass);
    shapes[shape] = vertices;
  }
}
