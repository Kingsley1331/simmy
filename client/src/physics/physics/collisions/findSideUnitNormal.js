import Vector, { magnitude, rotateVector } from '../../utils/maths/Vector';

export default function findSideUnitNormal(collidingSideVector, referenceSideVector, referenceVector){//console.log('referenceSideVector', referenceSideVector);
  collidingSideVector = new Vector(collidingSideVector);
  referenceVector = new Vector(referenceVector);
  var angle = referenceSideVector.findAngle(collidingSideVector);
  var unitNormal = rotateVector(angle, referenceVector);
  // console.log('================================>angle', angle);
  // console.log('================================>collidingSideVector', collidingSideVector);
  // console.log('================================>referenceSideVector', referenceSideVector);
  // console.log('================================>unitNormal', unitNormal);
  return unitNormal;
}
