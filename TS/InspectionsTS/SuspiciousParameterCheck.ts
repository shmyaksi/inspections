// Inspection is ON
//TS 3.9.5

//Case1
class Plant {
    z;
    constructor(readonly x) {
        x = 5;
    }

}

//case2
class Rose extends Plant {
    constructor(readonly x) {
        super(x);
        x *= 2
    }

}

//case3
interface sunflower {
    name: string
}

class Lily implements sunflower {
    constructor(readonly name) {
        name = this.name

    }
}

//case4
interface AnimalProperties {
    species?: string;
    id?: string;
    color?: string;
}

class Animal1 implements AnimalProperties {
    constructor(readonly species: string) {
        species = this + ''

    }
}

//case5
class Circle {
    constructor(readonly foo) {
        this.foo = foo;
    }
}




