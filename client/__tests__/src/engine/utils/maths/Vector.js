import Vector, { checkDirection, rotateVector } from '../../../../../../client/src/engine/utils/maths/Vector';
import Matrix from '../../../../../../client/src/engine/utils/maths/Matrix';
import assert from 'assert';

const root2 = Math.sqrt(2);

describe('Vector', function(){
  it('should calculate a vector\'s magnitude', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const magnitude = Math.hypot(3, 4, 8);
    assert.deepEqual(vector.magnitude, magnitude);
  });

  it('should create a vector', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const magnitude = Math.hypot(3, 4, 8);
    assert.deepEqual(vector, {x:3, y:4, z:8, magnitude});
  });

  it('should square vector', function(){
    const vector = new Vector({x:3, y:4, z:8});
    const product = vector.square();
    assert.deepEqual(89, product);
  });

  it('should add vectors', function(){
    const vector = new Vector({x:3, y:4, z:6});
    const vector2 = vector.add({x:4, y:5, z:5})
    // const vector3 = vector.add({x:1, y:2, z:5})
    const magnitude = Math.hypot(7, 9, 11);
    assert.deepEqual(vector2, {x:7, y:9, z:11, magnitude});
  });

  it('vectors should be scalable', function(){
    const vector = new Vector({x:3, y:4, z:10});
    const scaledVector = vector.scalProd(2)
    const magnitude = Math.hypot(6, 8, 20);
    assert.deepEqual(scaledVector, {x:6, y:8, z:20, magnitude});
  });

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
  });

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
  });

  xit('should rotate vector by given angle', function() {
    const vector1 = new Vector({x:0, y:2, z:0});
    const vector2 = new Vector({x:root2, y:root2, z:0});
    const vector3 = new Vector({x:2, y:0, z:0});
    const vector4 = new Vector({x:-5, y:0, z:0});
    const vector5 = new Vector({x:-root2, y:root2, z:0});
    const vector6 = new Vector({x:root2, y:-root2, z:0})


    const vector5a = rotateVector(Math.PI, vector1);
    const vector4a = rotateVector(Math.PI / 2, vector1);
    const vector2b = rotateVector(Math.PI / 2, vector6);
    const vector3a = rotateVector(-3 * Math.PI / 4, vector5);

    const vector1a = rotateVector(Math.PI / 4, vector2);
    const vector2a = rotateVector(-Math.PI / 4, vector1);

    assert.deepEqual(vector1, vector1a);
    assert.deepEqual(rotateVector(-Math.PI / 4, vector1a), vector2);
    assert.deepEqual(vector2, vector2a);
    assert.deepEqual(rotateVector(Math.PI / 4, vector2a), vector1);
    assert.deepEqual(vector3, vector3a);
    assert.deepEqual(rotateVector(3 * Math.PI / 4, vector3a), vector5);
  });

  it('should calculate angle between vectors', function() {
    const vector1 = new Vector({x:0, y:5, z:0});
    const vector2 = new Vector({x:root2, y:root2, z:0});
    const vector3 = new Vector({x:5, y:0, z:0});
    const vector4 = new Vector({x:root2, y:-root2, z:0});
    const vector5 = new Vector({x:0, y:-5, z:0});
    const vector6 = new Vector({x:-root2, y:-root2, z:0});
    const vector7 = new Vector({x:-5, y:0, z:0});
    const vector8 = new Vector({x:-root2, y:root2, z:0});

    const angle1 = vector1.findAngle(vector2);
    const angle2 = vector1.findAngle(vector3);
    const angle3 = vector1.findAngle(vector4);
    const angle4 = vector1.findAngle(vector5);
    const angle5 = vector1.findAngle(vector6);
    const angle6 = vector1.findAngle(vector7);
    const angle7 = vector1.findAngle(vector8);

    const angle8 = vector2.findAngle(vector3);
    const angle9 = vector2.findAngle(vector4);
    const angle10 = vector2.findAngle(vector1);
    const angle11 = vector2.findAngle(vector6);


    assert.equal(angle1, -Math.PI / 4); // clockwise => angle * -1
    assert.equal(angle2, -Math.PI / 2); // clockwise => angle * -1
    assert.equal(angle3, -3 * Math.PI / 4); // clockwise => angle * -1
    assert.equal(angle4, Math.PI); // anti-clockwise => angle
    assert.equal(angle5, 3 * Math.PI / 4); // anti-clockwise => angle
    assert.equal(angle6, Math.PI / 2); // clockwise => angle
    assert.equal(angle7, Math.PI / 4); // clockwise => angle

    assert.equal(angle8, angle1);
    assert.equal(angle9, angle2);
    assert.equal(angle10, angle7);
    assert.equal(angle11, angle4);
  });

  it('should be able to determine direction of 2nd vector', function(){
    const vector1 = new Vector({x:0, y:5, z:0});
    const vector2 = new Vector({x:root2, y:root2, z:0});
    const vector3 = new Vector({x:-root2, y:-root2, z:0});
    const vector4 = new Vector({x:-root2, y:root2, z:0});

    const angle1 = Math.PI / 4;
    const angle2 = Math.PI / 2;
    const direction1 = checkDirection(vector1, vector2, angle1);
    const direction2 = checkDirection(vector2, vector1, angle1);
    const direction3 = checkDirection(vector3, vector4, angle2);
    const direction4 = checkDirection(vector4, vector3, angle2);

    assert.equal(direction1, 'clockwise');
    assert.equal(direction2, 'anti-clockwise');
    assert.equal(direction3, 'clockwise');
    assert.equal(direction4, 'anti-clockwise');
  });
})
