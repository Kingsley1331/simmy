import Vector from '../../../../../../client/src/engine/utils/maths/Vector';
import assert from 'assert';

// rotateVector
// checkDirection
// rotateShape
// magnitude ***
// Vector ***
// Vector.add ***
// Vector.scalProd ***
// Vector.dotProd ***
// Vector.crossProd ***
// Vector.square ***
// Vector.findAngle
// Vector.isParallel ***

describe('Vector', function(){
  it('should calculate a vector\'s magnitude', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const magnitude = Math.hypot(3, 4, 8);
    assert.deepEqual(vector.magnitude, magnitude);
  })
  it('should create a vector', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const magnitude = Math.hypot(3, 4, 8);
    assert.deepEqual(vector, {x:3, y:4, z:8, magnitude});
  })
  it('should square vector', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const product = vector.square();
    assert.deepEqual(89, product);
  })
  it('should add vectors', function(){
    const vector = new Vector({x:3, y:4, z:6});
    const vector2 = vector.add({x:4, y:5, z:5})
    // const vector3 = vector.add({x:1, y:2, z:5})
    const magnitude = Math.hypot(7, 9, 11);
    assert.deepEqual(vector2, {x:7, y:9, z:11, magnitude});
  })
  it('vectors should be scalable', function(){
    const vector = new Vector({x:3, y:4, z:10});
    const scaledVector = vector.scalProd(2)
    const magnitude = Math.hypot(6, 8, 20);
    assert.deepEqual(scaledVector, {x:6, y:8, z:20, magnitude});
  })
  it('should calculate vector dot product', function(){
    const vector = new Vector({x:3, y:4, z:10});
    const vector2 = new Vector({x:5, y:8, z:13});
    const vector3 = new Vector({x:-15, y:83, z:17});
    const product = vector.dotProd(vector2);
    const product2 = vector.dotProd(vector3);
    assert.deepEqual(product, 177);
    assert.deepEqual(product2, 457);
  });
  it('should calculate vector cross product', function(){
    const vector = new Vector({x:3, y:4, z:6});
    const vector2 = vector.crossProd({x:4, y:5, z:5})
    const magnitude = Math.hypot(vector2.x, vector2.y, vector2.z);
    assert.deepEqual(vector2, {x:-10, y:9, z:-1, magnitude});
  })
  it('should determine if 2 vectors are parallel', function(){
    const vector = new Vector({x:3, y:4, z:6});
    const vector2 = new Vector({x:6, y:8, z:12});
    const vector3 = new Vector({x:-6, y:-8, z:-12});
    const vector4 = new Vector({x:-6, y:-8, z:12});
    const vector5 = new Vector({x:0, y:1, z:0});
    const vector6 = new Vector({x:0, y:-10, z:0});
    const vector7 = new Vector({x:1, y:0, z:0});
    const vector8 = new Vector({x:-1, y:0, z:0});
    const isParallel = vector.isParallel(vector2);
    const isParallel2 = vector.isParallel(vector3);
    const isParallel3 = vector.isParallel(vector4);
    const isParallel4 = vector5.isParallel(vector6);
    const isParallel5 = vector7.isParallel(vector8);
    const isParallel6 = vector7.isParallel(vector5);
    const isParallel7 = vector8.isParallel(vector6);

    assert.deepEqual(isParallel, true);
    assert.deepEqual(isParallel2, true);
    assert.deepEqual(isParallel3, false);
    assert.deepEqual(isParallel4, true);
    assert.deepEqual(isParallel5, true);
    assert.deepEqual(isParallel6, false);
    assert.deepEqual(isParallel7, false);
  })
  it('should calculate angle between vectors', function(){
    const vector = new Vector({x:0, y:5, z:0});
    const vector2 = {x:Math.sqrt(2), y:Math.sqrt(2), z:0};
    const vector3 = {x:5, y:0, z:0};
    const angle = vector.findAngle(vector2);
    const angle2 = vector.findAngle(vector3);
    assert.deepEqual(angle, Math.PI / 4);
    // assert.deepEqual(angle2, Math.PI / 2);
  })
})
