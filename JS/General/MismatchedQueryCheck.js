//inspection is ON

function* example() {
    const collection: [] = [] //WEB-36813
    collection.push(1);
    yield collection;
}

function test1() { //WEB-40325
    let bool, b;
    const horizontalVector = [0],
        verticalVector = [0],
        hiddenVector = bool ? horizontalVector : verticalVector,
        a = b;

    return hiddenVector[0];
}

function fru() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
   // fruits.push("Kiwi", "Lemon", "Pineapple");
   // fruits.sort();
    //fruits.pop();
    //fruits.shift();
    //fruits.splice();
    //fruits.unshift();
    //fruits.add('ja');
    //fruits.insert() // like 'slice'
    //fruits.remove()
    //fruits.reverse()
    //fruits.copyWithin(0, 1, 2);
    //fruits.fill('Banana', 1, 2)
    //fruits.sort();
    return 'f'
}

console.log(fru())


class ActionCheck1 {
    myarr2;
    wer = new Set()

    constructor() {
        this.myarr2.push('value')
        this.myarr2.sort();
        this.myarr2.pop();
        this.myarr2.shift();
        this.myarr2.splice();
        this.myarr2.unshift();
        this.wer.add('')
        this.myarr2.insert(3)
        this.element.remove('')
        this.myarr2.reverse()
        this.myarr2.copyWithin(0, 1, 2);
        this.myarr2.fill('Banana', 1, 2)
        this.myarr2.sort();
    }
}
