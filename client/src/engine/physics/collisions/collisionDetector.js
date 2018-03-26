import Scene from '../../scenes/scene';
import { forEachShape, isPointInShape } from '../../shapes/shapes';
import ShapesController from '../../shapes/ShapesController';
import collisionData from './collisionData';
import findImpulse from '../forces/findImpulse';

export default function collisionDetector() {
  var shapes = Scene.shapes;
  var numShapes = shapes.length;
  forEachShape(function(i){
    ShapesController.setProperty(i, 'colliding', false);
  });
  forEachShape(function(i){
    if(Scene.selected === 'play'){
      var verticesA = ShapesController.getProperty(i, 'vertices'); //ShapeA
      var centreOfMassA = ShapesController.getCentreOfMass(i);
      var length = verticesA.length;

      vertices:
      for(var vertIndexA = 0; vertIndexA < length; vertIndexA++){ // loop through all the vertices of shapeA
          let checkPoint = {};
          checkPoint.x = verticesA[vertIndexA].x + centreOfMassA.x;
          checkPoint.y = verticesA[vertIndexA].y + centreOfMassA.y;
          var collidingShape;

          innerShapes:
          for(var k = 0; k < numShapes; k++){ // check all other shapes against the vertex
            const lastShapeIndex = numShapes - 1 === i ? numShapes - 2 : numShapes - 1; // find index of the last shape to be checked
            if(i !== k){
            var verticesB = ShapesController.getProperty(k, 'vertices'); //shapeB
            var centreOfMassB = ShapesController.getProperty(k, 'centreOfMass');

            if(isPointInShape(centreOfMassB, verticesB, checkPoint)){
              ShapesController.setProperty(i, 'colliding', true);
              ShapesController.setProperty(k, 'colliding', true);
              collidingShape = k;

              /*** After vertex checks all other shapes ***/
              if(typeof collidingShape === 'number' && collidingShape !== verticesA[vertIndexA].collidingShape){
                verticesA[vertIndexA].collidingShape = collidingShape;
                console.log('verticesA[vertIndexA].collidingShape2', verticesA[vertIndexA].collidingShape);
                console.count('****************************************************************COLLISION COUNT');

                /*************************************************************************************************START PHYSICS ********************************************************************************/

                var velocityA = ShapesController.getProperty(i, 'velocity', true);
                var velocityB = ShapesController.getProperty(collidingShape, 'velocity', true);

                var angularVelocityA = ShapesController.getProperty(i, 'angularVelocity', true);
                var angularVelocityB = ShapesController.getProperty(collidingShape, 'angularVelocity', true);

                var centreOfRotationA = ShapesController.getProperty(i, 'centreOfRotation');
                var centreOfRotationB = ShapesController.getProperty(collidingShape, 'centreOfRotation');

                var data = collisionData(i, collidingShape, checkPoint, verticesB);

                ShapesController.setProperty(collidingShape,'collisionData', data);

                var massA = ShapesController.getProperty(i, 'mass', true);
                var massB = ShapesController.getProperty(collidingShape, 'mass', true);

                var momentOfInertiaA = ShapesController.getProperty(i, 'momentOfInertiaCOM', true);
                var momentOfInertiaB = ShapesController.getProperty(collidingShape, 'momentOfInertiaCOM', true);
                var unitNormal = data.unitNormal;
                var masses = {massA: massA, massB: massB, momentOfInertiaA: momentOfInertiaA, momentOfInertiaB: momentOfInertiaB};
                var centres = {centreA: centreOfMassA, centreB: centreOfMassB};

                var impulse = findImpulse(data, masses, centres);

                var normalImpulse = unitNormal.scalProd(impulse);
                var collisionDistanceA = data.collisionDistanceA;
                var collisionDistanceB = data.collisionDistanceB;
                var colDistCrossNormalA = collisionDistanceA.crossProd(normalImpulse);
                var colDistCrossNormalB = collisionDistanceB.crossProd(normalImpulse);

                var newVelocityA = {x: velocityA.x + normalImpulse.x / massA, y: velocityA.y + normalImpulse.y / massA};
                var newVelocityB = {x: velocityB.x - normalImpulse.x / massB, y: velocityB.y - normalImpulse.y / massB};

                var newAngularVelocityA = angularVelocityA + colDistCrossNormalA.magnitude / momentOfInertiaA;
                var newAngularVelocityB = angularVelocityB - colDistCrossNormalB.magnitude / momentOfInertiaB;

                verticesA[vertIndexA].isOverlapping = true;

                ShapesController.setProperty(i, 'velocity', newVelocityA, true);
                ShapesController.setProperty(i, 'angularVelocity', newAngularVelocityA, true);

                ShapesController.setProperty(collidingShape, 'velocity', newVelocityB, true);
                ShapesController.setProperty(collidingShape, 'angularVelocity', newAngularVelocityB, true);

                velocityA = ShapesController.getProperty(i, 'velocity', true);
                velocityB = ShapesController.getProperty(collidingShape, 'velocity', true);

                  /****************************************************************************************END PHYSICS ***********************************************************************************/
                }
                break innerShapes;
              } else if (k === lastShapeIndex) { // check if current shape is the last shape tob checked
                verticesA[vertIndexA].collidingShape = null;
                ShapesController.setProperty(i, 'vertices', verticesA);
              }
            }
          }
    }
  }
  });
}