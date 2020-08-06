function foo(a) {  // Noncompliant
    if (a === 1) {
        return true;
    }
    return 3;
}
foo(2)

function foo2(a) { // Noncompliant, function exits without "return"
    if (a === 1) {
        return true;
    }
}

let az ;
let ah=3;
console.log(az+ah)

let bv = new BigInt() //todo:  should be triggered ?
let xws = new Symbol();
