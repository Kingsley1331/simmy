export default function findBoundingRect(vertices) {
  var boundingRect = {};
  var maxX = vertices[0].x;
  var minX = vertices[0].x;
  var maxY = vertices[0].y;
  var minY = vertices[0].y;
  var length = vertices.length;
  for (var i = 0; i < length; i++) {
    if (maxX < vertices[i].x) {
      maxX = vertices[i].x;
    }
    if (minX > vertices[i].x) {
      minX = vertices[i].x;
    }
    if (maxY < vertices[i].y) {
      maxY = vertices[i].y;
    }
    if (minY > vertices[i].y) {
      minY = vertices[i].y;
    }
  }
  boundingRect = {
    minX: minX,
    maxX: maxX,
    minY: minY,
    maxY: maxY,
    centre: {
      x: (minX + maxX) / 2,
      y: (minY + maxY) / 2
    },
    vertices: [
      { x: minX, y: minY },
      { x: maxX, y: minY },
      { x: maxX, y: maxY },
      { x: minX, y: maxY }
    ]
  };
  return boundingRect;
}
