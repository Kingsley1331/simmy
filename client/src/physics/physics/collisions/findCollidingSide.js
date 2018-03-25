import { magnitude } from '../../utils/maths/Vector';
import lineFormula from './lineFormula';

export default function findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB){
  var length = shapeBVertices.length;
  var relativeCollisionPointVel = {x: collisionPointVelocityA.x - collisionPointVelocityB.x, y: collisionPointVelocityA.y - collisionPointVelocityB.y};
  var velocityFormula = lineFormula([{x: collisionPoint.x, y: collisionPoint.y}, {x: collisionPoint.x + relativeCollisionPointVel.x, y: collisionPoint.y + relativeCollisionPointVel.y}]);
  var velocityGradient = velocityFormula.gradient;
  var velocityIntercept = velocityFormula.intercept;
  var intersections = [];
    for(var i = 0; i < length; i++){
      let sideOrientation = '';
      var side = [];
      if(i !== length - 1){
        side = [{x:shapeBVertices[i].x + centreB.x, y:shapeBVertices[i].y + centreB.y}, {x:shapeBVertices[i+1].x + centreB.x, y:shapeBVertices[i+1].y + centreB.y}];
      } else {
        side = [{x:shapeBVertices[i].x + centreB.x, y:shapeBVertices[i].y + centreB.y}, {x:shapeBVertices[0].x + centreB.x, y:shapeBVertices[0].y + centreB.y}];
      }
      var sideFormula = lineFormula(side);
      var sideGradient = sideFormula.gradient;
      var sideIntercept = sideFormula.intercept;
      var intersectionX = (sideIntercept - velocityIntercept) / (velocityGradient - sideGradient);
      var intersectionY = sideGradient * intersectionX + sideIntercept;

      // if the side gradient is vertical and velocity gradient is not horizontal
      if(Math.abs(sideGradient) > 10000 && Math.abs(velocityGradient) >= 0.0001){
        intersectionX = side[0].x;
        intersectionY = velocityGradient * intersectionX + velocityIntercept;
        sideOrientation = 'vertical';
      }

      // if the velocity gradient is vertical and side gradient is not horizontal
      if(Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) >= 0.0001){
        intersectionX = collisionPoint.x;
        intersectionY = sideGradient * intersectionX + velocityIntercept;
        sideOrientation = 'horizontal';
      }

      // if the side gradient is horizontal and velocity gradient is not vertical
      if(Math.abs(sideGradient) < 0.0001 && Math.abs(velocityGradient) <= 10000){
        intersectionY = side[0].y;
        intersectionX = (intersectionY - velocityIntercept) / velocityGradient;
        sideOrientation = 'horizontal';
      }

      // if the velocity gradient is horizontal and side gradient is not vertical
      if(Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) <= 10000){
        intersectionY = collisionPoint.y;
        intersectionX = (intersectionY - sideIntercept) / sideGradient;
        sideOrientation = 'vertical';
      }

      // if velocity gradient is horizontal and the side gradient is vertical
      if(Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) > 10000){
        intersectionX = side[0].x;
        intersectionY = collisionPoint.y;
        sideOrientation = 'vertical';
      }

      // if velocity gradient is vertical and the side gradient is horizontal
      if(Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) < 0.0001){
        intersectionX = collisionPoint.x;
        intersectionY = side[0].y;
        sideOrientation = 'horizontal';
      }

      // check if intersection point lies on the side being checked
      var sideMinX = Math.min(side[0].x, side[1].x);
      var sideMaxX = Math.max(side[0].x, side[1].x);

      var sideMinY = Math.min(side[0].y, side[1].y);
      var sideMaxY = Math.max(side[0].y, side[1].y);

      if(intersectionX >= sideMinX && intersectionX <= sideMaxX && intersectionY >= sideMinY && intersectionY <= sideMaxY){
        intersections.push({x: intersectionX, y: intersectionY, side: side});
        console.log('side', side);
      } else {
        if(sideOrientation === 'horizontal' && intersectionX >= sideMinX && intersectionX <= sideMaxX){
          intersections.push({x: collisionPoint.x, y: collisionPoint.y, side: side});
        }
        if(sideOrientation === 'vertical' && intersectionY >= sideMinY && intersectionY <= sideMaxY){
          intersections.push({x: collisionPoint.x, y: collisionPoint.y, side: side});
        }
      }
    }

    if(intersections.length > 0){
      var closestPoint = intersections.reduce(function(sum, e, index){
      var closest = {};
      var distance = magnitude({x: e.x - collisionPoint.x, y: e.y - collisionPoint.y});
      if(sum.min === undefined){
        closest = {min: distance, index: index};
      } else if(sum.min > distance){
        closest = {min: distance, index: index};
      } else if(sum.min <= distance){
        closest = {min: sum.min, index: sum.index};
      }
      return closest;
      }, {min:100000000000, index:0});
    }

    var intersectionPoint = intersections.length > 0 ? intersections[closestPoint.index] : {};
    console.log('collisionPoint', collisionPoint);
    console.log('intersectionPoint', intersectionPoint);
    return intersectionPoint;
}
