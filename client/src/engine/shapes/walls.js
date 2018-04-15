import { shapeSelection, createShape } from './shapes';
import { rotateShape } from '../utils/maths/Vector';

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

  // const hexagon = createShape({x: 465, y: 250}, shapeSelection.hexagon);
  // const bar = createShape({x: 420, y: 300}, shapeSelection.bar);
  // const hexagon = createShape({x: 465, y: 250}, shapeSelection.hexagon);
  // hexagon.physics.velocity.x = -0.005;

              /** collision bugs**/

  const bar = createShape({ x: 30, y: 252 }, shapeSelection.bar);
  bar.physics.velocity.x = -0.01;

  // const bar = createShape({ x: 430, y: 252 }, shapeSelection.bar);
  // const bar1 = createShape({ x: 480, y: 262 }, shapeSelection.bar);
  // bar1.physics.velocity.x = -0.005;

  // const bar2 = createShape({ x: 430, y: 252 }, shapeSelection.bar);
  // const bar3 = createShape({ x: 480, y: 252 }, shapeSelection.bar);
  // bar3.physics.velocity.x = -0.005;

  // const bar4 = createShape({ x: 430, y: 400 }, shapeSelection.bar);
  // const bar5 = createShape({ x: 570, y: 252 }, shapeSelection.bar);
  // bar5.physics.angularVelocity = -0.00025;

  // const bar5 = createShape({ x: 430, y: 250 }, shapeSelection.bar);
  // const bar6 = createShape({ x: 600, y: 230 }, shapeSelection.bar);
  // rotateShape({ x: 570, y: 252 }, Math.PI / 2, 5);
  // bar6.physics.velocity.x = -0.005;

  // const bar7 = createShape({ x: 430, y: 300 }, shapeSelection.bar);
  // const square = createShape({ x: 570, y: 200 }, shapeSelection.square);
  // const square2 = createShape({ x: 570, y: 400 }, shapeSelection.square);
  // square.physics.velocity.x = -0.05;
  // square2.physics.velocity.x = -0.05;

  // const square = createShape({ x: 470, y: 300 }, shapeSelection.square);
  // const square2 = createShape({ x: 507, y: 300 }, shapeSelection.square);
  // const square3 = createShape({ x: 544, y: 300 }, shapeSelection.square);
  // const hexagon = createShape({ x: 600, y: 300 }, shapeSelection.hexagon);
  // hexagon.physics.velocity.x = -0.05;

  // const circle = createShape({ x: 470, y: 300 }, shapeSelection.circle);
  // const circle2 = createShape({ x: 510, y: 300 }, shapeSelection.circle);
  // const circle3 = createShape({ x: 550, y: 300 }, shapeSelection.circle);
  // const circle4 = createShape({ x: 650, y: 300 }, shapeSelection.circle);
  // circle.type = 'circle'
  // circle2.type = 'circle'
  // circle3.type = 'circle'
  // circle4.type = 'circle'
  // circle4.physics.velocity.x = -0.05;
  
  // const arrow = createShape({ x: 500, y: 300 }, shapeSelection.arrow);
  // const arrow2 = createShape({ x: 400, y: 300 }, shapeSelection.arrow);
  // arrow2.physics.velocity.x = 0.05;

}
