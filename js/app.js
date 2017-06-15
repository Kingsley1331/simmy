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
  //var momentOfInertia = findMomentOfInertia({x: 0, y:126}, momentOfInertiaCOM, massData.mass);
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
        config.lineWidth = 10;
      }
      var boundingRect = ShapesController.getProperty(i, 'boundingRect');
      var boundingRectCentre = {x: boundingRect.centre.x + centreOfMass.x, y: boundingRect.centre.y + centreOfMass.y};
      var rectVertices = boundingRect.vertices;
      var centreOfRotation = ShapesController.getProperty(i, 'centreOfRotation');
      var collisionData = ShapesController.getProperty(i, 'collisionData');


      var radius = boundingRect.radius;
      var idPos = {x: centreOfMass.x - 4, y: centreOfMass.y - 5};
      drawShape(rectVertices, centreOfMass, {lineWidth: 0.5, fillStyle: 'transparent'});
      drawShape(vertices, centreOfMass, config);
      drawDot(3, centreOfMass, 'black');
      drawDot(3, boundingRectCentre, 'red');
      drawDot(3, centreOfRotation, 'green');
      if(collisionData.collisionPoint){
        drawDot(4, {x: collisionData.collisionPoint.x, y:collisionData.collisionPoint.y}, 'red');
        bufferCtx.save();
        bufferCtx.strokeStyle = 'red';
        bufferCtx.lineWidth = 2;
        bufferCtx.beginPath();
        bufferCtx.moveTo(collisionData.side[0].x, collisionData.side[0].y);
        bufferCtx.lineTo(collisionData.side[1].x, collisionData.side[1].y);
        bufferCtx.stroke();
        bufferCtx.restore();
      }
      screenWriter(ShapesController.getProperty(i, 'id'), idPos);
      bufferCtx.save();
      bufferCtx.beginPath();
      bufferCtx.arc(boundingRectCentre.x, boundingRectCentre.y, radius, 0, 2*Math.PI);
      bufferCtx.stroke();
      bufferCtx.restore();
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
  ShapesController.setProperty(i, 'centreOfMass', {
    x: mousePos.x - touchPoint.x,
    y: mousePos.y - touchPoint.y
   });
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
    velocity.x /= length2;
    velocity.y /= length2;
  }
  return {x: velocity.x, y: velocity.y};
}

function applyPhysics(i, tDelta){
  if(selectedShape === 'play'){
    var acceleration = ShapesController.getProperty(i, 'acceleration', true);
    var angularAcceleration = ShapesController.getProperty(i, 'angularAcceleration', true);
    var velocity = ShapesController.getProperty(i, 'velocity', true);
    var angularVelocity = ShapesController.getProperty(i, 'angularVelocity', true);
    var centreOfMass = ShapesController.getProperty(i, 'centreOfMass');
    var centreOfRotation = ShapesController.getProperty(i, 'centreOfRotation');
    velocity.x += acceleration.x;
    velocity.y += acceleration.y;
    angularVelocity += angularAcceleration;
    console.log('angularVelocity', angularVelocity);
    var centreOfMass = ShapesController.getCentreOfMass(i);
    centreOfMass.x += velocity.x * tDelta * velFactor;
    centreOfMass.y += velocity.y * tDelta * velFactor;
    ShapesController.setProperty(i, 'angularVelocity', angularVelocity, true);
    ShapesController.setProperty(i, 'centreOfMass', {x: centreOfMass.x, y: centreOfMass.y});
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
    var vertices = ShapesController.getVertices(i); //ShapeA
    var centreOfMass = ShapesController.getCentreOfMass(i);
    var length = vertices.length;
    for(var j = 0; j < length; j++){
        var checkPoint = {};
        checkPoint.x = vertices[j].x + centreOfMass.x;
        checkPoint.y = vertices[j].y + centreOfMass.y;
        for(var k = 0; k < numShapes; k++){
          if(i!== k){
          var shape = shapes[k].vertices; //shapeB
          var shapeVertices = ShapesController.getProperty(k, 'vertices');
          var shapeCentre = ShapesController.getProperty(k, 'centreOfMass');
          var pointInShape = isPointInShape(shapeCentre, shapeVertices, checkPoint);
          if(pointInShape){
            ShapesController.setProperty(i, 'colliding', true);
            ShapesController.setProperty(k, 'colliding', true);
            var velocityA = ShapesController.getProperty(i, 'velocity', true);
            var velocityB = ShapesController.getProperty(k, 'velocity', true);
            ShapesController.setProperty(i, 'velocity', {x: -velocityA.x, y: -velocityA.y}, true);
            ShapesController.setProperty(k, 'velocity', {x: -velocityB.x, y: -velocityB.y}, true);
            var data = collisionData(i, k, checkPoint, shape);
            ShapesController.setProperty(k,'collisionData', data);
            shape = Scene.shapes[k]
            console.log('=============shape', shape);
          }
        }
      }
    }
  });
}

