//inspection 'Unresolved JavaScript variable' is ON
//TS 3.9.5

//case1
//WEB-21986
class FooFoo {
    protected privateVar: string = 'private';

    private static privateMethod(): string {
        return this.privateVar;
    }
}

//Case2
class FooClient2 {
    static doSomething(): void {
        const foo: Foo = new Foo();
        console.log(foo.privateMethod());
        console.log(foo.privateVar);
    }
}

//case3
function CheckUnresolved() {
    enum Unres {
        A, B, C

    }

    let {} = Unres.D
}

//case4
interface UnresolvedCheck2 {
    greet(name: string): string

}

class CheckOne2 implements UnresolvedCheck {
    greet = (name: 'mike') => {
        return `hello + ${name}`
    }
}

let me2 = new CheckOne2()
console.log(me1.name)

//case5
function CheckOne3() {
    let roll: 1 | 2 | 3 | 4;
    console.log(rol)
}


//case6
function CheckOne4() {
    let myTuple: [string, number, boolean?] = ['tester', 10]
    console.log(myTuple)
}

//Case7 WEB-40302
function trimHspace(str: string): any {
    let start = 0
    end = str.length
}
