//TS 3.9.5
//The inspection 'Assignment to function parameter' is OFF  by default

//Case1
function aA(n) {
    n = 3;
    return n

}
//Case2:class
class Cars {
number
    constructor(number) {
        this.number = number;
    }

    calc(k) {
        k = k * this.number;
        return k
    }
}

let m = new Cars(32);
console.log(m.calc(2))

//Case3:array
function bB(d) {
    let ar1 = ['me', 'myself', 'I']
    d = 'nina';
    let result = ar1[0] + ' ' + d;
    return result


}


//Case4
function mapmap2(n) {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});
    n = 10 * n;
    for (let j = 0; j < 5; j++) {
        let nameBar = myMap.get("foo")?.name;
        console.log(nameBar, n)
        break;
    }
}
mapmap2(2)

//Case5
function ff(n){
    let map = new Map([['name','lena'],['age','22']])
    n +=2;

}
ff(4)

//Case6
function n(name) {
    let foo = name ?? 'default string';
    console.log(foo);
    name = 'jenn'
    console.log(name);
}
n(null);

//Case7
function na(num){
    num = 13n;
    if (num<10) return true
    else return false


}
(na(12))

//Case8:class
class Class1 {
    readonly #foo;

    constructor(foo) {
        this.#foo = foo;
    }
    incFoo(n) {
        n = this.#foo
        return n
    }
}

//case9
function fn(arg1 = 'default'): string {
    arg1 = 'def'
    return 'def'
}

//case10
function countCaps(value?: string) {
    value = 'zjc'
    return value?.match(/[A-Z]/g)?.length ?? 0;
}


