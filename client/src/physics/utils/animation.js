import Scene from '../scenes/scene';
import { forEachShape } from '../shapes/shapes';
import { applyMotion } from '../physics/motion';
import { draw1 } from '../scenes/draw';
import collisionDetector from '../physics/collisions/collisionDetector'

let canvas;
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
		function(callback) {
		    window.setTimeout(callback, 1000 / 60);
	    };
})();

export default function animate(){
  canvas = document.getElementById('canvas');
  var date = new Date();
  var currentTime = date.getTime();
  let time = Scene.time;
  var tDelta = (currentTime - time);
  console.log('selected' ,Scene.selected);
  if(Scene.selected === 'play'){
    forEachShape(function(i){
      applyMotion(i, tDelta);
      // applyForces(i);
    });
    collisionDetector();
  }
	draw1(canvas);
	window.requestAnimFrame(animate);
  Scene.time = currentTime;
}
