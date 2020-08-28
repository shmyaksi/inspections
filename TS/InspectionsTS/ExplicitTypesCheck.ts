//inspection 'Explicit member types' is ON
//TS 3.9.5

//Case1
function oneExp() {

    let b: number = 5;
    let list: number[] = [1, 2, 3];


}

//Case2
let aExp: string = '3.14'

//Case3
class carsExp {
    name: string = 'ford';

    constructor(theName: string) {
        this.name = theName;
    }
}

//case4
function birth() {
    let bday: boolean = true
}

//case5
class faceExp {
    numArr: Array<{ name: string; age: number }> = [{name: 'adam', age: 10}]//todo:maybe it's good to propose inspection for types
    numArr1: { name?: string; age?: number }[] = [{name: 'an', age: 10}]
}


