console.log('hello simmy!');
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");
var none = document.getElementById("none");
var mousePos = {};
var id = 0;
var onShape = false;
var hoveringOnShape = 0;
var selectedShape = 'square';
var shapeSelection = {
  square: [
      {x: -25, y: -25},
      {x: 25, y: -25},
      {x: 25, y: 25},
      {x: -25, y: 25}
    ],
  triangle: [
      {x: -60/2, y: Math.sqrt(3)/6 * 60},
      {x: 60/2, y: Math.sqrt(3)/6 * 60},
      {x: 0, y: -2 * Math.sqrt(3)/6 * 60}
    ]
};

bufferCanvas = document.createElement('canvas');
bufferCtx = bufferCanvas.getContext("2d");
bufferCtx.canvas.width = context.canvas.width;
bufferCtx.canvas.height = context.canvas.height;

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

square.addEventListener('click', function(){
  selectedShape = 'square';
  console.log('selectedShape', selectedShape);
}, false);

triangle.addEventListener('click', function(){
  selectedShape = 'triangle';
  console.log('selectedShape', selectedShape);
}, false);

none.addEventListener('click', function(){
  selectedShape = false;
  console.log('selectedShape', selectedShape);
}, false);


function shapeSelector(shape){
  console.log('shapeSelector', shapeSelection[shape]);
  return shapeSelection[shape];
}

function draw(){
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  forEachShape(function(shape){
      bufferCtx.save();
      bufferCtx.fillStyle = shape.fillColour;
      var centre = shape.centre;
      var num = shape.vertices.length;
      var x0 = shape.vertices[0].x + centre.x;
      var y0 = shape.vertices[0].y + centre.y;
      bufferCtx.beginPath();
      bufferCtx.moveTo(x0, y0);
      for(var j = 1; j < num; j++){
        var x = shape.vertices[j].x + centre.x;
        var y = shape.vertices[j].y + centre.y;
        bufferCtx.lineTo(x, y);
      }
      if(shape.onShape){
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
  //Scene.shapes[1].centre.x += Scene.shapes[1].physics.velocity.x;
	draw();
	requestAnimFrame(function() {
			animate();
	});
}


//canvas.addEventListener uses this function to calculate mouse position
function getMousePos(evt, canvas) {
	var rect = canvas.getBoundingClientRect();

	if(evt.clientX && evt.clientY){
		var x = evt.clientX - rect.left;
		var y = evt.clientY - rect.top;
	}
	return {
			x: x,
			y: y
		};
	}

  function mouseMove(){
  	canvas.addEventListener('mousemove', function(evt){
  	  mousePos = getMousePos(evt, canvas);
      onObject = false;
      hoveringOnShape = 0;
      forEachShape(function(shape){
          detectShape(shape);
      }, true);
      if(hoveringOnShape > 0){
        onShape = false;
      }
    });
  }

function mouseDown(){
  canvas.addEventListener('mousedown', function(evt){
    forEachShape(function(shape){
      prepareToMoveShape(shape);
    });
    if(selectedShape){
      createShape(mousePos, shapeSelection[selectedShape]);
    }
  }, false);
}

function mouseUp(){
  canvas.addEventListener('mouseup', function(evt){
    forEachShape(function(shape){
      releaseShape(shape);
    });
  }, false);
}

function detectShape(shape){
  shape.onShape = false;
  var x0 = shape.centre.x + shape.vertices[0].x;
  var y0 = shape.centre.y + shape.vertices[0].y;

  bufferCtx.beginPath();
  bufferCtx.moveTo(x0, y0);
  for(var m = 1; m < shape.vertices.length; m++){ // check the shape
    var x = shape.centre.x + shape.vertices[m].x;
    var y = shape.centre.y + shape.vertices[m].y;
    bufferCtx.lineTo(x, y);
  }
  if(bufferCtx.isPointInPath(mousePos.x, mousePos.y)){
    hoveringOnShape++;
    if(!onShape){
      shape.onShape = true;
      onShape = true;
    }
    if(shape.onShape){
      shape.onShape = true;
    } else {
      shape.onShape = false;
    }
  } else {
    shape.onShape = false;
  }

  if(shape.dragging){
    moveShape(shape);
  }
}

function prepareToMoveShape(shape){
  if(shape.onShape){
    shape.dragging = true;
    var distanceX = mousePos.x - shape.centre.x;
    var distanceY = mousePos.y - shape.centre.y;
    shape.touchPoint = {x: distanceX, y: distanceY};
  }
}

function releaseShape(shape){
    shape.dragging = false;
    shape.selected = false;
}


function moveShape(shape){
  shape.centre.x = mousePos.x - shape.touchPoint.x;
  shape.centre.y = mousePos.y - shape.touchPoint.y;
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
      callback(shape);
    }
  } else if(bool) {
    for(var i = length-1; i >= 0; i--){
      var shape = shapes[i];
      callback(shape);
    }
  }
}

function distance(x,y){
	return Math.sqrt(x*x + y*y);
}
