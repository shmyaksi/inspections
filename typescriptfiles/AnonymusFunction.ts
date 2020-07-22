let anon = function () {
    return 'I am anonymous';
}
anon();


function NotAnon() {
    let an = function () {

    }
    console.log('Im not anonymus')


}

NotAnon();


class marks {
    mark: string;

    constructor(themark) {
        this.mark = themark;
    }

    greeting() {

        return 'Hello, you have ' + this.mark;
    }


    arr = function () {

        return 2;
    }


}

let mymark = new marks(5)

console.log(mymark.greeting());


interface LabeledValue {
    label: string;
}

const printLabel = function (labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


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


enum Responses {
    No = 0,
    Yes = 1,
}

let respond = function (recipient: string, message: Responses): void {

}
respond("Princess Caroline", Responses.Yes)


class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet = function () {
        return "Hello, " + this.greeting; //flipping + causes undesirable result
    }
}

let anna = new Greeter('anna')
console.log(anna.greet())

let identity = function <T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;


