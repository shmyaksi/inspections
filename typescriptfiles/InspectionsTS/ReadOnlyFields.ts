class cars {

    private name: string = 'ford'; //TODO

    constructor(private theName: string) {


        this.name = theName;
    }

}


class Animal {
    private name: string; //TODO

    constructor(theName: string) {
        this.name = theName;
    }
}


class Person1 {
    private _birthYear: number;  //TODO
    constructor(birthYear: number) {
        this._birthYear = birthYear;
    }
}

class Person {

    private name: string

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

let jeremy = new Person("Jeremy Bearimy");
