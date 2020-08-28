//Inspection 'Abstract class constructor can be made protected' is ON
//TS 3.9.5

//Case1
abstract class Cars {
    theName: string;

    constructor(name: string) {
        this.theName = name;
    }
}

//Case2
abstract class Books {
    protected theName: string;

    constructor(name: string) {
        this.theName = name;
    }
}

//Case3
interface IFoo3 {
    bar(): boolean;
}

abstract class FooBase3 {
    abstract baz(value): IFoo3;

    constructor() {
    }
}

//case4
abstract class BaseEmployee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//case5
abstract class Base {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Employee1 extends Base {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

//case6
interface IName {
    firstName: string
    lastName: string;
}

interface IWork {
    doWork(): void;
}

abstract class BaseEmpl implements IName, IWork {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

//case7
abstract class Figure {
    abstract getArea(): void

    constructor() {
    }
}

class Rectangle extends Figure {
    constructor(public width: number, public height: number) {
        super()
    }

    getArea(): void {
        let square = this.width * this.height
        console.log('area =', square)
    }
}

