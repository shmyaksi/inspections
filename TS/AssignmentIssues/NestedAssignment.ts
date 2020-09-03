//TS 3.9.5
//The inspection 'Nested Assignment' is OFF  by default

//Case1
function dD() {
    let n, l;
    let d = n = l = 1;
    return n
}

console.log(dD())

//Case2
function mCheck() {
    let arr = [1, 2, 3, 4]
    arr[0] = arr[1] = 4;
    console.log(arr)
}

//Case3:constructor
class Person {
    age
    age1

    constructor(age, age1) {
        this.age = this.age1 = age;
    }
}


//Case5
function ku1() {
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }
    for (let d = 0; d < 3; d++) {
        let undefinedValue = d = d + 3;
        console.log(undefinedValue)
    }
}

ku1()

//Case6
function isPrime1(p) {
    for (let i = 2n; i * i <= p; i++) {
        let j = p = 40n;
        if (p % i === 0n) return false;
    }
    return true;
}


//Case7
class Foo {
    propFoo
}

let F = new Foo();

class Boo {
    propBoo
}

let B = new Boo();

class Moo {
    propMoo
}

let M = new Moo();

F.propFoo = B.propBoo = M.propMoo = "foo"

//Case8
function obj6() {
    let b1 = {
        name: "first",
        age: "30"
    }

    let b2 = {
        name: "sec",
        age: "22"
    }

    let b3 = {
        name: "three",
        age: "10"
    }
    b3.name = b2.name = b1.name = "hello"
}

//case9
class Nested1 implements Nested2 {
    name
    age

}

interface Nested2 {

}


let Nes = new Nested1()
Nes.age = Nes.name = '10'

//case10
enum Nes1{
    ac,av,ab

}

function comparison(a,b){
   a=b= Nes1.ab
}




