
function DD(){
    let n,l;
    let d=n=l=1;
    return n
}

console.log(DD())

function m(){

     let arr = [1,2,3,4]

    arr[0]=arr[1]=4;
     console.log(arr)
}
m()

class Person{
    constructor(age,age1) {
        this.age=this.age1=age;
    }

}


const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
for(let k=0;k<2;k++) {
    const obj = Object.fromEntries(map);
    obj.foo=obj.baz=10;
    console.log(obj);
}

function ku1(){
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }

    for(let d=0;d<3;d++) {
        let undefinedValue = response.settings.undefinedValue ?? 'some other default';
        undefinedValue=d=d+3;
console.log(undefinedValue)

    }

}

ku1()

function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        let j=p=40n;
        if (p % i === 0n) return false;
    }
    return true;
}

//TODO
let foo = moo = boo = "foo";
const foo1 = moo1 = boo1 = "foo";

class Foo{
    propFoo
}
let F = new Foo();

class Boo {
    propBoo
}
let B = new Boo();

class Moo{
    propMoo
}
let M = new Moo();

F.propFoo = B.propBoo = M.propMoo = "foo"

console.log(isPrime(3))