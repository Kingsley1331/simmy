import ShapesController from '../../shapes/ShapesController';
import findImpulse from '../forces/findImpulse';
import findVelocities from '../motion/findVelocities';
import averageData from './averageData';

const collisionHandler1 = (aCollisions, bCollisions) => {
    for (const shapeAIndex in aCollisions ){
        const collidingShapesData = aCollisions[shapeAIndex];
        for (const collidingShape in collidingShapesData){
            // console.count('collisionHandler1');
            const data = averageData(collidingShapesData[collidingShape]);
            ShapesController.setProperty(collidingShape, 'collisionData', data);
            // console.log('averageData', data)
            var centreOfMassA = ShapesController.getCentreOfMass(shapeAIndex);
            var centreOfMassB = ShapesController.getCentreOfMass(collidingShape); //collidingShape = shapeBIndex

            var velocityA = ShapesController.getProperty(shapeAIndex, 'velocity', true);
            var velocityB = ShapesController.getProperty(collidingShape, 'velocity', true);

            var angularVelocityA = ShapesController.getProperty(shapeAIndex, 'angularVelocity', true);
            var angularVelocityB = ShapesController.getProperty(collidingShape, 'angularVelocity', true);

            const velocities = {
                velocityA,
                velocityB,
                angularVelocityA,
                angularVelocityB
            }

            var massA = ShapesController.getProperty(shapeAIndex, 'mass', true);
            var massB = ShapesController.getProperty(collidingShape, 'mass', true);

            var momentOfInertiaA = ShapesController.getProperty(shapeAIndex, 'momentOfInertiaCOM', true);
            var momentOfInertiaB = ShapesController.getProperty(collidingShape, 'momentOfInertiaCOM', true);
            var unitNormal = data.unitNormal;
            var masses = { massA: massA, massB: massB, momentOfInertiaA: momentOfInertiaA, momentOfInertiaB: momentOfInertiaB };
            var centres = { centreA: centreOfMassA, centreB: centreOfMassB };

            const newVelocity = findVelocities(data, masses, centres, velocities, findImpulse);
            const newVelocityA = newVelocity.linearA;
            const newVelocityB = newVelocity.linearB;
            const newAngularVelocityA = newVelocity.angularA;
            const newAngularVelocityB = newVelocity.angularB;

            console.log('newVelocityA', newVelocityA);
            console.log('newVelocityB', newVelocityB);
            console.log('newAngularVelocityA', newAngularVelocityA);
            console.log('newAngularVelocityB', newAngularVelocityB);
            console.log('shapeAIndex', shapeAIndex);
            console.log('shapeBIndex', collidingShape);

            ShapesController.setProperty(shapeAIndex, 'velocity', newVelocityA, true);
            ShapesController.setProperty(shapeAIndex, 'angularVelocity', newAngularVelocityA, true);

            ShapesController.setProperty(collidingShape, 'velocity', newVelocityB, true);
            ShapesController.setProperty(collidingShape, 'angularVelocity', newAngularVelocityB, true);
            console.log('collision!');
        }
    }
}

export default collisionHandler1;