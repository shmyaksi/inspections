//inspection is ON
//TS 3.9.5

//Case1
//WEB-36813
 function* example() {
     const collection: number [] = []
     collection.push(1);
     yield collection;
 }

//Case2
function test1() { //WEB-40325
    let bool, b;
    const horizontalVector = [0],
        verticalVector = [0],
        hiddenVector = bool ? horizontalVector : verticalVector
    bool = b;
    return hiddenVector[0];
}

//Case3
function fru() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi", "Lemon", "Pineapple"); //todo: inspection should be here like in JS sample
    fruits.sort();
    fruits.pop();
    fruits.shift();
    fruits.slice();
    fruits.unshift();
    fruits.add('ja'); //todo: obsolete syntax
    fruits.insert() // like 'slice'
    fruits.remove()
    fruits.reverse()
    fruits.copyWithin(0, 1, 2);
    fruits.fill('Banana', 1, 2)
    fruits.sort();


    return 'f'
}

console.log(fru())


//Case4
class MyClass {
    private myArr: Array<number>;

    constructor() {
        this.myArr = [];
    }

}

//Case5
function MissCheck() {
    let variable1: any[];
    return variable1[''];

}

//Case6
abstract class MissCheck2 {
}

class MissCheck3 extends MissCheck2 {
    private myArr: Array<string>;

    constructor() {
        super();
        this.myArr = [''];
    }
}

