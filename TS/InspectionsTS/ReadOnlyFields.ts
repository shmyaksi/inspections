// inspection 'Field is assigned only in the constructor and can be made readonly ' is ON
//TS 3.9.5

//Case1
class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

//Case3
class Person1 {
    private _birthYear: number;

    constructor(birthYear: number) {
        this._birthYear = birthYear;
    }

    prop() {
        console.log(this._birthYear)
    }
}

//Case4
class Person23 {
    private name: string

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

//Case5
interface TeslaModelSReview {
    readonly [id: number]: number;
}

class TeslaModelSPrototype implements TeslaModelSReview {
    private length: number;
    private width: number;

    constructor(width, length) {
        this.length = length;
        this.width = width;

    }

    getTyrePressure() {
        return 20 + this.length
    }

    getRemCharging() {
        this.width = 10
    }

    [id: number]: number;
}






