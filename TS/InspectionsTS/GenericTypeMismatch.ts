//Inspection is ON by default
//TS 3.9.5

// todo: discuss: it's all 'type mismatch' , i dont know how to fire it

//case1
class Queue<T> {
    private data = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

const queue = new Queue<string>();
queue.push(0);


//case2
function identity<T>(value: number): T {
    return value;
}

console.log(identity<Number>(2))

//case3
interface KeyValueProcessor<T, U> {
    (key: T, val: U): void;
}

function processKeyPairs<T, U>(key: T, value: U): void {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}


interface GenericInterface<U> {
    value: U
    getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
    value: T

    constructor(value: T) {
        this.value = value
    }

    getIdentity(): T {
        return this.value
    }

}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity())

const myStringClass = new IdentityClass<string>("Hello!")
console.log(myStringClass.getIdentity())

