import Scene from '../../scenes/scene';

export default function findImpulse(data, masses, centres){
  console.log('data', data);
  console.log('masses', masses);
  console.log('centres', centres);
  // var data = {
  //   collisionPoint: {x:collidingSideData.x, y:collidingSideData.y},
  //   side: collidingSideData.side,
  //   sideVector: collidingSideVector,
  //   unitNormal: unitNormalB,
  //   velocityA: collisionPointVelocityA,
  //   velocityB: collisionPointVelocityB
  // }
  var collisionPoint = data.collisionPoint;
  var collisionPointVelocityA = data.velocityA;
  var collisionPointVelocityB = data.velocityB;

  // var collisionDistanceA = new Vector({x: collisionPoint.x - centres.centreA.x, y: collisionPoint.y - centres.centreA.y});
  // var collisionDistanceB = new Vector({x: collisionPoint.x - centres.centreB.x, y: collisionPoint.y - centres.centreB.y});
  var collisionDistanceA = data.collisionDistanceA;
  var collisionDistanceB = data.collisionDistanceB;

  var massA = masses.massA;
  var massB = masses.massB;
  var momentOfInertiaA = masses.momentOfInertiaA;
  var momentOfInertiaB = masses.momentOfInertiaB;
  var unitNormal = data.unitNormal;
  var collisionVelocity = data.collisionVelocity;

  var collisionVelocityNormalDotProduct = collisionVelocity.dotProd(unitNormal);
  var collisionDistanceNormalCrossProductA = collisionDistanceA.crossProd(unitNormal);
  var collisionDistanceNormalCrossProductB = collisionDistanceB.crossProd(unitNormal);
  var collisionDistSquareA = collisionDistanceNormalCrossProductA.square();
  var collisionDistSquareB = collisionDistanceNormalCrossProductB.square();
  var e = Scene.settings.restitution;

  // console.log('============================>collisionVelocityNormalDotProduct', collisionVelocityNormalDotProduct);
  // console.log('============================>collisionDistanceNormalCrossProductA', collisionDistanceNormalCrossProductA);
  // console.log('============================>collisionDistanceNormalCrossProductB', collisionDistanceNormalCrossProductB);
  // console.log('============================>collisionDistSquareA', collisionDistSquareA);
  // console.log('============================>collisionDistSquareB', collisionDistSquareB);
  // console.log('============================>e', e);

  //  console.log('============================>massA', massA);
  //  console.log('============================>massB', massB);
  //  console.log('============================>unitNormal', unitNormal);
  //  console.log('============================>collisionDistanceA', collisionDistanceA);
  //  console.log('============================>collisionDistanceNormalCrossProductA', collisionDistanceNormalCrossProductA);
  //  console.log('============================>collisionDistSquareA', collisionDistSquareA);
  //  console.log('============================>collisionDistSquareB', collisionDistSquareB);
  //  console.log('============================>momentOfInertiaA', momentOfInertiaA);
  //  console.log('============================>momentOfInertiaB', momentOfInertiaB);

  var impulse = -(1 + e) * collisionVelocityNormalDotProduct / (1/massA + 1/massB + collisionDistSquareA/momentOfInertiaA + collisionDistSquareB/momentOfInertiaB);
  // console.log('============================>-(1 + e) * collisionVelocityNormalDotProduct', -(1 + e) * collisionVelocityNormalDotProduct);
  console.log('============================>impulse', impulse);
  return impulse;
}
