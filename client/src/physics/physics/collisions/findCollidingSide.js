import { magnitude } from '../../utils/maths/Vector';
import lineFormula from './lineFormula';

export default function findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB){
  var length = shapeBVertices.length;
  var intersections = [];
    for(var i = 0; i < length; i++){
      var side = [];
      if(i !== length - 1){
        side = [{x:shapeBVertices[i].x + centreB.x, y:shapeBVertices[i].y + centreB.y}, {x:shapeBVertices[i+1].x + centreB.x, y:shapeBVertices[i+1].y + centreB.y}];
      } else {
        side = [{x:shapeBVertices[i].x + centreB.x, y:shapeBVertices[i].y + centreB.y}, {x:shapeBVertices[0].x + centreB.x, y:shapeBVertices[0].y + centreB.y}];
      }
      var sideFormula = lineFormula(side);
      var sideGradient = sideFormula.gradient;
      var sideIntercept = sideFormula.intercept;

      var relativeCollisionPointVel = {x: collisionPointVelocityA.x - collisionPointVelocityB.x, y: collisionPointVelocityA.y - collisionPointVelocityB.y};

      var velocityFormula = lineFormula([{x: collisionPoint.x, y: collisionPoint.y}, {x: collisionPoint.x + relativeCollisionPointVel.x, y: collisionPoint.y + relativeCollisionPointVel.y}]);
      var velocityGradient = velocityFormula.gradient;
      var velocityIntercept = velocityFormula.intercept;

      var intersectionX = (sideIntercept - velocityIntercept) / (velocityGradient - sideGradient);
      var intersectionY = sideGradient * intersectionX + sideIntercept;

      // if the side gradient is vertical and velocity gradient is not horizontal
      if(Math.abs(sideGradient) > 10000 && Math.abs(velocityGradient) >= 0.0001){ //console.log('%cside vertical', 'font-size: 25px; color: blue;');
        intersectionX = side[0].x;
        intersectionY = velocityGradient * intersectionX + velocityIntercept;

        console.log('side intersectionX', intersectionX);
        console.log('side intersectionY', intersectionY);
      }

      // if the velocity gradient is vertical and side gradient is not horizontal
      if(Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) >= 0.0001){
        intersectionX = collisionPoint.x;
        intersectionY = sideGradient * intersectionX + velocityIntercept;
      }

      // if the side gradient is horizontal and velocity gradient is not vertical
      if(Math.abs(sideGradient) < 0.0001 && Math.abs(velocityGradient) <= 10000){
        intersectionY = side[0].y;
        intersectionX = (intersectionY - velocityIntercept) / velocityGradient;
      }

      // if the velocity gradient is horizontal and side gradient is not vertical
      if(Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) <= 10000){
        intersectionY = collisionPoint.y;
        intersectionX = (intersectionY - sideIntercept) / sideGradient;
        // console.log('velocity intersectionX', intersectionX);
        // console.log('velocity intersectionY', intersectionY);
      }

      // if velocity gradient is horizontal and the side gradient is vertical
      if(Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) > 10000){
        intersectionX = side[0].x;
        intersectionY = collisionPoint.y;
      }

      // if velocity gradient is vertical and the side gradient is horizontal
      if(Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) < 0.0001){
        intersectionX = collisionPoint.x;
        intersectionY = side[0].y;
      }

      // check if intersection point lies on the side being checked
      var sideMinX = Math.min(side[0].x, side[1].x);
      var sideMaxX = Math.max(side[0].x, side[1].x);

      var sideMinY = Math.min(side[0].y, side[1].y);
      var sideMaxY = Math.max(side[0].y, side[1].y);

      if(intersectionX >= sideMinX && intersectionX <= sideMaxX && intersectionY >= sideMinY && intersectionY <= sideMaxY){ console.log('555555555555555555555555555555555555555555555')
        intersections.push({x: intersectionX, y: intersectionY, side: side});
      } else {
        intersections.push({x: collisionPoint.x, y: collisionPoint.y, side: side});
      }


    }
    if(intersections.length > 0){
    var closestPoint = intersections.reduce(function(sum, e, index){
      var closest = {};
      var distance = magnitude({x: e.x - collisionPoint.x, y: e.y - collisionPoint.y});
      if(!sum.min){
        closest = {min: distance, index: index};
      } else if(sum.min > distance){
        closest = {min: distance, index: index};
      } else if(sum.min <= distance){
        closest = {min: sum.min, index: sum.index};
      }
      //console.log('closest', closest);
      return closest;
    }, {min:100000000000, index:0});
    //console.log('closestPoint', intersections[closestPoint.index]);
  }

    //console.log('intersections', intersections);
    //intersections
    var intersectionPoint = intersections.length > 0 ? intersections[closestPoint.index] : {};
    //console.log('intersectionPoint', intersectionPoint);
    console.log('intersectionPoint', intersectionPoint);
    return intersectionPoint;
}
