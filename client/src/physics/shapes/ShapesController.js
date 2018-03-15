import Scene from '../scenes/scene'
var ShapesController = (function(){
  var shapes = Scene.shapes;

  function getCentreOfMass(shapeIndex){
    var centreOfMass = shapes[shapeIndex].centreOfMass;
    return {
        x: centreOfMass.x,
        y: centreOfMass.y
     };
  }

  function getTouchPoint(shapeIndex){
    var touchPoint = shapes[shapeIndex].touchPoint;
    return {
        x: touchPoint.x,
        y: touchPoint.y
     };
  }

  function getVertices(shapeIndex){
    var vertices = [];
    var point = {};
    var shape = shapes[shapeIndex];
    var size = shape.vertices.length;
    const selectedShape = 'player'
    if(shape.vertices.length === 6 && selectedShape === 'play'){
      //console.log('vertices', JSON.parse(JSON.stringify(vertices[4])));
      //console.log('vertices', JSON.parse(JSON.stringify(shape.vertices[4])));
      //console.log('getVertices vertices', shape.vertices[4].collidingShape);
    }
    for(var i = 0; i < size; i++){
      point = {x: shape.vertices[i].x, y: shape.vertices[i].y, collidingShape: shape.vertices[i].collidingShape};
      vertices.push(point);
    }
    return vertices;
  }

  function getProperty(shapeIndex, property, bool){
    var shape = shapes[shapeIndex];
    if (!bool) {
      var property = shape[property];
    } else {
      var property = shape['physics'][property];
    }
    return property;
  }

  function setProperty(shapeIndex, property, value, bool){
    if (!bool) {

      // if(selectedShape === 'play' && property === 'vertices' && value.length === 6){
      //   //console.log('vertices', JSON.parse(JSON.stringify(vertices[4])));
      //   //console.log('vertices', JSON.parse(JSON.stringify(value[4])));
      //   console.log('vertices collidingShape', value[4].collidingShape);
      // }

      Scene.shapes[shapeIndex][property] = value;
    } else if(bool === true) { //physics property
      Scene.shapes[shapeIndex]['physics'][property] = value;
    }
  }

  function deleteShape(shapeIndex){
    console.log('Scene.shapes', Scene.shapes);
    console.log('shapeIndex', shapeIndex);
    if(Scene.shapes[shapeIndex].onShape){
      Scene.shapes.splice(shapeIndex, 1);
    }
  }

  return {
    getCentreOfMass: getCentreOfMass,
    getTouchPoint: getTouchPoint,
    getVertices: getVertices,
    getProperty: getProperty,
    setProperty: setProperty,
    deleteShape: deleteShape
  };
})();

export default ShapesController;
