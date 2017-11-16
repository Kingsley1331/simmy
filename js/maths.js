function magnitude(vector){
	var x = vector.x;
	var y = vector.y;
	var z = vector.z;
	var result = vector.z ? Math.sqrt(x*x + y*y + z*z) : Math.sqrt(x*x + y*y);
	return result;
}

 function Vector(vector){
	 var mag = magnitude(vector);
	 this.x = vector.x;
	 this.y = vector.y;
	 this.z = vector.z ? vector.z: 0;
	 this.magnitude = mag;
 }

 Vector.prototype.add = function(vector2){
	 var sum = {x: this.x + vector2.x, y: this.y + vector2.y, z: this.z + vector2.z};
	 result = new Vector(sum);
	 return result;
 };

 Vector.prototype.scalProd = function(scale){
	 var product = {x: this.x * scale, y: this.y * scale, z: this.z * scale};
	 product = new Vector(product);
	 return product;
 };

 Vector.prototype.dotProd = function(vector2){
	 var product = (this.x * vector2.x) + (this.y * vector2.y) + (this.z * vector2.z);
	 return product;
 };

 Vector.prototype.square = function(){
	 var product = (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
	 return product;
 };

 Vector.prototype.crossProd = function(vector2){
		var x = this.y * vector2.z - this.z * vector2.y;
		var y = this.z * vector2.x - this.x * vector2.z;
		var z = this.x * vector2.y - this.y * vector2.x;
		var product = new Vector({x: x, y: y, z: z});
		return product;
 }

Vector.prototype.findAngle = function(vector2){
	var vector1 = {x: this.x, y: this.y};
	var dotProd = this.dotProd(vector2);
	var mag = this.magnitude;
	var mag2 = vector2.magnitude;
	var ratio = dotProd / (mag * mag2);
	//ratio = -5;
	ratio = (ratio > 1) ? 1 : (ratio < -1) ? -1 : ratio;
	//console.log('ratio', ratio);
	var angle = Math.acos(ratio);
	var direction = checkDirection(vector1, vector2, angle);
	angle = direction === 'clockwise' ? angle * -1 : angle;

	// console.log('vector1', vector1);
	// console.log('dotProd', dotProd);
	// console.log('mag', mag);
	// console.log('mag2', mag2);
	// console.log('calculated angle', angle);
	// console.log('direction', direction);

	return angle;
}

Vector.prototype.isParallel = function(vector2){
	var product = this.crossProd(vector2);
	// console.log('product', product);
	// console.log('isParallel vector', vector2);
	// console.log('this vector', {x:this.x, y:this.y});

	product.x = Math.abs(product.x) <= 0.0000001 ? 0: product.x;
	product.y = Math.abs(product.y) <= 0.0000001 ? 0: product.y;
	product.z = Math.abs(product.z) <= 0.0000001 ? 0: product.z;

	//console.log('isParallel', product.x === 0 && product.y === 0 && product.z === 0);

	if(product.x === 0 && product.y === 0 && product.z === 0){
		return true;
	} else {
		return false;
	}
}

function checkDirection(vector1, vector2, angle){
	var rotatedVector = rotateVector(angle, vector1);
	var direction = 'anti-clockwise';
	// console.log('rotatedVector', rotatedVector);
	// console.log('vector2', vector2);
	var dotProd = vector2.dotProd(rotatedVector);
	var isParallel = rotatedVector.isParallel(vector2);


	var rotatedVector2 = rotateVector(angle * -1, vector1)
	var dotProd2 = vector2.dotProd(rotatedVector2);
	var isParallel2 = rotatedVector2.isParallel(vector2);
	// dotProd > 0 means that the vectors are facing the same direction
	if(isParallel === true && dotProd >= 0){ //console.log('parallel');
		//return 'anti-clockwise';
		direction = 'anti-clockwise';
		// if the vectors are not parallel or they are parallel but pointing in opposite directions
	} else if(isParallel === false || isParallel === true && dotProd <= 0){
		//temporary condition just for testing
			if(isParallel2 === true && dotProd2 >= 0){
				//return 'clockwise';
				direction = 'clockwise';
			}
		} else {
			direction = 'anti-clockwise';
			//return 'anti-clockwise';
		}
		return direction;
}



// 3 x 3 Matrix
function Matrix(matrix){
	this.r1 = matrix.r1;
	this.r2 = matrix.r2;
	this.r3 = matrix.r3;
}

Matrix.prototype.mMult = function(matrix2){
	var newMatrix = {};
	var r11 = this.r1[0] * matrix2.r1[0] + this.r1[1] * matrix2.r2[0] + this.r1[2] * matrix2.r3[0];
	var r12 = this.r1[0] * matrix2.r1[1] + this.r1[1] * matrix2.r2[1] + this.r1[2] * matrix2.r3[1];
	var r13 = this.r1[0] * matrix2.r1[2] + this.r1[1] * matrix2.r2[2] + this.r1[2] * matrix2.r3[2];
	newMatrix.r1 = [r11, r12, r13];

	var r21 = this.r2[0] * matrix2.r1[0] + this.r2[1] * matrix2.r2[0] + this.r2[2] * matrix2.r3[0];
	var r22 = this.r2[0] * matrix2.r1[1] + this.r2[1] * matrix2.r2[1] + this.r2[2] * matrix2.r3[1];
	var r23 = this.r2[0] * matrix2.r1[2] + this.r2[1] * matrix2.r2[2] + this.r2[2] * matrix2.r3[2];
	newMatrix.r2 = [r21, r22, r23];

	var r31 = this.r3[0] * matrix2.r1[0] + this.r3[1] * matrix2.r2[0] + this.r3[2] * matrix2.r3[0];
	var r32 = this.r3[0] * matrix2.r1[1] + this.r3[1] * matrix2.r2[1] + this.r3[2] * matrix2.r3[1];
	var r33 = this.r3[0] * matrix2.r1[2] + this.r3[1] * matrix2.r2[2] + this.r3[2] * matrix2.r3[2];
	newMatrix.r3 = [r31, r32, r33];
	var matrix = new Matrix(newMatrix);
	return matrix;
};

Matrix.prototype.vMult = function(vector){
	vector.z = vector.z ? vector.z: 0;
	var x = this.r1[0] * vector.x + this.r1[1] * vector.y + this.r1[2] * vector.z;
	var y = this.r2[0] * vector.x + this.r2[1] * vector.y + this.r2[2] * vector.z;
	var z = this.r3[0] * vector.x + this.r3[1] * vector.y + this.r3[2] * vector.z;
	var product = new Vector({x: x, y: y, z: z});
	return product;
}

function rotateVector(theta, vector){
	var vector = new Vector(vector);
	var rotationMatrix = new Matrix({
		r1: [Math.cos(theta), -Math.sin(theta), 0],
		r2: [Math.sin(theta), Math.cos(theta), 0],
		r3: [0, 0, 1]
	});
	// console.log('vector', vector);
	// console.log('rotationMatrix', rotationMatrix);
	var rotatedVector = rotationMatrix.vMult(vector);
	//console.log('rotatedVector', rotatedVector);
	return rotatedVector;
}


function rotateShape(centre, theta, index){
	if(Scene.shapes[0]){

		//var centreOfMass = ShapesController.getProperty(index, 'centreOfMass');
		//var vertices = ShapesController.getProperty(index, 'vertices');
		var centreOfMass = typeof index === 'number' ? ShapesController.getProperty(index, 'centreOfMass') : centre;
		var vertices = typeof index === 'number' ? ShapesController.getProperty(index, 'vertices') : index;

		var rotatedVertices = [];
		var length = vertices.length;
		var centreOR = {x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y};
		for(var i = 0; i < length; i++){

			//if(vertices.length === 6 && i === 4){console.log('isVertexColliding', vertices[4].isColliding)};

			var rotatedVertex = rotateVector(theta, {x: vertices[i].x, y: vertices[i].y});
			rotatedVertex.isColliding = vertices[i].isColliding;
			rotatedVertices.push(rotatedVertex);

			//if(vertices.length === 6 && i === 4){console.log('rotatedVertex', rotatedVertex.isColliding)}
		}

		if(typeof index === 'number'){
			var referenceVectors = ShapesController.getProperty(index, 'referenceVectors');
			var location = referenceVectors.location; // need to find way of updating "sub-objects" individually
			var sideVector = referenceVectors.sideVector;
			var unitNormal = referenceVectors.unitNormal;
			if(location){
				var rotatedLocation = rotateVector(theta, {x: location.x, y: location.y});
			}
			if(sideVector){
				var rotatedSideVector = rotateVector(theta, {x: sideVector.x, y: sideVector.y});
			}
			if(unitNormal){
				var rotatedUnitNormal = rotateVector(theta, {x: unitNormal.x, y: unitNormal.y});
			}
			referenceVectors = {location: rotatedLocation, sideVector: rotatedSideVector, unitNormal: rotatedUnitNormal};
		}
		var centreOR = {x: centreOfMass.x - centre.x, y: centreOfMass.y - centre.y};
		var rotateCOM = rotateVector(theta, {x: centreOR.x, y: centreOR.y});
		var newCentreOfMass = {x: centre.x + rotateCOM.x, y: centre.y + rotateCOM.y};
		if(typeof index === 'number'){
			ShapesController.setProperty(index, 'centreOfMass', newCentreOfMass);
			ShapesController.setProperty(index, 'vertices', rotatedVertices);
			ShapesController.setProperty(index, 'referenceVectors', referenceVectors);
		}
		return rotatedVertices;
	}
}


var v1 = new Vector({x:5, y:-4, z:-15});
var v2 = new Vector({x:4, y:6, z:-8});

var m1 = new Matrix({r1: [1, 2, 3], r2: [4, 5, 6], r3: [7, 8, 9]});
var m2 = new Matrix({r1: [5, 5, 3], r2: [6, 8, 9], r3: [10, 7, 3]});

var v3 = v1.add(v2);
var v4 = v1.crossProd(v2);
var v5 = v1.scalProd(5);
var v6 = v1.dotProd(v2);

var m3 = m1.mMult(m2);
var v7 = m1.vMult(v1);

// console.log('m1', m1);
// console.log('m2', m2);
// console.log('m3', m3);
// console.log('v7', v7);


// console.log('v1', v1);
// console.log('v2', v2);
// console.log('v3', v3);
// console.log('crossProd v4', v4);
// console.log('v5', v5);
// console.log('dotProd v6', v6);
//
// var v10 = new Vector({x:3, y:4, z:8});
// console.log('v10.magnitude', v10.magnitude);



var vector1 = new Vector({x:0, y:1});
var vector1a = new Vector({x:0, y:2})
var vector2 = new Vector({x:1, y:1});
var vector3 = new Vector({x:1, y:0});
var vector4 = new Vector({x:1, y:-1});
var vector5 = new Vector({x:0, y:-1});
var vector6 = new Vector({x:-1, y:-1});
var vector7 = new Vector({x:-1, y:0});
var vector8 = new Vector({x:-1, y:1});

vector1.findAngle(vector1);
vector1.findAngle(vector2);
vector1.findAngle(vector3);
vector1.findAngle(vector4);
vector1.findAngle(vector5);
vector1.findAngle(vector6);
vector1.findAngle(vector7);
vector1.findAngle(vector8);

//vector1.findAngle(vector2);
//vector1.isParallel(vector5);
//console.log('crossProd', vector1.crossProd(vector2));

var referenceSideVector1 = new Vector({x: 35.99988336809515, y: -0.09163778449409044, z: 0, magnitude: 36.00000000000001});
var collidingSideVector1 = new Vector({x: -35.9998833680952, y: 0.09163778449408255, z: 0, magnitude: 36.00000000000006});
var angle1 = referenceSideVector1.findAngle(collidingSideVector1);
//console.log('=====================angle', angle1);