function collisionData(shapeAIndex, shapeBIndex, collisionPoint, shapeBVertices){

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

  var tangentialVelocityA = {x: tangentialVelocityMagnitudeA * Math.sin(angularVelocityA), y: tangentialVelocityMagnitudeA * Math.cos(angularVelocityA)};
  var tangentialVelocityB = {x: tangentialVelocityMagnitudeB * Math.sin(angularVelocityB), y: tangentialVelocityMagnitudeB * Math.cos(angularVelocityB)};

  // below are the coordinates of the collisionpoint after being rotated by the angularVelocity angle
  var collisionPointRotationA = rotateVector(angularVelocityA, {x: collisionPointA.x, y: collisionPointA.y});
  var collisionPointRotationB = rotateVector(angularVelocityB, {x: collisionPointB.x, y: collisionPointB.y});

  var tangentialVelocityA = {x: collisionPointRotationA.x - collisionPointA.x, y: collisionPointRotationA.y - collisionPointA.y};
  var tangentialVelocityB = {x: collisionPointRotationB.x - collisionPointB.x, y: collisionPointRotationB.y - collisionPointB.y};

  var collisionPointVelocityA = {x: velocityA.x + tangentialVelocityA.x, y: velocityA.y + tangentialVelocityA.y};
  var collisionPointVelocityB = {x: velocityB.x + tangentialVelocityB.x, y: velocityB.y + tangentialVelocityB.y};

  var collidingSide = findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, centreB);

  var data = {
    collisionPoint: {x:collidingSide.x, y:collidingSide.y},
    side: collidingSide.side
  };

  return data;

}

function findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, centreB){
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

      //console.log('sideGradient', sideGradient);

      var velocityFormula = lineFormula([{x: collisionPoint.x, y: collisionPoint.y}, {x: collisionPoint.x + collisionPointVelocityA.x, y: collisionPoint.y + collisionPointVelocityA.y}]);
      var velocityGradient = velocityFormula.gradient;
      var velocityIntercept = velocityFormula.intercept;

      var intersectionX = (sideIntercept - velocityIntercept) / (velocityGradient - sideGradient);
      var intersectionY = sideGradient * intersectionX + sideIntercept;

      // if gradients are vertical
      if(Math.abs(sideGradient) > 10000){ //console.log('%cside vertical', 'font-size: 25px; color: blue;');
        intersectionX = side[0].x;
        intersectionY = velocityGradient * intersectionX + velocityIntercept;
        console.log('side intersectionX', intersectionX);
        console.log('side intersectionY', intersectionY);
      }

      if(Math.abs(velocityGradient) > 10000){
        intersectionX = collisionPoint.x;
        intersectionY = sideGradient * intersectionX + velocityIntercept;
      }

      // if gradients are horizontal
      if(Math.abs(sideGradient) < 0.0001){
        intersectionY = side[0].y;
        intersectionX = (intersectionY - velocityIntercept) / velocityGradient;
      }

      if(Math.abs(velocityGradient) < 0.0001){
        intersectionY = collisionPoint.y;
        intersectionX = (intersectionY - sideIntercept) / sideGradient;
        console.log('velocity intersectionX', intersectionX);
        console.log('velocity intersectionY', intersectionY);
      }

      if(Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) > 10000){
        intersectionX = side[0].x;
        intersectionY = collisionPoint.y;
      }

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
        console.log('min', sum.min);
        console.log('distance', distance);
        console.log('index', index);
        closest = {min: distance, index: index};
      } else if(sum.min <= distance){
        console.log('min2', sum.min);
        console.log('distance2', distance);
        console.log('index2', index);
        closest = {min: sum.min, index: sum.index};
      }
      console.log('closest', closest);
      return closest;
    }, {min:100000000000, index:0});
    console.log('closestPoint', intersections[closestPoint.index]);
  }

    console.log('intersections', intersections);
    //intersections
    return intersections[closestPoint.index];
}

// finds the equation of a line segment 'side' in the form of y = mx + c
function lineFormula(side){ console.log('side', side);
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

//createShape({x: 500, y: 250}, shapeSelection.square);
