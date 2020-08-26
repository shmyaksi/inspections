//Inspection is ON
function f2(a) {
    return a * a;

}

var x = 1;
;

;

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
    ;
}

let mySquare = createSquare({color: "black"});


// myMultiply = sayHello; // Not possible.
// myMultiply(); // Not possible.

const myMultiply: (val1: number, val2: number) => number = multiply;
console.log(myMultiply(5, 2));
