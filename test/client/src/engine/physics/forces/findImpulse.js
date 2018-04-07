import findImpulse from '../../../../../../client/src/engine/physics/forces/findImpulse';
const masses = {
  massA: 1296,
  massB: 1296,
  momentOfInertiaA: 279720,
  momentOfInertiaB: 279720
};

const centres = {
  centreA: {x: 463.68000000000035, y: 300},
  centreB: {x: 420, y: 300}
};

const velocityA = {x: -0.02, y: 0};
const velocityB = {x: 0, y: 0};

const collisionPoint = {x: 438.22415587728466, y: 300.70710678118655};
const collisionDistanceA = {x: -25.180000000000348, y: 0.7071067811865532};
const collisionDistanceB = {x: 18.5, y: 0.7071067811865532};
const unitNormal = {x:1, y:0};
const collisionVelocity = {x: -0.02, y: 0};

const data = {
  collisionPoint,
  velocityA,
  velocityB
  collisionDistanceA
  collisionDistanceB
  unitNormal
  collisionVelocity
};



describe('findImpulse', function(){
  it('should calculate correct impulse', function(){
    findImpulse(data, masses, centres);
  });
});
