console.log('hello simmy!');
var velFactor = 0.1;
var time = 0;
var id = 0;
var onShape = false;
var hoveringOnShape = 0;
var selectedShape = false;
var throwArray = [];
var Scene = {
  backgroundColour: '#E0E0E0',
  shapes: []
};

function Shape(centre, vertices){
  var boundingRect = findBoundingRect(vertices);
  var massData = findMass(centre, vertices, boundingRect);
  var centreOfMass = massData.centreOfMass;
  var momentOfInertiaCOM = findMomentOfInertiaCOM(centreOfMass, vertices, boundingRect);
  var references = referenceVectors(centre, vertices)
  this.id;
  this.fillColour = '#6495ED';
  this.lineColour = 'black';
  this.linewidth = 0.7;
  this.centreOfMass = centreOfMass;
  this.centreOfRotation = centreOfMass;
  this.vertices = vertices;
  this.colliding = false;
  this.physics = {
    density: 1,
    mass: massData.mass,
    momentOfInertiaCOM: momentOfInertiaCOM,
    velocity: {x:0, y:0},
    acceleration: {x:0, y:0},
    angularVelocity: 0,
    angularAcceleration: 0,
    forcesCOM: [{x:0, y:0}],
    torque: 0
  };
  this.onShape = false;
	this.dragging = false;
	this.selected = false;
  this.touchPoint = [];
  this.display = [];
  this.boundingRect = boundingRect;
  var boundingRectCentre = {x: this.boundingRect.centre.x, y: this.boundingRect.centre.y};
  var radius = magnitude({x: boundingRectCentre.x - this.boundingRect.vertices[0].x, y: boundingRectCentre.y - this.boundingRect.vertices[0].y});
  this.boundingRect.radius = radius;
  this.collisionData = {};
  this.referenceVectors = references;
}

function referenceVectors(centre, vertices){
  var firstPoint = {x: vertices[0].x, y: vertices[0].y};
  var secondPoint = {x: vertices[1].x, y: vertices[1].y};
  //turn the first side into a vector pointing away from the first point
  var firstSideVector = new Vector({x: secondPoint.x - firstPoint.x, y: secondPoint.y - firstPoint.y});
  var sideLength = firstSideVector.magnitude;
  var angle = Math.PI / 2;
  var normalVector = rotateVector(angle, firstSideVector);
  var unitNormal = {x: normalVector.x / sideLength, y: normalVector.y / sideLength};
  //var location = {x: centre.x + firstPoint.x + firstSideVector.x/2, y: centre.y + firstPoint.y + firstSideVector.y/2};
  var location = {x: firstPoint.x + firstSideVector.x/2, y: firstPoint.y + firstSideVector.y/2};
  //var point = {x: location.x + unitNormal.x, y: location.y + unitNormal.y};
  var point = {x:centre.x + location.x + unitNormal.x, y: centre.y + location.y + unitNormal.y}
  var pointInShape = isPointInShape(centre, vertices, point);
  if(pointInShape){
    unitNormal = {x: -unitNormal.x, y: -unitNormal.y};
  }
  return {location: location, sideVector: firstSideVector, unitNormal: unitNormal};
}

function findSideUnitNormal(collidingSideVector, referenceSideVector, referenceVector){console.log('referenceSideVector', referenceSideVector);
  collidingSideVector = new Vector(collidingSideVector);
  referenceVector = new Vector(referenceVector);
  var angle = referenceSideVector.findAngle(collidingSideVector);
  var unitNormal = rotateVector(angle, referenceVector);
  return unitNormal;
}

function createShape(centreOfMass, vertices){
  forEachShape(function(i){
      detectShape(i);
  }, true);
  if(hoveringOnShape <= 0){ // if not hovering on shape
    id++;
    var shape = new Shape(centreOfMass, vertices);
    shape.id = id;
    console.log('boundingRect.radius', shape.boundingRect.radius);
    Scene.shapes.push(shape);
    return shape;
  }
}

