// Inspection  'Property can be replaced with shorthand' is On
//TS 3.9.5

//Case1
function animal() {
    let cat = 'Miaow';
    let dog = 'Woof';
    let bird = 'Peet peet';

    let someObject = {
        cat: cat,
        dog: dog,
        bird: bird
    }
}

//Case2
function o2() {
    let oppp = {
        property: function (parameters) {
        },
    }
}

//Case3
var person6 = Object(); //todo:propose to replace with shorthand like in case below
person6.firstName = "John";
person6.lastName = "Doe";


var person7 = {firstName: "John", lastName: "Doe"};


//Case4
function o3() {
    let abba = 1;

    let myObj = {
        abba: abba,
        fun: function () {
        }
    }
}



