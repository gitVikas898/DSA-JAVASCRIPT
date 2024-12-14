class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    //getter

    getArea(){
        return this.findArea();
    }

    //Method
    findArea(){
        return this.height*this.width;
    }
}

class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static displayName = "Point Class";

    static distance(a,b){
        const dx = a.x-b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(p1.displayName);
console.log(p1.distance);

console.log(Point.displayName);
console.log((Point.distance(p1,p2)).toFixed(2));
