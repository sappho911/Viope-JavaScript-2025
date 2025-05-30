'use strict';

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  getArea() {
    return 3.14159 * this.radius * this.radius;
  }
}

const circle = new Circle(0, 0, 2);
console.log(circle.getArea());
