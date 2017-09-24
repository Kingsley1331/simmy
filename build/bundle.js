/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

function Shape(centre, vertices) {
  var boundingRect = findBoundingRect(vertices);
  var massData = findMass(centre, vertices, boundingRect);
  var centreOfMass = massData.centreOfMass;
  var momentOfInertiaCOM = findMomentOfInertiaCOM(centreOfMass, vertices, boundingRect);
  var references = referenceVectors(centre, vertices);
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
    velocity: { x: 0, y: 0 },
    acceleration: { x: 0, y: 0 },
    angularVelocity: 0,
    angularAcceleration: 0,
    forcesCOM: [{ x: 0, y: 0 }],
    torque: 0
  };
  this.onShape = false;
  this.dragging = false;
  this.selected = false;
  this.touchPoint = [];
  this.display = [];
  this.boundingRect = boundingRect;
  var boundingRectCentre = { x: this.boundingRect.centre.x, y: this.boundingRect.centre.y };
  var radius = magnitude({ x: boundingRectCentre.x - this.boundingRect.vertices[0].x, y: boundingRectCentre.y - this.boundingRect.vertices[0].y });
  this.boundingRect.radius = radius;
  this.collisionData = {};
  this.referenceVectors = references;
}

function referenceVectors(centre, vertices) {
  var firstPoint = { x: vertices[0].x, y: vertices[0].y };
  var secondPoint = { x: vertices[1].x, y: vertices[1].y };
  //turn the first side into a vector pointing away from the first point
  var firstSideVector = new Vector({ x: secondPoint.x - firstPoint.x, y: secondPoint.y - firstPoint.y });
  var sideLength = firstSideVector.magnitude;
  var angle = Math.PI / 2;
  var normalVector = rotateVector(angle, firstSideVector);
  var unitNormal = { x: normalVector.x / sideLength, y: normalVector.y / sideLength };
  //var location = {x: centre.x + firstPoint.x + firstSideVector.x/2, y: centre.y + firstPoint.y + firstSideVector.y/2};
  var location = { x: firstPoint.x + firstSideVector.x / 2, y: firstPoint.y + firstSideVector.y / 2 };
  //var point = {x: location.x + unitNormal.x, y: location.y + unitNormal.y};
  var point = { x: centre.x + location.x + unitNormal.x, y: centre.y + location.y + unitNormal.y };
  var pointInShape = isPointInShape(centre, vertices, point);
  if (pointInShape) {
    unitNormal = { x: -unitNormal.x, y: -unitNormal.y };
  }
  return { location: location, sideVector: firstSideVector, unitNormal: unitNormal };
}

function findSideUnitNormal(collidingSideVector, referenceSideVector, referenceVector) {
  console.log('referenceSideVector', referenceSideVector);
  collidingSideVector = new Vector(collidingSideVector);
  referenceVector = new Vector(referenceVector);
  var angle = referenceSideVector.findAngle(collidingSideVector);
  var unitNormal = rotateVector(angle, referenceVector);
  console.log('================================>angle', angle);
  console.log('================================>collidingSideVector', collidingSideVector);
  console.log('================================>referenceSideVector', referenceSideVector);
  console.log('================================>unitNormal', unitNormal);
  return unitNormal;
}

function createShape(centreOfMass, vertices) {
  forEachShape(function (i) {
    detectShape(i);
  }, true);
  if (hoveringOnShape <= 0) {
    // if not hovering on shape
    id++;
    var shape = new Shape(centreOfMass, vertices);
    shape.id = id;
    //console.log('boundingRect.radius', shape.boundingRect.radius);
    Scene.shapes.push(shape);
    return shape;
  }
}

//function draw(){
let draw = () => {
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  forEachShape(function (i) {
    var onShape = ShapesController.getProperty(i, 'onShape');
    //bufferCtx.save();
    if (onShape) {
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
    if (ShapesController.getProperty(i, 'colliding')) {
      //config.lineWidth = 10;
    }
    var boundingRect = ShapesController.getProperty(i, 'boundingRect');
    var boundingRectCentre = { x: boundingRect.centre.x + centreOfMass.x, y: boundingRect.centre.y + centreOfMass.y };
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
    var referenceLocation = { x: referenceVectors.location.x + centreOfMass.x, y: referenceVectors.location.y + centreOfMass.y };

    var unitNormal = collisionDataB.unitNormal;
    var sideVector = collisionDataB.sideVector;
    var collisionPoint = collisionDataB.collisionPoint;
    var arrowHead = shapes.arrowHead;
    //console.log('****collisionDataB*****', collisionDataB);

    var radius = boundingRect.radius;
    var idPos = { x: centreOfMass.x - 4, y: centreOfMass.y - 5 };
    drawShape(vertices, centreOfMass, config);
    if (settings.display) {
      for (var n = 0; n < vertices.length; n++) {
        if (vertices[n].isColliding) {
          drawDot(5, { x: centreOfMass.x + vertices[n].x, y: centreOfMass.y + vertices[n].y }, 'blue');
        }
      }
      screenWriter(ShapesController.getProperty(i, 'id'), idPos);
      drawShape(rectVertices, centreOfMass, { lineWidth: 0.5, fillStyle: 'transparent' });
      drawDot(3, centreOfMass, 'black');
      drawDot(3, boundingRectCentre, 'red');
      drawDot(3, centreOfRotation, 'green');
      if (collisionDataB.collisionPoint) {
        drawDot(4, { x: collisionDataB.collisionPoint.x, y: collisionDataB.collisionPoint.y }, 'red');
        drawLine(collisionDataB.side[0], collisionDataB.side[1], { strokeStyle: 'red', lineWidth: 2 });
      }

      if (unitNormal) {
        unitNormal = unitNormal.scalProd(50);
        drawArrow(arrowHead, [{ x: collisionDataB.side[0].x + sideVector.x / 2, y: collisionDataB.side[0].y + sideVector.y / 2 }, unitNormal], { fillStyle: 'purple', strokeStyle: 'purple' }, 30);
        drawArrow(arrowHead, [collisionDataB.side[0], sideVector], { fillStyle: 'blue', strokeStyle: 'blue' });
        drawArrow(arrowHead, [{ x: vertices[0].x + centreOfMass.x, y: vertices[0].y + centreOfMass.y }, referenceSideVector], { fillStyle: 'red', strokeStyle: 'red' });
        drawArrow(arrowHead, [referenceLocation, referenceUnitNormal], { fillStyle: 'black', strokeStyle: 'black' }, 30);
        drawArrow(arrowHead, [collisionPoint, velocityA], { fillStyle: 'blue', strokeStyle: 'blue' }, 30);
        drawArrow(arrowHead, [collisionPoint, velocityB], { fillStyle: 'green', strokeStyle: 'green' }, 60);
      }
      bufferCtx.save();
      bufferCtx.beginPath();
      bufferCtx.arc(boundingRectCentre.x, boundingRectCentre.y, radius, 0, 2 * Math.PI);
      bufferCtx.stroke();
      bufferCtx.restore();
    }
  });
  if (shapeSelection[selectedShape] && hoveringOnShape <= 0) {
    // (hoveringOnShape <= 0) means not hovering on shape
    drawShape(shapeSelection[selectedShape], mousePos, {
      globalAlpha: 0.15,
      fillStyle: 'blue',
      lineWidth: 0.000001
    });
  }
  screenWriter('x:' + Math.round(mousePos.x) + ',  ' + 'y:' + Math.round(mousePos.y), { x: 10, y: 20 });

  context.drawImage(bufferCanvas, 0, 0, canvas.width, canvas.height);
};

function drawLine(start, end, config) {
  bufferCtx.save();
  // bufferCtx.strokeStyle = 'red';
  // bufferCtx.lineWidth = 2;
  for (var prop in config) {
    bufferCtx[prop] = config[prop];
  }
  bufferCtx.beginPath();
  bufferCtx.moveTo(start.x, start.y);
  bufferCtx.lineTo(end.x, end.y);
  bufferCtx.stroke();
  bufferCtx.restore();
}

function drawArrow(head, shaft, config, length) {
  var start = shaft[0];
  var end = { x: shaft[0].x + shaft[1].x, y: shaft[0].y + shaft[1].y };
  // var vector = shaft[1];
  // var shaftVector = new Vector({x: vector.x - start.x, y: vector.y - start.y});
  var shaftVector = new Vector({ x: shaft[1].x, y: shaft[1].y });

  var magnitude = shaftVector.magnitude;
  if (length) {
    var scale = length / magnitude;
    shaftVector = shaftVector.scalProd(scale);
    end = { x: shaft[0].x + shaftVector.x, y: shaft[0].y + shaftVector.y };
  }
  var referenceVector = new Vector({ x: 0, y: 1 });
  //var angle = shaftVector.findAngle(referenceVector);
  var angle = referenceVector.findAngle(shaftVector);
  var rotatedHead = rotateShape(end, angle, head);

  drawShape(rotatedHead, end, config);

  drawLine(start, end, config);
}

function screenWriter(text, position) {
  bufferCtx.save();
  bufferCtx.fillStyle = 'black';
  bufferCtx.font = "15px Arial";
  bufferCtx.fillText(text, position.x, position.y);
  bufferCtx.restore();
}

function drawShape(vertices, centreOfMass, config) {
  var num = vertices.length;
  var x0 = vertices[0].x + centreOfMass.x;
  var y0 = vertices[0].y + centreOfMass.y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for (var j = 1; j < num; j++) {
    var x = vertices[j].x + centreOfMass.x;
    var y = vertices[j].y + centreOfMass.y;
    bufferCtx.lineTo(x, y);
  }
  bufferCtx.save();
  for (var prop in config) {
    bufferCtx[prop] = config[prop];
  }
  bufferCtx.closePath();
  bufferCtx.stroke();
  bufferCtx.fill();
  bufferCtx.restore();
}

function drawDot(radius, centre, colour) {
  bufferCtx.save();
  bufferCtx.fillStyle = colour;
  bufferCtx.beginPath();
  bufferCtx.arc(centre.x, centre.y, radius, 0, 2 * Math.PI);
  bufferCtx.fill();
  //bufferCtx.stroke();
  bufferCtx.restore();
}

function flicker() {
  setInterval(draw, 17);
}

flicker();

window.requestAnimFrame = function (callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

function animate() {
  var date = new Date();
  var currentTime = date.getTime();
  var tDelta = currentTime - time;
  forEachShape(function (i) {
    applyPhysics(i, tDelta);
    applyForces(i);
  });
  collisionDetector();
  draw();
  requestAnimFrame(function () {
    animate();
  });
  time = currentTime;
}

function mouseMove() {
  canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePos(evt, canvas);
    hoveringOnShape = 0;
    if (selectedShape === 'play') {
      makeThrowArray();
    }
    forEachShape(function (i) {
      detectShape(i);
    }, true);
    if (hoveringOnShape > 0) {
      onShape = false;
    }
  });
}

function mouseDown() {
  canvas.addEventListener('mousedown', function (evt) {
    throwArray = [];
    forEachShape(function (i) {
      prepareToMoveShape(i);
      if (selectedShape === '_delete') {
        deleteShape(i);
      }
    });
    if (selectedShape && selectedShape !== '_delete' && selectedShape !== 'play') {
      createShape(mousePos, shapeSelection[selectedShape]);
    }
  }, false);
}

function mouseUp() {
  canvas.addEventListener('mouseup', function (evt) {
    forEachShape(function (i) {
      releaseShape(i);
    });
    throwArray = [];
  }, false);
}

function detectShape(i) {
  ShapesController.setProperty(i, 'onShape', false);
  var centreOfMass = ShapesController.getCentreOfMass(i);
  var vertices = ShapesController.getVertices(i);
  var pointInShape = isPointInShape(centreOfMass, vertices, mousePos);
  if (pointInShape) {
    hoveringOnShape++;
    if (!onShape) {
      ShapesController.setProperty(i, 'onShape', true);
      onShape = true;
    }
    if (ShapesController.getProperty(i, 'onShape')) {
      ShapesController.setProperty(i, 'onShape', true);
    } else {
      ShapesController.setProperty(i, 'onShape', false);
    }
  } else {
    ShapesController.setProperty(i, 'onShape', false);
  }
  if (ShapesController.getProperty(i, 'dragging')) {
    dragShape(i);
  }
}

function prepareToMoveShape(i) {
  if (ShapesController.getProperty(i, 'onShape')) {
    if (selectedShape === 'play') {
      ShapesController.setProperty(i, 'velocity', { x: 0, y: 0 }, true);
    }
    var centreOfMass = ShapesController.getCentreOfMass(i);
    ShapesController.setProperty(i, 'dragging', true);
    var distanceX = mousePos.x - centreOfMass.x;
    var distanceY = mousePos.y - centreOfMass.y;
    ShapesController.setProperty(i, 'touchPoint', { x: distanceX, y: distanceY });
    var x = document.getElementsByClassName("dg");
    if (gui) {
      gui.destroy();
    }
    addGui(i);
  }
}

function releaseShape(i) {
  var velocity = throwVelocity();
  if (throwArray.length > 0 && ShapesController.getProperty(i, 'dragging')) {
    ShapesController.setProperty(i, 'velocity', { x: velocity.x, y: velocity.y }, true);
  }
  ShapesController.setProperty(i, 'dragging', false);
  ShapesController.setProperty(i, 'selected', false);
}

function deleteShape(i) {
  if (selectedShape === '_delete') {
    if (ShapesController.getProperty(i, 'onShape')) {
      ShapesController.deleteShape(i);
    }
  }
}

function dragShape(i) {
  var touchPoint = ShapesController.getTouchPoint(i);
  var centre = {
    x: mousePos.x - touchPoint.x,
    y: mousePos.y - touchPoint.y
  };
  ShapesController.setProperty(i, 'centreOfMass', centre);
  ShapesController.setProperty(i, 'centreOfRotation', centre);
}

function init() {
  flicker();
  animate();
  mouseDown();
  mouseUp();
  mouseMove();
}

init();

function forEachShape(callback, bool) {
  var shapes = Scene.shapes;
  var length = shapes.length;
  if (!bool) {
    for (var i = 0; i < length; i++) {
      var shape = shapes[i];
      if (shape) {
        callback(i);
      }
    }
  } else if (bool) {
    for (var i = length - 1; i >= 0; i--) {
      var shape = shapes[i];
      if (shape) {
        callback(i);
      }
    }
  }
}

function makeThrowArray() {
  var length = throwArray.length;
  var arraySize = 5;
  if (length >= arraySize) {
    throwArray = throwArray.splice(length - arraySize);
  }
  throwArray.push({ x: mousePos.x, y: mousePos.y });
}

function throwVelocity() {
  var velocityArray = [];
  var velocity = { x: 0, y: 0 };
  var length = throwArray.length;
  for (var i = 1; i < length; i++) {
    velocityArray.push({ x: throwArray[i].x - throwArray[i - 1].x, y: throwArray[i].y - throwArray[i - 1].y });
  }
  var length2 = velocityArray.length;
  for (var j = 0; j < length2; j++) {
    velocity.x += velocityArray[j].x;
    velocity.y += velocityArray[j].y;
  }
  if (length2 > 0) {
    velocity.x /= length2 * 5;
    velocity.y /= length2 * 5;
  }
  return { x: velocity.x, y: velocity.y };
}

