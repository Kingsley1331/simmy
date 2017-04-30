function distance(x,y){
	return Math.sqrt(x*x + y*y);
}

// function Vector(vector){
// 	this.vector = vector;
// 	this.returnVector = function(vect){
// 		var newVector = new Vector(vect);
// 		return newVector;
// 	}
// }
//
// var vector = new Vector([1, 2]);
// console.log('vector', vector.vector);
//
// var newVector = vector.returnVector([25, 100]);
//
// console.log('newVector', newVector.vector);

 function Vector(vector){
	 this.vector = vector;

	 this.add = function(vector2){
		 var sum = {x: vector.x + vector2.x, y: vector.y + vector2.y, z: vector.z + vector2.z};
		 result = new Vector(sum);
		 return result;
	 };

	 this.scalProd = function(scale){
		 var product = {x: vector.x * scale, y: vector.y * scale, z: vector.z * scale};
		 return product;
	 };

	 this.dotProd = function(vector2){
		 var product = vector.x + vector2.x + vector.y + vector2.y  + vector.z + vector2.z;
		 return product;
	 };

	 this.crossProd = function(vector2){
		 	var x = vector.y * vector2.z - vector.z * vector2.y;
			var y = vector.z * vector2.x - vector.x - vector2.z;
	 		var z = vector.x * vector2.y - vector.y * vector2.x;
			var product = new Vector({x: x, y: y, z: z});
			return product;
	 }
	// return vector;
 }

var v1 = new Vector({x:1, y:2, z:0});
var v2 = new Vector({x:2, y:4, z:0});

var v3 = v1.add(v2.vector);

console.log('v1', v1.vector);
console.log('v2', v2.vector);
console.log('v3', v3.vector);
