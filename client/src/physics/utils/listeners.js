import getMousePos from './position';
import { detectShape, createShape, shapeSelection, forEachShape, prepareToMoveShape, deleteShape, releaseShape } from '../shapes/shapes';
import { draw1 } from '../scenes/draw';
import Scene from '../scenes/scene';

export const mouseDown = (element, self) => {
  element.addEventListener('mousedown', (evt) => {
    let mousePos = getMousePos(evt, element);
    let selectedShape;
    console.log('Scene.mousePos', Scene.mousePos);
    const buttons = self.props.buttons;
    for(let button in buttons){
      if(buttons[button]){
        selectedShape = button;
        Scene.selected = button;
      }
    }

    forEachShape(function(i){
      prepareToMoveShape(i);
      if(Scene.selected === '_delete'){
        deleteShape(i);
      }
    });


    if(typeof shapeSelection[selectedShape] === 'object' && !Scene.cursorOnshape){
      createShape(mousePos, shapeSelection[selectedShape]);
    }
  }, false)
}

export const mouseMove = (element) => {
  element.addEventListener('mousemove', function(evt){
    let mousePos = getMousePos(evt, element);
    // hoveringOnShape = 0;
    // if(selectedShape === 'play'){
    //   makeThrowArray();
    // }
    forEachShape(function(i){
        detectShape(i);
    }, true);
    Scene.cursorOnshape = Scene.shapes.some(shape => shape.onShape)
    // if(hoveringOnShape > 0){
    //   onShape = false;
    // }
  });
}

export const  mouseUp = (element) => {
  element.addEventListener('mouseup', function(evt){
    forEachShape(function(i){
      releaseShape(i);
    });
    Scene.throwArray = [];
  }, false);
}
