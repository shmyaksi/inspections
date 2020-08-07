//Inspection is ON bt default

function one1() {
    let x = 1;
    x = (x++, x);
    console.log(x);
}


function one2() {
    x = (2, 3);
    console.log(x);
}


function one3() {
    let a, b, c;
    a = b = 3, c = 4;
    console.log(a);
}

function one4() {
    let x1, y1, z1;
    x1 = (y1 = 5, z1 = 6);
    console.log(x1);
}


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

function one5() {
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
}

//Objects
let obj1 = {
    foo: 'string',
    bar: 'baz', //trailing comma
}
let obj2 = {
    one(a,) {
    },
    two(a, b,) {
    },
};

function one6() {
    const map = new Map([['foo', 'bar'], ['baz', 42]]);
    for (let k = 0; k < 2; k++) {
        const obj = Object.fromEntries(map);
        console.log(obj,); //TODO  trailing comma?
    }
}

