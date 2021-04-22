// finds the equation of a line segment 'side' in the form of y = mx + c
export default function lineFormula(side) {
  const gradient = (side[1].y - side[0].y) / (side[1].x - side[0].x);
  const intercept = side[0].y - gradient * side[0].x;
  return { gradient: gradient, intercept: intercept };
}
