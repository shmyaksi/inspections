//Inspection is OFF

//Case1
function add() {
    let counter = 0;

    function plus() {
        counter += 1;
    }

    plus();
    return counter;
}

add()

//Case2
function ah(x) {
    const bh = y => x + y;
    return bh;
}

console.log(ah(3)(4));

//Case3
function on() {
    function two() {
        console.log("hello");

    }

    two()
}

on()

//Case4
function sayHiBye(firstName, lastName) {

    console.log("Привет, " + getFullName());
    console.log("Пока, " + getFullName());

    function getFullName() {
        return firstName + " " + lastName;
    }

}

sayHiBye('kate', "middlton");

//Case5
function abba() {
    console.log('hello')
    let babba = function () {
    }
    return babba
}

abba()

//Case6
function jdbv() {
    function kdjgkgj() {
        function kjd() {

        }
    }

    return '9'
}

console.log(jdbv())

//Case7
enum computers {
    one,
    two,
    tree
}

function ker(one: computers) {

    return ('' + kerr(5))

    function kerr(two: computers) {
        return 'my computer is ' + two;

    }
}

console.log(ker(4))