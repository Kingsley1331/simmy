function magnitude(vector){
	var x = vector.x;
	var y = vector.y;
	return Math.sqrt(x*x + y*y);
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
	 return product;
 };

 Vector.prototype.dotProd = function(vector2){
	 var product = (this.x * vector2.x) + (this.y * vector2.y) + (this.z * vector2.z);
	 return product;
 };

 Vector.prototype.crossProd = function(vector2){
		var x = this.y * vector2.z - this.z * vector2.y;
		var y = this.z * vector2.x - this.x * vector2.z;
		var z = this.x * vector2.y - this.y * vector2.x;
		var product = new Vector({x: x, y: y, z: z});
		return product;
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
	var r13 = this.r1[0] * matrix2.r1[2] + this.r1[2] * matrix2.r2[2] + this.r1[2] * matrix2.r3[2];
	newMatrix.r1 = [r11, r12, r13];

	var r21 = this.r2[0] * matrix2.r1[0] + this.r2[1] * matrix2.r2[0] + this.r2[2] * matrix2.r3[0];
	var r22 = this.r2[0] * matrix2.r1[1] + this.r2[1] * matrix2.r2[1] + this.r2[2] * matrix2.r3[1];
	var r23 = this.r2[0] * matrix2.r1[2] + this.r2[2] * matrix2.r2[2] + this.r2[2] * matrix2.r3[2];
	newMatrix.r2 = [r21, r22, r23];

	var r31 = this.r3[0] * matrix2.r1[0] + this.r3[1] * matrix2.r2[0] + this.r3[2] * matrix2.r3[0];
	var r32 = this.r3[0] * matrix2.r1[1] + this.r3[1] * matrix2.r2[1] + this.r3[2] * matrix2.r3[1];
	var r33 = this.r3[0] * matrix2.r1[2] + this.r3[2] * matrix2.r2[2] + this.r3[2] * matrix2.r3[2];
	newMatrix.r2 = [r31, r32, r33];
	var matrix = new matrix(newMatrix);
	return matrix;
};

Matrix.prototype.vMult = function(vector) {
	vector.z = vector.z ? vector.z: 0;
	var x = this.r1[0] * vector.x + this.r1[0] * vector.y + this.r1[0] * vector.z;
	var y = this.r2[0] * vector.x + this.r2[0] * vector.y + this.r2[0] * vector.z;
	var z = this.r3[0] * vector.x + this.r3[0] * vector.y + this.r3[0] * vector.z;
	var product = new Vector({x: x, y: y, z: z});
	return product;
}

// var v1 = new Vector({x:1, y:3, z:0});
// var v2 = new Vector({x:2, y:4, z:0});

var v1 = new Vector({x:1, y:3, z:12});
var v2 = new Vector({x:2, y:4, z:10});

var v3 = v1.add(v2);
var v4 = v1.crossProd(v2);
var v5 = v1.scalProd(5);
var v6 = v1.dotProd(v2);

console.log('v1', v1);
console.log('v2', v2);
console.log('v3', v3);
console.log('v4', v4);
console.log('v5', v5);
console.log('v6', v6);

var v10 = new Vector({x:3, y:4, z:8});
console.log('v10.magnitude', v10.magnitude);
