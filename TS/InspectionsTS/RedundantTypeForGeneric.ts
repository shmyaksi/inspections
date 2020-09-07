//inspection 'Redundant type argument for a generic type' is ON by default
//TS 3.9.5

//case1
class Moo<R, T = string, U = number> {
}

let z1: Moo<number, string>

//case2
class Moo1<R, T = string, U = number> {
}

let z11: Moo1<number, number, number>

//case3
interface GenericInterface<R, U = string> {
    value: U
    getIdentity: () => U
}

let int: GenericInterface<number, string>

//case4
class IdentityClass<T, U = number, R = number> implements GenericInterface<T> {
    value: T

    constructor(value: T) {
        this.value = value
    }

    getIdentity(): string {
        return "";
    }

}

function redunduncyCheck() {
    let int1: IdentityClass<number, string, number>

}

//case5
interface IKeyValueProcessor<T, U> {
    process(key: T, val: U): void;
}

class kvProcessor<T, U = string, R = number> implements IKeyValueProcessor<T, U> {
    process(key: T, val: U): void {
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let kol: kvProcessor<number, number, number> = Object()
