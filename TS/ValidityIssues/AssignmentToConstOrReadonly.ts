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
type Foo23 = {
    readonly bar: number;
    readonly bas: number;
}

function assignCheck() {
    let foo: Foo23 = {bar: 123, bas: 456};
    foo.bar = 10;
}

//case6:type
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

//case7
let me = ("Angus");
me.length = 2;

