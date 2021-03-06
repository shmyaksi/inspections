//TS 3.9.5
//The inspection 'Type mismatch' is ON by default

//Case1
type Easing11 = "ease-in" | "ease-out" | "ease-in-out";

class UIElement11 {
    animate(dx: number, dy: number, easing: Easing11) {

    }

    #one: Easing11 = '';
}

//Case2
function checkType(num: number): number {
    return ''
}

checkType('s')


//Case3:WEB-37033
interface III {
    foof(x: number): string

    foor(x: number): string
}

class Impl implements III {
    foof(x: number): string {
        return {foo: "foo"}
    }

    foor = (x: number): string => ({foo: "foo"});
}


//case4
let fullName: string = `Bob Bobbington`;
let age33: number = '';

//case5
type Alignment = "Left" | "RIGHT" | "CENTER";

function doAlign(alignment: Alignment): void {
    console.log(alignment);
}

doAlign("");

//Case6
type WIDTH = 100 | 200 | 300;

function setWidth(w: WIDTH) {
    console.log(w);
}

setWidth(1000);

//case7
function myIdentity() {
    let myIdentity: { <T>(arg: T): null } = Identity;
}

//case8
function two(x: string): number {

    return 'hello'
}

two('')

//case9
function checkValue(value: string): string {
    return value * value
}

//case10
function FIRST1(a: any): number {

    let ssd = a * a
}


//case11
type FuncWith2ParamAndReturnVoid = (a: number, b: string) => void;

let func: FuncWith2ParamAndReturnVoid = function (): void {
    return 0;

}

//case12
interface A {
    a: number;
}

interface B {
    b: string;
}

interface C {
    a?: boolean;
    b: string;
}

declare let x: A & B;

declare let y: C;

y = x;




