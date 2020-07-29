function one(x,y){
    if(x&y) console.log('ok')

}
one(2,4)

function two(a,b){
    if (a|b) console.log('sjnflsdn')

}
two(5,0)

function color() {
    let hex = 'ffaadd';
    let rgb = parseInt(hex, 16); // rgb is 16755421


    var red = (rgb >> 16) & 0xFF; // returns 255
    var green = (rgb >> 8) & 0xFF;  // 170
    var blue = rgb & 0xFF; //TODO
    console.log(blue, green, red)
}
color()
function col(){
    let x=5, y =9;
    let z=x|y; //todo
    console.log(z)

}
col()

var a = 6;
var b = 1;

 //todo
console.log("A & B = " + (a & b) );


console.log("A | B = " + (a | b) );