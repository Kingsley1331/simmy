import { shapeSelection, createShape } from './shapes';

export default function createWalls(){
  const leftWall = createShape({x: -19, y: 297}, shapeSelection.verticalWall);
  leftWall.fillColour = 'red';
  leftWall.physics.mass = Infinity;
  leftWall.physics.momentOfInertia = Infinity;
  leftWall.physics.momentOfInertiaCOM = Infinity;

  const rightWall = createShape({x: 1018, y: 297}, shapeSelection.verticalWall);
  rightWall.fillColour = 'red';
  rightWall.physics.mass = Infinity;
  rightWall.physics.momentOfInertia = Infinity;
  rightWall.physics.momentOfInertiaCOM = Infinity;

  const bottomWall = createShape({x: 500, y: 619}, shapeSelection.horizontalWall);
  bottomWall.fillColour = 'red';
  bottomWall.physics.mass = Infinity;
  bottomWall.physics.momentOfInertia = Infinity;
  bottomWall.physics.momentOfInertiaCOM = Infinity;

  const topWall = createShape({x: 500, y: -20}, shapeSelection.horizontalWall);
  topWall.fillColour = 'red';
  topWall.physics.mass = Infinity;
  topWall.physics.momentOfInertia = Infinity;
  topWall.physics.momentOfInertiaCOM = Infinity;

  // const box = createShape({x: 350, y: 300}, shapeSelection.box);
  const hexagon = createShape({x: 470, y: 300}, shapeSelection.hexagon);
  const bar = createShape({x: 420, y: 300}, shapeSelection.bar);
  hexagon.physics.velocity.x = -0.05;
}
