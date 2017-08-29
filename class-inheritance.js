// Class inheritance

class Shape {
	constructor(x, y, side) {
		this.x = x;
		this.y = y;
		this.side = side;
	}
	getArea() {
		console.log(this.x, this.y, this.side);
	}
}


class Circle extends Shape {
	constructor(x, y, side) {
		super(x, y, side)
	}
	getArea() {
		console.log(this.x * this.y * this.side);
	}
}


var circle = new Circle(5,6,7);
var shape = new Shape(5,6,7);
circle.getArea();
shape.getArea();
