//'Bitwise operator usage' is ON

//Case1
function one(x, y) {
    if (x & y) console.log('ok')

}

one(2, 4)

//Case2
function two(a, b) {
    if (a | b) console.log('sjnflsdn')

}

two(5, 0)

//Case3
function col() {
    let x = 5, y = 9;
    let z = x | y; //it isn't reported here
    if (x | y) return; // it isn't reported here
    console.log(z)

}
col()

//Case4
function g4() {
    let a = 6;
    let b = 1;
//it isn't reported here
    console.log("A & B = " + (a & b));
    if (a & b) console.log(a)

    console.log("A | B = " + (a | b));
}

//Case5
let a1, b1, c1;

function g5() {

    if (a1 & b1) {
    }
}

//WEB-13752
//Case6
function g6() {

    if ((a1 & b1)) {
    }
}

//Case7
function g7() {
    if (a1 & b1 && a1 & c1) {
    } // todo: Only generated warning for the second bitwise operation

}

//Case8
function g8() {
    if (a1 & b1 && (a1 & c1)) {
    } //todo Still generates a warning for the second bitwise operation, even if enclosed with ()

}
