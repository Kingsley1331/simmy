import Vector from '../../../../../../client/src/engine/utils/maths/Vector';
import assert from 'assert';

describe('Vector', function(){
  it('Vector', function(){
    const vector = new Vector({x:3, y:4});
    const scaledVector = vector.scalProd(2)
    assert.deepEqual(scaledVector, {x:6, y:8, z:0, magnitude:10});
  })
})
