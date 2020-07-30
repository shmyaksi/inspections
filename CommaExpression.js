let x = 1;

x = (x++, x);

console.log(x);


x = (2, 3);

console.log(x);


let a, b, c;

a = b = 3, c = 4;
console.log(a);

let x1, y1, z1;

x1 = (y1 = 5, z1 = 6);
console.log(x1); // 6 


function f989() {
    let arr = [4, 0, 2, 5];
    arr[0] = 5, 3;

    console.log(arr)
}

f989()

function f988() {
    let foo = () => 3;
    let bar = () => 2;
    let result = x ? (foo(), bar()) : 1;
    console.log(result)
}

f988()

const user1 = {
    admin() {
        console.log("I am admin");
    }

}

const user2 = {};
for (let i = 0; i < 3; i++) {
    user1.admin?.(), user2.admin;
    user2.admin?.();
}

// Array:
let arr = [1, 2, 3,]; // length 3 //TODO? trailing commas :
let arr1 = [1, 2, 3, , ,]; // length 5

//Objects
let obj1 = {
    foo: 'string',
    bar: 'baz', //TODO?
}
let obj2 = {
    one(a,) {
    },
    two(a, b,) {
    }, //TODO?
};

const map = new Map([['foo', 'bar'], ['baz', 42]]);

for (let k = 0; k < 2; k++) {
    const obj = Object.fromEntries(map);
    console.log(obj,); //TODO?
}


//conditional expressions:

let m = !a ? b : c //conditional expression

function Calc() {
    let booksCount = 19;
    let result;

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
    console.log(result)
}

Calc()


const user3 = {
    admin() {
        console.log("I am admin");
    }

}

const user4 = {};
for (let i = 0; i < 3; i++) {
    result1 = (user3.admin !== null) ? user3.admin?.() :
        (user4.admin !== null) ? user4.admin?.() : console.log('sorry')


}
const name = "charles"


/*function k(i) {
    const greet = name => `Hello, ${name}`

    const capitalize = str => str.toUpperCase()

    const exclaim = str => `${str}!!!`

    const loudGreeting = name
    result2 = (i>2) ? name |> greet
                             |> capitalize
                                 |> exclaim :
        (i>1) ? console.log('ok') : console.log('sorry')
}

k(4)*/

function kk() {
    const map = new Map([['foo', 'bar'], ['baz', 42]]);

    const obj = (map.entries() !== null) ? Object.fromEntries(map) : console.log('fill it')
    console.log(obj);

}

kk()

function square(width, height, i) {
    areaa = (i < 9) ? ((height ?? 100) * (width ?? 50)) : console.log('!')
    console.log(areaa)
}

square(null, null, 8)

function f(param) {
    let i;
    //i ??= "default";
    let result = (param !== 0) ? (i ??= 'default') : (i ??= 'put it down')
    console.log(result)

}

f(4)
