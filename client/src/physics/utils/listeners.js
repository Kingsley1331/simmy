import getMousePos from './position';
import { makeThrowArray } from './throw';
import { detectShape, createShape, shapeSelection, forEachShape, prepareToMoveShape, releaseShape } from '../shapes/shapes';
import ShapesController from '../shapes/ShapesController';
import { draw1 } from '../scenes/draw';
import Scene from '../scenes/scene';

import Vector from './maths/Vector';

export const mouseDown = (element) => {
  element.addEventListener('mousedown', (evt) => {


    var vector1 = new Vector({x:0, y:1});
    var vector2 = new Vector({x:1, y:1});
    var angle = vector1.findAngle(vector2);
    console.log(angle);

    if(Scene.shapes[0]){console.log('scene.shapes', Scene.shapes[0])}


    let mousePos = getMousePos(evt, element);
    forEachShape(function(i){
      prepareToMoveShape(i);
      if(Scene.selected === '_delete'){
        ShapesController.deleteShape(i);
      }
    });

    if(typeof shapeSelection[Scene.selected] === 'object' && !Scene.cursorOnshape){
      createShape(mousePos, shapeSelection[Scene.selected]);
    }
  }, false)
}

export const mouseMove = (element) => {
  element.addEventListener('mousemove', function(evt){
    let mousePos = getMousePos(evt, element);
    if(Scene.selected === 'play'){
      makeThrowArray();
    }
    forEachShape(function(i){
        detectShape(i);
    }, false);
    /**** TODO: consider using ShapesController to get shape properties ****/
    Scene.cursorOnshape = Scene.shapes.some(shape => shape.onShape)
  });
}

export const mouseUp = (element) => {
  element.addEventListener('mouseup', function(evt){
    forEachShape(function(i){
      releaseShape(i);
    });
    Scene.throwArray = [];
  }, false);
}
