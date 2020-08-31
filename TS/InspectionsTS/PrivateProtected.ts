//inspection 'private' and 'protected' members accessibility' is ON by default
//TS 3.9.5

//todo: discuss

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