//function draw(){
let draw = () => {
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  forEachShape(function(i){
      var onShape = ShapesController.getProperty(i, 'onShape');
      //bufferCtx.save();
      if(onShape){
        var shadowColor = shadowColor = 'rgba( 9, 9, 9, 0.3)';
        var shadowOffsetX = shadowOffsetX = 10;
        var shadowOffsetY = shadowOffsetY = 10;
        var shadowBlur = shadowBlur = 10;
      }

      var fillColour = ShapesController.getProperty(i, 'fillColour');
      var lineWidth = ShapesController.getProperty(i, 'linewidth');
      var centreOfMass = ShapesController.getCentreOfMass(i);

      var vertices = ShapesController.getVertices(i);
      var config = {
        shadowColor: shadowColor,
        shadowOffsetX: shadowOffsetX,
        shadowOffsetY: shadowOffsetY,
        shadowBlur: shadowBlur,
        fillStyle: fillColour,
        lineWidth: lineWidth
      };
      if(ShapesController.getProperty(i, 'colliding')){
        //config.lineWidth = 10;
      }
      var boundingRect = ShapesController.getProperty(i, 'boundingRect');
      var boundingRectCentre = {x: boundingRect.centre.x + centreOfMass.x, y: boundingRect.centre.y + centreOfMass.y};
      var rectVertices = boundingRect.vertices;
      var centreOfRotation = ShapesController.getProperty(i, 'centreOfRotation');
      var collisionDataB = ShapesController.getProperty(i, 'collisionData');
      var velocityA = collisionDataB.velocityA;
      var velocityB = collisionDataB.velocityB;
      var referenceVectors = ShapesController.getProperty(i, 'referenceVectors');
      // Reference Vectors
      var referenceUnitNormal = referenceVectors.unitNormal;
      var referenceSideVector = referenceVectors.sideVector;
      //var referenceLocation = referenceVectors.location;
      var referenceLocation = {x:referenceVectors.location.x + centreOfMass.x, y:referenceVectors.location.y + centreOfMass.y};

      var unitNormal = collisionDataB.unitNormal;
      var sideVector = collisionDataB.sideVector;
      var collisionPoint = collisionDataB.collisionPoint;
      var arrowHead = shapes.arrowHead;
      //console.log('****collisionDataB*****', collisionDataB);

      var radius = boundingRect.radius;
      var idPos = {x: centreOfMass.x - 4, y: centreOfMass.y - 5};
      drawShape(vertices, centreOfMass, config);
      if(settings.display){
        screenWriter(ShapesController.getProperty(i, 'id'), idPos);
        drawShape(rectVertices, centreOfMass, {lineWidth: 0.5, fillStyle: 'transparent'});
        drawDot(3, centreOfMass, 'black');
        drawDot(3, boundingRectCentre, 'red');
        drawDot(3, centreOfRotation, 'green');
        if(collisionDataB.collisionPoint){
          drawDot(4, {x: collisionDataB.collisionPoint.x, y:collisionDataB.collisionPoint.y}, 'red');
          drawLine(collisionDataB.side[0], collisionDataB.side[1], {strokeStyle: 'red', lineWidth: 2});
        }

        if(unitNormal){
          unitNormal = unitNormal.scalProd(50);
          drawArrow(arrowHead, [{x: collisionDataB.side[0].x + sideVector.x/2, y: collisionDataB.side[0].y + sideVector.y/2}, unitNormal], {fillStyle: 'purple', strokeStyle: 'purple'}, 30);
          drawArrow(arrowHead, [collisionDataB.side[0], sideVector], {fillStyle: 'blue', strokeStyle: 'blue'});
          drawArrow(arrowHead, [{x: vertices[0].x + centreOfMass.x, y: vertices[0].y + centreOfMass.y}, referenceSideVector], {fillStyle: 'red', strokeStyle: 'red'});
          drawArrow(arrowHead, [referenceLocation, referenceUnitNormal], {fillStyle: 'black', strokeStyle: 'black'}, 30);
          drawArrow(arrowHead, [collisionPoint, velocityA], {fillStyle: 'blue', strokeStyle: 'blue'}, 30);
          drawArrow(arrowHead, [collisionPoint, velocityB], {fillStyle: 'green', strokeStyle: 'green'}, 60);
        }
        bufferCtx.save();
        bufferCtx.beginPath();
        bufferCtx.arc(boundingRectCentre.x, boundingRectCentre.y, radius, 0, 2*Math.PI);
        bufferCtx.stroke();
        bufferCtx.restore();
      }
  });
  if(shapeSelection[selectedShape] && hoveringOnShape <= 0){ // (hoveringOnShape <= 0) means not hovering on shape
    drawShape(shapeSelection[selectedShape], mousePos, {
      globalAlpha: 0.15,
      fillStyle: 'blue',
      lineWidth: 0.000001
    });
  }
  screenWriter('x:' + Math.round(mousePos.x) + ',  ' + 'y:' + Math.round(mousePos.y), {x:10, y:20});

  context.drawImage(bufferCanvas,0,0, canvas.width, canvas.height);
}

