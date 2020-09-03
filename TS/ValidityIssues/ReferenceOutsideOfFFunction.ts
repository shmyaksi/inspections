//TS 3.9.5
//The inspection 'Referencing 'arguments' outside of function' is ON by default


//Case1
function Outside1(a, b, c) {
    console.log(arguments[1])

}

console.log(arguments[0])

//Case2
function Outside2() {
    const elements = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ]
    let bor = elements.map(function (element) {

    })
}

arguments.length
console.log(Outside2())

//Case3
function createPerson(sIdentity) {
    var oPerson = new Function('console.log(arguments.callee.identity);')
    return oPerson
}

var john = createPerson('John Smith')
console.log(arguments.caller.identity) //todo: inspection caller isn't shown here
john()

//Case4
class Outside3 {
    mark

    constructor(mark) {
        this.mark = mark
    }

    greeting() {
        return arguments
    }

    arr = function () {
        return 2
    }
    variableone = arguments[0]
}


//case5
interface StringArray1 {
    [index: number]: string;

}

function createArray1() {
    let myArray: StringArray1 = ["Bob", "Fred"];
    let myStr: string = myArray[0];

}

console.log(arguments)

//case6
interface SquareConfig1 {
    color?: string;
    width?: number;
}

function createSquare1(config: SquareConfig1): { color: string; area: number } {

    return {color: config.color || "red", area: config.width || 20};
}

//case7
enum Square {
    a, b, c
}

Square = arguments[0]

//case8
class SquareConf implements SquareConfig1 {
    color?: string;
    width?: number;

    got() {
        return arguments
    }

    variable = arguments.caller
}
