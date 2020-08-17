//Inspection is OFF

//Case1
function one44() {
    let a, b, c, d

    d = !a ? b : c
    return d

}

one44()

//Case2
function one45() {
    let write: any;
    let user1 = 'n', user2 = 'd';
    write = !(user1 === user2) ? 'you are already here' : "excellent"
    return write

}

console.log(one45())

//Case3
function abcdd(b, c) { //negated if statement
    let bc = 'mother';
    let m: number;
    if (!bc) {
        let m = b;
        console.log('access denied');
    } else m = c;
}

abcdd(2, 3)


//Case4
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

//Case5
function foo() {
    let s = 5;
    if (!s)
        console.log('ok')

}

foo()

const xx = 4, yy = 8

//Case6
function comp() {

    if (!(xx || yy)) return 'good' //negated IF
    else return
}

comp()