function applyPhysics(i, tDelta) {
  if (selectedShape === 'play') {
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

function applyForces(i) {
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

function collisionDetector() {
  var shapes = Scene.shapes;
  var numShapes = shapes.length;
  forEachShape(function (i) {
    ShapesController.setProperty(i, 'colliding', false);
  });
  forEachShape(function (i) {
    if (selectedShape === 'play') {
      var verticesA = ShapesController.getVertices(i); //ShapeA
      var centreOfMassA = ShapesController.getCentreOfMass(i);
      var length = verticesA.length;
      for (var j = 0; j < length; j++) {
        var checkPoint = {};
        checkPoint.x = verticesA[j].x + centreOfMassA.x;
        checkPoint.y = verticesA[j].y + centreOfMassA.y;
        for (var k = 0; k < numShapes; k++) {
          if (i !== k) {
            var shape = shapes[k].vertices; //shapeB
            var shapeVertices = ShapesController.getProperty(k, 'vertices');
            var centreOfMassB = ShapesController.getProperty(k, 'centreOfMass');

            var pointInShape = isPointInShape(centreOfMassB, shapeVertices, checkPoint);
            if (pointInShape) {
              // ShapesController.setProperty(i, 'colliding', true);
              // ShapesController.setProperty(k, 'colliding', true);

              var velocityA = ShapesController.getProperty(i, 'velocity', true);
              var velocityB = ShapesController.getProperty(k, 'velocity', true);

              var angularVelocityA = ShapesController.getProperty(i, 'angularVelocity', true);
              var angularVelocityB = ShapesController.getProperty(k, 'angularVelocity', true);

              var centreOfRotationA = ShapesController.getProperty(i, 'centreOfRotation');
              var centreOfRotationB = ShapesController.getProperty(k, 'centreOfRotation');

              var data = collisionData(i, k, checkPoint, shape);
              ShapesController.setProperty(k, 'collisionData', data);
              shape = Scene.shapes[k];
              var massA = ShapesController.getProperty(i, 'mass', true);
              var massB = ShapesController.getProperty(k, 'mass', true);

              var momentOfInertiaA = ShapesController.getProperty(i, 'momentOfInertiaCOM', true);
              var momentOfInertiaB = ShapesController.getProperty(k, 'momentOfInertiaCOM', true);
              var unitNormal = data.unitNormal;
              var masses = { massA: massA, massB: massB, momentOfInertiaA: momentOfInertiaA, momentOfInertiaB: momentOfInertiaB };
              var centres = { centreA: centreOfMassA, centreB: centreOfMassB };

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

              var newVelocityA = { x: velocityA.x + normalImpulse.x / massA, y: velocityA.y + normalImpulse.y / massA };
              var newVelocityB = { x: velocityB.x - normalImpulse.x / massB, y: velocityB.y - normalImpulse.y / massB };

              var newAngularVelocityA = angularVelocityA + colDistCrossNormalA.magnitude / momentOfInertiaA;
              var newAngularVelocityB = angularVelocityB - colDistCrossNormalB.magnitude / momentOfInertiaB;
              var isColliding = ShapesController.getProperty(i, 'colliding');
              var isVertexColliding = verticesA[j].isColliding;
              //if(isColliding === false){
              if (!isVertexColliding) {
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
              console.log('=============velocityDeltaA', normalImpulse.x / massA);
              console.log('=============velocityDeltaB', -normalImpulse.x / massB);
              console.log('=============massA', massA);
              console.log('=============massB', massB);
              console.log('=============velocityA', velocityA);
              console.log('=============velocityB', velocityB);
              console.log('=============centreOfRotationA', centreOfRotationA);
              console.log('=============centreOfRotationB', centreOfRotationB);
            } else {
              verticesA[j].isColliding = false;
              ShapesController.setProperty(i, 'vertices', verticesA);
            }
          }
        }
      }
    }
  });
}

function findImpulse(data, masses, centres) {
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
  //  console.log('============================>unitNormal', unitNormal);
  //  console.log('============================>collisionDistanceA', collisionDistanceA);
  //  console.log('============================>collisionDistanceNormalCrossProductA', collisionDistanceNormalCrossProductA);
  //  console.log('============================>collisionDistSquareA', collisionDistSquareA);
  //  console.log('============================>collisionDistSquareB', collisionDistSquareB);
  //  console.log('============================>momentOfInertiaA', momentOfInertiaA);
  //  console.log('============================>momentOfInertiaB', momentOfInertiaB);

  var impulse = -(1 + e) * collisionVelocityNormalDotProduct / (1 / massA + 1 / massB + collisionDistSquareA / momentOfInertiaA + collisionDistSquareB / momentOfInertiaB);
  console.log('============================>impulse', impulse);
  return impulse;
}

function collisionData(shapeAIndex, shapeBIndex, collisionPoint, shapeBVertices) {

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

  var collisionPointA = { x: collisionPoint.x - centreA.x, y: collisionPoint.y - centreA.y };
  var collisionPointB = { x: collisionPoint.x - centreB.x, y: collisionPoint.y - centreB.y };

  var collisionPointDistanceA = magnitude(collisionPointA);
  var collisionPointDistanceB = magnitude(collisionPointB);

  var tangentialVelocityMagnitudeA = Math.abs(collisionPointDistanceA * angularVelocityA);
  var tangentialVelocityMagnitudeB = Math.abs(collisionPointDistanceB * angularVelocityB);

  // var tangentialVelocityA = {x: tangentialVelocityMagnitudeA * Math.sin(angularVelocityA), y: tangentialVelocityMagnitudeA * Math.cos(angularVelocityA)};
  // var tangentialVelocityB = {x: tangentialVelocityMagnitudeB * Math.sin(angularVelocityB), y: tangentialVelocityMagnitudeB * Math.cos(angularVelocityB)};

  // below are the coordinates of the collisionpoint after being rotated by the angularVelocity angle
  var collisionPointRotationA = rotateVector(angularVelocityA, { x: collisionPointA.x, y: collisionPointA.y });
  var collisionPointRotationB = rotateVector(angularVelocityB, { x: collisionPointB.x, y: collisionPointB.y });

  var tangentialVelocityA = { x: collisionPointRotationA.x - collisionPointA.x, y: collisionPointRotationA.y - collisionPointA.y };
  var tangentialVelocityB = { x: collisionPointRotationB.x - collisionPointB.x, y: collisionPointRotationB.y - collisionPointB.y };

  var collisionPointVelocityA = { x: velocityA.x + tangentialVelocityA.x, y: velocityA.y + tangentialVelocityA.y };
  var collisionPointVelocityB = { x: velocityB.x + tangentialVelocityB.x, y: velocityB.y + tangentialVelocityB.y };

  var collisionVelocity = new Vector({ x: collisionPointVelocityA.x - collisionPointVelocityB.x, y: collisionPointVelocityA.y - collisionPointVelocityB.y });
  console.log('================================collisionVelocity', collisionVelocity);

  var collidingSideData = findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB);

  var collidingSideVector = { x: collidingSideData.side[1].x - collidingSideData.side[0].x, y: collidingSideData.side[1].y - collidingSideData.side[0].y };

  var unitNormalB = findSideUnitNormal(collidingSideVector, referenceSideVector, referenceVectors.unitNormal);

  console.log('collidingSideVector', collidingSideVector);
  console.log('referenceVectors', referenceVectors);

  var collisionDistanceA = new Vector({ x: collidingSideData.x - centreA.x, y: collidingSideData.y - centreA.y });
  var collisionDistanceB = new Vector({ x: collidingSideData.x - centreB.x, y: collidingSideData.y - centreB.y });

  var data = {
    collisionPoint: { x: collidingSideData.x, y: collidingSideData.y },
    side: collidingSideData.side,
    sideVector: collidingSideVector,
    unitNormal: unitNormalB,
    velocityA: collisionPointVelocityA,
    velocityB: collisionPointVelocityB,
    collisionVelocity: collisionVelocity,
    collisionDistanceA: collisionDistanceA,
    collisionDistanceB: collisionDistanceB
  };

  console.log('================================>data', data);
  return data;
}

function findCollidingSide(collisionPoint, shapeBVertices, collisionPointVelocityA, collisionPointVelocityB, centreB) {
  var length = shapeBVertices.length;
  var intersections = [];
  for (var i = 0; i < length; i++) {
    var side = [];
    if (i !== length - 1) {
      side = [{ x: shapeBVertices[i].x + centreB.x, y: shapeBVertices[i].y + centreB.y }, { x: shapeBVertices[i + 1].x + centreB.x, y: shapeBVertices[i + 1].y + centreB.y }];
    } else {
      side = [{ x: shapeBVertices[i].x + centreB.x, y: shapeBVertices[i].y + centreB.y }, { x: shapeBVertices[0].x + centreB.x, y: shapeBVertices[0].y + centreB.y }];
    }
    var sideFormula = lineFormula(side);
    var sideGradient = sideFormula.gradient;
    var sideIntercept = sideFormula.intercept;

    var relativeCollisionPointVel = { x: collisionPointVelocityA.x - collisionPointVelocityB.x, y: collisionPointVelocityA.y - collisionPointVelocityB.y };

    var velocityFormula = lineFormula([{ x: collisionPoint.x, y: collisionPoint.y }, { x: collisionPoint.x + relativeCollisionPointVel.x, y: collisionPoint.y + relativeCollisionPointVel.y }]);
    var velocityGradient = velocityFormula.gradient;
    var velocityIntercept = velocityFormula.intercept;

    var intersectionX = (sideIntercept - velocityIntercept) / (velocityGradient - sideGradient);
    var intersectionY = sideGradient * intersectionX + sideIntercept;

    // if the side gradient is vertical and velocity gradient is not horizontal
    if (Math.abs(sideGradient) > 10000 && Math.abs(velocityGradient) >= 0.0001) {
      //console.log('%cside vertical', 'font-size: 25px; color: blue;');
      intersectionX = side[0].x;
      intersectionY = velocityGradient * intersectionX + velocityIntercept;
      // console.log('side intersectionX', intersectionX);
      // console.log('side intersectionY', intersectionY);
    }

    // if the velocity gradient is vertical and side gradient is not horizontal
    if (Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) >= 0.0001) {
      intersectionX = collisionPoint.x;
      intersectionY = sideGradient * intersectionX + velocityIntercept;
    }

    // if the side gradient is horizontal and velocity gradient is not vertical
    if (Math.abs(sideGradient) < 0.0001 && Math.abs(velocityGradient) <= 10000) {
      intersectionY = side[0].y;
      intersectionX = (intersectionY - velocityIntercept) / velocityGradient;
    }

    // if the velocity gradient is horizontal and side gradient is not vertical
    if (Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) <= 10000) {
      intersectionY = collisionPoint.y;
      intersectionX = (intersectionY - sideIntercept) / sideGradient;
      // console.log('velocity intersectionX', intersectionX);
      // console.log('velocity intersectionY', intersectionY);
    }

    // if velocity gradient is horizontal and the side gradient is vertical
    if (Math.abs(velocityGradient) < 0.0001 && Math.abs(sideGradient) > 10000) {
      intersectionX = side[0].x;
      intersectionY = collisionPoint.y;
    }

    // if velocity gradient is vertical and the side gradient is horizontal
    if (Math.abs(velocityGradient) > 10000 && Math.abs(sideGradient) < 0.0001) {
      intersectionX = collisionPoint.x;
      intersectionY = side[0].y;
    }

    // check if intersection point lies on the side being checked
    var sideMinX = Math.min(side[0].x, side[1].x);
    var sideMaxX = Math.max(side[0].x, side[1].x);

    var sideMinY = Math.min(side[0].y, side[1].y);
    var sideMaxY = Math.max(side[0].y, side[1].y);

    if (intersectionX >= sideMinX && intersectionX <= sideMaxX && intersectionY >= sideMinY && intersectionY <= sideMaxY) {
      intersections.push({ x: intersectionX, y: intersectionY, side: side });
    }
  }
  if (intersections.length > 0) {
    var closestPoint = intersections.reduce(function (sum, e, index) {
      var closest = {};
      var distance = magnitude({ x: e.x - collisionPoint.x, y: e.y - collisionPoint.y });
      if (!sum.min) {
        closest = { min: distance, index: index };
      } else if (sum.min > distance) {
        closest = { min: distance, index: index };
      } else if (sum.min <= distance) {
        closest = { min: sum.min, index: sum.index };
      }
      //console.log('closest', closest);
      return closest;
    }, { min: 100000000000, index: 0 });
    console.log('closestPoint', intersections[closestPoint.index]);
  }

  console.log('intersections', intersections);
  //intersections
  var intersectionPoint = intersections.length > 0 ? intersections[closestPoint.index] : {};
  console.log('intersectionPoint', intersectionPoint);
  return intersectionPoint;
}

// finds the equation of a line segment 'side' in the form of y = mx + c
function lineFormula(side) {
  //console.log('side', side);
  var gradient = (side[1].y - side[0].y) / (side[1].x - side[0].x);
  var intercept = side[0].y - gradient * side[0].x;
  return { gradient: gradient, intercept: intercept };
}

var ShapesController = function () {
  var shapes = Scene.shapes;

  function getCentreOfMass(shapeIndex) {
    var centreOfMass = shapes[shapeIndex].centreOfMass;
    return {
      x: centreOfMass.x,
      y: centreOfMass.y
    };
  }

  function getTouchPoint(shapeIndex) {
    var touchPoint = shapes[shapeIndex].touchPoint;
    return {
      x: touchPoint.x,
      y: touchPoint.y
    };
  }

  function getVertices(shapeIndex) {
    var vertices = [];
    var shape = shapes[shapeIndex];
    var size = shape.vertices.length;
    for (var i = 0; i < size; i++) {
      var point = { x: shape.vertices[i].x, y: shape.vertices[i].y };
      vertices.push(point);
    }
    return vertices;
  }

  function getProperty(shapeIndex, property, bool) {
    var shape = shapes[shapeIndex];
    if (!bool) {
      var property = shape[property];
    } else {
      var property = shape['physics'][property];
    }
    return property;
  }

  function setProperty(shapeIndex, property, value, bool) {
    if (!bool) {
      Scene.shapes[shapeIndex][property] = value;
    } else if (bool === true) {
      //physics property
      Scene.shapes[shapeIndex]['physics'][property] = value;
    }
  }

  function deleteShape(shapeIndex) {
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
}();

var leftWall = createShape({ x: -19, y: 297 }, shapeSelection.verticalWall);
leftWall.fillColour = 'red';
leftWall.physics.mass = Infinity;
leftWall.physics.momentOfInertia = Infinity;
leftWall.physics.momentOfInertiaCOM = Infinity;

var rightWall = createShape({ x: 1018, y: 297 }, shapeSelection.verticalWall);
rightWall.fillColour = 'red';
rightWall.physics.mass = Infinity;
rightWall.physics.momentOfInertia = Infinity;
rightWall.physics.momentOfInertiaCOM = Infinity;

var bottomWall = createShape({ x: 500, y: 619 }, shapeSelection.horizontalWall);
bottomWall.fillColour = 'red';
bottomWall.physics.mass = Infinity;
bottomWall.physics.momentOfInertia = Infinity;
bottomWall.physics.momentOfInertiaCOM = Infinity;

var topWall = createShape({ x: 500, y: -20 }, shapeSelection.horizontalWall);
topWall.fillColour = 'red';
topWall.physics.mass = Infinity;
topWall.physics.momentOfInertia = Infinity;
topWall.physics.momentOfInertiaCOM = Infinity;

/***/ },
/* 1 */
/***/ function(module, exports) {

var gui;
function addGui(index) {
  gui = new dat.GUI();
  var shape = Scene.shapes[index];
  gui.add(shape, 'id');
  gui.add(shape, 'fillColour');
  gui.add(shape, 'lineColour');
  gui.add(shape, 'linewidth');

  var centreOfMass = gui.addFolder('centreOfMass');
  centreOfMass.add(shape.centreOfMass, 'x');
  centreOfMass.add(shape.centreOfMass, 'y');
  gui.add(shape, 'onShape');
  // var boundingRect = gui.addFolder('boundingRect');
  // boundingRect.add(shape.boundingRect.minX, 'minX');
  var centreOfRotation = gui.addFolder('centreOfRotation');
  centreOfRotation.add(shape.centreOfRotation, 'x');
  centreOfRotation.add(shape.centreOfRotation, 'y');

  var physics = gui.addFolder('physics');
  var velocity = physics.addFolder('velocity');
  var acceleration = physics.addFolder('acceleration');
  velocity.add(shape.physics.velocity, 'x');
  velocity.add(shape.physics.velocity, 'y');
  acceleration.add(shape.physics.acceleration, 'x');
  acceleration.add(shape.physics.acceleration, 'y');
  physics.add(shape.physics, 'density');
  physics.add(shape.physics, 'mass');
  physics.add(shape.physics, 'momentOfInertiaCOM');
  physics.add(shape.physics, 'angularVelocity');
  physics.add(shape.physics, 'angularAcceleration');
  physics.add(shape.physics, 'torque');
}

/***/ },
/* 2 */
/***/ function(module, exports) {

var mousePos = {};

//canvas.addEventListener uses this function to calculate mouse position
function getMousePos(evt, canvas) {
	var rect = canvas.getBoundingClientRect();

	if (evt.clientX && evt.clientY) {
		var x = evt.clientX - rect.left;
		var y = evt.clientY - rect.top;
	}
	return {
		x: x,
		y: y
	};
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["dat"] = factory();else root["dat"] = factory();
})(this, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _index = __webpack_require__(1);

			var _index2 = _interopRequireDefault(_index);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			exports.default = _index2.default; /**
                                       * dat-gui JavaScript Controller Library
                                       * http://code.google.com/p/dat-gui
                                       *
                                       * Copyright 2011 Data Arts Team, Google Creative Lab
                                       *
                                       * Licensed under the Apache License, Version 2.0 (the "License");
                                       * you may not use this file except in compliance with the License.
                                       * You may obtain a copy of the License at
                                       *
                                       * http://www.apache.org/licenses/LICENSE-2.0
                                       */

			module.exports = exports['default'];

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Color = __webpack_require__(2);

			var _Color2 = _interopRequireDefault(_Color);

			var _math = __webpack_require__(6);

			var _math2 = _interopRequireDefault(_math);

			var _interpret = __webpack_require__(3);

			var _interpret2 = _interopRequireDefault(_interpret);

			var _Controller = __webpack_require__(7);

			var _Controller2 = _interopRequireDefault(_Controller);

			var _BooleanController = __webpack_require__(8);

			var _BooleanController2 = _interopRequireDefault(_BooleanController);

			var _OptionController = __webpack_require__(10);

			var _OptionController2 = _interopRequireDefault(_OptionController);

			var _StringController = __webpack_require__(11);

			var _StringController2 = _interopRequireDefault(_StringController);

			var _NumberController = __webpack_require__(12);

			var _NumberController2 = _interopRequireDefault(_NumberController);

			var _NumberControllerBox = __webpack_require__(13);

			var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

			var _NumberControllerSlider = __webpack_require__(14);

			var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

			var _FunctionController = __webpack_require__(15);

			var _FunctionController2 = _interopRequireDefault(_FunctionController);

			var _ColorController = __webpack_require__(16);

			var _ColorController2 = _interopRequireDefault(_ColorController);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _GUI = __webpack_require__(17);

			var _GUI2 = _interopRequireDefault(_GUI);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			exports.default = {
				color: {
					Color: _Color2.default,
					math: _math2.default,
					interpret: _interpret2.default
				},

				controllers: {
					Controller: _Controller2.default,
					BooleanController: _BooleanController2.default,
					OptionController: _OptionController2.default,
					StringController: _StringController2.default,
					NumberController: _NumberController2.default,
					NumberControllerBox: _NumberControllerBox2.default,
					NumberControllerSlider: _NumberControllerSlider2.default,
					FunctionController: _FunctionController2.default,
					ColorController: _ColorController2.default
				},

				dom: {
					dom: _dom2.default
				},

				gui: {
					GUI: _GUI2.default
				},

				GUI: _GUI2.default
			};
			module.exports = exports['default'];

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _interpret = __webpack_require__(3);

			var _interpret2 = _interopRequireDefault(_interpret);

			var _math = __webpack_require__(6);

			var _math2 = _interopRequireDefault(_math);

			var _toString = __webpack_require__(4);

			var _toString2 = _interopRequireDefault(_toString);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			var Color = function () {
				function Color() {
					_classCallCheck(this, Color);

					this.__state = _interpret2.default.apply(this, arguments);

					if (this.__state === false) {
						throw new Error('Failed to interpret color arguments');
					}

					this.__state.a = this.__state.a || 1;
				}

				Color.prototype.toString = function toString() {
					return (0, _toString2.default)(this);
				};

				Color.prototype.toHexString = function toHexString() {
					return (0, _toString2.default)(this, true);
				};

				Color.prototype.toOriginal = function toOriginal() {
					return this.__state.conversion.write(this);
				};

				return Color;
			}();

			function defineRGBComponent(target, component, componentHexIndex) {
				Object.defineProperty(target, component, {
					get: function get() {
						if (this.__state.space === 'RGB') {
							return this.__state[component];
						}

						Color.recalculateRGB(this, component, componentHexIndex);

						return this.__state[component];
					},

					set: function set(v) {
						if (this.__state.space !== 'RGB') {
							Color.recalculateRGB(this, component, componentHexIndex);
							this.__state.space = 'RGB';
						}

						this.__state[component] = v;
					}
				});
			}

			function defineHSVComponent(target, component) {
				Object.defineProperty(target, component, {
					get: function get() {
						if (this.__state.space === 'HSV') {
							return this.__state[component];
						}

						Color.recalculateHSV(this);

						return this.__state[component];
					},

					set: function set(v) {
						if (this.__state.space !== 'HSV') {
							Color.recalculateHSV(this);
							this.__state.space = 'HSV';
						}

						this.__state[component] = v;
					}
				});
			}

			Color.recalculateRGB = function (color, component, componentHexIndex) {
				if (color.__state.space === 'HEX') {
					color.__state[component] = _math2.default.component_from_hex(color.__state.hex, componentHexIndex);
				} else if (color.__state.space === 'HSV') {
					_common2.default.extend(color.__state, _math2.default.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
				} else {
					throw new Error('Corrupted color state');
				}
			};

			Color.recalculateHSV = function (color) {
				var result = _math2.default.rgb_to_hsv(color.r, color.g, color.b);

				_common2.default.extend(color.__state, {
					s: result.s,
					v: result.v
				});

				if (!_common2.default.isNaN(result.h)) {
					color.__state.h = result.h;
				} else if (_common2.default.isUndefined(color.__state.h)) {
					color.__state.h = 0;
				}
			};

			Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];

			defineRGBComponent(Color.prototype, 'r', 2);
			defineRGBComponent(Color.prototype, 'g', 1);
			defineRGBComponent(Color.prototype, 'b', 0);

			defineHSVComponent(Color.prototype, 'h');
			defineHSVComponent(Color.prototype, 's');
			defineHSVComponent(Color.prototype, 'v');

			Object.defineProperty(Color.prototype, 'a', {
				get: function get() {
					return this.__state.a;
				},

				set: function set(v) {
					this.__state.a = v;
				}
			});

			Object.defineProperty(Color.prototype, 'hex', {
				get: function get() {
					if (!this.__state.space !== 'HEX') {
						this.__state.hex = _math2.default.rgb_to_hex(this.r, this.g, this.b);
					}

					return this.__state.hex;
				},

				set: function set(v) {
					this.__state.space = 'HEX';
					this.__state.hex = v;
				}
			});

			exports.default = Color;
			module.exports = exports['default'];

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _toString = __webpack_require__(4);

			var _toString2 = _interopRequireDefault(_toString);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			var INTERPRETATIONS = [
			// Strings
			{
				litmus: _common2.default.isString,
				conversions: {
					THREE_CHAR_HEX: {
						read: function read(original) {
							var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
							if (test === null) {
								return false;
							}

							return {
								space: 'HEX',
								hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
							};
						},

						write: _toString2.default
					},

					SIX_CHAR_HEX: {
						read: function read(original) {
							var test = original.match(/^#([A-F0-9]{6})$/i);
							if (test === null) {
								return false;
							}

							return {
								space: 'HEX',
								hex: parseInt('0x' + test[1].toString(), 0)
							};
						},

						write: _toString2.default
					},

					CSS_RGB: {
						read: function read(original) {
							var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
							if (test === null) {
								return false;
							}

							return {
								space: 'RGB',
								r: parseFloat(test[1]),
								g: parseFloat(test[2]),
								b: parseFloat(test[3])
							};
						},

						write: _toString2.default
					},

					CSS_RGBA: {
						read: function read(original) {
							var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
							if (test === null) {
								return false;
							}

							return {
								space: 'RGB',
								r: parseFloat(test[1]),
								g: parseFloat(test[2]),
								b: parseFloat(test[3]),
								a: parseFloat(test[4])
							};
						},

						write: _toString2.default
					}
				}
			},

			// Numbers
			{
				litmus: _common2.default.isNumber,

				conversions: {

					HEX: {
						read: function read(original) {
							return {
								space: 'HEX',
								hex: original,
								conversionName: 'HEX'
							};
						},

						write: function write(color) {
							return color.hex;
						}
					}

				}

			},

			// Arrays
			{
				litmus: _common2.default.isArray,
				conversions: {
					RGB_ARRAY: {
						read: function read(original) {
							if (original.length !== 3) {
								return false;
							}

							return {
								space: 'RGB',
								r: original[0],
								g: original[1],
								b: original[2]
							};
						},

						write: function write(color) {
							return [color.r, color.g, color.b];
						}
					},

					RGBA_ARRAY: {
						read: function read(original) {
							if (original.length !== 4) return false;
							return {
								space: 'RGB',
								r: original[0],
								g: original[1],
								b: original[2],
								a: original[3]
							};
						},

						write: function write(color) {
							return [color.r, color.g, color.b, color.a];
						}
					}
				}
			},

			// Objects
			{
				litmus: _common2.default.isObject,
				conversions: {

					RGBA_OBJ: {
						read: function read(original) {
							if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b) && _common2.default.isNumber(original.a)) {
								return {
									space: 'RGB',
									r: original.r,
									g: original.g,
									b: original.b,
									a: original.a
								};
							}
							return false;
						},

						write: function write(color) {
							return {
								r: color.r,
								g: color.g,
								b: color.b,
								a: color.a
							};
						}
					},

					RGB_OBJ: {
						read: function read(original) {
							if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b)) {
								return {
									space: 'RGB',
									r: original.r,
									g: original.g,
									b: original.b
								};
							}
							return false;
						},

						write: function write(color) {
							return {
								r: color.r,
								g: color.g,
								b: color.b
							};
						}
					},

					HSVA_OBJ: {
						read: function read(original) {
							if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v) && _common2.default.isNumber(original.a)) {
								return {
									space: 'HSV',
									h: original.h,
									s: original.s,
									v: original.v,
									a: original.a
								};
							}
							return false;
						},

						write: function write(color) {
							return {
								h: color.h,
								s: color.s,
								v: color.v,
								a: color.a
							};
						}
					},

					HSV_OBJ: {
						read: function read(original) {
							if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v)) {
								return {
									space: 'HSV',
									h: original.h,
									s: original.s,
									v: original.v
								};
							}
							return false;
						},

						write: function write(color) {
							return {
								h: color.h,
								s: color.s,
								v: color.v
							};
						}
					}
				}
			}];

			var result = void 0;
			var toReturn = void 0;

			var interpret = function interpret() {
				toReturn = false;

				var original = arguments.length > 1 ? _common2.default.toArray(arguments) : arguments[0];
				_common2.default.each(INTERPRETATIONS, function (family) {
					if (family.litmus(original)) {
						_common2.default.each(family.conversions, function (conversion, conversionName) {
							result = conversion.read(original);

							if (toReturn === false && result !== false) {
								toReturn = result;
								result.conversionName = conversionName;
								result.conversion = conversion;
								return _common2.default.BREAK;
							}
						});

						return _common2.default.BREAK;
					}
				});

				return toReturn;
			};

			exports.default = interpret;
			module.exports = exports['default'];

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports.default = function (color, forceCSSHex) {
				var colorFormat = color.__state.conversionName.toString();

				var r = Math.round(color.r);
				var g = Math.round(color.g);
				var b = Math.round(color.b);
				var a = color.a;
				var h = Math.round(color.h);
				var s = color.s.toFixed(1);
				var v = color.v.toFixed(1);

				if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
					var str = color.hex.toString(16);
					while (str.length < 6) {
						str = '0' + str;
					}
					return '#' + str;
				} else if (colorFormat === 'CSS_RGB') {
					return 'rgb(' + r + ',' + g + ',' + b + ')';
				} else if (colorFormat === 'CSS_RGBA') {
					return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
				} else if (colorFormat === 'HEX') {
					return '0x' + color.hex.toString(16);
				} else if (colorFormat === 'RGB_ARRAY') {
					return '[' + r + ',' + g + ',' + b + ']';
				} else if (colorFormat === 'RGBA_ARRAY') {
					return '[' + r + ',' + g + ',' + b + ',' + a + ']';
				} else if (colorFormat === 'RGB_OBJ') {
					return '{r:' + r + ',g:' + g + ',b:' + b + '}';
				} else if (colorFormat === 'RGBA_OBJ') {
					return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
				} else if (colorFormat === 'HSV_OBJ') {
					return '{h:' + h + ',s:' + s + ',v:' + v + '}';
				} else if (colorFormat === 'HSVA_OBJ') {
					return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
				}

				return 'unknown format';
			};

			module.exports = exports['default']; /**
                                         * dat-gui JavaScript Controller Library
                                         * http://code.google.com/p/dat-gui
                                         *
                                         * Copyright 2011 Data Arts Team, Google Creative Lab
                                         *
                                         * Licensed under the Apache License, Version 2.0 (the "License");
                                         * you may not use this file except in compliance with the License.
                                         * You may obtain a copy of the License at
                                         *
                                         * http://www.apache.org/licenses/LICENSE-2.0
                                         */

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;
			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			var ARR_EACH = Array.prototype.forEach;
			var ARR_SLICE = Array.prototype.slice;

			/**
    * Band-aid methods for things that should be a lot easier in JavaScript.
    * Implementation and structure inspired by underscore.js
    * http://documentcloud.github.com/underscore/
    */

			var Common = {
				BREAK: {},

				extend: function extend(target) {
					this.each(ARR_SLICE.call(arguments, 1), function (obj) {
						var keys = this.isObject(obj) ? Object.keys(obj) : [];
						keys.forEach(function (key) {
							if (!this.isUndefined(obj[key])) {
								target[key] = obj[key];
							}
						}.bind(this));
					}, this);

					return target;
				},

				defaults: function defaults(target) {
					this.each(ARR_SLICE.call(arguments, 1), function (obj) {
						var keys = this.isObject(obj) ? Object.keys(obj) : [];
						keys.forEach(function (key) {
							if (this.isUndefined(target[key])) {
								target[key] = obj[key];
							}
						}.bind(this));
					}, this);

					return target;
				},

				compose: function compose() {
					var toCall = ARR_SLICE.call(arguments);
					return function () {
						var args = ARR_SLICE.call(arguments);
						for (var i = toCall.length - 1; i >= 0; i--) {
							args = [toCall[i].apply(this, args)];
						}
						return args[0];
					};
				},

				each: function each(obj, itr, scope) {
					if (!obj) {
						return;
					}

					if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
						obj.forEach(itr, scope);
					} else if (obj.length === obj.length + 0) {
						// Is number but not NaN
						var key = void 0;
						var l = void 0;
						for (key = 0, l = obj.length; key < l; key++) {
							if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
								return;
							}
						}
					} else {
						for (var _key in obj) {
							if (itr.call(scope, obj[_key], _key) === this.BREAK) {
								return;
							}
						}
					}
				},

				defer: function defer(fnc) {
					setTimeout(fnc, 0);
				},

				// if the function is called repeatedly, wait until threshold passes until we execute the function
				debounce: function debounce(func, threshold, callImmediately) {
					var timeout = void 0;

					return function () {
						var obj = this;
						var args = arguments;
						function delayed() {
							timeout = null;
							if (!callImmediately) func.apply(obj, args);
						}

						var callNow = callImmediately || !timeout;

						clearTimeout(timeout);
						timeout = setTimeout(delayed, threshold);

						if (callNow) {
							func.apply(obj, args);
						}
					};
				},

				toArray: function toArray(obj) {
					if (obj.toArray) return obj.toArray();
					return ARR_SLICE.call(obj);
				},

				isUndefined: function isUndefined(obj) {
					return obj === undefined;
				},

				isNull: function isNull(obj) {
					return obj === null;
				},

				isNaN: function (_isNaN) {
					function isNaN(_x) {
						return _isNaN.apply(this, arguments);
					}

					isNaN.toString = function () {
						return _isNaN.toString();
					};

					return isNaN;
				}(function (obj) {
					return isNaN(obj);
				}),

				isArray: Array.isArray || function (obj) {
					return obj.constructor === Array;
				},

				isObject: function isObject(obj) {
					return obj === Object(obj);
				},

				isNumber: function isNumber(obj) {
					return obj === obj + 0;
				},

				isString: function isString(obj) {
					return obj === obj + '';
				},

				isBoolean: function isBoolean(obj) {
					return obj === false || obj === true;
				},

				isFunction: function isFunction(obj) {
					return Object.prototype.toString.call(obj) === '[object Function]';
				}

			};

			exports.default = Common;
			module.exports = exports['default'];

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			"use strict";

			exports.__esModule = true;
			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			var tmpComponent = void 0;

			var ColorMath = {
				hsv_to_rgb: function hsv_to_rgb(h, s, v) {
					var hi = Math.floor(h / 60) % 6;

					var f = h / 60 - Math.floor(h / 60);
					var p = v * (1.0 - s);
					var q = v * (1.0 - f * s);
					var t = v * (1.0 - (1.0 - f) * s);

					var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];

					return {
						r: c[0] * 255,
						g: c[1] * 255,
						b: c[2] * 255
					};
				},

				rgb_to_hsv: function rgb_to_hsv(r, g, b) {
					var min = Math.min(r, g, b);
					var max = Math.max(r, g, b);
					var delta = max - min;
					var h = void 0;
					var s = void 0;

					if (max !== 0) {
						s = delta / max;
					} else {
						return {
							h: NaN,
							s: 0,
							v: 0
						};
					}

					if (r === max) {
						h = (g - b) / delta;
					} else if (g === max) {
						h = 2 + (b - r) / delta;
					} else {
						h = 4 + (r - g) / delta;
					}
					h /= 6;
					if (h < 0) {
						h += 1;
					}

					return {
						h: h * 360,
						s: s,
						v: max / 255
					};
				},

				rgb_to_hex: function rgb_to_hex(r, g, b) {
					var hex = this.hex_with_component(0, 2, r);
					hex = this.hex_with_component(hex, 1, g);
					hex = this.hex_with_component(hex, 0, b);
					return hex;
				},

				component_from_hex: function component_from_hex(hex, componentIndex) {
					return hex >> componentIndex * 8 & 0xFF;
				},

				hex_with_component: function hex_with_component(hex, componentIndex, value) {
					return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
				}
			};

			exports.default = ColorMath;
			module.exports = exports["default"];

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			/**
    * @class An "abstract" class that represents a given property of an object.
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    *
    * @member dat.controllers
    */
			var Controller = function () {
				function Controller(object, property) {
					_classCallCheck(this, Controller);

					this.initialValue = object[property];

					/**
      * Those who extend this class will put their DOM elements in here.
      * @type {DOMElement}
      */
					this.domElement = document.createElement('div');

					/**
      * The object to manipulate
      * @type {Object}
      */
					this.object = object;

					/**
      * The name of the property to manipulate
      * @type {String}
      */
					this.property = property;

					/**
      * The function to be called on change.
      * @type {Function}
      * @ignore
      */
					this.__onChange = undefined;

					/**
      * The function to be called on finishing change.
      * @type {Function}
      * @ignore
      */
					this.__onFinishChange = undefined;
				}

				/**
     * Specify that a function fire every time someone changes the value with
     * this Controller.
     *
     * @param {Function} fnc This function will be called whenever the value
     * is modified via this Controller.
     * @returns {Controller} this
     */

				Controller.prototype.onChange = function onChange(fnc) {
					this.__onChange = fnc;
					return this;
				};

				/**
     * Specify that a function fire every time someone "finishes" changing
     * the value wih this Controller. Useful for values that change
     * incrementally like numbers or strings.
     *
     * @param {Function} fnc This function will be called whenever
     * someone "finishes" changing the value via this Controller.
     * @returns {Controller} this
     */

				Controller.prototype.onFinishChange = function onFinishChange(fnc) {
					this.__onFinishChange = fnc;
					return this;
				};

				/**
     * Change the value of <code>object[property]</code>
     *
     * @param {Object} newValue The new value of <code>object[property]</code>
     */

				Controller.prototype.setValue = function setValue(newValue) {
					this.object[this.property] = newValue;
					if (this.__onChange) {
						this.__onChange.call(this, newValue);
					}

					this.updateDisplay();
					return this;
				};

				/**
     * Gets the value of <code>object[property]</code>
     *
     * @returns {Object} The current value of <code>object[property]</code>
     */

				Controller.prototype.getValue = function getValue() {
					return this.object[this.property];
				};

				/**
     * Refreshes the visual display of a Controller in order to keep sync
     * with the object's current value.
     * @returns {Controller} this
     */

				Controller.prototype.updateDisplay = function updateDisplay() {
					return this;
				};

				/**
     * @returns {Boolean} true if the value has deviated from initialValue
     */

				Controller.prototype.isModified = function isModified() {
					return this.initialValue !== this.getValue();
				};

				return Controller;
			}();

			exports.default = Controller;
			module.exports = exports['default'];

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			/**
    * @class Provides a checkbox input to alter the boolean property of an object.
    * @extends dat.controllers.Controller
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    *
    * @member dat.controllers
    */
			var BooleanController = function (_Controller) {
				_inherits(BooleanController, _Controller);

				function BooleanController(object, property) {
					_classCallCheck(this, BooleanController);

					var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					var _this = _this2;
					_this2.__prev = _this2.getValue();

					_this2.__checkbox = document.createElement('input');
					_this2.__checkbox.setAttribute('type', 'checkbox');

					function onChange() {
						_this.setValue(!_this.__prev);
					}

					_dom2.default.bind(_this2.__checkbox, 'change', onChange, false);

					_this2.domElement.appendChild(_this2.__checkbox);

					// Match original value
					_this2.updateDisplay();
					return _this2;
				}

				BooleanController.prototype.setValue = function setValue(v) {
					var toReturn = _Controller.prototype.setValue.call(this, v);
					if (this.__onFinishChange) {
						this.__onFinishChange.call(this, this.getValue());
					}
					this.__prev = this.getValue();
					return toReturn;
				};

				BooleanController.prototype.updateDisplay = function updateDisplay() {
					if (this.getValue() === true) {
						this.__checkbox.setAttribute('checked', 'checked');
						this.__checkbox.checked = true;
						this.__prev = true;
					} else {
						this.__checkbox.checked = false;
						this.__prev = false;
					}

					return _Controller.prototype.updateDisplay.call(this);
				};

				return BooleanController;
			}(_Controller3.default);

			exports.default = BooleanController;
			module.exports = exports['default'];

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var EVENT_MAP = {
				HTMLEvents: ['change'],
				MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
				KeyboardEvents: ['keydown']
			}; /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

			var EVENT_MAP_INV = {};
			_common2.default.each(EVENT_MAP, function (v, k) {
				_common2.default.each(v, function (e) {
					EVENT_MAP_INV[e] = k;
				});
			});

			var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

			function cssValueToPixels(val) {
				if (val === '0' || _common2.default.isUndefined(val)) {
					return 0;
				}

				var match = val.match(CSS_VALUE_PIXELS);

				if (!_common2.default.isNull(match)) {
					return parseFloat(match[1]);
				}

				// TODO ...ems? %?

				return 0;
			}

			/**
    * @namespace
    * @member dat.dom
    */
			var dom = {

				/**
     *
     * @param elem
     * @param selectable
     */
				makeSelectable: function makeSelectable(elem, selectable) {
					if (elem === undefined || elem.style === undefined) return;

					elem.onselectstart = selectable ? function () {
						return false;
					} : function () {};

					elem.style.MozUserSelect = selectable ? 'auto' : 'none';
					elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
					elem.unselectable = selectable ? 'on' : 'off';
				},

				/**
     *
     * @param elem
     * @param horizontal
     * @param vert
     */
				makeFullscreen: function makeFullscreen(elem, hor, vert) {
					var vertical = vert;
					var horizontal = hor;

					if (_common2.default.isUndefined(horizontal)) {
						horizontal = true;
					}

					if (_common2.default.isUndefined(vertical)) {
						vertical = true;
					}

					elem.style.position = 'absolute';

					if (horizontal) {
						elem.style.left = 0;
						elem.style.right = 0;
					}
					if (vertical) {
						elem.style.top = 0;
						elem.style.bottom = 0;
					}
				},

				/**
     *
     * @param elem
     * @param eventType
     * @param params
     */
				fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
					var params = pars || {};
					var className = EVENT_MAP_INV[eventType];
					if (!className) {
						throw new Error('Event type ' + eventType + ' not supported.');
					}
					var evt = document.createEvent(className);
					switch (className) {
						case 'MouseEvents':
							{
								var clientX = params.x || params.clientX || 0;
								var clientY = params.y || params.clientY || 0;
								evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, // screen X
								0, // screen Y
								clientX, // client X
								clientY, // client Y
								false, false, false, false, 0, null);
								break;
							}
						case 'KeyboardEvents':
							{
								var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
								_common2.default.defaults(params, {
									cancelable: true,
									ctrlKey: false,
									altKey: false,
									shiftKey: false,
									metaKey: false,
									keyCode: undefined,
									charCode: undefined
								});
								init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
								break;
							}
						default:
							{
								evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
								break;
							}
					}
					_common2.default.defaults(evt, aux);
					elem.dispatchEvent(evt);
				},

				/**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
				bind: function bind(elem, event, func, newBool) {
					var bool = newBool || false;
					if (elem.addEventListener) {
						elem.addEventListener(event, func, bool);
					} else if (elem.attachEvent) {
						elem.attachEvent('on' + event, func);
					}
					return dom;
				},

				/**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
				unbind: function unbind(elem, event, func, newBool) {
					var bool = newBool || false;
					if (elem.removeEventListener) {
						elem.removeEventListener(event, func, bool);
					} else if (elem.detachEvent) {
						elem.detachEvent('on' + event, func);
					}
					return dom;
				},

				/**
     *
     * @param elem
     * @param className
     */
				addClass: function addClass(elem, className) {
					if (elem.className === undefined) {
						elem.className = className;
					} else if (elem.className !== className) {
						var classes = elem.className.split(/ +/);
						if (classes.indexOf(className) === -1) {
							classes.push(className);
							elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
						}
					}
					return dom;
				},

				/**
     *
     * @param elem
     * @param className
     */
				removeClass: function removeClass(elem, className) {
					if (className) {
						if (elem.className === className) {
							elem.removeAttribute('class');
						} else {
							var classes = elem.className.split(/ +/);
							var index = classes.indexOf(className);
							if (index !== -1) {
								classes.splice(index, 1);
								elem.className = classes.join(' ');
							}
						}
					} else {
						elem.className = undefined;
					}
					return dom;
				},

				hasClass: function hasClass(elem, className) {
					return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
				},

				/**
     *
     * @param elem
     */
				getWidth: function getWidth(elem) {
					var style = getComputedStyle(elem);

					return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
				},

				/**
     *
     * @param elem
     */
				getHeight: function getHeight(elem) {
					var style = getComputedStyle(elem);

					return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
				},

				/**
     *
     * @param el
     */
				getOffset: function getOffset(el) {
					var elem = el;
					var offset = { left: 0, top: 0 };
					if (elem.offsetParent) {
						do {
							offset.left += elem.offsetLeft;
							offset.top += elem.offsetTop;
							elem = elem.offsetParent;
						} while (elem);
					}
					return offset;
				},

				// http://stackoverflow.com/posts/2684561/revisions
				/**
     *
     * @param elem
     */
				isActive: function isActive(elem) {
					return elem === document.activeElement && (elem.type || elem.href);
				}

			};

			exports.default = dom;
			module.exports = exports['default'];

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			/**
    * @class Provides a select input to alter the property of an object, using a
    * list of accepted values.
    *
    * @extends dat.controllers.Controller
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    * @param {Object|string[]} options A map of labels to acceptable values, or
    * a list of acceptable string values.
    *
    * @member dat.controllers
    */
			var OptionController = function (_Controller) {
				_inherits(OptionController, _Controller);

				function OptionController(object, property, opts) {
					_classCallCheck(this, OptionController);

					var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					var options = opts;

					var _this = _this2;

					/**
      * The drop down menu
      * @ignore
      */
					_this2.__select = document.createElement('select');

					if (_common2.default.isArray(options)) {
						var map = {};
						_common2.default.each(options, function (element) {
							map[element] = element;
						});
						options = map;
					}

					_common2.default.each(options, function (value, key) {
						var opt = document.createElement('option');
						opt.innerHTML = key;
						opt.setAttribute('value', value);
						_this.__select.appendChild(opt);
					});

					// Acknowledge original value
					_this2.updateDisplay();

					_dom2.default.bind(_this2.__select, 'change', function () {
						var desiredValue = this.options[this.selectedIndex].value;
						_this.setValue(desiredValue);
					});

					_this2.domElement.appendChild(_this2.__select);
					return _this2;
				}

				OptionController.prototype.setValue = function setValue(v) {
					var toReturn = _Controller.prototype.setValue.call(this, v);

					if (this.__onFinishChange) {
						this.__onFinishChange.call(this, this.getValue());
					}
					return toReturn;
				};

				OptionController.prototype.updateDisplay = function updateDisplay() {
					if (_dom2.default.isActive(this.__select)) return this; // prevent number from updating if user is trying to manually update
					this.__select.value = this.getValue();
					return _Controller.prototype.updateDisplay.call(this);
				};

				return OptionController;
			}(_Controller3.default);

			exports.default = OptionController;
			module.exports = exports['default'];

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			/**
    * @class Provides a text input to alter the string property of an object.
    *
    * @extends dat.controllers.Controller
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    *
    * @member dat.controllers
    */
			var StringController = function (_Controller) {
				_inherits(StringController, _Controller);

				function StringController(object, property) {
					_classCallCheck(this, StringController);

					var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					var _this = _this2;

					function onChange() {
						_this.setValue(_this.__input.value);
					}

					function onBlur() {
						if (_this.__onFinishChange) {
							_this.__onFinishChange.call(_this, _this.getValue());
						}
					}

					_this2.__input = document.createElement('input');
					_this2.__input.setAttribute('type', 'text');

					_dom2.default.bind(_this2.__input, 'keyup', onChange);
					_dom2.default.bind(_this2.__input, 'change', onChange);
					_dom2.default.bind(_this2.__input, 'blur', onBlur);
					_dom2.default.bind(_this2.__input, 'keydown', function (e) {
						if (e.keyCode === 13) {
							this.blur();
						}
					});

					_this2.updateDisplay();

					_this2.domElement.appendChild(_this2.__input);
					return _this2;
				}

				StringController.prototype.updateDisplay = function updateDisplay() {
					// Stops the caret from moving on account of:
					// keyup -> setValue -> updateDisplay
					if (!_dom2.default.isActive(this.__input)) {
						this.__input.value = this.getValue();
					}
					return _Controller.prototype.updateDisplay.call(this);
				};

				return StringController;
			}(_Controller3.default);

			exports.default = StringController;
			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			function numDecimals(x) {
				var _x = x.toString();
				if (_x.indexOf('.') > -1) {
					return _x.length - _x.indexOf('.') - 1;
				}

				return 0;
			}

			/**
    * @class Represents a given property of an object that is a number.
    *
    * @extends dat.controllers.Controller
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    * @param {Object} [params] Optional parameters
    * @param {Number} [params.min] Minimum allowed value
    * @param {Number} [params.max] Maximum allowed value
    * @param {Number} [params.step] Increment by which to change value
    *
    * @member dat.controllers
    */

			var NumberController = function (_Controller) {
				_inherits(NumberController, _Controller);

				function NumberController(object, property, params) {
					_classCallCheck(this, NumberController);

					var _this = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					var _params = params || {};

					_this.__min = _params.min;
					_this.__max = _params.max;
					_this.__step = _params.step;

					if (_common2.default.isUndefined(_this.__step)) {
						if (_this.initialValue === 0) {
							_this.__impliedStep = 1; // What are we, psychics?
						} else {
							// Hey Doug, check this out.
							_this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
						}
					} else {
						_this.__impliedStep = _this.__step;
					}

					_this.__precision = numDecimals(_this.__impliedStep);
					return _this;
				}

				NumberController.prototype.setValue = function setValue(v) {
					var _v = v;

					if (this.__min !== undefined && _v < this.__min) {
						_v = this.__min;
					} else if (this.__max !== undefined && _v > this.__max) {
						_v = this.__max;
					}

					if (this.__step !== undefined && _v % this.__step !== 0) {
						_v = Math.round(_v / this.__step) * this.__step;
					}

					return _Controller.prototype.setValue.call(this, _v);
				};

				/**
     * Specify a minimum value for <code>object[property]</code>.
     *
     * @param {Number} minValue The minimum value for
     * <code>object[property]</code>
     * @returns {dat.controllers.NumberController} this
     */

				NumberController.prototype.min = function min(v) {
					this.__min = v;
					return this;
				};

				/**
     * Specify a maximum value for <code>object[property]</code>.
     *
     * @param {Number} maxValue The maximum value for
     * <code>object[property]</code>
     * @returns {dat.controllers.NumberController} this
     */

				NumberController.prototype.max = function max(v) {
					this.__max = v;
					return this;
				};

				/**
     * Specify a step value that dat.controllers.NumberController
     * increments by.
     *
     * @param {Number} stepValue The step value for
     * dat.controllers.NumberController
     * @default if minimum and maximum specified increment is 1% of the
     * difference otherwise stepValue is 1
     * @returns {dat.controllers.NumberController} this
     */

				NumberController.prototype.step = function step(v) {
					this.__step = v;
					this.__impliedStep = v;
					this.__precision = numDecimals(v);
					return this;
				};

				return NumberController;
			}(_Controller3.default);

			exports.default = NumberController;
			module.exports = exports['default'];

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _NumberController2 = __webpack_require__(12);

			var _NumberController3 = _interopRequireDefault(_NumberController2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			function roundToDecimal(value, decimals) {
				var tenTo = Math.pow(10, decimals);
				return Math.round(value * tenTo) / tenTo;
			}

			/**
    * @class Represents a given property of an object that is a number and
    * provides an input element with which to manipulate it.
    *
    * @extends dat.controllers.Controller
    * @extends dat.controllers.NumberController
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    * @param {Object} [params] Optional parameters
    * @param {Number} [params.min] Minimum allowed value
    * @param {Number} [params.max] Maximum allowed value
    * @param {Number} [params.step] Increment by which to change value
    *
    * @member dat.controllers
    */

			var NumberControllerBox = function (_NumberController) {
				_inherits(NumberControllerBox, _NumberController);

				function NumberControllerBox(object, property, params) {
					_classCallCheck(this, NumberControllerBox);

					var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, params));

					_this2.__truncationSuspended = false;

					var _this = _this2;

					/**
      * {Number} Previous mouse y position
      * @ignore
      */
					var prevY = void 0;

					function onChange() {
						var attempted = parseFloat(_this.__input.value);
						if (!_common2.default.isNaN(attempted)) {
							_this.setValue(attempted);
						}
					}

					function onFinish() {
						if (_this.__onFinishChange) {
							_this.__onFinishChange.call(_this, _this.getValue());
						}
					}

					function onBlur() {
						onFinish();
					}

					function onMouseDrag(e) {
						var diff = prevY - e.clientY;
						_this.setValue(_this.getValue() + diff * _this.__impliedStep);

						prevY = e.clientY;
					}

					function onMouseUp() {
						_dom2.default.unbind(window, 'mousemove', onMouseDrag);
						_dom2.default.unbind(window, 'mouseup', onMouseUp);
						onFinish();
					}

					function onMouseDown(e) {
						_dom2.default.bind(window, 'mousemove', onMouseDrag);
						_dom2.default.bind(window, 'mouseup', onMouseUp);
						prevY = e.clientY;
					}

					_this2.__input = document.createElement('input');
					_this2.__input.setAttribute('type', 'text');

					// Makes it so manually specified values are not truncated.

					_dom2.default.bind(_this2.__input, 'change', onChange);
					_dom2.default.bind(_this2.__input, 'blur', onBlur);
					_dom2.default.bind(_this2.__input, 'mousedown', onMouseDown);
					_dom2.default.bind(_this2.__input, 'keydown', function (e) {
						// When pressing enter, you can be as precise as you want.
						if (e.keyCode === 13) {
							_this.__truncationSuspended = true;
							this.blur();
							_this.__truncationSuspended = false;
							onFinish();
						}
					});

					_this2.updateDisplay();

					_this2.domElement.appendChild(_this2.__input);
					return _this2;
				}

				NumberControllerBox.prototype.updateDisplay = function updateDisplay() {
					this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
					return _NumberController.prototype.updateDisplay.call(this);
				};

				return NumberControllerBox;
			}(_NumberController3.default);

			exports.default = NumberControllerBox;
			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _NumberController2 = __webpack_require__(12);

			var _NumberController3 = _interopRequireDefault(_NumberController2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			function map(v, i1, i2, o1, o2) {
				return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
			}

			/**
    * @class Represents a given property of an object that is a number, contains
    * a minimum and maximum, and provides a slider element with which to
    * manipulate it. It should be noted that the slider element is made up of
    * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
    * <code>&lt;slider&gt;</code> element.
    *
    * @extends dat.controllers.Controller
    * @extends dat.controllers.NumberController
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    * @param {Number} minValue Minimum allowed value
    * @param {Number} maxValue Maximum allowed value
    * @param {Number} stepValue Increment by which to change value
    *
    * @member dat.controllers
    */

			var NumberControllerSlider = function (_NumberController) {
				_inherits(NumberControllerSlider, _NumberController);

				function NumberControllerSlider(object, property, min, max, step) {
					_classCallCheck(this, NumberControllerSlider);

					var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, { min: min, max: max, step: step }));

					var _this = _this2;

					_this2.__background = document.createElement('div');
					_this2.__foreground = document.createElement('div');

					_dom2.default.bind(_this2.__background, 'mousedown', onMouseDown);

					_dom2.default.addClass(_this2.__background, 'slider');
					_dom2.default.addClass(_this2.__foreground, 'slider-fg');

					function onMouseDown(e) {
						document.activeElement.blur();

						_dom2.default.bind(window, 'mousemove', onMouseDrag);
						_dom2.default.bind(window, 'mouseup', onMouseUp);

						onMouseDrag(e);
					}

					function onMouseDrag(e) {
						e.preventDefault();

						var bgRect = _this.__background.getBoundingClientRect();

						_this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));

						return false;
					}

					function onMouseUp() {
						_dom2.default.unbind(window, 'mousemove', onMouseDrag);
						_dom2.default.unbind(window, 'mouseup', onMouseUp);
						if (_this.__onFinishChange) {
							_this.__onFinishChange.call(_this, _this.getValue());
						}
					}

					_this2.updateDisplay();

					_this2.__background.appendChild(_this2.__foreground);
					_this2.domElement.appendChild(_this2.__background);
					return _this2;
				}

				NumberControllerSlider.prototype.updateDisplay = function updateDisplay() {
					var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
					this.__foreground.style.width = pct * 100 + '%';
					return _NumberController.prototype.updateDisplay.call(this);
				};

				return NumberControllerSlider;
			}(_NumberController3.default);

			exports.default = NumberControllerSlider;
			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			/**
    * @class Provides a GUI interface to fire a specified method, a property of an object.
    *
    * @extends dat.controllers.Controller
    *
    * @param {Object} object The object to be manipulated
    * @param {string} property The name of the property to be manipulated
    *
    * @member dat.controllers
    */
			var FunctionController = function (_Controller) {
				_inherits(FunctionController, _Controller);

				function FunctionController(object, property, text) {
					_classCallCheck(this, FunctionController);

					var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					var _this = _this2;

					_this2.__button = document.createElement('div');
					_this2.__button.innerHTML = text === undefined ? 'Fire' : text;

					_dom2.default.bind(_this2.__button, 'click', function (e) {
						e.preventDefault();
						_this.fire();
						return false;
					});

					_dom2.default.addClass(_this2.__button, 'button');

					_this2.domElement.appendChild(_this2.__button);
					return _this2;
				}

				FunctionController.prototype.fire = function fire() {
					if (this.__onChange) {
						this.__onChange.call(this);
					}
					this.getValue().call(this.object);
					if (this.__onFinishChange) {
						this.__onFinishChange.call(this, this.getValue());
					}
				};

				return FunctionController;
			}(_Controller3.default);

			exports.default = FunctionController;
			module.exports = exports['default'];

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _Controller2 = __webpack_require__(7);

			var _Controller3 = _interopRequireDefault(_Controller2);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _Color = __webpack_require__(2);

			var _Color2 = _interopRequireDefault(_Color);

			var _interpret = __webpack_require__(3);

			var _interpret2 = _interopRequireDefault(_interpret);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			var ColorController = function (_Controller) {
				_inherits(ColorController, _Controller);

				function ColorController(object, property) {
					_classCallCheck(this, ColorController);

					var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

					_this2.__color = new _Color2.default(_this2.getValue());
					_this2.__temp = new _Color2.default(0);

					var _this = _this2;

					_this2.domElement = document.createElement('div');

					_dom2.default.makeSelectable(_this2.domElement, false);

					_this2.__selector = document.createElement('div');
					_this2.__selector.className = 'selector';

					_this2.__saturation_field = document.createElement('div');
					_this2.__saturation_field.className = 'saturation-field';

					_this2.__field_knob = document.createElement('div');
					_this2.__field_knob.className = 'field-knob';
					_this2.__field_knob_border = '2px solid ';

					_this2.__hue_knob = document.createElement('div');
					_this2.__hue_knob.className = 'hue-knob';

					_this2.__hue_field = document.createElement('div');
					_this2.__hue_field.className = 'hue-field';

					_this2.__input = document.createElement('input');
					_this2.__input.type = 'text';
					_this2.__input_textShadow = '0 1px 1px ';

					_dom2.default.bind(_this2.__input, 'keydown', function (e) {
						if (e.keyCode === 13) {
							// on enter
							onBlur.call(this);
						}
					});

					_dom2.default.bind(_this2.__input, 'blur', onBlur);

					_dom2.default.bind(_this2.__selector, 'mousedown', function () /* e */{
						_dom2.default.addClass(this, 'drag').bind(window, 'mouseup', function () /* e */{
							_dom2.default.removeClass(_this.__selector, 'drag');
						});
					});

					var valueField = document.createElement('div');

					_common2.default.extend(_this2.__selector.style, {
						width: '122px',
						height: '102px',
						padding: '3px',
						backgroundColor: '#222',
						boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
					});

					_common2.default.extend(_this2.__field_knob.style, {
						position: 'absolute',
						width: '12px',
						height: '12px',
						border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
						boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
						borderRadius: '12px',
						zIndex: 1
					});

					_common2.default.extend(_this2.__hue_knob.style, {
						position: 'absolute',
						width: '15px',
						height: '2px',
						borderRight: '4px solid #fff',
						zIndex: 1
					});

					_common2.default.extend(_this2.__saturation_field.style, {
						width: '100px',
						height: '100px',
						border: '1px solid #555',
						marginRight: '3px',
						display: 'inline-block',
						cursor: 'pointer'
					});

					_common2.default.extend(valueField.style, {
						width: '100%',
						height: '100%',
						background: 'none'
					});

					linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');

					_common2.default.extend(_this2.__hue_field.style, {
						width: '15px',
						height: '100px',
						border: '1px solid #555',
						cursor: 'ns-resize',
						position: 'absolute',
						top: '3px',
						right: '3px'
					});

					hueGradient(_this2.__hue_field);

					_common2.default.extend(_this2.__input.style, {
						outline: 'none',
						//      width: '120px',
						textAlign: 'center',
						//      padding: '4px',
						//      marginBottom: '6px',
						color: '#fff',
						border: 0,
						fontWeight: 'bold',
						textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
					});

					_dom2.default.bind(_this2.__saturation_field, 'mousedown', fieldDown);
					_dom2.default.bind(_this2.__field_knob, 'mousedown', fieldDown);

					_dom2.default.bind(_this2.__hue_field, 'mousedown', function (e) {
						setH(e);
						_dom2.default.bind(window, 'mousemove', setH);
						_dom2.default.bind(window, 'mouseup', fieldUpH);
					});

					function fieldDown(e) {
						setSV(e);
						// document.body.style.cursor = 'none';
						_dom2.default.bind(window, 'mousemove', setSV);
						_dom2.default.bind(window, 'mouseup', fieldUpSV);
					}

					function fieldUpSV() {
						_dom2.default.unbind(window, 'mousemove', setSV);
						_dom2.default.unbind(window, 'mouseup', fieldUpSV);
						// document.body.style.cursor = 'default';
						onFinish();
					}

					function onBlur() {
						var i = (0, _interpret2.default)(this.value);
						if (i !== false) {
							_this.__color.__state = i;
							_this.setValue(_this.__color.toOriginal());
						} else {
							this.value = _this.__color.toString();
						}
					}

					function fieldUpH() {
						_dom2.default.unbind(window, 'mousemove', setH);
						_dom2.default.unbind(window, 'mouseup', fieldUpH);
						onFinish();
					}

					function onFinish() {
						if (_this.__onFinishChange) {
							_this.__onFinishChange.call(_this, _this.__color.toOriginal());
						}
					}

					_this2.__saturation_field.appendChild(valueField);
					_this2.__selector.appendChild(_this2.__field_knob);
					_this2.__selector.appendChild(_this2.__saturation_field);
					_this2.__selector.appendChild(_this2.__hue_field);
					_this2.__hue_field.appendChild(_this2.__hue_knob);

					_this2.domElement.appendChild(_this2.__input);
					_this2.domElement.appendChild(_this2.__selector);

					_this2.updateDisplay();

					function setSV(e) {
						e.preventDefault();

						var fieldRect = _this.__saturation_field.getBoundingClientRect();
						var s = (e.clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
						var v = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

						if (v > 1) {
							v = 1;
						} else if (v < 0) {
							v = 0;
						}

						if (s > 1) {
							s = 1;
						} else if (s < 0) {
							s = 0;
						}

						_this.__color.v = v;
						_this.__color.s = s;

						_this.setValue(_this.__color.toOriginal());

						return false;
					}

					function setH(e) {
						e.preventDefault();

						var fieldRect = _this.__hue_field.getBoundingClientRect();
						var h = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

						if (h > 1) {
							h = 1;
						} else if (h < 0) {
							h = 0;
						}

						_this.__color.h = h * 360;

						_this.setValue(_this.__color.toOriginal());

						return false;
					}
					return _this2;
				}

				ColorController.prototype.updateDisplay = function updateDisplay() {
					var i = (0, _interpret2.default)(this.getValue());

					if (i !== false) {
						var mismatch = false;

						// Check for mismatch on the interpreted value.

						_common2.default.each(_Color2.default.COMPONENTS, function (component) {
							if (!_common2.default.isUndefined(i[component]) && !_common2.default.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
								mismatch = true;
								return {}; // break
							}
						}, this);

						// If nothing diverges, we keep our previous values
						// for statefulness, otherwise we recalculate fresh
						if (mismatch) {
							_common2.default.extend(this.__color.__state, i);
						}
					}

					_common2.default.extend(this.__temp.__state, this.__color.__state);

					this.__temp.a = 1;

					var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
					var _flip = 255 - flip;

					_common2.default.extend(this.__field_knob.style, {
						marginLeft: 100 * this.__color.s - 7 + 'px',
						marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
						backgroundColor: this.__temp.toHexString(),
						border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
					});

					this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';

					this.__temp.s = 1;
					this.__temp.v = 1;

					linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());

					this.__input.value = this.__color.toString();

					_common2.default.extend(this.__input.style, {
						backgroundColor: this.__color.toHexString(),
						color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
						textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
					});
				};

				return ColorController;
			}(_Controller3.default);

			var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

			function linearGradient(elem, x, a, b) {
				elem.style.background = '';
				_common2.default.each(vendors, function (vendor) {
					elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
				});
			}

			function hueGradient(elem) {
				elem.style.background = '';
				elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
				elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
				elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
				elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
				elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
			}

			exports.default = ColorController;
			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
				return typeof obj;
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
			}; /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

			var _css = __webpack_require__(18);

			var _css2 = _interopRequireDefault(_css);

			var _saveDialogue = __webpack_require__(19);

			var _saveDialogue2 = _interopRequireDefault(_saveDialogue);

			var _ControllerFactory = __webpack_require__(20);

			var _ControllerFactory2 = _interopRequireDefault(_ControllerFactory);

			var _Controller = __webpack_require__(7);

			var _Controller2 = _interopRequireDefault(_Controller);

			var _BooleanController = __webpack_require__(8);

			var _BooleanController2 = _interopRequireDefault(_BooleanController);

			var _FunctionController = __webpack_require__(15);

			var _FunctionController2 = _interopRequireDefault(_FunctionController);

			var _NumberControllerBox = __webpack_require__(13);

			var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

			var _NumberControllerSlider = __webpack_require__(14);

			var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

			var _ColorController = __webpack_require__(16);

			var _ColorController2 = _interopRequireDefault(_ColorController);

			var _requestAnimationFrame = __webpack_require__(21);

			var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

			var _CenteredDiv = __webpack_require__(22);

			var _CenteredDiv2 = _interopRequireDefault(_CenteredDiv);

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			var _style = __webpack_require__(23);

			var _style2 = _interopRequireDefault(_style);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			// CSS to embed in build

			_css2.default.inject(_style2.default);

			/** Outer-most className for GUI's */
			var CSS_NAMESPACE = 'dg';

			var HIDE_KEY_CODE = 72;

			/** The only value shared between the JS and SCSS. Use caution. */
			var CLOSE_BUTTON_HEIGHT = 20;

			var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

			var SUPPORTS_LOCAL_STORAGE = function () {
				try {
					return 'localStorage' in window && window.localStorage !== null;
				} catch (e) {
					return false;
				}
			}();

			var SAVE_DIALOGUE = void 0;

			/** Have we yet to create an autoPlace GUI? */
			var autoPlaceVirgin = true;

			/** Fixed position div that auto place GUI's go inside */
			var autoPlaceContainer = void 0;

			/** Are we hiding the GUI's ? */
			var hide = false;

			/** GUI's which should be hidden */
			var hideableGuis = [];

			/**
    * A lightweight controller library for JavaScript. It allows you to easily
    * manipulate variables and fire functions on the fly.
    * @class
    *
    * @member dat.gui
    *
    * @param {Object} [params]
    * @param {String} [params.name] The name of this GUI.
    * @param {Object} [params.load] JSON object representing the saved state of
    * this GUI.
    * @param {Boolean} [params.auto=true]
    * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
    * @param {Boolean} [params.closed] If true, starts closed
    * @param {Boolean} [params.closeOnTop] If true, close/open button shows on top of the GUI
    */
			var GUI = function GUI(pars) {
				var _this = this;

				var params = pars || {};

				/**
     * Outermost DOM Element
     * @type DOMElement
     */
				this.domElement = document.createElement('div');
				this.__ul = document.createElement('ul');
				this.domElement.appendChild(this.__ul);

				_dom2.default.addClass(this.domElement, CSS_NAMESPACE);

				/**
     * Nested GUI's by name
     * @ignore
     */
				this.__folders = {};

				this.__controllers = [];

				/**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
				this.__rememberedObjects = [];

				/**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
       *    propertyName: Controller,
       *    anotherPropertyName: Controller
       *  },
     *  {
       *    propertyName: Controller
       *  }
     * ]
     */
				this.__rememberedObjectIndecesToControllers = [];

				this.__listening = [];

				// Default parameters
				params = _common2.default.defaults(params, {
					closeOnTop: false,
					autoPlace: true,
					width: GUI.DEFAULT_WIDTH
				});

				params = _common2.default.defaults(params, {
					resizable: params.autoPlace,
					hideable: params.autoPlace
				});

				if (!_common2.default.isUndefined(params.load)) {
					// Explicit preset
					if (params.preset) {
						params.load.preset = params.preset;
					}
				} else {
					params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
				}

				if (_common2.default.isUndefined(params.parent) && params.hideable) {
					hideableGuis.push(this);
				}

				// Only root level GUI's are resizable.
				params.resizable = _common2.default.isUndefined(params.parent) && params.resizable;

				if (params.autoPlace && _common2.default.isUndefined(params.scrollable)) {
					params.scrollable = true;
				}
				//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

				// Not part of params because I don't want people passing this in via
				// constructor. Should be a 'remembered' value.
				var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

				var saveToLocalStorage = void 0;

				Object.defineProperties(this,
				/** @lends dat.gui.GUI.prototype */
				{
					/**
      * The parent <code>GUI</code>
      * @type dat.gui.GUI
      */
					parent: {
						get: function get() {
							return params.parent;
						}
					},

					scrollable: {
						get: function get() {
							return params.scrollable;
						}
					},

					/**
      * Handles <code>GUI</code>'s element placement for you
      * @type Boolean
      */
					autoPlace: {
						get: function get() {
							return params.autoPlace;
						}
					},

					/**
      * Handles <code>GUI</code>'s position of open/close button
      * @type Boolean
      */
					closeOnTop: {
						get: function get() {
							return params.closeOnTop;
						}
					},

					/**
      * The identifier for a set of saved values
      * @type String
      */
					preset: {
						get: function get() {
							if (_this.parent) {
								return _this.getRoot().preset;
							}

							return params.load.preset;
						},

						set: function set(v) {
							if (_this.parent) {
								_this.getRoot().preset = v;
							} else {
								params.load.preset = v;
							}
							setPresetSelectIndex(this);
							_this.revert();
						}
					},

					/**
      * The width of <code>GUI</code> element
      * @type Number
      */
					width: {
						get: function get() {
							return params.width;
						},
						set: function set(v) {
							params.width = v;
							setWidth(_this, v);
						}
					},

					/**
      * The name of <code>GUI</code>. Used for folders. i.e
      * a folder's name
      * @type String
      */
					name: {
						get: function get() {
							return params.name;
						},
						set: function set(v) {
							// TODO Check for collisions among sibling folders
							params.name = v;
							if (titleRowName) {
								titleRowName.innerHTML = params.name;
							}
						}
					},

					/**
      * Whether the <code>GUI</code> is collapsed or not
      * @type Boolean
      */
					closed: {
						get: function get() {
							return params.closed;
						},
						set: function set(v) {
							params.closed = v;
							if (params.closed) {
								_dom2.default.addClass(_this.__ul, GUI.CLASS_CLOSED);
							} else {
								_dom2.default.removeClass(_this.__ul, GUI.CLASS_CLOSED);
							}
							// For browsers that aren't going to respect the CSS transition,
							// Lets just check our height against the window height right off
							// the bat.
							this.onResize();

							if (_this.__closeButton) {
								_this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
							}
						}
					},

					/**
      * Contains all presets
      * @type Object
      */
					load: {
						get: function get() {
							return params.load;
						}
					},

					/**
      * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
      * <code>remember</code>ing
      * @type Boolean
      */
					useLocalStorage: {

						get: function get() {
							return useLocalStorage;
						},
						set: function set(bool) {
							if (SUPPORTS_LOCAL_STORAGE) {
								useLocalStorage = bool;
								if (bool) {
									_dom2.default.bind(window, 'unload', saveToLocalStorage);
								} else {
									_dom2.default.unbind(window, 'unload', saveToLocalStorage);
								}
								localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
							}
						}
					}
				});

				// Are we a root level GUI?
				if (_common2.default.isUndefined(params.parent)) {
					params.closed = false;

					_dom2.default.addClass(this.domElement, GUI.CLASS_MAIN);
					_dom2.default.makeSelectable(this.domElement, false);

					// Are we supposed to be loading locally?
					if (SUPPORTS_LOCAL_STORAGE) {
						if (useLocalStorage) {
							_this.useLocalStorage = true;

							var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

							if (savedGui) {
								params.load = JSON.parse(savedGui);
							}
						}
					}

					this.__closeButton = document.createElement('div');
					this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
					_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
					if (params.closeOnTop) {
						_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
						this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
					} else {
						_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
						this.domElement.appendChild(this.__closeButton);
					}

					_dom2.default.bind(this.__closeButton, 'click', function () {
						_this.closed = !_this.closed;
					});
					// Oh, you're a nested GUI!
				} else {
					if (params.closed === undefined) {
						params.closed = true;
					}

					var _titleRowName = document.createTextNode(params.name);
					_dom2.default.addClass(_titleRowName, 'controller-name');

					var titleRow = addRow(_this, _titleRowName);

					var onClickTitle = function onClickTitle(e) {
						e.preventDefault();
						_this.closed = !_this.closed;
						return false;
					};

					_dom2.default.addClass(this.__ul, GUI.CLASS_CLOSED);

					_dom2.default.addClass(titleRow, 'title');
					_dom2.default.bind(titleRow, 'click', onClickTitle);

					if (!params.closed) {
						this.closed = false;
					}
				}

				if (params.autoPlace) {
					if (_common2.default.isUndefined(params.parent)) {
						if (autoPlaceVirgin) {
							autoPlaceContainer = document.createElement('div');
							_dom2.default.addClass(autoPlaceContainer, CSS_NAMESPACE);
							_dom2.default.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
							document.body.appendChild(autoPlaceContainer);
							autoPlaceVirgin = false;
						}

						// Put it in the dom for you.
						autoPlaceContainer.appendChild(this.domElement);

						// Apply the auto styles
						_dom2.default.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
					}

					// Make it not elastic.
					if (!this.parent) {
						setWidth(_this, params.width);
					}
				}

				this.__resizeHandler = function () {
					_this.onResizeDebounced();
				};

				_dom2.default.bind(window, 'resize', this.__resizeHandler);
				_dom2.default.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
				_dom2.default.bind(this.__ul, 'transitionend', this.__resizeHandler);
				_dom2.default.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
				this.onResize();

				if (params.resizable) {
					addResizeHandle(this);
				}

				saveToLocalStorage = function saveToLocalStorage() {
					if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
						localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
					}
				};

				// expose this method publicly
				this.saveToLocalStorageIfPossible = saveToLocalStorage;

				function resetWidth() {
					var root = _this.getRoot();
					root.width += 1;
					_common2.default.defer(function () {
						root.width -= 1;
					});
				}

				if (!params.parent) {
					resetWidth();
				}
			};

			GUI.toggleHide = function () {
				hide = !hide;
				_common2.default.each(hideableGuis, function (gui) {
					gui.domElement.style.display = hide ? 'none' : '';
				});
			};

			GUI.CLASS_AUTO_PLACE = 'a';
			GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
			GUI.CLASS_MAIN = 'main';
			GUI.CLASS_CONTROLLER_ROW = 'cr';
			GUI.CLASS_TOO_TALL = 'taller-than-window';
			GUI.CLASS_CLOSED = 'closed';
			GUI.CLASS_CLOSE_BUTTON = 'close-button';
			GUI.CLASS_CLOSE_TOP = 'close-top';
			GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
			GUI.CLASS_DRAG = 'drag';

			GUI.DEFAULT_WIDTH = 245;
			GUI.TEXT_CLOSED = 'Close Controls';
			GUI.TEXT_OPEN = 'Open Controls';

			GUI._keydownHandler = function (e) {
				if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
					GUI.toggleHide();
				}
			};
			_dom2.default.bind(window, 'keydown', GUI._keydownHandler, false);

			_common2.default.extend(GUI.prototype,

			/** @lends dat.gui.GUI */
			{

				/**
     * @param object
     * @param property
     * @returns {dat.controllers.Controller} The new controller that was added.
     * @instance
     */
				add: function add(object, property) {
					return _add(this, object, property, {
						factoryArgs: Array.prototype.slice.call(arguments, 2)
					});
				},

				/**
     * @param object
     * @param property
     * @returns {dat.controllers.ColorController} The new controller that was added.
     * @instance
     */
				addColor: function addColor(object, property) {
					return _add(this, object, property, {
						color: true
					});
				},

				/**
     * @param controller
     * @instance
     */
				remove: function remove(controller) {
					// TODO listening?
					this.__ul.removeChild(controller.__li);
					this.__controllers.splice(this.__controllers.indexOf(controller), 1);
					var _this = this;
					_common2.default.defer(function () {
						_this.onResize();
					});
				},

				destroy: function destroy() {
					if (this.autoPlace) {
						autoPlaceContainer.removeChild(this.domElement);
					}

					_dom2.default.unbind(window, 'keydown', GUI._keydownHandler, false);
					_dom2.default.unbind(window, 'resize', this.__resizeHandler);

					if (this.saveToLocalStorageIfPossible) {
						_dom2.default.unbind(window, 'unload', this.saveToLocalStorageIfPossible);
					}
				},

				/**
     * @param name
     * @returns {dat.gui.GUI} The new folder.
     * @throws {Error} if this GUI already has a folder by the specified
     * name
     * @instance
     */
				addFolder: function addFolder(name) {
					// We have to prevent collisions on names in order to have a key
					// by which to remember saved values
					if (this.__folders[name] !== undefined) {
						throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
					}

					var newGuiParams = { name: name, parent: this };

					// We need to pass down the autoPlace trait so that we can
					// attach event listeners to open/close folder actions to
					// ensure that a scrollbar appears if the window is too short.
					newGuiParams.autoPlace = this.autoPlace;

					// Do we have saved appearance data for this folder?
					if (this.load && // Anything loaded?
					this.load.folders && // Was my parent a dead-end?
					this.load.folders[name]) {
						// Did daddy remember me?
						// Start me closed if I was closed
						newGuiParams.closed = this.load.folders[name].closed;

						// Pass down the loaded data
						newGuiParams.load = this.load.folders[name];
					}

					var gui = new GUI(newGuiParams);
					this.__folders[name] = gui;

					var li = addRow(this, gui.domElement);
					_dom2.default.addClass(li, 'folder');
					return gui;
				},

				open: function open() {
					this.closed = false;
				},

				close: function close() {
					this.closed = true;
				},

				onResize: function onResize() {
					// we debounce this function to prevent performance issues when rotating on tablet/mobile
					var root = this.getRoot();
					if (root.scrollable) {
						var top = _dom2.default.getOffset(root.__ul).top;
						var h = 0;

						_common2.default.each(root.__ul.childNodes, function (node) {
							if (!(root.autoPlace && node === root.__save_row)) {
								h += _dom2.default.getHeight(node);
							}
						});

						if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
							_dom2.default.addClass(root.domElement, GUI.CLASS_TOO_TALL);
							root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
						} else {
							_dom2.default.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
							root.__ul.style.height = 'auto';
						}
					}

					if (root.__resize_handle) {
						_common2.default.defer(function () {
							root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
						});
					}

					if (root.__closeButton) {
						root.__closeButton.style.width = root.width + 'px';
					}
				},

				onResizeDebounced: _common2.default.debounce(function () {
					this.onResize();
				}, 50),

				/**
     * Mark objects for saving. The order of these objects cannot change as
     * the GUI grows. When remembering new objects, append them to the end
     * of the list.
     *
     * @param {Object...} objects
     * @throws {Error} if not called on a top level GUI.
     * @instance
     */
				remember: function remember() {
					if (_common2.default.isUndefined(SAVE_DIALOGUE)) {
						SAVE_DIALOGUE = new _CenteredDiv2.default();
						SAVE_DIALOGUE.domElement.innerHTML = _saveDialogue2.default;
					}

					if (this.parent) {
						throw new Error('You can only call remember on a top level GUI.');
					}

					var _this = this;

					_common2.default.each(Array.prototype.slice.call(arguments), function (object) {
						if (_this.__rememberedObjects.length === 0) {
							addSaveMenu(_this);
						}
						if (_this.__rememberedObjects.indexOf(object) === -1) {
							_this.__rememberedObjects.push(object);
						}
					});

					if (this.autoPlace) {
						// Set save row width
						setWidth(this, this.width);
					}
				},

				/**
     * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
     * @instance
     */
				getRoot: function getRoot() {
					var gui = this;
					while (gui.parent) {
						gui = gui.parent;
					}
					return gui;
				},

				/**
     * @returns {Object} a JSON object representing the current state of
     * this GUI as well as its remembered properties.
     * @instance
     */
				getSaveObject: function getSaveObject() {
					var toReturn = this.load;
					toReturn.closed = this.closed;

					// Am I remembering any values?
					if (this.__rememberedObjects.length > 0) {
						toReturn.preset = this.preset;

						if (!toReturn.remembered) {
							toReturn.remembered = {};
						}

						toReturn.remembered[this.preset] = getCurrentPreset(this);
					}

					toReturn.folders = {};
					_common2.default.each(this.__folders, function (element, key) {
						toReturn.folders[key] = element.getSaveObject();
					});

					return toReturn;
				},

				save: function save() {
					if (!this.load.remembered) {
						this.load.remembered = {};
					}

					this.load.remembered[this.preset] = getCurrentPreset(this);
					markPresetModified(this, false);
					this.saveToLocalStorageIfPossible();
				},

				saveAs: function saveAs(presetName) {
					if (!this.load.remembered) {
						// Retain default values upon first save
						this.load.remembered = {};
						this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
					}

					this.load.remembered[presetName] = getCurrentPreset(this);
					this.preset = presetName;
					addPresetOption(this, presetName, true);
					this.saveToLocalStorageIfPossible();
				},

				revert: function revert(gui) {
					_common2.default.each(this.__controllers, function (controller) {
						// Make revert work on Default.
						if (!this.getRoot().load.remembered) {
							controller.setValue(controller.initialValue);
						} else {
							recallSavedValue(gui || this.getRoot(), controller);
						}

						// fire onFinishChange callback
						if (controller.__onFinishChange) {
							controller.__onFinishChange.call(controller, controller.getValue());
						}
					}, this);

					_common2.default.each(this.__folders, function (folder) {
						folder.revert(folder);
					});

					if (!gui) {
						markPresetModified(this.getRoot(), false);
					}
				},

				listen: function listen(controller) {
					var init = this.__listening.length === 0;
					this.__listening.push(controller);
					if (init) {
						updateDisplays(this.__listening);
					}
				},

				updateDisplay: function updateDisplay() {
					_common2.default.each(this.__controllers, function (controller) {
						controller.updateDisplay();
					});
					_common2.default.each(this.__folders, function (folder) {
						folder.updateDisplay();
					});
				}
			});

			/**
    * Add a row to the end of the GUI or before another row.
    *
    * @param gui
    * @param [newDom] If specified, inserts the dom content in the new row
    * @param [liBefore] If specified, places the new row before another row
    */
			function addRow(gui, newDom, liBefore) {
				var li = document.createElement('li');
				if (newDom) {
					li.appendChild(newDom);
				}

				if (liBefore) {
					gui.__ul.insertBefore(li, liBefore);
				} else {
					gui.__ul.appendChild(li);
				}
				gui.onResize();
				return li;
			}

			function markPresetModified(gui, modified) {
				var opt = gui.__preset_select[gui.__preset_select.selectedIndex];

				// console.log('mark', modified, opt);
				if (modified) {
					opt.innerHTML = opt.value + '*';
				} else {
					opt.innerHTML = opt.value;
				}
			}

			function augmentController(gui, li, controller) {
				controller.__li = li;
				controller.__gui = gui;

				_common2.default.extend(controller, {
					options: function options(_options) {
						if (arguments.length > 1) {
							var nextSibling = controller.__li.nextElementSibling;
							controller.remove();

							return _add(gui, controller.object, controller.property, {
								before: nextSibling,
								factoryArgs: [_common2.default.toArray(arguments)]
							});
						}

						if (_common2.default.isArray(_options) || _common2.default.isObject(_options)) {
							var _nextSibling = controller.__li.nextElementSibling;
							controller.remove();

							return _add(gui, controller.object, controller.property, {
								before: _nextSibling,
								factoryArgs: [_options]
							});
						}
					},

					name: function name(v) {
						controller.__li.firstElementChild.firstElementChild.innerHTML = v;
						return controller;
					},

					listen: function listen() {
						controller.__gui.listen(controller);
						return controller;
					},

					remove: function remove() {
						controller.__gui.remove(controller);
						return controller;
					}
				});

				// All sliders should be accompanied by a box.
				if (controller instanceof _NumberControllerSlider2.default) {
					var box = new _NumberControllerBox2.default(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });

					_common2.default.each(['updateDisplay', 'onChange', 'onFinishChange', 'step'], function (method) {
						var pc = controller[method];
						var pb = box[method];
						controller[method] = box[method] = function () {
							var args = Array.prototype.slice.call(arguments);
							pb.apply(box, args);
							return pc.apply(controller, args);
						};
					});

					_dom2.default.addClass(li, 'has-slider');
					controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
				} else if (controller instanceof _NumberControllerBox2.default) {
					var r = function r(returned) {
						// Have we defined both boundaries?
						if (_common2.default.isNumber(controller.__min) && _common2.default.isNumber(controller.__max)) {
							// Well, then lets just replace this with a slider.

							// lets remember if the old controller had a specific name or was listening
							var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
							var wasListening = controller.__gui.__listening.indexOf(controller) > -1;

							controller.remove();
							var newController = _add(gui, controller.object, controller.property, {
								before: controller.__li.nextElementSibling,
								factoryArgs: [controller.__min, controller.__max, controller.__step]
							});

							newController.name(oldName);
							if (wasListening) newController.listen();

							return newController;
						}

						return returned;
					};

					controller.min = _common2.default.compose(r, controller.min);
					controller.max = _common2.default.compose(r, controller.max);
				} else if (controller instanceof _BooleanController2.default) {
					_dom2.default.bind(li, 'click', function () {
						_dom2.default.fakeEvent(controller.__checkbox, 'click');
					});

					_dom2.default.bind(controller.__checkbox, 'click', function (e) {
						e.stopPropagation(); // Prevents double-toggle
					});
				} else if (controller instanceof _FunctionController2.default) {
					_dom2.default.bind(li, 'click', function () {
						_dom2.default.fakeEvent(controller.__button, 'click');
					});

					_dom2.default.bind(li, 'mouseover', function () {
						_dom2.default.addClass(controller.__button, 'hover');
					});

					_dom2.default.bind(li, 'mouseout', function () {
						_dom2.default.removeClass(controller.__button, 'hover');
					});
				} else if (controller instanceof _ColorController2.default) {
					_dom2.default.addClass(li, 'color');
					controller.updateDisplay = _common2.default.compose(function (val) {
						li.style.borderLeftColor = controller.__color.toString();
						return val;
					}, controller.updateDisplay);

					controller.updateDisplay();
				}

				controller.setValue = _common2.default.compose(function (val) {
					if (gui.getRoot().__preset_select && controller.isModified()) {
						markPresetModified(gui.getRoot(), true);
					}

					return val;
				}, controller.setValue);
			}

			function recallSavedValue(gui, controller) {
				// Find the topmost GUI, that's where remembered objects live.
				var root = gui.getRoot();

				// Does the object we're controlling match anything we've been told to
				// remember?
				var matchedIndex = root.__rememberedObjects.indexOf(controller.object);

				// Why yes, it does!
				if (matchedIndex !== -1) {
					// Let me fetch a map of controllers for thcommon.isObject.
					var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];

					// Ohp, I believe this is the first controller we've created for this
					// object. Lets make the map fresh.
					if (controllerMap === undefined) {
						controllerMap = {};
						root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
					}

					// Keep track of this controller
					controllerMap[controller.property] = controller;

					// Okay, now have we saved any values for this controller?
					if (root.load && root.load.remembered) {
						var presetMap = root.load.remembered;

						// Which preset are we trying to load?
						var preset = void 0;

						if (presetMap[gui.preset]) {
							preset = presetMap[gui.preset];
						} else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
							// Uhh, you can have the default instead?
							preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
						} else {
							// Nada.
							return;
						}

						// Did the loaded object remember thcommon.isObject? &&  Did we remember this particular property?
						if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
							// We did remember something for this guy ...
							var value = preset[matchedIndex][controller.property];

							// And that's what it is.
							controller.initialValue = value;
							controller.setValue(value);
						}
					}
				}
			}

			function _add(gui, object, property, params) {
				if (object[property] === undefined) {
					throw new Error('Object "' + object + '" has no property "' + property + '"');
				}

				var controller = void 0;

				if (params.color) {
					controller = new _ColorController2.default(object, property);
				} else {
					var factoryArgs = [object, property].concat(params.factoryArgs);
					controller = _ControllerFactory2.default.apply(gui, factoryArgs);
				}

				if (params.before instanceof _Controller2.default) {
					params.before = params.before.__li;
				}

				recallSavedValue(gui, controller);

				_dom2.default.addClass(controller.domElement, 'c');

				var name = document.createElement('span');
				_dom2.default.addClass(name, 'property-name');
				name.innerHTML = controller.property;

				var container = document.createElement('div');
				container.appendChild(name);
				container.appendChild(controller.domElement);

				var li = addRow(gui, container, params.before);

				_dom2.default.addClass(li, GUI.CLASS_CONTROLLER_ROW);
				if (controller instanceof _ColorController2.default) {
					_dom2.default.addClass(li, 'color');
				} else {
					_dom2.default.addClass(li, _typeof(controller.getValue()));
				}

				augmentController(gui, li, controller);

				gui.__controllers.push(controller);

				return controller;
			}

			function getLocalStorageHash(gui, key) {
				// TODO how does this deal with multiple GUI's?
				return document.location.href + '.' + key;
			}

			function addPresetOption(gui, name, setSelected) {
				var opt = document.createElement('option');
				opt.innerHTML = name;
				opt.value = name;
				gui.__preset_select.appendChild(opt);
				if (setSelected) {
					gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
				}
			}

			function showHideExplain(gui, explain) {
				explain.style.display = gui.useLocalStorage ? 'block' : 'none';
			}

			function addSaveMenu(gui) {
				var div = gui.__save_row = document.createElement('li');

				_dom2.default.addClass(gui.domElement, 'has-save');

				gui.__ul.insertBefore(div, gui.__ul.firstChild);

				_dom2.default.addClass(div, 'save-row');

				var gears = document.createElement('span');
				gears.innerHTML = '&nbsp;';
				_dom2.default.addClass(gears, 'button gears');

				// TODO replace with FunctionController
				var button = document.createElement('span');
				button.innerHTML = 'Save';
				_dom2.default.addClass(button, 'button');
				_dom2.default.addClass(button, 'save');

				var button2 = document.createElement('span');
				button2.innerHTML = 'New';
				_dom2.default.addClass(button2, 'button');
				_dom2.default.addClass(button2, 'save-as');

				var button3 = document.createElement('span');
				button3.innerHTML = 'Revert';
				_dom2.default.addClass(button3, 'button');
				_dom2.default.addClass(button3, 'revert');

				var select = gui.__preset_select = document.createElement('select');

				if (gui.load && gui.load.remembered) {
					_common2.default.each(gui.load.remembered, function (value, key) {
						addPresetOption(gui, key, key === gui.preset);
					});
				} else {
					addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
				}

				_dom2.default.bind(select, 'change', function () {
					for (var index = 0; index < gui.__preset_select.length; index++) {
						gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
					}

					gui.preset = this.value;
				});

				div.appendChild(select);
				div.appendChild(gears);
				div.appendChild(button);
				div.appendChild(button2);
				div.appendChild(button3);

				if (SUPPORTS_LOCAL_STORAGE) {
					var explain = document.getElementById('dg-local-explain');
					var localStorageCheckBox = document.getElementById('dg-local-storage');
					var saveLocally = document.getElementById('dg-save-locally');

					saveLocally.style.display = 'block';

					if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
						localStorageCheckBox.setAttribute('checked', 'checked');
					}

					showHideExplain(gui, explain);

					// TODO: Use a boolean controller, fool!
					_dom2.default.bind(localStorageCheckBox, 'change', function () {
						gui.useLocalStorage = !gui.useLocalStorage;
						showHideExplain(gui, explain);
					});
				}

				var newConstructorTextArea = document.getElementById('dg-new-constructor');

				_dom2.default.bind(newConstructorTextArea, 'keydown', function (e) {
					if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
						SAVE_DIALOGUE.hide();
					}
				});

				_dom2.default.bind(gears, 'click', function () {
					newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
					SAVE_DIALOGUE.show();
					newConstructorTextArea.focus();
					newConstructorTextArea.select();
				});

				_dom2.default.bind(button, 'click', function () {
					gui.save();
				});

				_dom2.default.bind(button2, 'click', function () {
					var presetName = prompt('Enter a new preset name.');
					if (presetName) {
						gui.saveAs(presetName);
					}
				});

				_dom2.default.bind(button3, 'click', function () {
					gui.revert();
				});

				// div.appendChild(button2);
			}

			function addResizeHandle(gui) {
				var pmouseX = void 0;

				gui.__resize_handle = document.createElement('div');

				_common2.default.extend(gui.__resize_handle.style, {

					width: '6px',
					marginLeft: '-3px',
					height: '200px',
					cursor: 'ew-resize',
					position: 'absolute'
					// border: '1px solid blue'

				});

				function drag(e) {
					e.preventDefault();

					gui.width += pmouseX - e.clientX;
					gui.onResize();
					pmouseX = e.clientX;

					return false;
				}

				function dragStop() {
					_dom2.default.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
					_dom2.default.unbind(window, 'mousemove', drag);
					_dom2.default.unbind(window, 'mouseup', dragStop);
				}

				function dragStart(e) {
					e.preventDefault();

					pmouseX = e.clientX;

					_dom2.default.addClass(gui.__closeButton, GUI.CLASS_DRAG);
					_dom2.default.bind(window, 'mousemove', drag);
					_dom2.default.bind(window, 'mouseup', dragStop);

					return false;
				}

				_dom2.default.bind(gui.__resize_handle, 'mousedown', dragStart);
				_dom2.default.bind(gui.__closeButton, 'mousedown', dragStart);

				gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
			}

			function setWidth(gui, w) {
				gui.domElement.style.width = w + 'px';
				// Auto placed save-rows are position fixed, so we have to
				// set the width manually if we want it to bleed to the edge
				if (gui.__save_row && gui.autoPlace) {
					gui.__save_row.style.width = w + 'px';
				}
				if (gui.__closeButton) {
					gui.__closeButton.style.width = w + 'px';
				}
			}

			function getCurrentPreset(gui, useInitialValues) {
				var toReturn = {};

				// For each object I'm remembering
				_common2.default.each(gui.__rememberedObjects, function (val, index) {
					var savedValues = {};

					// The controllers I've made for thcommon.isObject by property
					var controllerMap = gui.__rememberedObjectIndecesToControllers[index];

					// Remember each value for each property
					_common2.default.each(controllerMap, function (controller, property) {
						savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
					});

					// Save the values for thcommon.isObject
					toReturn[index] = savedValues;
				});

				return toReturn;
			}

			function setPresetSelectIndex(gui) {
				for (var index = 0; index < gui.__preset_select.length; index++) {
					if (gui.__preset_select[index].value === gui.preset) {
						gui.__preset_select.selectedIndex = index;
					}
				}
			}

			function updateDisplays(controllerArray) {
				if (controllerArray.length !== 0) {
					_requestAnimationFrame2.default.call(window, function () {
						updateDisplays(controllerArray);
					});
				}

				_common2.default.each(controllerArray, function (c) {
					c.updateDisplay();
				});
			}

			exports.default = GUI;
			module.exports = exports['default'];

			/***/
		},
		/* 18 */
		/***/function (module, exports) {

			'use strict';

			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			module.exports = {
				load: function load(url, indoc) {
					var doc = indoc || document;
					var link = doc.createElement('link');
					link.type = 'text/css';
					link.rel = 'stylesheet';
					link.href = url;
					doc.getElementsByTagName('head')[0].appendChild(link);
				},

				inject: function inject(css, indoc) {
					var doc = indoc || document;
					var injected = document.createElement('style');
					injected.type = 'text/css';
					injected.innerHTML = css;
					var head = doc.getElementsByTagName('head')[0];
					try {
						head.appendChild(injected);
					} catch (e) {// Unable to inject CSS, probably because of a Content Security Policy
					}
				}
			};

			/***/
		},
		/* 19 */
		/***/function (module, exports) {

			module.exports = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

			/***/
		},
		/* 20 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _OptionController = __webpack_require__(10);

			var _OptionController2 = _interopRequireDefault(_OptionController);

			var _NumberControllerBox = __webpack_require__(13);

			var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

			var _NumberControllerSlider = __webpack_require__(14);

			var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

			var _StringController = __webpack_require__(11);

			var _StringController2 = _interopRequireDefault(_StringController);

			var _FunctionController = __webpack_require__(15);

			var _FunctionController2 = _interopRequireDefault(_FunctionController);

			var _BooleanController = __webpack_require__(8);

			var _BooleanController2 = _interopRequireDefault(_BooleanController);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var ControllerFactory = function ControllerFactory(object, property) {
				var initialValue = object[property];

				// Providing options?
				if (_common2.default.isArray(arguments[2]) || _common2.default.isObject(arguments[2])) {
					return new _OptionController2.default(object, property, arguments[2]);
				}

				// Providing a map?
				if (_common2.default.isNumber(initialValue)) {
					// Has min and max? (slider)
					if (_common2.default.isNumber(arguments[2]) && _common2.default.isNumber(arguments[3])) {
						// has step?
						if (_common2.default.isNumber(arguments[4])) {
							return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3], arguments[4]);
						}

						return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3]);
					}

					// number box
					if (_common2.default.isNumber(arguments[4])) {
						// has step
						return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
					}
					return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3] });
				}

				if (_common2.default.isString(initialValue)) {
					return new _StringController2.default(object, property);
				}

				if (_common2.default.isFunction(initialValue)) {
					return new _FunctionController2.default(object, property, '');
				}

				if (_common2.default.isBoolean(initialValue)) {
					return new _BooleanController2.default(object, property);
				}

				return null;
			}; /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

			exports.default = ControllerFactory;
			module.exports = exports['default'];

			/***/
		},
		/* 21 */
		/***/function (module, exports) {

			"use strict";

			exports.__esModule = true;
			/**
    * dat-gui JavaScript Controller Library
    * http://code.google.com/p/dat-gui
    *
    * Copyright 2011 Data Arts Team, Google Creative Lab
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    */

			function requestAnimationFrame(callback) {
				setTimeout(callback, 1000 / 60);
			}

			exports.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;
			module.exports = exports["default"];

			/***/
		},
		/* 22 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _dom = __webpack_require__(9);

			var _dom2 = _interopRequireDefault(_dom);

			var _common = __webpack_require__(5);

			var _common2 = _interopRequireDefault(_common);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			} /**
      * dat-gui JavaScript Controller Library
      * http://code.google.com/p/dat-gui
      *
      * Copyright 2011 Data Arts Team, Google Creative Lab
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      */

			var CenteredDiv = function () {
				function CenteredDiv() {
					_classCallCheck(this, CenteredDiv);

					this.backgroundElement = document.createElement('div');
					_common2.default.extend(this.backgroundElement.style, {
						backgroundColor: 'rgba(0,0,0,0.8)',
						top: 0,
						left: 0,
						display: 'none',
						zIndex: '1000',
						opacity: 0,
						WebkitTransition: 'opacity 0.2s linear',
						transition: 'opacity 0.2s linear'
					});

					_dom2.default.makeFullscreen(this.backgroundElement);
					this.backgroundElement.style.position = 'fixed';

					this.domElement = document.createElement('div');
					_common2.default.extend(this.domElement.style, {
						position: 'fixed',
						display: 'none',
						zIndex: '1001',
						opacity: 0,
						WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
						transition: 'transform 0.2s ease-out, opacity 0.2s linear'
					});

					document.body.appendChild(this.backgroundElement);
					document.body.appendChild(this.domElement);

					var _this = this;
					_dom2.default.bind(this.backgroundElement, 'click', function () {
						_this.hide();
					});
				}

				CenteredDiv.prototype.show = function show() {
					var _this = this;

					this.backgroundElement.style.display = 'block';

					this.domElement.style.display = 'block';
					this.domElement.style.opacity = 0;
					//    this.domElement.style.top = '52%';
					this.domElement.style.webkitTransform = 'scale(1.1)';

					this.layout();

					_common2.default.defer(function () {
						_this.backgroundElement.style.opacity = 1;
						_this.domElement.style.opacity = 1;
						_this.domElement.style.webkitTransform = 'scale(1)';
					});
				};

				/**
     * Hide centered div
     */

				CenteredDiv.prototype.hide = function hide() {
					var _this = this;

					var hide = function hide() {
						_this.domElement.style.display = 'none';
						_this.backgroundElement.style.display = 'none';

						_dom2.default.unbind(_this.domElement, 'webkitTransitionEnd', hide);
						_dom2.default.unbind(_this.domElement, 'transitionend', hide);
						_dom2.default.unbind(_this.domElement, 'oTransitionEnd', hide);
					};

					_dom2.default.bind(this.domElement, 'webkitTransitionEnd', hide);
					_dom2.default.bind(this.domElement, 'transitionend', hide);
					_dom2.default.bind(this.domElement, 'oTransitionEnd', hide);

					this.backgroundElement.style.opacity = 0;
					//    this.domElement.style.top = '48%';
					this.domElement.style.opacity = 0;
					this.domElement.style.webkitTransform = 'scale(1.1)';
				};

				CenteredDiv.prototype.layout = function layout() {
					this.domElement.style.left = window.innerWidth / 2 - _dom2.default.getWidth(this.domElement) / 2 + 'px';
					this.domElement.style.top = window.innerHeight / 2 - _dom2.default.getHeight(this.domElement) / 2 + 'px';
				};

				return CenteredDiv;
			}();

			exports.default = CenteredDiv;
			module.exports = exports['default'];

			/***/
		},
		/* 23 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(24)();
			// imports


			// module
			exports.push([module.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */\n  /** allow overflow for color selector */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button.close-top {\n        position: relative; }\n      .dg.main .close-button.close-bottom {\n        position: absolute; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-y: visible; }\n    .dg.a.has-save > ul.close-top {\n      margin-top: 0; }\n    .dg.a.has-save > ul.close-bottom {\n      margin-top: 27px; }\n    .dg.a.has-save > ul.closed {\n      margin-top: 0; }\n    .dg.a .save-row {\n      top: 0;\n      z-index: 1002; }\n      .dg.a .save-row.close-top {\n        position: relative; }\n      .dg.a .save-row.close-bottom {\n        position: fixed; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out;\n    -webkit-transition: overflow 0.1s linear;\n    -o-transition: overflow 0.1s linear;\n    -moz-transition: overflow 0.1s linear;\n    transition: overflow 0.1s linear; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px;\n    overflow: hidden; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%;\n    position: relative; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 7px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .cr.color {\n    overflow: visible; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", ""]);

			// exports


			/***/
		},
		/* 24 */
		/***/function (module, exports) {

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */
			// css base code, injected by the css-loader
			module.exports = function () {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					var result = [];
					for (var i = 0; i < this.length; i++) {
						var item = this[i];
						if (item[2]) {
							result.push("@media " + item[2] + "{" + item[1] + "}");
						} else {
							result.push(item[1]);
						}
					}
					return result.join("");
				};

				// import a list of modules into the list
				list.i = function (modules, mediaQuery) {
					if (typeof modules === "string") modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number") alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};

			/***/
		}
		/******/])
	);
});
;
//# sourceMappingURL=dat.gui.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

function magnitude(vector) {
	var x = vector.x;
	var y = vector.y;
	var z = vector.z;
	var result = vector.z ? Math.sqrt(x * x + y * y + z * z) : Math.sqrt(x * x + y * y);
	return result;
}

function Vector(vector) {
	var mag = magnitude(vector);
	this.x = vector.x;
	this.y = vector.y;
	this.z = vector.z ? vector.z : 0;
	this.magnitude = mag;
}

Vector.prototype.add = function (vector2) {
	var sum = { x: this.x + vector2.x, y: this.y + vector2.y, z: this.z + vector2.z };
	result = new Vector(sum);
	return result;
};

Vector.prototype.scalProd = function (scale) {
	var product = { x: this.x * scale, y: this.y * scale, z: this.z * scale };
	product = new Vector(product);
	return product;
};

Vector.prototype.dotProd = function (vector2) {
	var product = this.x * vector2.x + this.y * vector2.y + this.z * vector2.z;
	return product;
};

Vector.prototype.square = function () {
	var product = this.x * this.x + this.y * this.y + this.z * this.z;
	return product;
};

Vector.prototype.crossProd = function (vector2) {
	var x = this.y * vector2.z - this.z * vector2.y;
	var y = this.z * vector2.x - this.x * vector2.z;
	var z = this.x * vector2.y - this.y * vector2.x;
	var product = new Vector({ x: x, y: y, z: z });
	return product;
};

