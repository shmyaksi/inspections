//inspection is ON
//TS 3.9.5

//Case1
 function* example() {
     const collection: number [] = [] //WEB-36813
     collection.push(1);
     yield collection;
 }

//Case2
function test1() { //WEB-40325
    let bool, b;
    const horizontalVector = [0], //todo: inspection should be here
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
