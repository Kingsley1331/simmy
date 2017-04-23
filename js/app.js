console.log('hello simmy!');
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var mousePos;

bufferCanvas = document.createElement('canvas');
bufferCtx = bufferCanvas.getContext("2d");
bufferCtx.canvas.width = context.canvas.width;
bufferCtx.canvas.height = context.canvas.height;

var Scene = {
  backgroundColour: '#E0E0E0',
  shapes: []
};

function Shape(centre, vertices){
  this.id = [];
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
  this.onObject = false;
	this.dragging = false;
	this.selected = false;
}

function createShape(centre, vertices){
  var shape = new Shape(centre, vertices);
  Scene.shapes.push(shape);
}

createShape({x: 25, y:200},
   [
    {x: -25, y: -25},
    {x: 25, y: -25},
    {x: 25, y: 25},
    {x: -25, y: 25}
  ]);

createShape({x: 125, y:200},
   [
    {x: -25, y: -25},
    {x: 25, y: -25},
    {x: 25, y: 25},
    {x: -25, y: 25}
  ]);

createShape({x: 225, y:200},
   [
    {x: -25, y: -25},
    {x: 25, y: -25},
    {x: 25, y: 25},
    {x: -25, y: 25}
  ]);

createShape({x: 325, y:200},
   [
    {x: -25, y: -25},
    {x: 25, y: -25},
    {x: 25, y: 25},
    {x: -25, y: 25}
  ]);

createShape({x: 425, y:200},
   [
    {x: -25, y: -25},
    {x: 25, y: -25},
    {x: 25, y: 25},
    {x: -25, y: 25}
  ]);

function draw(){
  bufferCtx.fillStyle = Scene.backgroundColour;
  bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
  var shapes = Scene.shapes;
  var length = shapes.length;
  for(var i = 0; i < length; i++){
    bufferCtx.fillStyle = shapes[i].fillColour;
    var centre = shapes[i].centre;
    var num = shapes[i].vertices.length;
    var x0 = shapes[i].vertices[0].x + centre.x;
    var y0 = shapes[i].vertices[0].y + centre.y;
    bufferCtx.beginPath();
    bufferCtx.moveTo(x0, y0);
    for(var j = 0; j < num; j++){
      var x = shapes[i].vertices[j].x + centre.x;
      var y = shapes[i].vertices[j].y + centre.y;
      bufferCtx.lineTo(x, y);
    }
    bufferCtx.closePath();
    bufferCtx.stroke();
    bufferCtx.fill();
  }

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
      //console.log('mousePos', mousePos);
    });
  }

  function mouseDown(){
    canvas.addEventListener('mousedown', function(evt){
      console.log('mouse down!', mousePos);
    }, false);
  }

function selectShape(){
  
}


  function init(){
    flicker();
    animate();
    mouseDown();
    mouseMove();
  }

  init();
