//TS 3.9.5
//The inspection 'Attempt to assign to const or readonly variable' is ON  by default

//Case1
const kok = 10

function checkThree(m) {
    kok += m
}

//Case2
function checkFour() {
    let obj234 = Object.freeze({name: 'Elsa', score: 157})
    obj234.score = 0
}

//Case3
function check999() {
    let array444 = Object.freeze([4, 5, 6])
    array444.push(5)
    console.log(array444)
}

check999()

//Case4
function checkSix() {
    let arr = [1, 2, 3]
    const [first] = arr
    first = 2 * arr[0]

}

//case5
class Person{
    private name:string
}

let Sasha = new Person()
console.log (Sasha.name)


//case6
type Foo23 = {
    readonly bar: number;
    readonly bas: number;
}

function assignCheck() {
    let foo: Foo23 = {bar: 123, bas: 456};
    foo.bar = 10;
}

//case7:type
type Foo25 = {
    bar: number;
    bas: number;
}

type FooReadonly = Readonly<Foo25>;

function assignCheck2() {
    let foo: Foo25 = {bar: 123, bas: 456};
    let fooReadonly: FooReadonly = {bar: 123, bas: 456};
    fooReadonly.bar = 10;
}

//case8:interface
interface Foo {
    readonly[x: number]: number;
}

function assignCheck3() {
    let foo: Foo = {0: 123, 2: 345};
    foo[0] = 10; // todo: probably here should be inspection too
}



//case9
interface Foo11 {
    readonly bar: number;
}
let foo11: Foo11 = {
    bar: 123
};

function iTakeFoo(foo11: Foo) {
    foo11.bar = 10;
}

