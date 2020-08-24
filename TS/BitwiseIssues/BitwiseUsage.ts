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
function col(x, y) {
    let z = x | y;
    if (x | y) return
    console.log(z)

}

col(1, 2)

//Case4
function g4(a, b) {
    console.log("A & B = " + (a & b)); //todo inspection should be here
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
    if (a1 & b1 && a1 & c1) {
    }
    if (a1 & b1 && (a1 & c1)) {
    }

}
