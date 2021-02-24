console.log(`\nClasses\nweek 14 JS3-3 \n `)
console.log(`\nex. 2: \ninheritance explained on SHAPES\n `)

class Shape {
    constructor(name) {
        this.name = name;
    }
    Area() {
        return 0;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Square");
        this.sideLength = sideLength;
    }
    Area() {
        return Math.pow(this.sideLength, 2);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Triangle extends Shape {
    constructor(sideLength) {
        super("Triangle");
        this.sideLength = sideLength;
    }
    Area() { // EQUILATERAL triangle only !!!
        return (Math.pow(this.sideLength, 2) * Math.sqrt(3))
            / 4;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(15);
const square1 = new Square(5);
const triangle1 = new Triangle(4);

let shapes = [];

shapes.push(circle1);
shapes.push(circle2);
shapes.push(square1);
shapes.push(triangle1);

console.log(`shapes array:`, shapes);

let sumAreas = 0;

shapes
    .forEach((shape) =>
        (sumAreas += shape.Area()));

console.log(`The sum of shapes' areas is`,
    sumAreas.toFixed(2));