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
    let fruits: string[] = ["Banana", "Orange", "Apple", "Mango"];
   fruits.push("Kiwi", "Lemon", "Pineapple");
    fruits.sort();
    fruits.pop();
    fruits.shift();
    fruits.splice();
    fruits.unshift();
    fruits.add('ja');
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

//Case7
type Actions1 = 'qwe' | 'asd' | 'zxc';

interface TestProps1 {
    action: Actions1;
}

class ActionCheck1 {
    action: TestProps1
    ap: Actions1 = 'asd';
    private myarr2: Array<string>
    private wer = new Set()
    private element: number [] = [];

    constructor() {
        /*this.myarr2.push('value')
        this.myarr2.sort();
        this.myarr2.pop();
        this.myarr2.shift();
        this.wer.splice();
        this.myarr2.unshift();
        this.wer.add('')
        this.element.insert(3)
        this.element.remove('')
        this.myarr2.reverse()
        this.myarr2.copyWithin(0, 1, 2);
        this.myarr2.fill('Banana', 1, 2)
        this.myarr2.sort();*/
    }
}


