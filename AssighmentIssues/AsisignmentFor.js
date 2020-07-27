function on() {

    for (let i = 0; i < 3; i++) {

        i = 10;
        console.log(i)
    }

}

on()
/*
class People {

    constructor(age) {
        this.age = age;
    }

    ager() {
        for (this.age; this.age < 35; this.age++) {
            //this.age++

            this.age = 2 // todo спорный момент

        }
        return this.age


    }
}

let me = new People(22)
console.log(me.ager())*/


class People1 {

    constructor(age) {
        this.age = age;
    }

    ager() {
        for (let j = 9; j < 35; j++) {
            j++


        }
        return this.age


    }
}

function mapmap() {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

for (let j = 0;j<5;j++) {
    j=3
    let nameBar = myMap.get("foo")?.name;
    console.log(nameBar)
    break;
}

}
mapmap()

const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
for(let k=0;k<2;k++) {
    k=1;
    const obj = Object.fromEntries(map);
    console.log(obj);
}


/*function test(param = throw new Error('required!')) {
    const test = param === true || throw new Error('Falsy!');
}



test()*/



/*class Product {
    get id() { return this._id; }
    set id(value) { this._id = value ?? throw new Error('Invalid value'); } //Call replace here
}*/


let setting = process.env.SETTING;
//if (!setting) throw new Error("please set the SETTING environmental variable");


function ku1(){
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }

for(let d=0;d<3;d++) {
    let undefinedValue = response.settings.undefinedValue ?? 'some other default';
    d=2;
    console.log(d)
}

}

ku1()


function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        i=3n;
        if (p % i === 0n) return false;
    }
    return true;
}

console.log(isPrime(3))

class MyClass {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }
    incFoo() {

        for (let j = 0;j<5;j++) {
            j = 3
            this.#foo++;
        }
    }
}

function insertion(){
    let x;
  //  x ??=4;
}

function f(param) {
    let i;
    i ||= "default";
    if (i ==='default') {
        console.log('ok')// warning should be shown that param can't be null here
    }
    else console.log('no')
}
f(4)

const a = { duration: 50, title: '' };

//a.duration ||= 10;
console.log(a.duration);
// expected output: 50

//a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"
















let user = { name: 'SuperPaintman' };

function capitalize(str) {
    return str.toUpperCase();
}

function sayHello(name) {
    return 'Hello, ' + name + '!';
}

let res = user.name
    |>capitalize
    |>sayHello;




/*const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
double(increment(double(double(5)))); // 42

// with pipeline operator
5 |> double |> double |> increment |> double; // 42*/

const arr = [
    { code: "a" },
    { code: "b" },
    { code: "c" },
    { name: "Caty" },
    { name: "Siri" }
];

const withCode = arr.map(function(element) {
    if (element.code) return element;
});

//const notThere = withCode[3]?.code;

//.log(notThere);

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.dog?.name;
//console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined