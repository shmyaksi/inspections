export{}
let a1 = 0, b1 = 123 * 1, c1 = 41;
let sum = b1 + a1;


function checking() {
    let aa = 1, bb = 123
    return bb * aa
}

function checking1() {
    return checking()
}

checking1()


function one() {
    let sum = 1;
    for (let i = 0; i < 10; i++) {
        let abc = 1;
        if (abc > 0) {
            abc--;
            sum = abc * 1; //work

        }
    }

    console.log(sum)
}

one()


function checking2() {
    let aa = 1, bb = 123
    return bb / 0;
}

console.log(checking2())


const s = 0

function checking3() {
    let aa = 1, bb = 123
    return bb * s;
}

console.log(checking3())


function checking4() {
    let aa = 1, bb = 123
    return bb / s;
}

console.log(checking4())

function checking5() {
    let aa = 1, bb = 123
    return bb * aa;
}

console.log(checking5())

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
// The numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 0.0 and 1.0 are not reported by  inspection 'magic number'.

function foo() {
    console.log(rectangle1.square())
}

foo()


function test34(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];


    if (fruit) {
        if (quantity > 10) {
            console.log('big quantity');
            quantity *= 1;
        }
        //console.log(quantity)

    } else {

    }
}


test34('apple', 100);
test34('apple', 20);
