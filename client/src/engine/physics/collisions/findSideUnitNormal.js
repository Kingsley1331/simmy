import Vector, { magnitude, rotateVector } from "../../utils/maths/Vector";

export default function findSideUnitNormal(
  collidingSideVector,
  referenceSideVector,
  referenceVector
) {
  collidingSideVector = new Vector(collidingSideVector);
  referenceVector = new Vector(referenceVector);
  const angle = referenceSideVector.findAngle(collidingSideVector);
  const unitNormal = rotateVector(angle, referenceVector);
  return unitNormal;
}
