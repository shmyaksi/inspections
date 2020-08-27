//Inspection 'Use of possibly unassigned property in a static initializer' is ON
//TS 3.9.5

//Case1
class s1 {
    constructor(greet2) {
        greet2 = this.n2

    }
    greet2 = this.n2;
    n2 = this.greet2

}

//WEB-30520
class A2 {
    a = this.b;
    b = this.a;
    s = () => this.s;

}

//Case3
interface ImFoo {
    bar(): boolean;
}

abstract class FooBase1 {
    abstract baz(value): ImFoo;
}

class Foo12 extends FooBase1 {
    q = this.v

    constructor(private qux) {
        super();
    }

    v = this.q

    baz(value): ImFoo {

        return undefined;
    }


}

//Case4
abstract class App extends FooBase1 {
    l = this.p
    p = this.a
}

//Case5
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    a = this.dx
    dx = this.a

    animate(dx: number, dy: number, easing: Easing) {
        switch (easing) {
            case "ease-in":
                break;
            case "ease-out":
                break;
            case "ease-in-out":
                break;
        }

    }
}


