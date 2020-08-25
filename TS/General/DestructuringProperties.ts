//'Destructuring properties with the same key can be merged' is ON
//TS 3.9.5

//case1
function k2() {
    const {
        target: {
            value: aa,
            type: bb,
            value: c
        }
    } = {
        target: {
            value: 2,
            type: 'second'
        }
    }
}

//case2
function k3() {
    let {
        size: {
            width: cc,
            height: dd,
            width: df
        }
    } =
        {
            size: {
                width: 100,
                height: 200
            }
        }
}

//case3
var {x: {y: a, z: b, y: t}} = {x: {y: 7, z: 8}} //WEB-37903

//case4
function abcd() {
    let robotA = {name: "Bender"};
    let robotB = {name: "Flexo"};
    let {name: nameA, name} = robotA;
    let {name: nameB} = robotB;

    console.log(nameA);
}

abcd()

//case5
function k4() {
    let optionss = {
        title: "Menu",
        width3: 100,
        height: 200
    };
    let {title, width3: width33, width3, height} = optionss;
}

//case6
function abcde() {
    let robotA = {name: "Bender"};
    let {name: nameA, name} = robotA;
    console.log(nameA);
}

//case7
function abcdef() {
    var rect = {x: 0, y: 10, width: 15, height: 20};

    var {x, y, width, height, height} = rect;
    console.log(x, y, width, height);
}

//case8
function propcheck() {
    var {w, xw, xw, ...remaining} = {w: 1, xw: 2, y: 3, z: 4};
    console.log(w, xw, remaining);
}

//case9
enum first {
    value123,
    type

}

const {value123: type1, value123} = first

//Case10
const person = {first: 'John', last: 'Doe'};

interface Person {
    first: string;
    last: string;
}

const hello = ({first: string, first, last}: Person) =>
    `Hello ${first} ${last}!`;

