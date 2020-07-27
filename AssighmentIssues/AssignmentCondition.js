function C() {
    let c;
    if (c = 9) return c

}

C()

function D() {

    let d = 3;
    let v;
    while (d = 2)
        break;


}

D()

function E() {
    let v;
    for (v = 0; v = 6; v++) {
        break;
        console.log(v)
    }
}

E()

function F() {
    let f = -2;
    do
        f++;


    while (f = 0)
}

F()

function mapmap1() {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

    for (let j = 0;j=5;j++) {

        let nameBar = myMap.get("foo")?.name;
        console.log(nameBar)
        break

    }

}
mapmap1()

function m(){
    let map = new Map([['name','lena'],['age','22']])
 let obj = Object.fromEntries(map);
    console.log(obj);
    let k=0;
    while(obj.name ='anna') {
        k++;
        break;
    }
    console.log(k)
}
m()

const response = {
    settings: {
        nullValue: null,
        height: 400,
        animationDuration: 0,
        headerText: '',
        showSplashScreen: false
    }
};


let undefinedValue = response.settings.undefinedValue ?? 'some other default'; // result: 'some other default'
if (undefinedValue ='dfhdh') console.log('ok') ;
const nullValue = response.settings.nullValue ?? 'some other default'; // result: 'some other default'

console.log(undefinedValue);
console.log(nullValue);

function bin() {
    const view = new BigInt64Array(4);
    const max = 2n ** (64n - 1n) - 1n;
    const bigInt = 42n;

    view[0] = 42n;
    while (view[0]=41n) break;
    view[1] = max;
    view[2] = bigInt;
    console.log(view[0])

}
bin()


class MyClass1 {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }
    incFoo() {

        if (this.#foo = 3) {
            this.#foo++;
            return this.#foo
        }

    }
}

let neww = new MyClass1(4)
console.log(neww.incFoo())