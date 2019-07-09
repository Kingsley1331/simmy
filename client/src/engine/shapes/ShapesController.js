import Scene from "../scenes/scene";
var ShapesController = (function() {
  console.log("ShapesController SCENE", Scene);
  var shapes = Scene.shapes;

  function getCentreOfMass(shapeIndex) {
    var centreOfMass = Scene.shapes[shapeIndex].centreOfMass;
    return {
      x: centreOfMass.x,
      y: centreOfMass.y
    };
  }

  function getTouchPoint(shapeIndex) {
    var touchPoint = Scene.shapes[shapeIndex].touchPoint;
    return {
      x: touchPoint.x,
      y: touchPoint.y
    };
  }

  function getProperty(shapeIndex, propertyName, bool) {
    var shape = Scene.shapes[shapeIndex];
    if (!bool) {
      var property = shape[propertyName];
    } else {
      var property = shape["physics"][propertyName];
    }
    return property;
  }

  function setProperty(shapeIndex, property, value, bool) {
    if (!bool) {
      if (
        (Scene.selected === "play" || Scene.selected === "step") &&
        property === "vertices" &&
        value.length === 6
      ) {
        // console.log('vertices', JSON.parse(JSON.stringify(vertices[4])));
        // console.log('vertices', JSON.parse(JSON.stringify(value[4])));
        // console.log('vertices collidingShape', value[4].collidingShape);
        // console.log('vertices collidingShape', value);
      }

      Scene.shapes[shapeIndex][property] = value;
    } else if (bool === true) {
      //physics property
      Scene.shapes[shapeIndex]["physics"][property] = value;
    }
  }

  function deleteShape(shapeIndex) {
    if (Scene.shapes[shapeIndex].onShape) {
      Scene.shapes.splice(shapeIndex, 1);
    }
  }

  return {
    getCentreOfMass: getCentreOfMass,
    getTouchPoint: getTouchPoint,
    getProperty: getProperty,
    setProperty: setProperty,
    deleteShape: deleteShape
  };
})();

export default ShapesController;