function drawLine(start, end, config){
  bufferCtx.save();
  // bufferCtx.strokeStyle = 'red';
  // bufferCtx.lineWidth = 2;
  for(var prop in config){
    bufferCtx[prop] = config[prop];
  }
  bufferCtx.beginPath();
  bufferCtx.moveTo(start.x, start.y);
  bufferCtx.lineTo(end.x, end.y);
  bufferCtx.stroke();
  bufferCtx.restore();
}

function drawArrow(head, shaft, config, length){
  var start = shaft[0];
  var end = {x: shaft[0].x + shaft[1].x, y: shaft[0].y + shaft[1].y};
  // var vector = shaft[1];
  // var shaftVector = new Vector({x: vector.x - start.x, y: vector.y - start.y});
  var shaftVector = new Vector({x: shaft[1].x, y: shaft[1].y});

  var magnitude = shaftVector.magnitude;
  if(length){
    var scale = length / magnitude;
    shaftVector = shaftVector.scalProd(scale);
    end = {x: shaft[0].x + shaftVector.x, y: shaft[0].y + shaftVector.y};
  }
  var referenceVector = new Vector({x: 0, y: 1});
  //var angle = shaftVector.findAngle(referenceVector);
  var angle = referenceVector.findAngle(shaftVector);
  var rotatedHead = rotateShape(end, angle, head);

  drawShape(rotatedHead, end, config);

  drawLine(start, end, config);
}

function screenWriter(text, position){
  bufferCtx.save();
  bufferCtx.fillStyle = 'black';
  bufferCtx.font = "15px Arial";
  bufferCtx.fillText(text,position.x, position.y);
  bufferCtx.restore();
}

function drawShape(vertices, centreOfMass, config){
  var num = vertices.length;
  var x0 = vertices[0].x + centreOfMass.x;
  var y0 = vertices[0].y + centreOfMass.y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for(var j = 1; j < num; j++){
    var x = vertices[j].x + centreOfMass.x;
    var y = vertices[j].y + centreOfMass.y;
    bufferCtx.lineTo(x, y);
  }
    bufferCtx.save();
    for(var prop in config){
      bufferCtx[prop] = config[prop];
    }
    bufferCtx.closePath();
    bufferCtx.stroke();
    bufferCtx.fill();
    bufferCtx.restore();
}

function drawDot(radius, centre, colour){
  bufferCtx.save();
  bufferCtx.fillStyle = colour;
  bufferCtx.beginPath();
  bufferCtx.arc(centre.x, centre.y, radius, 0, 2*Math.PI);
  bufferCtx.fill();
  //bufferCtx.stroke();
  bufferCtx.restore();
}


function flicker(){
  setInterval(draw, 17);
}

flicker();

window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

function animate(){
  var date = new Date()
  var currentTime = date.getTime();
  var tDelta = (currentTime - time);
  forEachShape(function(i){
    applyPhysics(i, tDelta);
    applyForces(i);
  });
  collisionDetector();
	draw();
	requestAnimFrame(function() {
			animate();
	});
  time = currentTime;
}

  function mouseMove(){
  	canvas.addEventListener('mousemove', function(evt){
  	  mousePos = getMousePos(evt, canvas);
      hoveringOnShape = 0;
      if(selectedShape === 'play'){
        makeThrowArray();
      }
      forEachShape(function(i){
          detectShape(i);
      }, true);
      if(hoveringOnShape > 0){
        onShape = false;
      }
    });
  }

