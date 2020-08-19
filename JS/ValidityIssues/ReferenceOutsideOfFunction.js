//Inspection is ON

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
    oPerson.identity = sIdentity
    return oPerson
}

var john = createPerson('John Smith')
console.log(arguments.callee.identity)
john()

//Case4
class Outside3 {
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
