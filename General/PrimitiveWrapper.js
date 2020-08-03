let x = new Number("0"); //todo quick-fix: two acts are equal
if (x) {
    console.log('hi');
}

let xw = new Boolean('true');
if (xw) {
    console.log('hi');
}

let symObj = new Object()


//let bv = new BigInt() //todo:  should be triggered ?
//let xws = new Symbol();


class String { // todo :should be forbidden to use this name 'string'
    constructor(s) {
        this.s = s
    }

    greet() {
        return 'hello' + this.s
    }

}

let xwa = new String('a');
console.log(xwa.greet())


let me = ("Angus");
me.length = 2;