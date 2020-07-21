class A {
     private x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class B extends A { //TODO не совсем поняла в чем суть инспекции 'Checks that TypeScript private and protected members are visible in current context'
    multiply(): number {
        return this.x * this.y;
    }
}
