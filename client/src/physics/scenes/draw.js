// export const draw = () => {
//   bufferCtx.fillStyle = Scene.backgroundColour;
//   bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
//   forEachShape(function(i){
//       var onShape = ShapesController.getProperty(i, 'onShape');
//       //bufferCtx.save();
//       if(onShape){
//         var shadowColor = shadowColor = 'rgba( 9, 9, 9, 0.3)';
//         var shadowOffsetX = shadowOffsetX = 10;
//         var shadowOffsetY = shadowOffsetY = 10;
//         var shadowBlur = shadowBlur = 10;
//       }
//
//       var fillColour = ShapesController.getProperty(i, 'fillColour');
//       var lineWidth = ShapesController.getProperty(i, 'linewidth');
//       var centreOfMass = ShapesController.getCentreOfMass(i);
//
//       var vertices = ShapesController.getVertices(i);
//       var config = {
//         shadowColor: shadowColor,
//         shadowOffsetX: shadowOffsetX,
//         shadowOffsetY: shadowOffsetY,
//         shadowBlur: shadowBlur,
//         fillStyle: fillColour,
//         lineWidth: lineWidth
//       };
//       if(ShapesController.getProperty(i, 'colliding')){
//         //config.lineWidth = 10;
//       }
//       var boundingRect = ShapesController.getProperty(i, 'boundingRect');
//       var boundingRectCentre = {x: boundingRect.centre.x + centreOfMass.x, y: boundingRect.centre.y + centreOfMass.y};
//       var rectVertices = boundingRect.vertices;
//       var centreOfRotation = ShapesController.getProperty(i, 'centreOfRotation');
//       var collisionDataB = ShapesController.getProperty(i, 'collisionData');
//       var velocityA = collisionDataB.velocityA;
//       var velocityB = collisionDataB.velocityB;
//       var referenceVectors = ShapesController.getProperty(i, 'referenceVectors');
//       // Reference Vectors
//       var referenceUnitNormal = referenceVectors.unitNormal;
//       var referenceSideVector = referenceVectors.sideVector;
//       //var referenceLocation = referenceVectors.location;
//       var referenceLocation = {x:referenceVectors.location.x + centreOfMass.x, y:referenceVectors.location.y + centreOfMass.y};
//
//       var unitNormal = collisionDataB.unitNormal;
//       var sideVector = collisionDataB.sideVector;
//       var collisionPoint = collisionDataB.collisionPoint;
//       var arrowHead = shapes.arrowHead;
//       //console.log('****collisionDataB*****', collisionDataB);
//
//       var radius = boundingRect.radius;
//       var idPos = {x: centreOfMass.x - 4, y: centreOfMass.y - 5};
//       drawShape(vertices, centreOfMass, config);
//
//       if(settings.display){ //if(10 < counter && selectedShape === 'play' && vertices[4] && vertices.length === 6) {console.log(vertices[4].isColliding);}
//         for(var n = 0; n < vertices.length; n++){
//           if(vertices[n] && vertices[n].isColliding){
//             drawDot(10, {x: centreOfMass.x + vertices[n].x, y: centreOfMass.y + vertices[n].y}, 'blue');
//           }
//         }
//         screenWriter(ShapesController.getProperty(i, 'id'), idPos);
//         drawShape(rectVertices, centreOfMass, {lineWidth: 0.5, fillStyle: 'transparent'});
//         drawDot(3, centreOfMass, 'black');
//         drawDot(3, boundingRectCentre, 'red');
//         drawDot(3, centreOfRotation, 'green');
//         if(collisionDataB.collisionPoint){
//           //drawDot(4, {x: collisionDataB.collisionPoint.x, y:collisionDataB.collisionPoint.y}, 'red');
//           drawDot(4, {x:collisionPoint.x, y:collisionPoint.y}, 'red');
//           drawLine(collisionDataB.side[0], collisionDataB.side[1], {strokeStyle: 'red', lineWidth: 2});
//         }
//
//         if(unitNormal){
//           unitNormal = unitNormal.scalProd(50);
//           drawArrow(arrowHead, [{x: collisionDataB.side[0].x + sideVector.x/2, y: collisionDataB.side[0].y + sideVector.y/2}, unitNormal], {fillStyle: 'purple', strokeStyle: 'purple'}, 30);
//           drawArrow(arrowHead, [collisionDataB.side[0], sideVector], {fillStyle: 'blue', strokeStyle: 'blue'});
//           drawArrow(arrowHead, [{x: vertices[0].x + centreOfMass.x, y: vertices[0].y + centreOfMass.y}, referenceSideVector], {fillStyle: 'red', strokeStyle: 'red'});
//           drawArrow(arrowHead, [referenceLocation, referenceUnitNormal], {fillStyle: 'black', strokeStyle: 'black'}, 30);
//           drawArrow(arrowHead, [collisionPoint, velocityA], {fillStyle: 'blue', strokeStyle: 'blue'}, 30);
//           drawArrow(arrowHead, [collisionPoint, velocityB], {fillStyle: 'green', strokeStyle: 'green'}, 60);
//         }
//         bufferCtx.save();
//         bufferCtx.beginPath();
//         bufferCtx.arc(boundingRectCentre.x, boundingRectCentre.y, radius, 0, 2*Math.PI);
//         bufferCtx.stroke();
//         bufferCtx.restore();
//       }
//   });
//   if(shapeSelection[selectedShape] && hoveringOnShape <= 0){ // (hoveringOnShape <= 0) means not hovering on shape
//     drawShape(shapeSelection[selectedShape], mousePos, {
//       globalAlpha: 0.15,
//       fillStyle: 'blue',
//       lineWidth: 0.000001
//     });
//   }
//   screenWriter('x:' + Math.round(mousePos.x) + ',  ' + 'y:' + Math.round(mousePos.y), {x:10, y:20});
//
//   context.drawImage(bufferCanvas,0,0, canvas.width, canvas.height);
// }
import { drawShape, forEachShape } from '../shapes/shapes';
import Scene from './scene';
export const canvas = document.getElementById("canvas");
export const draw1 = (canvas) => {
  // console.log('=================================> draw1')
  var context = canvas.getContext("2d");
  const bufferCanvas = document.createElement('canvas');
  const bufferCtx = bufferCanvas.getContext("2d");
  bufferCtx.canvas.width = context.canvas.width;
  bufferCtx.canvas.height = context.canvas.height;
  bufferCtx.fillStyle = '#E0E0E0';
  bufferCtx.fillRect(0, 0, 1000, 600);

  // const randCords = {x: 500 * Math.random(), y: 500 * Math.random()}
  // bufferCtx.strokeStyle="black";
  // bufferCtx.strokeRect(0 + randCords.x, 0 + randCords.y, 50, 50);
  // bufferCtx.stroke()
  forEachShape((i) => {
    // console.log(' Scene.shapes[i]',  Scene.shapes[i])
    const vertices = Scene.shapes[i].vertices;
    const centreOfMass = Scene.shapes[i].centreOfMass;
    const config = { strokeStyle: 'black', lineWidth: 1, fillStyle: 'blue' };
    drawShape(vertices, centreOfMass, config, bufferCtx);
  })

  context.drawImage(bufferCanvas,0,0, canvas.width, canvas.height);
}
