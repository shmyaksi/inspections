let a1 = 0, b1=123*1, c1=41;
let sum = b+a;


function checking(){
    let  aa = 1,bb=123
    return bb * aa
}

function checking1(){
   return checking()
}
checking1()



function one() {
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
one()


function checking2(){
    let  aa = 1,bb=123
    return bb / 0;
}

console.log(checking2())

const s=0

function checking3(){
    let  aa = 1,bb=123
    return bb*s;
}
console.log(checking3())


function checking4(){
    let  aa = 1,bb=123
    return bb/s;
}
console.log(checking4())

function checking5(){
    let  aa = 1,bb=123
    return bb * aa;
}
console.log(checking5())

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    square(){
        return this.height*this.width;
    }
}
rectangle1 = new Rectangle(1, 50);
function foo() {
    console.log( rectangle1.square())
}
foo()


function test1(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];


    if (fruit) {
        if (redFruits.includes(fruit)) {
            console.log('red');

            if (quantity > 10) {
                console.log('big quantity');
                quantity*=0;
            }
            console.log(quantity)
        }
    } else {
        throw new Error('No fruit!');
    }
}


//test('apple');
test1('apple', 20);
