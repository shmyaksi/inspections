//inspection 'private' and 'protected' members accessibility' is ON by default
//TS 3.9.5

//todo: discuss

class Aa {
    private constructor() {
    }

    static createInstance() {
        return new Aa();
    }
}

class Ba extends Aa {
    foo() {
        return new Aa();
    }
}

var f = new Aa();
console.log(f)


//case1
class A {
    private x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    multiply(): number {
        return this.x * this.y;
    }
}

//case2
//WEB-21986
class Foo {
    protected privateVar: string = 'private';

    private static privateMethod(): string {
        return this.privateVar;
    }
}

class FooClient {
    doSomething(): void {
        const foo: Foo = new Foo();
        console.log(foo.privateMethod());
        console.log(foo.privateVar);
    }
}

//case3
class Foo2 {
    /** @private */
    stuff
    constructor() {
        this.stuff = 100;
    }
    printStuff() {
        console.log(this.stuff);
    }
}

let smallfoo = new Foo2().stuff; //todo:no inspection

//case4
class C {
   private foo = 10;

    cHelper() {
        return this.foo;
    }
}

class D extends C {
    foo = 20;
    private dHelper() {
        return this.foo;
    }
}

let instance = new D();
console.log(instance.dHelper());
console.log(C.foo);
