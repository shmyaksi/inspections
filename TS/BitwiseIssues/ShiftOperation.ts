//Inspection is ON
//TS 3.9.5

//Case1
function s() {
    let z = 1 << 1000000
    console.log(z)

}

s()

//Case2
function s1() {

    let z = 1 << -14
    console.log(z)

}

s1()

//case3
function s3() {
    let value: string | undefined;
    console.log(`value is ${(value!.length >> 100)} characters long`);
}

//case4
declare function smushObjects<T, U>(x: T, y: U): T & U;

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

declare let xy: Circle;
declare let yx: Square;

let z = smushObjects(xy, yx);
console.log(z >> 100)
