// Prototype inheritance
var Shape = function(x, y) {
	this.x = x;
	this.y = y;
}
Shape.prototype.getData = function() {
	console.log(this.x, this.y);
}



var shape = new Shape(3, 4);
shape.getData();





var Circle = function(x, y) {
	Shape.call(this, x, y);
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;



var circle = new Circle(3, 4);
circle.getData();