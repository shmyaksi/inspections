function Identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): null} = Identity;


function two(x: string): number {

    return 'hello'
}

two()

function checkValue(value: string): string {
    return value * value
}

function FIRST1(a: any): number {

    let ssd = a * a
}
