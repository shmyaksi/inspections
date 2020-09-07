//inspection 'Redundant type argument for a generic type' is ON by default
//TS 3.9.5
//todo:cases


const sayMessage = <T extends unknown>(message: T): string => `Simon says ${message}`;



class Queue1<T> {
    private data: any[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}


class Collection<T> {
    private _things: T[];

    constructor() {
        this._things = [];
    }

    add(something: T): void {
        this._things.push(something);
    }

    get(index: number): T {
        return this._things[index];
    }
}


function five<N = number, S = string>() {
}

five<number, string>();
five<string, string>();
five<number, number>();

function f<N = number, S = string>() {
}

f();
f<string, string>();
f<number, number>();





