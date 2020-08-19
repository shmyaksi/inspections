//Inspection is ON

function w2() {
    let x = new Number("0");
    if (x) {
        console.log('hi');
    }
}

function w3() {
    let xw = new Boolean('true')
    if (xw) {
        console.log('hi')
    }
}


let symObj = new Object()

const alsoHuge = BigInt(9007199254740991)
let bv = new BigInt()
let xws = new Symbol()

//Case:class
class String {
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

