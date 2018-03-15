import Scene from '../scenes/scene';
let mousePos = Scene.mousePos;
let throwArray = Scene.throwArray;

export function makeThrowArray(){
  var length = throwArray.length;
  var arraySize = 5
  if(length >= arraySize){
    throwArray = throwArray.splice(length - arraySize);
  }
  throwArray.push({ x: mousePos.x, y: mousePos.y });
}

export function throwVelocity(){
  var velocityArray = [];
  var velocity = {x: 0, y: 0};
  var length = throwArray.length;
  for(var i = 1; i < length; i++){
    velocityArray.push({ x: throwArray[i].x - throwArray[i-1].x, y: throwArray[i].y - throwArray[i-1].y });
  }
  var length2 = velocityArray.length;
  for(var j = 0; j < length2; j++){
    velocity.x += velocityArray[j].x;
    velocity.y += velocityArray[j].y;
  }
  if(length2 > 0){
    velocity.x /= length2*5;
    velocity.y /= length2*5;
  }
  return { x: velocity.x, y: velocity.y };
}
