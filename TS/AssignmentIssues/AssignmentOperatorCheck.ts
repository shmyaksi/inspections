//TS 3.9.5
//The inspection 'Assignment replaceable with operator assignment' is OFF by default

//Case1
function onetwo() {
    let a, b;
    a = a + b;
    a = a / b;
    a = a * b;
    b = b & a;

    return b;
}



//Case2
function twoone() {
    const c = 4
    let arr = [2, 3, 4]
    arr[1] = arr[1] + 1
    arr[0] = c * arr[0];
    console.log(arr[0])

}


//Case3
function mapmap3(n) {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

    for (let j = 0; j < 5; j++) {
        n = n + 1
        let nameBar = myMap.get("foo")?.name;
        console.log(nameBar, n)
        //break;
    }

}

//Case4
function ty() {
    let arr = [4, 6, 2, 3, 5, 7, 8]
    for (let i = 0; i < 3; i++) {
        arr[0] = arr[0] + 1;
        let arrayItem = arr?.[0];
        console.log(arrayItem)
    }
}

ty()



//Case6
function ku() {
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false,
            undefinedValue: undefined
        }
    }
    let undefinedValue = response.settings.undefinedValue ?? 'some other default';
    undefinedValue = undefinedValue * 3;
}

ku()

//Case7
function na(num) {
    let i = 13n;
    if (num < 10) {
        i = i & num;
    }
    console.log(i)
}


//Case8
class MyClass123 {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }

    incFoo(n) {
        this.#foo = this.#foo + 10;
        return this.#foo
    }
}

//case9
class Point implements Pointer{
    static instances = 0;
    constructor(
        public x: number,
        public y: number,
    ){
        x = x*y
    }

}

interface Pointer{
}

