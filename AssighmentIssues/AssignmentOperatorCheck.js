function one(){

    let a,b;
    a=a+b;
    a=a/b;
    a=a*b;
    b=b&a;

    return b;


}
one()

const c = 4
let arr = [2,3,4]

function two(){
    arr[1]=arr[1]+1
    arr[0]=c*arr[0]; //TODO  (works only for arr[0]*c)
console.log(arr[0])

}

two()


function mapmap3(n) {
    let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

    for (let j = 0;j<5;j++) {
        n=n+1
        let nameBar = myMap.get("foo")?.name;
        console.log(nameBar,n)
        //break;
    }

}
mapmap3(2)

function ty(){

let arr = [4,6,2,3,5,7,8]
    for(let i = 0;i<3;i++) {
        arr[0]=arr[0]+1;
        let arrayItem = arr?.[0];
        console.log(arrayItem)
    }
}
ty()
function ki() {
    let map = new Map([['name', 'lena'], ['age', '22']])
    let obj = Object.fromEntries(map);
    obj.name = obj.name+'lsnv';
    console.log(obj)
}
ki()

function ku(){
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
    undefinedValue=undefinedValue*3;

}

ku()

function na(num){
    let i = 13n;
    if (num<10) {
        i=i&num;
    }
    console.log(i)


}
na(12)

class MyClass1 {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }
    incFoo(n) {

        this.#foo=this.#foo+10;
return this.#foo
    }
}

let neww = new MyClass1(10)
console.log(neww.incFoo(3))