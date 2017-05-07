var gui;
function addGui(index){
  gui = new dat.GUI();
  var shape = Scene.shapes[index];
  gui.add(shape, 'id');
  gui.add(shape, 'fillColour');
  gui.add(shape, 'lineColour');
  gui.add(shape, 'linewidth');

  var centre = gui.addFolder('centre');
  centre.add(shape.centre, 'x');
  centre.add(shape.centre, 'y');
  gui.add(shape, 'onShape');

  var physics = gui.addFolder('physics');
  var velocity = physics.addFolder('velocity');
  var acceleration = physics.addFolder('acceleration');
  velocity.add(shape.physics.velocity, 'x');
  velocity.add(shape.physics.velocity, 'y');
  acceleration.add(shape.physics.acceleration, 'x');
  acceleration.add(shape.physics.acceleration, 'y');
  physics.add(shape.physics, 'density');
  physics.add(shape.physics, 'mass');
  physics.add(shape.physics, 'angularVelocity');
  physics.add(shape.physics, 'torque');
}
