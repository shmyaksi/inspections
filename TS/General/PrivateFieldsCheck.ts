//inspection ON
//TS 3.9.5

//Case1
function Thingy() {
    /** @protected */
    this._bar = 1;
}

console.log(new Thingy(#._bar))

//Case2
class ddd {
    #dddd

    constructor(dddd) {
        #dddd = dddd
    }
}

//Case3
class Point3 {
    #xxx

    constructor(
        xxx: number) {
        #xxx = xxx
    }
}

//Case4
interface Point4 {
    list: void;

}

class Point5 {
    #Value: Point4;
    extra

    constructor() {
        #Value = this.extra;
    }
}

//Case5
class Product {
    price: number;
    description: string;
    nameMaxLength = 20;
    private _name: string;
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (name.length > this.nameMaxLength) {
            throw new Error("The maximum Name length is" + this.nameMaxLength);
        }
        #_name = name;
    }
}


//Case6
class Product2 {
    #name: string;
    get name(): string {
        return #name;
    }

}

//Case7
interface Person34 {
    firstName: string;
    lastName: string;
    age: number;
}

class person34 {
    #key: Person34;
}


class person35 extends person34 {
    #name

    greet() {
        return #name + ',hello'
    }
}

//Case8
type Easing1 = "ease-in" | "ease-out" | "ease-in-out";

class UIElement1 {
    animate(dx: number, dy: number, easing: Easing1) {

    }

    #one: Easing1;

    promAnimate() {
        #one = 'sa'
    }

}





