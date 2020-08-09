//'Assignment to for loop parameter' OFF by default

//Case1
function on() {
    for (let i = 0; i < 3; i++) {
        i = 10;
        console.log(i)
    }
}

on()

//Case2:object
function on1() {
    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };
    for (let i = 0; i < 3; i++) {
        i = options.width;
        console.log(i)
    }

}

on1()

//Case3: method
class People123 {
    constructor(age) {
        this.age = age;
    }

    ager() {
        for (this.age; this.age < 35; this.age++) {
            this.age = 2 // todo спорный момент
        }
        return this.age //todo Note:loop
    }
}

let me = new People123(22)


//Case4
class People1e {
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

//Case5
function mapmap() {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

    for (let j = 0; j < 5; j++) {
        j = 3
        let nameBar = myMap.get("foo")?.name;
        console.log(nameBar)
        break;
    }

}

mapmap()

//Case6
function a2() {
    const map = new Map([['foo', 'bar'], ['baz', 42]]);
    for (let k = 0; k < 2; k++) {
        k = 1;
        const obj = Object.fromEntries(map);
        console.log(obj);
    }
}

a2()

//Case7
function ku1() {
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }

    for (let d = 0; d < 3; d++) {
        let undefinedValue = response.settings.undefinedValue ?? 'some other default';
        d = 2;
        console.log(d)
    }

}

ku1()

//Case8
function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        i = 3n;
        if (p % i === 0n) return false;
    }
    return true;
}

console.log(isPrime(3))


//Case9
function insertion() {
    let x;
    //  x ??=4;
}

//Case10
function f(param) {
    let i;
    //i ??= "default";
    if (i === 'default') {
        console.log('ok')// warning should be shown that param can't be null here
    } else console.log('no')
}

f(4)

//Case11
const a = {duration: 50, title: ''};

//a.duration ||= 10;
console.log(a.duration);
// expected output: 50

//a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"


//Case12
let user = {name: 'SuperPaintman'};

function capitalize(str) {
    return str.toUpperCase();
}

function sayHello(name) {
    return 'Hello, ' + name + '!';
}

let res = user.name
    |>capitalize
    |>sayHello;