Vector.prototype.findAngle = function (vector2) {
	var vector1 = { x: this.x, y: this.y };
	var dotProd = this.dotProd(vector2);
	var mag = this.magnitude;
	var mag2 = vector2.magnitude;
	var ratio = dotProd / (mag * mag2);
	//ratio = -5;
	ratio = ratio > 1 ? 1 : ratio < -1 ? -1 : ratio;
	//console.log('ratio', ratio);
	var angle = Math.acos(ratio);
	var direction = checkDirection(vector1, vector2, angle);
	angle = direction === 'clockwise' ? angle * -1 : angle;

	// console.log('vector1', vector1);
	// console.log('dotProd', dotProd);
	// console.log('mag', mag);
	// console.log('mag2', mag2);
	// console.log('calculated angle', angle);
	// console.log('direction', direction);

	return angle;
};

Vector.prototype.isParallel = function (vector2) {
	var product = this.crossProd(vector2);
	// console.log('product', product);
	// console.log('isParallel vector', vector2);
	// console.log('this vector', {x:this.x, y:this.y});

	product.x = Math.abs(product.x) <= 0.0000001 ? 0 : product.x;
	product.y = Math.abs(product.y) <= 0.0000001 ? 0 : product.y;
	product.z = Math.abs(product.z) <= 0.0000001 ? 0 : product.z;

	//console.log('isParallel', product.x === 0 && product.y === 0 && product.z === 0);

	if (product.x === 0 && product.y === 0 && product.z === 0) {
		return true;
	} else {
		return false;
	}
};

