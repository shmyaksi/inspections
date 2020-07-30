function one(x, y) {
    if (x & y) console.log('ok')

}

one(2, 4)

function two(a, b) {
    if (a | b) console.log('sjnflsdn')

}

two(5, 0)

function color() {
    let hex = 'ff';
    let rgb = parseInt(hex, 16);


    var red = (rgb >> 16) & 0xFF;
    var green = (rgb >> 8) & 0xFF;
    var blue = rgb & 0xFF; //TODO
    console.log(blue, green, red)
}

color()

function col() {
    let x = 5, y = 9;
    let z = x | y; //todo
    if(x|y) return; //todo note
    console.log(z)

}

col()

let a = 6;
let b = 1;


//todo
console.log("A & B = " + (a & b));
if (a & b) console.log(a)

console.log("A | B = " + (a | b));