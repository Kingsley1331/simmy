function distance(x,y){
	return Math.sqrt(x*x + y*y);
}

 function Vector(vector){
	 this.x = vector.x;
	 this.y = vector.y;
	 this.z = vector.z;
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

var v1 = new Vector({x:1, y:3, z:0});
var v2 = new Vector({x:2, y:4, z:0});

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