function mouseDown(){
  canvas.addEventListener('mousedown', function(evt){
    throwArray = [];
    forEachShape(function(i){
      prepareToMoveShape(i);
      if(selectedShape === '_delete'){
        deleteShape(i);
      }
    });
    if(selectedShape && selectedShape !== '_delete' && selectedShape !== 'play'){
      createShape(mousePos, shapeSelection[selectedShape]);
    }
  }, false);
}

function mouseUp(){
  canvas.addEventListener('mouseup', function(evt){
    forEachShape(function(i){
      releaseShape(i);
    });
    throwArray = [];
  }, false);
}

function detectShape(i){
    ShapesController.setProperty(i, 'onShape', false);
    var centreOfMass = ShapesController.getCentreOfMass(i);
    var vertices = ShapesController.getVertices(i);
    var pointInShape = isPointInShape(centreOfMass, vertices, mousePos);
    if(pointInShape){
      hoveringOnShape++;
      if(!onShape){
        ShapesController.setProperty(i, 'onShape', true);
        onShape = true;
      }
      if(ShapesController.getProperty(i, 'onShape')){
        ShapesController.setProperty(i, 'onShape', true);
      } else {
        ShapesController.setProperty(i, 'onShape', false);
      }
    } else {
      ShapesController.setProperty(i, 'onShape', false);
    }
    if(ShapesController.getProperty(i, 'dragging')){
      dragShape(i);
    }
}

function prepareToMoveShape(i){
  if(ShapesController.getProperty(i, 'onShape')){
    if(selectedShape === 'play'){
      ShapesController.setProperty(i, 'velocity', {x: 0, y: 0}, true);
    }
    var centreOfMass = ShapesController.getCentreOfMass(i);
    ShapesController.setProperty(i, 'dragging', true);
    var distanceX = mousePos.x - centreOfMass.x;
    var distanceY = mousePos.y - centreOfMass.y;
    ShapesController.setProperty(i, 'touchPoint', {x: distanceX, y: distanceY});
    var x = document.getElementsByClassName("dg");
    if(gui){
      gui.destroy();
    }
    addGui(i);
  }
}

function releaseShape(i){
    var velocity = throwVelocity();
    if(throwArray.length > 0 && ShapesController.getProperty(i, 'dragging')){
      ShapesController.setProperty(i, 'velocity', {x: velocity.x, y: velocity.y}, true);
    }
    ShapesController.setProperty(i, 'dragging', false);
    ShapesController.setProperty(i, 'selected', false);
}

function deleteShape(i){
  if(selectedShape === '_delete'){
    if(ShapesController.getProperty(i, 'onShape')){
      ShapesController.deleteShape(i);
    }
  }
}

function dragShape(i){
  var touchPoint = ShapesController.getTouchPoint(i);
  var centre = {
    x: mousePos.x - touchPoint.x,
    y: mousePos.y - touchPoint.y
  };
  ShapesController.setProperty(i, 'centreOfMass', centre);
  ShapesController.setProperty(i, 'centreOfRotation', centre);
}

function init(){
  flicker();
  animate();
  mouseDown();
  mouseUp();
  mouseMove();
}

init();

function forEachShape(callback, bool){
  var shapes = Scene.shapes;
  var length = shapes.length;
  if(!bool){
    for(var i = 0; i < length; i++){
      var shape = shapes[i];
      if(shape){
        callback(i);
      }
    }
  } else if(bool) {
    for(var i = length-1; i >= 0; i--){
      var shape = shapes[i];
      if(shape){
        callback(i);
      }
    }
  }
}

function makeThrowArray(){
  var length = throwArray.length;
  var arraySize = 5
  if(length >= arraySize){
    throwArray = throwArray.splice(length - arraySize);
  }
  throwArray.push({x: mousePos.x, y: mousePos.y});
}

function throwVelocity(){
  var velocityArray = [];
  var velocity = {x: 0, y: 0};
  var length = throwArray.length;
  for(var i = 1; i < length; i++){
    velocityArray.push({x: throwArray[i].x - throwArray[i-1].x, y: throwArray[i].y - throwArray[i-1].y});
  }
  var length2 = velocityArray.length;
  for(var j = 0; j < length2; j++){
    velocity.x += velocityArray[j].x;
    velocity.y += velocityArray[j].y;
  }
  if(length2 > 0){
    velocity.x /= length2*5;
    velocity.y /= length2*5;
  }
  return {x: velocity.x, y: velocity.y};
}