function checkDirection(vector1, vector2, angle) {
	var rotatedVector = rotateVector(angle, vector1);
	var direction = 'anti-clockwise';
	// console.log('rotatedVector', rotatedVector);
	// console.log('vector2', vector2);
	var dotProd = vector2.dotProd(rotatedVector);
	var isParallel = rotatedVector.isParallel(vector2);

	var rotatedVector2 = rotateVector(angle * -1, vector1);
	var dotProd2 = vector2.dotProd(rotatedVector2);
	var isParallel2 = rotatedVector2.isParallel(vector2);
	// dotProd > 0 means that the vectors are facing the same direction
	if (isParallel === true && dotProd >= 0) {
		//console.log('parallel');
		//return 'anti-clockwise';
		direction = 'anti-clockwise';
		// if the vectors are not parallel or they are parallel but pointing in opposite directions
	} else if (isParallel === false || isParallel === true && dotProd <= 0) {
		//temporary condition just for testing
		if (isParallel2 === true && dotProd2 >= 0) {
			//return 'clockwise';
			direction = 'clockwise';
		}
	} else {
		direction = 'anti-clockwise';
		//return 'anti-clockwise';
	}
	return direction;
}

// 3 x 3 Matrix
function Matrix(matrix) {
	this.r1 = matrix.r1;
	this.r2 = matrix.r2;
	this.r3 = matrix.r3;
}

