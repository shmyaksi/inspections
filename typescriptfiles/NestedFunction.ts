function add() {
    let counter = 0;

    function plus() {
        counter += 1;
    }

    plus();
    return counter;
}

add()

function ah(x) {
    const bh = y => x + y;
    return bh;
}

console.log(ah(3)(4));


function on() {
    function two() {
        console.log("hello");

    }

    two()
}

on()


function sayHiBye(firstName, lastName) {

    console.log("Привет, " + getFullName());
    console.log("Пока, " + getFullName());

    function getFullName() {
        return firstName + " " + lastName;
    }

}

sayHiBye('kate', "middlton");

function abba() {
    console.log('hello')
    let babba = function () {


    }
    return babba
}

abba()

function jdbv() {
    function kdjgkgj() {
        function kjd() {

        }
    }

    return '9'
}

console.log(jdbv())

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