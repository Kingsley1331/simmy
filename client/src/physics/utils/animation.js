import Scene from '../scenes/scene';
import { forEachShape } from '../shapes/shapes';
import { applyMotion } from '../physics/motion';
import { draw } from '../scenes/draw';
import collisionDetector from '../physics/collisions/collisionDetector';
import applyForces from '../physics/forces/applyForces';

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
	/** TODO: store canvas globally in Scene to make it less expensive **/
  canvas = document.getElementById('canvas');
  var date = new Date();
  var currentTime = date.getTime();
  let time = Scene.time;
  var tDelta = (currentTime - time);
  if(Scene.selected === 'play'){
    forEachShape(function(i){
      applyMotion(i, tDelta);
      applyForces(i);
    });
    collisionDetector();
  }
	draw(canvas);
	window.requestAnimFrame(animate);
  Scene.time = currentTime;
}