Matrix.prototype.mMult = function (matrix2) {
	var newMatrix = {};
	var r11 = this.r1[0] * matrix2.r1[0] + this.r1[1] * matrix2.r2[0] + this.r1[2] * matrix2.r3[0];
	var r12 = this.r1[0] * matrix2.r1[1] + this.r1[1] * matrix2.r2[1] + this.r1[2] * matrix2.r3[1];
	var r13 = this.r1[0] * matrix2.r1[2] + this.r1[1] * matrix2.r2[2] + this.r1[2] * matrix2.r3[2];
	newMatrix.r1 = [r11, r12, r13];

	var r21 = this.r2[0] * matrix2.r1[0] + this.r2[1] * matrix2.r2[0] + this.r2[2] * matrix2.r3[0];
	var r22 = this.r2[0] * matrix2.r1[1] + this.r2[1] * matrix2.r2[1] + this.r2[2] * matrix2.r3[1];
	var r23 = this.r2[0] * matrix2.r1[2] + this.r2[1] * matrix2.r2[2] + this.r2[2] * matrix2.r3[2];
	newMatrix.r2 = [r21, r22, r23];

	var r31 = this.r3[0] * matrix2.r1[0] + this.r3[1] * matrix2.r2[0] + this.r3[2] * matrix2.r3[0];
	var r32 = this.r3[0] * matrix2.r1[1] + this.r3[1] * matrix2.r2[1] + this.r3[2] * matrix2.r3[1];
	var r33 = this.r3[0] * matrix2.r1[2] + this.r3[1] * matrix2.r2[2] + this.r3[2] * matrix2.r3[2];
	newMatrix.r3 = [r31, r32, r33];
	var matrix = new Matrix(newMatrix);
	return matrix;
};

