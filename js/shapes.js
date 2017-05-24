var shapeSelection = {
  square: [
      {x: -18, y: -18},
      {x: 18, y: -18},
      {x: 18, y: 18},
      {x: -18, y: 18}
    ],
  bar: [
      {x: -18, y: -126},
      {x: 18, y: -126},
      {x: 18, y: 126},
      {x: -18, y: 126}
    ],
  triangle: [
      {x: -40/2, y: Math.sqrt(3)/6 * 40},
      {x: 40/2, y: Math.sqrt(3)/6 * 40},
      {x: 0, y: -2 * Math.sqrt(3)/6 * 40}
    ],
  star: [
      {x: 0, y: -50},
      {x: 19.0983*Math.sin(2*Math.PI*(36/360)), y: -19.0983*Math.cos(2*Math.PI*(36/360))},
      {x: 50*Math.cos(2*Math.PI*(18/360)), y: -50*Math.sin(2*Math.PI*(18/360))},
      {x: 19.0983*Math.cos(2*Math.PI*(18/360)), y: 19.0983*Math.sin(2*Math.PI*(18/360))},
      {x: 50*Math.sin(2*Math.PI*(36/360)), y: 50*Math.cos(2*Math.PI*(36/360))},
      {x: 0, y: 19.0983},
      {x: -50*Math.sin(2*Math.PI*(36/360)), y: 50*Math.cos(2*Math.PI*(36/360))},
      {x: -19.0983*Math.cos(2*Math.PI*(18/360)), y: 19.0983*Math.sin(2*Math.PI*(18/360))},
      {x: -50*Math.cos(2*Math.PI*(18/360)), y: -50*Math.sin(2*Math.PI*(18/360))},
      {x: -19.0983*Math.sin(2*Math.PI*(36/360)), y: -19.0983*Math.cos(2*Math.PI*(36/360))}
    ],
    plus: [
      {x: -6, y: -6},
      {x: -6, y: -30},
      {x: 6, y: -30},
      {x: 6, y: -6},
      {x: 30, y: -6},
      {x: 30, y: 6},
      {x: 6, y: 6},
      {x: 6, y: 30},
      {x: -6, y: 30},
      {x: -6, y: 6},
      {x: -30, y: 6},
      {x: -30, y: -6},
    ],
    tShape: [
      {x: 30, y: -6},
      {x: 30, y: 6},
      {x: 6, y: 6},
      {x: 6, y: 54},
      {x: -6, y: 54},
      {x: -6, y: 6},
      {x: -30, y: 6},
      {x: -30, y: -6},
    ],
    arrow: [
      {x: 30, y: -6},
      {x: 30, y: -18},
      {x: 55, y: 0},
      {x: 30, y: 18},
      {x: 30, y: 6},
      {x: -20, y: 6},
      {x: -20, y: -6},
    ],
    pentagon: [
      {x: 0, y: -22},
      {x: 22*Math.cos(2*Math.PI*(18/360)), y: -22*Math.sin(2*Math.PI*(18/360))},
      {x: 22*Math.sin(2*Math.PI*(36/360)), y: 22*Math.cos(2*Math.PI*(36/360))},
      {x: -22*Math.sin(2*Math.PI*(36/360)), y: 22*Math.cos(2*Math.PI*(36/360))},
      {x: -22*Math.cos(2*Math.PI*(18/360)), y: -22*Math.sin(2*Math.PI*(18/360))}
    ],
    hexagon: [
      {x: 22*Math.sin(2*Math.PI*(30/360)), y: -22*Math.cos(2*Math.PI*(30/360))},
      {x: 22, y: 0},
      {x: 22*Math.sin(2*Math.PI*(30/360)), y: 22*Math.cos(2*Math.PI*(30/360))},
      {x: -22*Math.sin(2*Math.PI*(30/360)), y: 22*Math.cos(2*Math.PI*(30/360))},
      {x: -22, y: 0},
      {x: -22*Math.sin(2*Math.PI*(30/360)), y: -22*Math.cos(2*Math.PI*(30/360))}
    ],
    concave: [
      {x: -18, y: 54},
      {x: -18, y: 90},
      {x: -90, y: 90},
      {x: -90, y: -90},
      {x: 90, y: -90},
      {x: 90, y: 90},
      {x: 18, y: 90},
      {x: 18, y: 54},
      {x: 54, y: 54},
      {x: 54, y: -54},
      {x: -54, y: -54},
      {x: -54, y: 54}
    ],
    box: [
      {x: 0, y: 54},
      {x: 0, y: 90},
      {x: -90, y: 90},
      {x: -90, y: -90},
      {x: 90, y: -90},
      {x: 90, y: 90},
      {x: 0, y: 90},
      {x: 0, y: 54},
      {x: 54, y: 54},
      {x: 54, y: -54},
      {x: -54, y: -54},
      {x: -54, y: 54}
    ]
};

function circleMaker(radius, n) {
  var circle = [];
  var angle = 2*Math.PI/n;
  for(var i = 0; i < n; i++){
    var point = {};
    point.x = radius*Math.sin(i*angle);
    point.y = radius*Math.cos(i*angle);
    circle.push(point);
  }
  return circle;
}

var circle = circleMaker(20, 30);
shapeSelection.circle = circle;


