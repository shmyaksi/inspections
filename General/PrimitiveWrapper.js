//Inspection is ON

function w2() {
    let x = new Number("0");
    if (x) {
        console.log('hi');
    }
}

function w3() {
    let xw = new Boolean('true');
    if (xw) {
        console.log('hi');
    }
}


let symObj = new Object()


let bv = new BigInt() //todo:  should be triggered ?
let xws = new Symbol();

//Case:class
class String { // todo :should be forbidden to use this reserved name 'string'? suggest to add
    constructor(s) {
        this.s = s
    }
    greet() {
        return 'hello' + this.s
    }
}

let xwa = new String('a');
console.log(xwa.greet())

//Case3
let me = ("Angus");
me.length = 2;