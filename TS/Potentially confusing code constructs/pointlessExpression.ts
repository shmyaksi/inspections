//Inspection is ON by default

//Case1
function ad23() {
    let a1 = 0, b1 = 123 * 1, c1 = 41;
    let sum = b1 + a1;
}

ad23()

//Case2
function checking() {
    let aa = 1, bb = 123
    return bb * aa
}

//Case3
function checking1() {
    return checking()
}

checking1()

//Case4
function one66() {
    let sum = 1;
    for (let i = 0; i < 10; i++) {
        let abc = 1;
        if (abc > 0) {
            abc--;
            sum = abc * 1;

        }
    }

    console.log(sum)
}

one66()

//Case5
function checking2() {
    let aa = 1, bb = 123
    return bb / 0;
}

console.log(checking2())


const s = 0

//Case6
function checking3() {
    let aa = 1, bb = 123
    return bb * s;
}

console.log(checking3())

//Case7
function checking4() {
    let aa = 1, bb = 123
    return bb / s;
}

console.log(checking4())

//Case8
function checking5() {
    let aa = 1, bb = 123
    return bb * aa;
}

console.log(checking5())

//Case9:class
class Rectangle {
    height: number;
    width: number;

    constructor(theHeight: number, theWidth: number) {
        this.height = theHeight;
        this.width = theWidth;
    }

    square() {
        return this.height * this.width;
    }
}

let rectangle1 = new Rectangle(1, 50);

function foo() {
    console.log(rectangle1.square())
}

foo()

//Case10
function test34(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    if (fruit) {
        if (quantity > 10) {
            console.log('big quantity');
            quantity *= 1;
        }

    } else {

    }
}

test34('apple', 100);
test34('apple', 20);