function findBoundingRect(vertices){
  var boundingRect = {};
  var maxX = vertices[0].x;
  var minX = vertices[0].x;
  var maxY = vertices[0].y;
  var minY = vertices[0].y;
  var length = vertices.length;
  for(var i = 0; i < length; i++){
    if(maxX < vertices[i].x){
      maxX = vertices[i].x
    }
    if(minX > vertices[i].x){
      minX = vertices[i].x
    }
    if(maxY < vertices[i].y){
      maxY = vertices[i].y
    }
    if(minY > vertices[i].y){
      minY = vertices[i].y
    }
  }
  boundingRect = {
    minX: minX,
    maxX: maxX,
    minY: minY,
    maxY: maxY,
    centre: {
      x: (minX + maxX)/2,
      y: (minY + maxY)/2
    },
    vertices: [
      {x: minX, y: minY},
      {x: maxX, y: minY},
      {x: maxX, y: maxY},
      {x: minX, y: maxY}
    ]
  };
  return boundingRect;
};

function findMass(centre, vertices, boundingRect){
  var accuracy = 100;
  var resolution = {x: 1, y: 1};
  var mass = 0;
  var count = 0;
  var centreOfMass = {x: 0, y: 0};
  var massDistances = {x: 0, y: 0};
  var momentOfInertia = 0;
  var width = boundingRect.maxX - boundingRect.minX;
  var height = boundingRect.maxY - boundingRect.minY;
  // resolution.x = width < accuracy ? 1 : Math.round(width / accuracy);
  // resolution.y = height < accuracy ? 1 : Math.round(height / accuracy);
  var startPoint = {x: boundingRect.minX, y: boundingRect.minY};
  var checkPoint = {};
  for(var i = 0; i < width; i += resolution.x){
    for(var j = 0; j < height; j += resolution.y){
      checkPoint.x = startPoint.x + i;
      checkPoint.y = startPoint.y + j;
      var pointInShape = isPointInShape({x: 0, y: 0}, vertices, checkPoint);
      if(pointInShape){
        mass += resolution.x * resolution.y;
        //mass += 1;
        count += 1;
        //momentOfInertia = (resolution.x * resolution.y) * Math.pow(magnitude(checkPoint), 2);
        massDistances.x += checkPoint.x;
        massDistances.y += checkPoint.y;
      }
    }
  }
  centreOfMass.x = (massDistances.x / count) + centre.x;
  centreOfMass.y = (massDistances.y / count) + centre.y;
  //console.log({mass: mass, centreOfMass: centreOfMass});
  return {mass: mass, centreOfMass: centreOfMass};
}

function updateVertices(vertices, centre, centreOfMass){
  var length = vertices.length;
  var diff = {x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y};
  for(var i = 0; i < length; i++){
    vertices[i].x -= diff.x;
    vertices[i].y -= diff.y;
  }
  return vertices;
}

function findMomentOfInertiaCM(centreOfMass, vertices, boundingRect){
  var accuracy = 100;
  var resolution = {x: 1, y: 1};
  var momentOfInertia = 0;
  var width = boundingRect.maxX - boundingRect.minX;
  var height = boundingRect.maxY - boundingRect.minY;
  // resolution.x = width < accuracy ? 1 : Math.round(width / accuracy);
  // resolution.y = height < accuracy ? 1 : Math.round(height / accuracy);
  var startPoint = {x: boundingRect.minX, y: boundingRect.minY};
  var checkPoint = {};
  for(var i = 0; i < width; i += resolution.x){
    for(var j = 0; j < height; j += resolution.y){
      checkPoint.x = startPoint.x + i;
      checkPoint.y = startPoint.y + j;
      var pointInShape = isPointInShape({x: 0, y: 0}, vertices, checkPoint);
      if(pointInShape){
        momentOfInertia += (resolution.x * resolution.y) * Math.pow(magnitude(checkPoint), 2);
      }
    }
  }
  console.log('momentOfInertia', momentOfInertia);
  return momentOfInertia;
}

function findMomentOfInertia(pointInShape, momentOfInertiaCM, mass){
  var momentOfInertia = momentOfInertiaCM + mass * Math.pow(magnitude(pointInShape), 2);
  console.log('PAT momentOfInertia', momentOfInertia);
  return momentOfInertia;
}

function reCentre(shapes){
  for(var shape in shapes){
    var centre = {x: 0, y: 0}
    var vertices = shapes[shape];
    var boundingRect = findBoundingRect(vertices);
    var mass = findMass(centre, vertices, boundingRect);
    var centreOfMass = mass.centreOfMass;
    vertices = updateVertices(vertices, centre, centreOfMass);
    shapes[shape] = vertices;
  }
}

function isPointInShape(centreOfMass, vertices, point){
  var x0 = centreOfMass.x + vertices[0].x;
  var y0 = centreOfMass.y + vertices[0].y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for(var m = 1; m < vertices.length; m++){
    var x = centreOfMass.x + vertices[m].x;
    var y = centreOfMass.y + vertices[m].y;
    bufferCtx.lineTo(x, y);
  }

  if(bufferCtx.isPointInPath(point.x, point.y)){
      return true;
  } else {
      return false;
  }
}

reCentre(shapeSelection);
