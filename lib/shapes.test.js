const { Circle, Square, Triangle } = require("../lib/shapes");

describe("shapes", () => { 
    describe("Circle", () => {
        it("should return the area of the circle", () => {
            const circle = new Circle(50, "red", "blue", "Hello World");
            expect(circle.getArea()).toBeCloseTo(7853.98);
        });
    });
    describe("Square", () => {
        it("should return the area of the square", () => {
            const square = new Square(50, "red", "blue", "Hello World");
            expect(square.getArea()).toBe(2500);
        });
    });
    describe("Triangle", () => {
        it("should return the area of the triangle", () => {
            const triangle = new Triangle(50, 50, "red", "blue", "Hello World");
            expect(triangle.getArea()).toBe(1250);
        });
    });
});