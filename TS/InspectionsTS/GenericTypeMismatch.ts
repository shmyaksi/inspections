//Inspection is ON by default
//TS 3.9.5

//case1
class Foo123<T, U, D = number> {
}

let zz: Foo123;


//case2
interface Circle1<T, R = string> {
    kind: "circle";
    radius: number;
}

let zz1: Circle1;

//case3
interface Square<T, U = number, R = string> {
    kind;
    sideLength: number;
}

declare let y: Square;


//case4
interface Lion<T, R, U = any> {
    roar(): void;
}

interface Seal<R, U = number> {
    singKissFromARose(): void;
}

type SealLion = Lion & Seal

let zz2: SealLion<number>


//case5
class Queue<T, R = number> {
    private data = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

const queue: new Queue;


//case6
class Book<T, R, U = string> {

}

let book1: Book = 'romeo';


