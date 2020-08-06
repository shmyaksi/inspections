//'Variable is assigned to itself' is ON by default

//Case1: variable
function inn() {
    let x;
    x = x;
}

inn()

//Case2: constructor
class People2 {
    constructor(age) {
        this.age = this.age;
    }

    ager() {
        return this.age
    }
}

//Case3: Object
let myObject = {
    a: 5,
    b: 4
}

myObject.a = myObject.a

//Case4: Array
function om() {
    let ar = [2, 3, 4, 5]
    ar[0] = ar[0]
    return ar[0]

}
console.log(om())


//Case5
function ty11(){
    let arr = [4,6,2,3,5,7,8]
    for(let i = 0; i<3; i++) {

        let arrayItem =arr[3]= arr?.[0];
        arrayItem=arrayItem;

        console.log(arrayItem,arr[3])
        //console.log(array)
        break
    }
}
ty11()

//Case6
function ty22(){
    let map = new Map([['name','lena'],['age','22']])
    let obj = Object.fromEntries(map);
    obj.age =obj.age;

}

//Case7
function ku3(){
    let response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }
    let undefinedValue = response.settings.undefinedValue ?? 'some other default';
    undefinedValue=undefinedValue;
console.log(undefinedValue)
}

ku3()

//Case8
function nan(n){
    let num = 13n;
    if (n<10) {
        num=num;
    } else return false
}
nan(12)

//Case9
class MyClass1 {
    #foo;

    constructor(foo) {
        this.#foo = foo;
    }

    incFoo(n) {
        this.#foo = this.#foo
        return n

    }
}

let neww = new MyClass1(10)
console.log(neww.incFoo(3))


//Case10
function ob2() {
    let foo = ["one", "two", "three"];
    let [one, two, three] = foo;
    foo[one] = foo[0]
    console.log(foo[one])
}

ob2()

//Case11
function on1() {
    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };
    for (let i = 0; i < 3; i++) {
        let {title, width, height} = options; //TODO Note: no error
        console.log(i)
    }

}

on1()

//Case12
function on2() {
    let key = "z";
    let {[key]: foo1} = {z: "bar"};

    foo1[key] = "bar"
    console.log(foo1);
}

on2()

//Case13
function on34() {
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    };
    let {
        b,
        d
    } = obj;
    b = obj.b //TODO

    console.log(b);
    console.log(d);
}

on34()

//Case14
function opp() {
    let maxlength = 2
    let j = 3;
    if (j > maxlength) j = j;

}

opp()