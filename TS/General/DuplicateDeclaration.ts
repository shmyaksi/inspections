//'Duplicate declaration' is ON
//TS 3.9.5

//Case1
function onelow() {
    let e = {
        target: {
            value: 'abc',
            value: 'kjdv'
        },
        password: {
            value: 'xyz'
        }
    }
    console.log(e)

}


//Case3
class Person1 {
    firstName
    lastName

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Case4
function abcde1() {
    let robotA = {name: "Bender", name: 'Ben'};
    let {name: nameA} = robotA;
    console.log(nameA);
}


//Case5
function func143() {
    let a = {duration: 50, title: '', duration: 3};
    let k = 0
    while (k < 1) {
        console.log(a.duration);
        k++
        //a.title ||= 'title is empty.'; //todo: if delete this string - red code
        console.log(a.title);

    }
}

func143()

//Case6
class Counter2 {
    xValue;
    get x() {
        return this.xValue;
    }
    set x(value) {
        this.xValue = value;
    }

    connectedCallback() {
    }

    connectedCallback() {

    }

}

//Case7
enum UserResponse {
    No = 0,
    Yes = 1,
    Yes
}

//Case8
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length,
    G = 10
}

//Case9
enum bad {a, b} //todo:duplicate declaration should works here

enum bad {

}

//Case10
interface face1 { //todo: here too

}

interface face1 {

}

//Case11
function func143() {

}




