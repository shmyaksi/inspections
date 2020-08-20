//Inspection is OFF

//Case1
function comparison1(password) {
    if (password.length !== 0) {
        return

    } else {


    }
}

comparison1(3)

//Case2
function numeric(adda) {

    if (adda !== 0) {
        return;
    } else {
        adda += 1
    }
    console.log(adda)


}
numeric(5)

//Case3
function str() {
    let name = 'anna'
    if (!name) {
        name = 'another'
    } else return

}
str()


//Case4
let Person11 = (function () {
    let ageKey :number;

    class Person11 {
        name: string;

        constructor(theName: string) {
            this.name = theName;
            this[ageKey] = 20;
        }

        comparison() {
            if (!this.name) return 'go away'
            else return 'hello';

        }

        greet() {

            console.log(`name: ${this.name}, age: ${this[ageKey]}`);
        }
    }

    return Person11;
})();

let joe1 = new Person11('Joe');
joe1.greet();


//Case5
interface MyFace {
    foo: number;
}

function cccc(mynum: MyFace) {
    if (!(mynum.foo))
        console.log(mynum.foo)
    else return
}

let my = {foo: 10, mynum: 'xns'};
cccc(my)


//Case6
function abcdd(b, c) {
    let bc = 'mother';
    let m: number;
    if (!bc) {
        let m = b;
        console.log('access denied');
    } else m = c;
}

abcdd(2, 3)


//Case7
let Person45 = (function () {
    let ageKey: number;

    class Person {
        name: string;

        constructor(theName: string) {
            this.name = theName;
            this[ageKey] = 20;
        }

        comparison() {   //negated if statement
            if (!this.name) return 'go away'
            else return 'hello';

        }

        greet() {

            console.log(`name: ${this.name}, age: ${this[ageKey]}`);
        }
    }

    return Person;
})();

let joe = new Person45('Joe');
joe.greet();

//Case8
function foor() {
    let s = 5;
    if (!s)
        console.log('ok')

}

foor()

const xx = 4, yy = 8

//Case9
function comp() {

    if (!(xx || yy)) return 'good' //negated IF
    else return
}

comp()
