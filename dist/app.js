// const show = (arr:string[]) => {
//     arr[0].
// }
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area() {
        return this.a * this.b * this.c;
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a * this.b;
    }
    perimeter() {
        return (this.a + this.b) * 2;
    }
}
const shapes = [new Triangle(1, 2, 3), new Rectangle(1, 3)];
for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}
//# sourceMappingURL=app.js.map