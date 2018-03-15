import getMousePos from './position';
import { detectShape, createShape, shapeSelection, forEachShape } from '../shapes/shapes';
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
      }
    }
    if(typeof shapeSelection[selectedShape] === 'object'){
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
    // if(hoveringOnShape > 0){
    //   onShape = false;
    // }
  });
}