Matrix.prototype.vMult = function (vector) {
	vector.z = vector.z ? vector.z : 0;
	var x = this.r1[0] * vector.x + this.r1[1] * vector.y + this.r1[2] * vector.z;
	var y = this.r2[0] * vector.x + this.r2[1] * vector.y + this.r2[2] * vector.z;
	var z = this.r3[0] * vector.x + this.r3[1] * vector.y + this.r3[2] * vector.z;
	var product = new Vector({ x: x, y: y, z: z });
	return product;
};

function rotateVector(theta, vector) {
	var vector = new Vector(vector);
	var rotationMatrix = new Matrix({
		r1: [Math.cos(theta), -Math.sin(theta), 0],
		r2: [Math.sin(theta), Math.cos(theta), 0],
		r3: [0, 0, 1]
	});
	// console.log('vector', vector);
	// console.log('rotationMatrix', rotationMatrix);
	var rotatedVector = rotationMatrix.vMult(vector);
	//console.log('rotatedVector', rotatedVector);
	return rotatedVector;
}

function rotateShape(centre, theta, index) {
	if (Scene.shapes[0]) {

		//var centreOfMass = ShapesController.getProperty(index, 'centreOfMass');
		//var vertices = ShapesController.getProperty(index, 'vertices');
		var centreOfMass = typeof index === 'number' ? ShapesController.getProperty(index, 'centreOfMass') : centre;
		var vertices = typeof index === 'number' ? ShapesController.getProperty(index, 'vertices') : index;
		var rotatedVertices = [];
		var length = vertices.length;
		var centreOR = { x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y };
		for (var i = 0; i < length; i++) {
			var rotatedVertex = rotateVector(theta, { x: vertices[i].x, y: vertices[i].y });
			rotatedVertices.push(rotatedVertex);
		}

		if (typeof index === 'number') {
			var referenceVectors = ShapesController.getProperty(index, 'referenceVectors');
			var location = referenceVectors.location; // need to find way of updating "sub-objects" individually
			var sideVector = referenceVectors.sideVector;
			var unitNormal = referenceVectors.unitNormal;
			if (location) {
				var rotatedLocation = rotateVector(theta, { x: location.x, y: location.y });
			}
			if (sideVector) {
				var rotatedSideVector = rotateVector(theta, { x: sideVector.x, y: sideVector.y });
			}
			if (unitNormal) {
				var rotatedUnitNormal = rotateVector(theta, { x: unitNormal.x, y: unitNormal.y });
			}
			referenceVectors = { location: rotatedLocation, sideVector: rotatedSideVector, unitNormal: rotatedUnitNormal };
		}
		var centreOR = { x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y };
		var rotateCOM = rotateVector(theta, { x: centreOR.x, y: centreOR.y });
		var newCentreOfMass = { x: centre.x + rotateCOM.x, y: centre.y + rotateCOM.y };
		if (typeof index === 'number') {
			ShapesController.setProperty(index, 'centreOfMass', newCentreOfMass);
			ShapesController.setProperty(index, 'vertices', rotatedVertices);
			ShapesController.setProperty(index, 'referenceVectors', referenceVectors);
		}
		return rotatedVertices;
	}
}

