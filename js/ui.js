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

var uiArray = ['play','none', 'square', 'triangle', 'pentagon', 'hexagon', 'circle', 'plus', 'arrow', 'star', 'tShape', 'bar', 'concave', 'box', '_delete'];

const bufferCanvas = document.createElement('canvas');
const bufferCtx = bufferCanvas.getContext("2d");
bufferCtx.canvas.width = context.canvas.width;
bufferCtx.canvas.height = context.canvas.height;

function addUiEventListener(event, elem) {
  var uiElem = ui[elem];
  uiElem.addEventListener('click', function(){
    if(elem === 'none'){
      elem = false;
    }
    selectedShape = elem;
    deselect();
    uiElem.classList.add("selected");
    console.log('selectedShape', selectedShape);
  }, false);
}

function applyEvent() {
  for(var n = 0; n < uiArray.length; n++) {
    var elem = uiArray[n];
    addUiEventListener('click', elem);
  }
}

function deselect() {
  for(var n = 0; n < uiArray.length; n++) {
    var elem = uiArray[n];
    var uiElem = ui[elem];
    uiElem.classList.remove("selected");
  }
}

applyEvent();

var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

setInterval( function () {

    stats.begin();

    // your code goes here

    stats.end();

}, 1000 / 60 );