function applyPhysics(i, tDelta){
  if(selectedShape === 'play'){
    var acceleration = ShapesController.getProperty(i, 'acceleration', true);
    var angularAcceleration = ShapesController.getProperty(i, 'angularAcceleration', true);
    var velocity = ShapesController.getProperty(i, 'velocity', true);
    var angularVelocity = ShapesController.getProperty(i, 'angularVelocity', true);
    //var centreOfMass = ShapesController.getProperty(i, 'centreOfMass');
    var centreOfMass = ShapesController.getCentreOfMass(i);
    var centreOfRotation = ShapesController.getProperty(i, 'centreOfRotation');
    var referenceVectors = ShapesController.getProperty(i, 'referenceVectors');
    var location = referenceVectors.location;

    velocity.x += acceleration.x * velFactor;
    velocity.y += acceleration.y * velFactor;
    location.x += acceleration.x;
    location.y += acceleration.y;
    angularVelocity += angularAcceleration;
    //var centreOfMass = ShapesController.getCentreOfMass(i);

    centreOfMass.x += velocity.x * tDelta;
    centreOfMass.y += velocity.y * tDelta;
    ShapesController.setProperty(i, 'angularVelocity', angularVelocity, true);
    ShapesController.setProperty(i, 'centreOfMass', centreOfMass);
    ShapesController.setProperty(i, 'centreOfRotation', centreOfMass);
    ShapesController.setProperty(i, 'velocity', velocity);
    //ShapesController.getProperty(i, 'referenceVectors');

    rotateShape(centreOfRotation, angularVelocity, i);
    //rotateShape(centreOfMass, angularVelocity, i);
  }
}

function applyForces(i){
  var acceleration = {};
  var angularAcceleration;
  // simplified implementation which assumes there is only one force at the centre of mass, torque is assumed to be also around the centre of mass
  var forcesCOM = ShapesController.getProperty(i, 'forcesCOM', true);
  var mass = ShapesController.getProperty(i, 'mass', true);
  var torque = ShapesController.getProperty(i, 'torque', true);
  var momentOfInertiaCOM = ShapesController.getProperty(i, 'momentOfInertiaCOM', true);
  acceleration.x = forcesCOM[0].x / mass;
  acceleration.y = forcesCOM[0].y / mass;
  angularAcceleration = torque / momentOfInertiaCOM;
  //console.log('angularAcceleration', angularAcceleration);
  ShapesController.setProperty(i, 'acceleration', acceleration, true);
  ShapesController.setProperty(i, 'angularAcceleration', angularAcceleration, true);
}