var v1 = new Vector({ x: 5, y: -4, z: -15 });
var v2 = new Vector({ x: 4, y: 6, z: -8 });

var m1 = new Matrix({ r1: [1, 2, 3], r2: [4, 5, 6], r3: [7, 8, 9] });
var m2 = new Matrix({ r1: [5, 5, 3], r2: [6, 8, 9], r3: [10, 7, 3] });

var v3 = v1.add(v2);
var v4 = v1.crossProd(v2);
var v5 = v1.scalProd(5);
var v6 = v1.dotProd(v2);

var m3 = m1.mMult(m2);
var v7 = m1.vMult(v1);

// console.log('m1', m1);
// console.log('m2', m2);
// console.log('m3', m3);
// console.log('v7', v7);


// console.log('v1', v1);
// console.log('v2', v2);
// console.log('v3', v3);
// console.log('crossProd v4', v4);
// console.log('v5', v5);
// console.log('dotProd v6', v6);
//
// var v10 = new Vector({x:3, y:4, z:8});
// console.log('v10.magnitude', v10.magnitude);


var vector1 = new Vector({ x: 0, y: 1 });
var vector1a = new Vector({ x: 0, y: 2 });
var vector2 = new Vector({ x: 1, y: 1 });
var vector3 = new Vector({ x: 1, y: 0 });
var vector4 = new Vector({ x: 1, y: -1 });
var vector5 = new Vector({ x: 0, y: -1 });
var vector6 = new Vector({ x: -1, y: -1 });
var vector7 = new Vector({ x: -1, y: 0 });
var vector8 = new Vector({ x: -1, y: 1 });

vector1.findAngle(vector1);
vector1.findAngle(vector2);
vector1.findAngle(vector3);
vector1.findAngle(vector4);
vector1.findAngle(vector5);
vector1.findAngle(vector6);
vector1.findAngle(vector7);
vector1.findAngle(vector8);

//vector1.findAngle(vector2);
//vector1.isParallel(vector5);
//console.log('crossProd', vector1.crossProd(vector2));

var referenceSideVector1 = new Vector({ x: 35.99988336809515, y: -0.09163778449409044, z: 0, magnitude: 36.00000000000001 });
var collidingSideVector1 = new Vector({ x: -35.9998833680952, y: 0.09163778449408255, z: 0, magnitude: 36.00000000000006 });
var angle1 = referenceSideVector1.findAngle(collidingSideVector1);
//console.log('=====================angle', angle1);

/***/ },
/* 5 */
/***/ function(module, exports) {

var shapeSelection = {
  square: [{ x: -18, y: -18 }, { x: 18, y: -18 }, { x: 18, y: 18 }, { x: -18, y: 18 }],
  bar: [{ x: -18, y: -126 }, { x: 18, y: -126 }, { x: 18, y: 126 }, { x: -18, y: 126 }],
  triangle: [{ x: -40 / 2, y: Math.sqrt(3) / 6 * 40 }, { x: 40 / 2, y: Math.sqrt(3) / 6 * 40 }, { x: 0, y: -2 * Math.sqrt(3) / 6 * 40 }],
  star: [{ x: 0, y: -50 }, { x: 19.0983 * Math.sin(2 * Math.PI * (36 / 360)), y: -19.0983 * Math.cos(2 * Math.PI * (36 / 360)) }, { x: 50 * Math.cos(2 * Math.PI * (18 / 360)), y: -50 * Math.sin(2 * Math.PI * (18 / 360)) }, { x: 19.0983 * Math.cos(2 * Math.PI * (18 / 360)), y: 19.0983 * Math.sin(2 * Math.PI * (18 / 360)) }, { x: 50 * Math.sin(2 * Math.PI * (36 / 360)), y: 50 * Math.cos(2 * Math.PI * (36 / 360)) }, { x: 0, y: 19.0983 }, { x: -50 * Math.sin(2 * Math.PI * (36 / 360)), y: 50 * Math.cos(2 * Math.PI * (36 / 360)) }, { x: -19.0983 * Math.cos(2 * Math.PI * (18 / 360)), y: 19.0983 * Math.sin(2 * Math.PI * (18 / 360)) }, { x: -50 * Math.cos(2 * Math.PI * (18 / 360)), y: -50 * Math.sin(2 * Math.PI * (18 / 360)) }, { x: -19.0983 * Math.sin(2 * Math.PI * (36 / 360)), y: -19.0983 * Math.cos(2 * Math.PI * (36 / 360)) }],
  plus: [{ x: -6, y: -6 }, { x: -6, y: -30 }, { x: 6, y: -30 }, { x: 6, y: -6 }, { x: 30, y: -6 }, { x: 30, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 30 }, { x: -6, y: 30 }, { x: -6, y: 6 }, { x: -30, y: 6 }, { x: -30, y: -6 }],
  tShape: [{ x: 30, y: -6 }, { x: 30, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 54 }, { x: -6, y: 54 }, { x: -6, y: 6 }, { x: -30, y: 6 }, { x: -30, y: -6 }],
  arrow: [{ x: 30, y: -6 }, { x: 30, y: -18 }, { x: 55, y: 0 }, { x: 30, y: 18 }, { x: 30, y: 6 }, { x: -20, y: 6 }, { x: -20, y: -6 }],
  pentagon: [{ x: 0, y: -22 }, { x: 22 * Math.cos(2 * Math.PI * (18 / 360)), y: -22 * Math.sin(2 * Math.PI * (18 / 360)) }, { x: 22 * Math.sin(2 * Math.PI * (36 / 360)), y: 22 * Math.cos(2 * Math.PI * (36 / 360)) }, { x: -22 * Math.sin(2 * Math.PI * (36 / 360)), y: 22 * Math.cos(2 * Math.PI * (36 / 360)) }, { x: -22 * Math.cos(2 * Math.PI * (18 / 360)), y: -22 * Math.sin(2 * Math.PI * (18 / 360)) }],
  hexagon: [{ x: 22 * Math.sin(2 * Math.PI * (30 / 360)), y: -22 * Math.cos(2 * Math.PI * (30 / 360)) }, { x: 22, y: 0 }, { x: 22 * Math.sin(2 * Math.PI * (30 / 360)), y: 22 * Math.cos(2 * Math.PI * (30 / 360)) }, { x: -22 * Math.sin(2 * Math.PI * (30 / 360)), y: 22 * Math.cos(2 * Math.PI * (30 / 360)) }, { x: -22, y: 0 }, { x: -22 * Math.sin(2 * Math.PI * (30 / 360)), y: -22 * Math.cos(2 * Math.PI * (30 / 360)) }],
  concave: [{ x: -18, y: 54 }, { x: -18, y: 90 }, { x: -90, y: 90 }, { x: -90, y: -90 }, { x: 90, y: -90 }, { x: 90, y: 90 }, { x: 18, y: 90 }, { x: 18, y: 54 }, { x: 54, y: 54 }, { x: 54, y: -54 }, { x: -54, y: -54 }, { x: -54, y: 54 }],
  box: [{ x: 0, y: 54 }, { x: 0, y: 90 }, { x: -90, y: 90 }, { x: -90, y: -90 }, { x: 90, y: -90 }, { x: 90, y: 90 }, { x: 0, y: 90 }, { x: 0, y: 54 }, { x: 54, y: 54 }, { x: 54, y: -54 }, { x: -54, y: -54 }, { x: -54, y: 54 }],
  verticalWall: [{ x: -18, y: -300 }, { x: 18, y: -300 }, { x: 18, y: 300 }, { x: -18, y: 300 }],
  horizontalWall: [{ x: -500, y: -18 }, { x: 500, y: -18 }, { x: 500, y: 18 }, { x: -500, y: 18 }]
};

var shapes = {
  arrowHead: [{ x: -2.5, y: 0 }, { x: 2.5, y: 0 }, { x: 0, y: 5 }]
};

var settings = {
  display: true,
  restitution: 0
};

function circleMaker(radius, n) {
  var circle = [];
  var angle = 2 * Math.PI / n;
  for (var i = 0; i < n; i++) {
    var point = {};
    point.x = radius * Math.sin(i * angle);
    point.y = radius * Math.cos(i * angle);
    circle.push(point);
  }
  return circle;
}

var circle = circleMaker(20, 30);
shapeSelection.circle = circle;

function findBoundingRect(vertices) {
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
    vertices: [{ x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY }, { x: minX, y: maxY }]
  };
  return boundingRect;
};

function findMass(centre, vertices, boundingRect) {
  var count = 0;
  var accuracy = 100;
  var resolution = { x: 1, y: 1 };
  var mass = 0;
  var centreOfMass = { x: 0, y: 0 };
  var massDistances = { x: 0, y: 0 };
  var width = boundingRect.maxX - boundingRect.minX;
  var height = boundingRect.maxY - boundingRect.minY;
  resolution.x = width < accuracy ? 1 : Math.round(width / accuracy);
  resolution.y = height < accuracy ? 1 : Math.round(height / accuracy);
  var startPoint = { x: boundingRect.minX, y: boundingRect.minY };
  var checkPoint = {};
  for (var i = 0; i < width; i += resolution.x) {
    for (var j = 0; j < height; j += resolution.y) {
      checkPoint.x = startPoint.x + i;
      checkPoint.y = startPoint.y + j;
      var pointInShape = isPointInShape({ x: 0, y: 0 }, vertices, checkPoint);
      if (pointInShape) {
        mass += resolution.x * resolution.y;
        count += 1;
        massDistances.x += checkPoint.x;
        massDistances.y += checkPoint.y;
      }
    }
  }
  centreOfMass.x = massDistances.x / count + centre.x;
  centreOfMass.y = massDistances.y / count + centre.y;
  //console.log({mass: mass, centreOfMass: centreOfMass});
  //console.log('count', count);
  return { mass: mass, centreOfMass: centreOfMass };
}

function findMomentOfInertiaCOM(centreOfMass, vertices, boundingRect) {
  var count = 0;
  var accuracy = 100;
  var resolution = { x: 10, y: 10 };
  var momentOfInertiaCOM = 0;
  var width = boundingRect.maxX - boundingRect.minX;
  var height = boundingRect.maxY - boundingRect.minY;
  resolution.x = width < accuracy ? 1 : Math.round(width / accuracy);
  resolution.y = height < accuracy ? 1 : Math.round(height / accuracy);
  //console.log('resolution', resolution);
  var startPoint = { x: boundingRect.minX, y: boundingRect.minY };
  var checkPoint = {};
  for (var i = 0; i < width; i += resolution.x) {
    for (var j = 0; j < height; j += resolution.y) {
      checkPoint.x = startPoint.x + i;
      checkPoint.y = startPoint.y + j;
      var pointInShape = isPointInShape({ x: 0, y: 0 }, vertices, checkPoint);
      if (pointInShape) {
        momentOfInertiaCOM += resolution.x * resolution.y * Math.pow(magnitude(checkPoint), 2);
        count += 1;
      }
    }
  }
  //console.log('momentOfInertiaCOM', momentOfInertiaCOM);
  //console.log('count', count);
  return momentOfInertiaCOM;
}

function updateVertices(vertices, centre, centreOfMass) {
  var length = vertices.length;
  var diff = { x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y };
  for (var i = 0; i < length; i++) {
    vertices[i].x -= diff.x;
    vertices[i].y -= diff.y;
  }
  return vertices;
}

function findMomentOfInertia(pointInShape, momentOfInertiaCOM, mass) {
  var momentOfInertia = momentOfInertiaCOM + mass * Math.pow(magnitude(pointInShape), 2);
  //console.log('PAT momentOfInertia', momentOfInertia);
  return momentOfInertia;
}

function reCentre(shapes) {
  for (var shape in shapes) {
    var centre = { x: 0, y: 0 };
    var vertices = shapes[shape];
    var boundingRect = findBoundingRect(vertices);
    var mass = findMass(centre, vertices, boundingRect);
    var centreOfMass = mass.centreOfMass;
    vertices = updateVertices(vertices, centre, centreOfMass);
    shapes[shape] = vertices;
  }
}

function isPointInShape(centreOfMass, vertices, point) {
  var x0 = centreOfMass.x + vertices[0].x;
  var y0 = centreOfMass.y + vertices[0].y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for (var m = 1; m < vertices.length; m++) {
    var x = centreOfMass.x + vertices[m].x;
    var y = centreOfMass.y + vertices[m].y;
    bufferCtx.lineTo(x, y);
  }

  if (bufferCtx.isPointInPath(point.x, point.y)) {
    return true;
  } else {
    return false;
  }
}

reCentre(shapeSelection);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_stats_js_src_Stats_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_stats_js_src_Stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_stats_js_src_Stats_js__);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var play = document.getElementById("play");
var none = document.getElementById("none");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");
var pentagon = document.getElementById("pentagon");
var hexagon = document.getElementById("hexagon");
var circle = document.getElementById("circle");
var plus = document.getElementById("plus");
var arrow = document.getElementById("arrow");
var star = document.getElementById("star");
var tShape = document.getElementById("tShape");
var bar = document.getElementById("bar");
var concave = document.getElementById("concave");
var box = document.getElementById("box");
var _delete = document.getElementById("_delete");

var ui = {
  play: play,
  none: none,
  square: square,
  triangle: triangle,
  pentagon: pentagon,
  hexagon: hexagon,
  circle: circle,
  plus: plus,
  arrow: arrow,
  star: star,
  tShape: tShape,
  bar: bar,
  concave: concave,
  box: box,
  _delete: _delete
};

var uiArray = ['play', 'none', 'square', 'triangle', 'pentagon', 'hexagon', 'circle', 'plus', 'arrow', 'star', 'tShape', 'bar', 'concave', 'box', '_delete'];

const bufferCanvas = document.createElement('canvas');
const bufferCtx = bufferCanvas.getContext("2d");
bufferCtx.canvas.width = context.canvas.width;
bufferCtx.canvas.height = context.canvas.height;

function addUiEventListener(event, elem) {
  var uiElem = ui[elem];
  uiElem.addEventListener('click', function () {
    if (elem === 'none') {
      elem = false;
    }
    selectedShape = elem;
    deselect();
    uiElem.classList.add("selected");
    console.log('selectedShape', selectedShape);
  }, false);
}

function applyEvent() {
  for (var n = 0; n < uiArray.length; n++) {
    var elem = uiArray[n];
    addUiEventListener('click', elem);
  }
}

function deselect() {
  for (var n = 0; n < uiArray.length; n++) {
    var elem = uiArray[n];
    var uiElem = ui[elem];
    uiElem.classList.remove("selected");
  }
}

applyEvent();

var stats = new __WEBPACK_IMPORTED_MODULE_0__node_modules_stats_js_src_Stats_js___default.a();
stats.setMode(1); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild(stats.domElement);

setInterval(function () {

  stats.begin();

  // your code goes here

  stats.end();
}, 1000 / 60);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {

	var startTime = Date.now(),
	    prevTime = startTime;
	var ms = 0,
	    msMin = Infinity,
	    msMax = 0;
	var fps = 0,
	    fpsMin = Infinity,
	    fpsMax = 0;
	var frames = 0,
	    mode = 0;

	var container = document.createElement('div');
	container.id = 'stats';
	container.addEventListener('mousedown', function (event) {
		event.preventDefault();setMode(++mode % 2);
	}, false);
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var fpsDiv = document.createElement('div');
	fpsDiv.id = 'fps';
	fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
	container.appendChild(fpsDiv);

	var fpsText = document.createElement('div');
	fpsText.id = 'fpsText';
	fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	fpsText.innerHTML = 'FPS';
	fpsDiv.appendChild(fpsText);

	var fpsGraph = document.createElement('div');
	fpsGraph.id = 'fpsGraph';
	fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
	fpsDiv.appendChild(fpsGraph);

	while (fpsGraph.children.length < 74) {

		var bar = document.createElement('span');
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
		fpsGraph.appendChild(bar);
	}

	var msDiv = document.createElement('div');
	msDiv.id = 'ms';
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
	container.appendChild(msDiv);

	var msText = document.createElement('div');
	msText.id = 'msText';
	msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML = 'MS';
	msDiv.appendChild(msText);

	var msGraph = document.createElement('div');
	msGraph.id = 'msGraph';
	msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
	msDiv.appendChild(msGraph);

	while (msGraph.children.length < 74) {

		var bar = document.createElement('span');
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
		msGraph.appendChild(bar);
	}

	var setMode = function (value) {

		mode = value;

		switch (mode) {

			case 0:
				fpsDiv.style.display = 'block';
				msDiv.style.display = 'none';
				break;
			case 1:
				fpsDiv.style.display = 'none';
				msDiv.style.display = 'block';
				break;
		}
	};

	var updateGraph = function (dom, value) {

		var child = dom.appendChild(dom.firstChild);
		child.style.height = value + 'px';
	};

	return {

		REVISION: 12,

		domElement: container,

		setMode: setMode,

		begin: function () {

			startTime = Date.now();
		},

		end: function () {

			var time = Date.now();

			ms = time - startTime;
			msMin = Math.min(msMin, ms);
			msMax = Math.max(msMax, ms);

			msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
			updateGraph(msGraph, Math.min(30, 30 - ms / 200 * 30));

			frames++;

			if (time > prevTime + 1000) {

				fps = Math.round(frames * 1000 / (time - prevTime));
				fpsMin = Math.min(fpsMin, fps);
				fpsMax = Math.max(fpsMax, fps);

				fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
				updateGraph(fpsGraph, Math.min(30, 30 - fps / 100 * 30));

				prevTime = time;
				frames = 0;
			}

			return time;
		},

		update: function () {

			startTime = this.end();
		}

	};
};

if (true) {

	module.exports = Stats;
}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_lib_dat_gui_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_lib_dat_gui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_lib_dat_gui_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_maths_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_maths_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_maths_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_helper_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_helper_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_helper_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_ui_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_shapes_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_shapes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_shapes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_app_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_display_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_display_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_display_js__);








/***/ }
/******/ ]);