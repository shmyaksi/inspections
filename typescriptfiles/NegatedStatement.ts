function comparison(password) {

    if (password.length !== 0) {
        return
    } else {

    }
}

comparison(3)


function numeric(adda) {

    if (adda !== 0) {
        return;
    } else {
        adda += 1
    }
    console.log(adda)


}

numeric(5)


function str() {
    let name = 'anna'
    if (!name) {
        name = 'another'
    } else return

}

str()


let Person = (function () {
    let ageKey :number;

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