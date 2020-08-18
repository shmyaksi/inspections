//Inspection is ON by default
'use strict'

//Case1
const kok = 10

function checkThree(m) {
    kok += m
}

//Case2
function checkFour() {
    let obj234 = Object.freeze({name: 'Elsa', score: 157});
    obj234.score = 0;
}

//Case3
function checkFive() {
    let array123 = [0];
    Object.freeze(array123);
    array123[0] = 1; //todo: why it isn't highlighted like in case2?
}

//Case4
function checkSix() {
    let arr = [1, 2, 3]
    const [first] = arr;
    first = 2 * arr[0];

}