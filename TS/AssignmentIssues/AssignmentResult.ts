//TS 3.9.5
//The inspection 'Result of assignment used' is OFF by default

//Case1
function a34() {
    let z, d, e, r, y;
    let x = y = z + 1;
    e = d = e;

    r = e = y;
}

a34()

//Case2
function b34() {
    let z, x;
    if (z = x = 1) return 'ok'

}

b34()

//Case3
function ty1() {
    let arr = [4, 6, 2, 3, 5, 7, 8]
    for (let i = 0; i < 3; i++) {
        let arrayItem = arr[3] = arr?.[0];
        console.log(arrayItem, arr[3])
        break
    }
}

ty1()


//Case4
function ku1() {
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }
    let undefinedValue = response.settings.height = 3;

}

ku1()

//Case6
function nan(n) {
    let num = 13n;
    if (n < 10) {
        num = n = num + n;
    } else return false
}

nan(12)

//Case7
class ClassAResult {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }

    incFoo(n) {
        n = this.#foo = n * 5;
        return n
    }
}


//case8
function resCheck(a, b) {
    enum Result {
        a, b, c
    }
    a = b = Result.b

}

//case9
type Point1 = { x: number, y: number };
let pointProp: keyof Point = 'x';

function getProp<T, K extends keyof T>(
    val: number,
    propName: number
){
    val = propName = 3
}

