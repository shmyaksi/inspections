function a(){
    let z,d,e,r,y;
let x=y=z+1;
e=d=e;

r=e=y;



}
a()
function b(){
    let z,x;
    if(z=x=1) return 'ok'

}
b()

function ty1(){
let arr = [4,6,2,3,5,7,8]
for(let i = 0;i<3;i++) {

    let arrayItem =arr[3]= arr?.[0];

    console.log(arrayItem,arr[3])
    //console.log(array)
    break
}
}
ty1()

function ty3(){
    let map = new Map([['name','lena'],['age','22']])
    let obj = Object.fromEntries(map);
    obj.age=obj.age='23';
    console.log(obj)
}
ty3()

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


        let undefinedValue = response.settings.undefinedValue ?? 'some other default';
        undefinedValue=response.height= 3 * undefinedValue;

    }

ku1()

function nan(n){
    let num = 13n;
    if (n<10) {
        num=n=num+n;


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

        n=this.#foo=n*5;
        return n

    }
}

let neww = new MyClass1(10)
console.log(neww.incFoo(3))