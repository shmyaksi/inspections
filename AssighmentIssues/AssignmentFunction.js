//'Assignment to function parameter' is OFF by default

//Case1
function A(n) {
    n = 3;
    return n

}

console.log(A(5))

//Case2:class
class Cars {

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
function B(d) {
    let ar1 = ['me', 'myself', 'I']
    d = 'nina';
    let result;
    result = ar1[0] + ' ' + d;
    return result


}

console.log(B())


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
    let obj = Object.fromEntries(map);
    if(obj.age ==='22')
        n +=2;
    console.log(n)
}
ff(4)

//Case6
function n(name) {
    let foo = name ?? 'default string';
    console.log(foo);
    name = 'jenn'
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
class MyClass1 {
    #foo;

    constructor(foo) {
        this.#foo = foo;
    }

    incFoo(n) {
        n = this.#foo
        return n
    }
}

let neww = new MyClass1(10)
console.log(neww.incFoo(3))
