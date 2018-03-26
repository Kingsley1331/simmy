export default function findVelocities(data, masses, centres, velocities, findImpulse) {
  const impulse = findImpulse(data, masses, centres);

  const unitNormal = data.unitNormal;
  const momentOfInertiaA = masses.momentOfInertiaA;
  const momentOfInertiaB = masses.momentOfInertiaB;
  const massA = masses.massA;
  const massB = masses.massB;

  const velocityA = velocities.velocityA;
  const velocityB = velocities.velocityB;
  const angularVelocityA = velocities.angularVelocityA;
  const angularVelocityB = velocities.angularVelocityB;

  const normalImpulse = unitNormal.scalProd(impulse);
  const collisionDistanceA = data.collisionDistanceA;
  const collisionDistanceB = data.collisionDistanceB;
  const colDistCrossNormalA = collisionDistanceA.crossProd(normalImpulse);
  const colDistCrossNormalB = collisionDistanceB.crossProd(normalImpulse);

  const newVelocityA = {x: velocityA.x + normalImpulse.x / massA, y: velocityA.y + normalImpulse.y / massA};
  const newVelocityB = {x: velocityB.x - normalImpulse.x / massB, y: velocityB.y - normalImpulse.y / massB};

  const newAngularVelocityA = angularVelocityA + colDistCrossNormalA.magnitude / momentOfInertiaA;
  const newAngularVelocityB = angularVelocityB - colDistCrossNormalB.magnitude / momentOfInertiaB;

  return {
    linearA: newVelocityA,
    linearB: newVelocityB,
    angularA: newAngularVelocityA,
    angularB: newAngularVelocityB
  };
}
