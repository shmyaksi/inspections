function one() {
    let a, b, c, d

    d = !a ? b : c
    return d

}

one()


function abcdd(b, c) {
    let bc = 'mother';
    let m: number;
    if (!bc) {
        let m = b;
        console.log('access denied');
    } else m = c;
}

abcdd(2, 3)


let Person = (function () {
    let ageKey: number;

    class Person {
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

    return Person;
})();

let joe = new Person('Joe');
joe.greet();