function collisionDetector(){
  var shapes = Scene.shapes;
  var numShapes = shapes.length;
  forEachShape(function(i){
      ShapesController.setProperty(i, 'colliding', false);
  });
  forEachShape(function(i){
    if(selectedShape === 'play'){
    var verticesA = ShapesController.getVertices(i); //ShapeA
    var centreOfMassA = ShapesController.getCentreOfMass(i);
    var length = verticesA.length;
    for(var j = 0; j < length; j++){
        var checkPoint = {};
        checkPoint.x = verticesA[j].x + centreOfMassA.x;
        checkPoint.y = verticesA[j].y + centreOfMassA.y;
        for(var k = 0; k < numShapes; k++){
          if(i!== k){
          var shape = shapes[k].vertices; //shapeB
          var shapeVertices = ShapesController.getProperty(k, 'vertices');
          var centreOfMassB = ShapesController.getProperty(k, 'centreOfMass');

          var pointInShape = isPointInShape(centreOfMassB, shapeVertices, checkPoint);
          if(pointInShape){
            // ShapesController.setProperty(i, 'colliding', true);
            // ShapesController.setProperty(k, 'colliding', true);

            var velocityA = ShapesController.getProperty(i, 'velocity', true);
            var velocityB = ShapesController.getProperty(k, 'velocity', true);

            var angularVelocityA = ShapesController.getProperty(i, 'angularVelocity', true);
            var angularVelocityB = ShapesController.getProperty(k, 'angularVelocity', true);

            var centreOfRotationA = ShapesController.getProperty(i, 'centreOfRotation');
            var centreOfRotationB = ShapesController.getProperty(k, 'centreOfRotation');

            var data = collisionData(i, k, checkPoint, shape);
            ShapesController.setProperty(k,'collisionData', data);
            shape = Scene.shapes[k];
            var massA = ShapesController.getProperty(i, 'mass', true);
            var massB = ShapesController.getProperty(k, 'mass', true);

            var momentOfInertiaA = ShapesController.getProperty(i, 'momentOfInertiaCOM', true);
            var momentOfInertiaB = ShapesController.getProperty(k, 'momentOfInertiaCOM', true);
            var unitNormal = data.unitNormal;
            var masses = {massA: massA, massB: massB, momentOfInertiaA: momentOfInertiaA, momentOfInertiaB: momentOfInertiaB};
            var centres = {centreA: centreOfMassA, centreB: centreOfMassB};

            var impulse = findImpulse(data, masses, centres);
            /** start temporary dummy collision handling **/
            // ShapesController.setProperty(i, 'velocity', {x: -velocityA.x, y: -velocityA.y}, true);
            // ShapesController.setProperty(k, 'velocity', {x: -velocityB.x, y: -velocityB.y}, true);
            /** end temporary dummy collision handling **/
            var normalImpulse = unitNormal.scalProd(impulse);
            var collisionDistanceA = data.collisionDistanceA;
            var collisionDistanceB = data.collisionDistanceB;
            var colDistCrossNormalA = collisionDistanceA.crossProd(normalImpulse);
            var colDistCrossNormalB = collisionDistanceB.crossProd(normalImpulse);

            var newVelocityA = {x: velocityA.x + normalImpulse.x/massA, y: velocityA.y + normalImpulse.y/massA};
            var newVelocityB = {x: velocityB.x - normalImpulse.x/massB, y: velocityB.y - normalImpulse.y/massB};

            var newAngularVelocityA = angularVelocityA + colDistCrossNormalA.magnitude/momentOfInertiaA;
            var newAngularVelocityB = angularVelocityB - colDistCrossNormalB.magnitude/momentOfInertiaB;
            var isColliding = ShapesController.getProperty(i, 'colliding');
            var isPointColliding = verticesA[j].isColliding;
            //if(isColliding === false){
            if(!isPointColliding){
              verticesA[j].isColliding = true;
              ShapesController.setProperty(i, 'velocity', newVelocityA, true);
              ShapesController.setProperty(i, 'angularVelocity', newAngularVelocityA, true);

              ShapesController.setProperty(k, 'velocity', newVelocityB, true);
              ShapesController.setProperty(k, 'angularVelocity', newAngularVelocityB, true);
              ShapesController.setProperty(i, 'colliding', true);
              ShapesController.setProperty(k, 'colliding', true);
              velocityA = ShapesController.getProperty(i, 'velocity', true);
              velocityB = ShapesController.getProperty(k, 'velocity', true);
              console.log('================newVelocityA', newVelocityA);
            }
            console.log('=============impulse', impulse);
            //console.log('=============collisionData', data);
            console.log('=============velocityDeltaA', normalImpulse.x/massA);
            console.log('=============velocityDeltaB', -normalImpulse.x/massB);
            console.log('=============massA', massA);
            console.log('=============massB', massB);
            console.log('=============velocityA', velocityA);
            console.log('=============velocityB', velocityB);
            console.log('=============centreOfRotationA', centreOfRotationA);
            console.log('=============centreOfRotationB', centreOfRotationB);
          }
        }
      }
    }
  }
  });
}

function findImpulse(data, masses, centres){
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
  var e = settings.restitution;

  // console.log('============================>collisionVelocityNormalDotProduct', collisionVelocityNormalDotProduct);
  // console.log('============================>collisionDistanceNormalCrossProductA', collisionDistanceNormalCrossProductA);
  // console.log('============================>collisionDistanceNormalCrossProductB', collisionDistanceNormalCrossProductB);
  // console.log('============================>collisionDistSquareA', collisionDistSquareA);
  // console.log('============================>collisionDistSquareB', collisionDistSquareB);

  //  console.log('============================>massA', massA);
  //  console.log('============================>massB', massB);
  //  console.log('============================>collisionDistSquareA', collisionDistSquareA);
  //  console.log('============================>collisionDistSquareB', collisionDistSquareB);
  //  console.log('============================>momentOfInertiaA', momentOfInertiaA);
  //  console.log('============================>momentOfInertiaB', momentOfInertiaB);

  var impulse = -(1 + e) * collisionVelocityNormalDotProduct / (1/massA + 1/massB + collisionDistSquareA/momentOfInertiaA + collisionDistSquareB/momentOfInertiaB);
  console.log('============================>impulse', impulse);
  return impulse;
}

