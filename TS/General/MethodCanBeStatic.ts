//'Method can be static' inspection is ON
//TS 3.9.5

//case1

class ClassWithStaticMethod {
    someMethod() {
        return 'static method has been called.';
    }
}

console.log(ClassWithStaticMethod.someMethod());

//case2
class carcar {
    carname

    greet() {
        return 'hello,'
    }

    constructor(carname) {
        this.carname = carname
    }
}

//Case3
class Point {
    one() {
        return 'info'
    }
}

class Point3D extends Point {
    one1() {
        return 'info2'
    }
}

//Case4
class Greeter<T> {
    greeting: T

    constructor(message: T) {
        this.greeting = message
    }

    greet() {
        return ('hello')
    }
}

let greeter = new Greeter<string>('Hello, world')

//case5
interface IFoo {
    bar(): boolean;
}

abstract class FooBase {
    abstract baz(value): IFoo;
}

class Foo1234 extends FooBase {
    constructor(private qux) {
        super();
    }

    bar(): boolean {
        return;
    }

    baz(value): IFoo {
        return undefined;
    }
}



