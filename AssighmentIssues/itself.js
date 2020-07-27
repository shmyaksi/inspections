function inn(){
    let x;
     x=x;


}
inn()

class People2 {

    constructor(age) {
        this.age = this.age;
    }

    ager() {

        return this.age


    }
}

let me = new People2(22)
console.log(me.ager())

let maxlength=2
function opp(){
    let j=3;
    if (j>maxlength) j=j;

}
opp()

let ar = [2,3,4,5]
function om(){
     ar[0]=ar[0] //TODO
    return ar[0]

}
console.log(om())


function ty11(){
    let arr = [4,6,2,3,5,7,8]
    for(let i = 0;i<3;i++) {

        let arrayItem =arr[3]= arr?.[0];
        arrayItem=arrayItem;

        console.log(arrayItem,arr[3])
        //console.log(array)
        break
    }
}
ty11()

function ty22(){
    let map = new Map([['name','lena'],['age','22']])
    let obj = Object.fromEntries(map);

    obj.age =obj.age;

}


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


function nan(n){
    let num = 13n;
    if (n<10) {
        num=num;


    }
    else return false


}
nan(12)

class MyClass1 {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }
    incFoo(n) {

        this.#foo=this.#foo
        return n

    }
}

let neww = new MyClass1(10)
console.log(neww.incFoo(3))