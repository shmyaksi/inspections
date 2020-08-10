//Inspection is OFF by default

//Case1
let anon = function () {
    return 'I am anonymous';
}
anon();

//Case2
function NotAnon() {
    let an = function () {

    }
    console.log('Im not anonymus')


}

NotAnon();


//Case3
class marks {
    mark: string;

    constructor(themark) {
        this.mark = themark;
    }

    greeting() {

        return 'Hello, you have ' + this.mark;
    }


    arr = function () { //TODO no suggestion to convert

        return 2;
    }


}

let mymark = new marks(5)
console.log(mymark.greeting());

//Case4
interface LabeledValue {
    label: string;
}

const printLabel = function (labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//Case5
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;

}

const present = function (color: string) {
    return 'my colour is ' + color;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
console.log(present('green'));


//Case6
enum Responses {
    No = 0,
    Yes = 1,
}

let respond = function (recipient: string, message: Responses): void {

}
respond("Princess Caroline", Responses.Yes)

//Case7
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet = function () { //TODO no suggestion to convert
        return "Hello, " + this.greeting; //flipping + causes undesirable result
    }
}

let anna = new Greeter('anna')
console.log(anna.greet())

//Case8
let identity = function <T>(arg: T): T {
    return arg;
}

let myidentity: <T>(arg: T) => T = identity;


