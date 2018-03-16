import Scene from '../../scenes/scene';
import { forEachShape, isPointInShape } from '../../shapes/shapes';
import ShapesController from '../../shapes/ShapesController';

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

        if(collidingShape !== undefined && collidingShape !== verticesA[vertIndexA].collidingShape){
          verticesA[vertIndexA].collidingShapes = collidingShape;
          ShapesController.setProperty(i, 'vertices', verticesA);
          console.log('new shape', collidingShape);
        }



    }
  }
  });
}