function collisionData(shapeAIndex, shapeBIndex, collisionPoint, shapeBVertices){

  var referenceVectors = ShapesController.getProperty(shapeBIndex, 'referenceVectors');
  var referenceSideVector = referenceVectors.sideVector;

  var velocityA = ShapesController.getProperty(shapeAIndex, 'velocity', true);
  var velocityB = ShapesController.getProperty(shapeBIndex, 'velocity', true);

  var angularVelocityA = ShapesController.getProperty(shapeAIndex, 'angularVelocity', true);
  var angularVelocityB = ShapesController.getProperty(shapeBIndex, 'angularVelocity', true);

  var massA = ShapesController.getProperty(shapeAIndex, 'mass', true);
  var massB = ShapesController.getProperty(shapeBIndex, 'mass', true);

  var centreA = ShapesController.getProperty(shapeAIndex, 'centreOfMass');
  var centreB = ShapesController.getProperty(shapeBIndex, 'centreOfMass');

  var collisionPointA = {x: collisionPoint.x - centreA.x, y: collisionPoint.y - centreA.y};
  var collisionPointB = {x: collisionPoint.x - centreB.x, y: collisionPoint.y - centreB.y};

  var collisionPointDistanceA = magnitude(collisionPointA);
  var collisionPointDistanceB = magnitude(collisionPointB);

  var tangentialVelocityMagnitudeA = Math.abs(collisionPointDistanceA * angularVelocityA);
  var tangentialVelocityMagnitudeB = Math.abs(collisionPointDistanceB * angularVelocityB);

  // var tangentialVelocityA = {x: tangentialVelocityMagnitudeA * Math.sin(angularVelocityA), y: tangentialVelocityMagnitudeA * Math.cos(angularVelocityA)};
  // var tangentialVelocityB = {x: tangentialVelocityMagnitudeB * Math.sin(angularVelocityB), y: tangentialVelocityMagnitudeB * Math.cos(angularVelocityB)};

  // below are the coordinates of the collisionpoint after being rotated by the angularVelocity angle
  var collisionPointRotationA = rotateVector(angularVelocityA, {x: collisionPointA.x, y: collisionPointA.y});
  var collisionPointRotationB = rotateVector(angularVelocityB, {x: collisionPointB.x, y: collisionPointB.y});

  var tangentialVelocityA = {x: collisionPointRotationA.x - collisionPointA.x, y: collisionPointRotationA.y - collisionPointA.y};
  var tangentialVelocityB = {x: collisionPointRotationB.x - collisionPointB.x, y: collisionPointRotationB.y - collisionPointB.y};

  var collisionPointVelocityA = {x: velocityA.x + tangentialVelocityA.x, y: velocityA.y + tangentialVelocityA.y};
  var collisionPointVelocityB = {x: velocityB.x + tangentialVelocityB.x, y: velocityB.y + tangentialVelocityB.y};

  var collisionVelocity = new Vector({x: collisionPointVelocityA.x - collisionPointVelocityB.x, y: collisionPointVelocityA.y - collisionPointVelocityB.y});
  console.log('================================collisionVelocity', collisionVelocity);

  var collidingSideData = findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB);

  var collidingSideVector = {x: collidingSideData.side[1].x - collidingSideData.side[0].x,  y: collidingSideData.side[1].y - collidingSideData.side[0].y};

  var unitNormalB = findSideUnitNormal(collidingSideVector, referenceSideVector, referenceVectors.unitNormal);

  console.log('collidingSideVector', collidingSideVector);
  console.log('referenceVectors', referenceVectors);

  var collisionDistanceA = new Vector({x: collidingSideData.x - centreA.x, y: collidingSideData.y - centreA.y});
  var collisionDistanceB = new Vector({x: collidingSideData.x - centreB.x, y: collidingSideData.y - centreB.y});

  var data = {
    collisionPoint: {x: collidingSideData.x, y: collidingSideData.y},
    side: collidingSideData.side,
    sideVector: collidingSideVector,
    unitNormal: unitNormalB,
    velocityA: collisionPointVelocityA,
    velocityB: collisionPointVelocityB,
    collisionVelocity: collisionVelocity,
    collisionDistanceA: collisionDistanceA,
    collisionDistanceB: collisionDistanceB
  };
  return data;
}

function findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB){
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
        // console.log('side intersectionX', intersectionX);
        // console.log('side intersectionY', intersectionY);
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

      if(intersectionX >= sideMinX && intersectionX <= sideMaxX && intersectionY >= sideMinY && intersectionY <= sideMaxY){
        intersections.push({x: intersectionX, y: intersectionY, side: side});
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
    console.log('closestPoint', intersections[closestPoint.index]);
  }

    console.log('intersections', intersections);
    //intersections
    var intersectionPoint = intersections.length > 0 ? intersections[closestPoint.index] : {};
    console.log('intersectionPoint', intersectionPoint);
    return intersectionPoint;
}

// finds the equation of a line segment 'side' in the form of y = mx + c
function lineFormula(side){ //console.log('side', side);
  var gradient = (side[1].y - side[0].y) / (side[1].x - side[0].x);
  var intercept = side[0].y - gradient * side[0].x;
  return {gradient: gradient, intercept: intercept};
}

var ShapesController = (function(){
  var shapes = Scene.shapes;

  function getCentreOfMass(shapeIndex){
    var centreOfMass = shapes[shapeIndex].centreOfMass;
    return {
        x: centreOfMass.x,
        y: centreOfMass.y
     };
  }

  function getTouchPoint(shapeIndex){
    var touchPoint = shapes[shapeIndex].touchPoint;
    return {
        x: touchPoint.x,
        y: touchPoint.y
     };
  }

  function getVertices(shapeIndex){
    var vertices = [];
    var shape = shapes[shapeIndex];
    var size = shape.vertices.length;
    for(var i = 0; i < size; i++){
      var point = {x: shape.vertices[i].x, y: shape.vertices[i].y};
      vertices.push(point);
    }
    return vertices;
  }

  function getProperty(shapeIndex, property, bool){
    var shape = shapes[shapeIndex];
    if (!bool) {
      var property = shape[property];
    } else {
      var property = shape['physics'][property];
    }
    return property;
  }

  function setProperty(shapeIndex, property, value, bool){
    if (!bool) {
      Scene.shapes[shapeIndex][property] = value;
    } else if(bool === true) { //physics property
      Scene.shapes[shapeIndex]['physics'][property] = value;
    }
  }

  function deleteShape(shapeIndex){
    Scene.shapes.splice(shapeIndex, 1);
  }

  return {
    getCentreOfMass: getCentreOfMass,
    getTouchPoint: getTouchPoint,
    getVertices: getVertices,
    getProperty: getProperty,
    setProperty: setProperty,
    deleteShape: deleteShape
  };
})();

var leftWall = createShape({x: -19, y: 297}, shapeSelection.verticalWall);
leftWall.fillColour = 'red';
leftWall.physics.mass = Infinity;
leftWall.physics.momentOfInertia = Infinity;
leftWall.physics.momentOfInertiaCOM = Infinity;

var rightWall = createShape({x: 1018, y: 297}, shapeSelection.verticalWall);
rightWall.fillColour = 'red';
rightWall.physics.mass = Infinity;
rightWall.physics.momentOfInertia = Infinity;
rightWall.physics.momentOfInertiaCOM = Infinity;

var bottomWall = createShape({x: 500, y: 619}, shapeSelection.horizontalWall);
bottomWall.fillColour = 'red';
bottomWall.physics.mass = Infinity;
bottomWall.physics.momentOfInertia = Infinity;
bottomWall.physics.momentOfInertiaCOM = Infinity;

var topWall = createShape({x: 500, y: -20}, shapeSelection.horizontalWall);
topWall.fillColour = 'red';
topWall.physics.mass = Infinity;
topWall.physics.momentOfInertia = Infinity;
topWall.physics.momentOfInertiaCOM = Infinity;
