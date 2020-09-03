//Inspection is ON by default
'use strict'

//Case1
const kok = 10

function checkThree(m) {
    kok += m
}

//Case2
function checkFour() {
    let obj234 = Object.freeze({name: 'Elsa', score: 157})
    obj234.score = 0
}

//Case3

function check999() {
    let array444 = Object.freeze([4, 5, 6])
    array444.push(5)
    console.log(array444)
}

check999()

//Case4

function checkSix() {
    let arr = [1, 2, 3]
    const [first] = arr
    first = 2 * arr[0]

}
