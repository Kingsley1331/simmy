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
      var verticesA = ShapesController.getVertices(i); //ShapeA
      var centreOfMassA = ShapesController.getCentreOfMass(i);
      var length = verticesA.length;
      for(var vertIndexA = 0; vertIndexA < length; vertIndexA++){
          var checkPoint = {};
          checkPoint.x = verticesA[vertIndexA].x + centreOfMassA.x;
          checkPoint.y = verticesA[vertIndexA].y + centreOfMassA.y;
          var collidingShape;
          for(var k = 0; k < numShapes; k++){
            if(i!== k){
            //var shape = shapes[k].vertices; //shapeB
            var verticesB = ShapesController.getVertices(k); //shapeB
            var centreOfMassB = ShapesController.getProperty(k, 'centreOfMass');
            if(isPointInShape(centreOfMassB, verticesB, checkPoint)){
              ShapesController.setProperty(i, 'colliding', true);
              ShapesController.setProperty(k, 'colliding', true);
              collidingShape = k;
              break;
            }
          }
        }

        /*** After vertex checks all other shapes ***/
        if(collidingShape !== undefined && verticesA.length === 6 && vertIndexA === 4){
          console.log('collidingShape', collidingShape);
          console.log('collidingShape2', verticesA[vertIndexA].collidingShape)
          }
          //console.log('collidingShape2', verticesA[i].collidingShape);

        if(collidingShape !== undefined && collidingShape !== verticesA[vertIndexA].collidingShape){
          verticesA[vertIndexA].collidingShapes = collidingShape;
          ShapesController.setProperty(i, 'vertices', verticesA);
          console.log('new shape', collidingShape);


                  /*************************************************************************************************START PHYSICS ********************************************************************************/



                  var velocityA = ShapesController.getProperty(i, 'velocity', true);
                  var velocityB = ShapesController.getProperty(collidingShape, 'velocity', true);

                  var angularVelocityA = ShapesController.getProperty(i, 'angularVelocity', true);
                  var angularVelocityB = ShapesController.getProperty(collidingShape, 'angularVelocity', true);

                  var centreOfRotationA = ShapesController.getProperty(i, 'centreOfRotation');
                  var centreOfRotationB = ShapesController.getProperty(collidingShape, 'centreOfRotation');

                  //var data = collisionData(i, k, checkPoint, shape);
                  var data = collisionData(i, collidingShape, checkPoint, verticesB);
                  //console.log('collisionData', data);
                  //drawDot(10, {x: checkPoint.x, y:checkPoint.y}, 'blue');
                  ShapesController.setProperty(collidingShape,'collisionData', data);
                  //shape = Scene.shapes[k];
                  var massA = ShapesController.getProperty(i, 'mass', true);
                  var massB = ShapesController.getProperty(collidingShape, 'mass', true);

                  var momentOfInertiaA = ShapesController.getProperty(i, 'momentOfInertiaCOM', true);
                  var momentOfInertiaB = ShapesController.getProperty(collidingShape, 'momentOfInertiaCOM', true);
                  var unitNormal = data.unitNormal;
                  var masses = {massA: massA, massB: massB, momentOfInertiaA: momentOfInertiaA, momentOfInertiaB: momentOfInertiaB};
                  var centres = {centreA: centreOfMassA, centreB: centreOfMassB};

                  var impulse = findImpulse(data, masses, centres);
                  /** start temporary dummy collision handling **/
                  // ShapesController.setProperty(i, 'velocity', {x: -velocityA.x, y: -velocityA.y}, true);
                  // ShapesController.setProperty(k, 'velocity', {x: -velocityB.x, y: -velocityB.y}, true);
                  /** end temporary dummy collision handling **/
                  var normalImpulse = unitNormal.scalProd(impulse);
                  var collisionDistanceA = data.collisionDistanceA;
                  var collisionDistanceB = data.collisionDistanceB;
                  var colDistCrossNormalA = collisionDistanceA.crossProd(normalImpulse);
                  var colDistCrossNormalB = collisionDistanceB.crossProd(normalImpulse);

                  var newVelocityA = {x: velocityA.x + normalImpulse.x/massA, y: velocityA.y + normalImpulse.y/massA};
                  var newVelocityB = {x: velocityB.x - normalImpulse.x/massB, y: velocityB.y - normalImpulse.y/massB};

                  var newAngularVelocityA = angularVelocityA + colDistCrossNormalA.magnitude/momentOfInertiaA;
                  var newAngularVelocityB = angularVelocityB - colDistCrossNormalB.magnitude/momentOfInertiaB;
                  //var isColliding = ShapesController.getProperty(i, 'colliding');
                  verticesA[vertIndexA].isOverlapping = true;
                  //var isVertexColliding = verticesA[vertIndexA].isColliding;
                  //if(isColliding === false){

                  //if(verticesA.length === 6 && vertIndexA === 4){console.log('isVertexColliding1', verticesA[4].isColliding)};
                  // console.log('HEXAGON', verticesA[vertIndexA]);
                  // console.log('HEXAGON2', verticesA[4]);



                    //if(verticesA.length === 6 && vertIndexA === 4){console.log('colliding!');}
                    verticesA[vertIndexA].isOverlapping = true;
                    verticesA[vertIndexA].isColliding = true;
                    //if(verticesA.length === 6 && vertIndexA === 4){console.log('isVertexColliding2', verticesA[4].isColliding)};
                    ShapesController.setProperty(i, 'velocity', newVelocityA, true);
                    ShapesController.setProperty(i, 'angularVelocity', newAngularVelocityA, true);
                    //if(verticesA.length === 6 && vertIndexA === 4){console.log('verticesA', verticesA)};
                    //ShapesController.setProperty(i, 'vertices', verticesA);
                    ShapesController.setProperty(collidingShape, 'velocity', newVelocityB, true);
                    ShapesController.setProperty(collidingShape, 'angularVelocity', newAngularVelocityB, true);
                    // ShapesController.setProperty(i, 'colliding', true);
                    // ShapesController.setProperty(k, 'colliding', true);
                    velocityA = ShapesController.getProperty(i, 'velocity', true);
                    velocityB = ShapesController.getProperty(collidingShape, 'velocity', true);
                    // counter++;
                    // console.log('==>counter', counter);
                    //console.log('================newVelocityA', newVelocityA);





                  /****************************************************************************************END PHYSICS ***********************************************************************************/
                } else if (collidingShape === undefined) {
                  verticesA[vertIndexA].collidingShape = undefined;
                  ShapesController.setProperty(i, 'vertices', verticesA)
                }
              //}







    }
  }
  });
}
