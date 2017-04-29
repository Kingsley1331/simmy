console.log('hello simmy!');

var id = 0;
var onShape = false;
var hoveringOnShape = 0;
var selectedShape = false;

var Scene = {
  backgroundColour: '#E0E0E0',
  shapes: []
};

function Shape(centre, vertices){
  this.id;
  this.fillColour = '#6495ED';
  this.lineColour = 'black';
  this.linewidth = 1;
  this.centre = centre;
  this.vertices = vertices;
  this.physics = {
    mass: 1,
  	momentOfInertia: 1,
    velocity: {x:1, y:0},
  	angularVelocity: 0,
    acceleration: {x:0, y:0},
    forces: [],
    torque: 0,
    centroid: {x: 0, y: 0}
  };
  this.onShape = false;
	this.dragging = false;
	this.selected = false;
  this.touchPoint = [];
}

function createShape(centre, vertices){
  id++;
  var shape = new Shape(centre, vertices);
  shape.id = id;
  Scene.shapes.push(shape);
}

function draw(){
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  forEachShape(function(i){
      bufferCtx.save();
      bufferCtx.fillStyle = ShapesController.getProperty(i, 'fillColour');

      var centre = ShapesController.getCentre(i);
      var num = ShapesController.getShapeSize(i);

      var vertices = ShapesController.getVertices(i);
      var x0 = vertices[0].x + centre.x;
      var y0 = vertices[0].y + centre.y;

      bufferCtx.beginPath();
      bufferCtx.moveTo(x0, y0);
      for(var j = 1; j < num; j++){
        var x = vertices[j].x + centre.x;
        var y = vertices[j].y + centre.y;
        bufferCtx.lineTo(x, y);
      }

      var onShape = ShapesController.getProperty(i, 'onShape');
      if(onShape){
        bufferCtx.shadowColor = 'rgba( 9, 9, 9, 0.3)';
        bufferCtx.shadowOffsetX = 10;
        bufferCtx.shadowOffsetY = 10;
        bufferCtx.shadowBlur = 10;
      }
      bufferCtx.closePath();
      bufferCtx.stroke();
      bufferCtx.fill();
      bufferCtx.restore();
  });

  context.drawImage(bufferCanvas,0,0, canvas.width, canvas.height);
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
	draw();
	requestAnimFrame(function() {
			animate();
	});
}

  function mouseMove(){
  	canvas.addEventListener('mousemove', function(evt){
  	  mousePos = getMousePos(evt, canvas);
      onObject = false;
      hoveringOnShape = 0;
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
    forEachShape(function(i){
      prepareToMoveShape(i);
      if(selectedShape === '_delete'){
        deleteShape(i);
      }
    });
    if(selectedShape && selectedShape !== '_delete'){
      createShape(mousePos, shapeSelection[selectedShape]);
    }
  }, false);
}

function mouseUp(){
  canvas.addEventListener('mouseup', function(evt){
    forEachShape(function(i){
      releaseShape(i);
    });
  }, false);
}

function detectShape(i){
  ShapesController.setProperty(i, 'onShape', false);
  var centre = ShapesController.getCentre(i);
  var vertices = ShapesController.getVertices(i);

  var x0 = centre.x + vertices[0].x;
  var y0 = centre.y + vertices[0].y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for(var m = 1; m < vertices.length; m++){
    var x = centre.x + vertices[m].x;
    var y = centre.y + vertices[m].y;
    bufferCtx.lineTo(x, y);
  }
  if(bufferCtx.isPointInPath(mousePos.x, mousePos.y)){
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
    moveShape(i);
  }
}

function prepareToMoveShape(i){
  if(ShapesController.getProperty(i, 'onShape')){
    var centre = ShapesController.getCentre(i);
    ShapesController.setProperty(i, 'dragging', true);
    var distanceX = mousePos.x - centre.x;
    var distanceY = mousePos.y - centre.y;
    ShapesController.setProperty(i, 'touchPoint', {x: distanceX, y: distanceY});
  }
}

function releaseShape(i){
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

function moveShape(i){
  var touchPoint = ShapesController.getTouchPoint(i);
  ShapesController.setProperty(i, 'centre', {
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

var ShapesController = (function(){
  var shapes = Scene.shapes;

  function getCentre(shapeIndex){
    var centre = shapes[shapeIndex].centre;
    return {
        x: centre.x,
        y: centre.y
     };
  }


  function getTouchPoint(shapeIndex){
    var touchPoint = shapes[shapeIndex].touchPoint;
    return {
        x: touchPoint.x,
        y: touchPoint.y
     };
  }

  function getShapeSize(shapeIndex){
    var shape = shapes[shapeIndex];
    var size = shape.vertices.length;
    return size;
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

  function getProperty(shapeIndex, property){
    var shape = shapes[shapeIndex];
    var property = shape[property];
    return property;
  }

  function setProperty(shapeIndex, property, value){
      Scene.shapes[shapeIndex][property] = value;
  }

  function deleteShape(shapeIndex){
    Scene.shapes.splice(shapeIndex, 1);
  }

  return {
    getCentre: getCentre,
    getTouchPoint: getTouchPoint,
    getShapeSize: getShapeSize,
    getVertices: getVertices,
    getProperty: getProperty,
    setProperty: setProperty,
    deleteShape: deleteShape
  };
})();
