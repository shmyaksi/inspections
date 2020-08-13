//Inspection is OFF

//Case1
function f145() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is  " + i + " .";
    }
    console.log(text);
}

f145()

//Case2
function s23() {
    const user1 = {
        admin() {
            console.log("I am admin");
        }

    }
    const user2 = {};
    for (let i = 0; i < 3; i++) {
        user1.admin?.();
        user2.admin?.();
        break
    }
}

//Case3
const name = "charles"
let greet = name => `Hello, ${name}`
const capitalize = str => str.toUpperCase()
const exclaim = str => `${str}!!!`


for (let i=0;i<3;i++) {
    const loudGreeting = name
        |> greet
        |> capitalize
        |> exclaim
    break
}


//Case4
function d3() {
    const map87 = new Map([['foo', 'bar'], ['baz', 42]]);

    for (let k = 0; k < 2; k++) {
        const obj = Object.fromEntries(map87);
        console.log(obj);
        break
    }
}

//Case5
function test1(param = throw new Error('required!')) {
    const test = param === true ?? throw new Error('Falsy!');
    while (test !== true) {
        if (param === true) break;
    }
}

test1(2)

//Case6
function square(width, height) {
    while (height === null && width === null) {
        let area = (height ?? 100) * (width ?? 50);
        console.log(area)
        break
    }
}

square(null, null)

//Case7
function isPrime2(p) {
    for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) break;
    }
    return true;
}

console.log(isPrime2(3))


//Case8:class
class MyClass {
    #foo;

    constructor(foo) {
        this.#foo = foo;
    }

    incFoo() {
        while (this.#foo < 10) {
            this.#foo++;
            if (this.#foo === 100) break;
        }
    }
}

let me = new MyClass(34);
console.log(me.incFoo())

//Case9
function f(param) {
    let i;
    i ??= "default";
    while (i === 'default') {
        console.log('ok')
        break
    }
}

f(4)

//Case10
function func() {
    let a = {duration: 50, title: ''};
    let k = 0
    while (k < 3) {
        a.duration ||= 10;
        console.log(a.duration);
        a.title ||= 'title is empty.';
        console.log(a.title);
        break
    }
}

func()



