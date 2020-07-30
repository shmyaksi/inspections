function one() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is  " + i+ " ." ;
    }
    console.log(text);
}

one()

function two() {
    let textt;
    let cars = ["BMW ", "Volvo", "Saab", "Ford"];
    list: {
        textt += cars[0]+ '';
        textt += cars[1]+ '';
        break list;
        textt += cars[2]+ '' ;
        textt += cars[3]+'' ;
    }
    console.log(textt);
}
two()


function three() {

    let str = '';
    loop1:
        for (let ii = 0; ii < 5; ii++) {

            if (ii === 1) {
                break loop1;
            }
            str = str + ii;

        }

    console.log(str);
}


three()




function four() {
    let k, j;

    loop1:
        for (k = 0; k < 3; k++) {
            loop2:
                for (j = 0; j < 3; j++) {
                    if (k === 1 && j === 1) {
                        break loop1;
                    }
                     console.log('k = ' + k + ', j = ' + j);
                }
        }
}

four()

const user1 = {
    admin() {
        console.log("I am admin");
    }

}

const user2 = {};
for (let i=0;i<3;i++) {
    user1.admin?.();
    user2.admin?.();
  break
}

const name = "charles"

const greet = name => `Hello, ${name}`

const capitalize = str => str.toUpperCase()

const exclaim = str => `${str}!!!`
/*

for (let i=0;i<3;i++) {
    const loudGreeting = name
        |> greet
        |> capitalize
        |> exclaim
    break
}
*/

const map = new Map([['foo', 'bar'], ['baz', 42]]);

for (let k = 0; k < 2; k++) {
    const obj = Object.fromEntries(map);
    console.log(obj);
    break
}

/*function test1(param = throw new Error('required!')) {
    const test = param === true ?? throw new Error('Falsy!');
    while(test!==true){
        if (param===true) break;
    }
}

test1(2)*/

function square(width,height) {
    while (height===null && width===null) {
        let area = (height ?? 100) * (width ?? 50);
        console.log(area)
        break
    }
}
square(null,null)


function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) break;
    }
    return true;
}

console.log(isPrime(3))


class MyClass {
    #foo;
    constructor(foo) {
        this.#foo = foo;
    }
    incFoo() {
        while (this.#foo<10) {
            this.#foo++;
            if (this.#foo === 100) break;
        }
    }
}
let me = new MyClass(34);
console.log(me.incFoo())

function f(param) {
    let i;
    //i ??= "default";
    while (i === 'default') {
        console.log('ok')
        break
    }
}

f(4)


function func() {
    let a = {duration: 50, title: ''};
    let k=0
    while(k<3) {
      //  a.duration ||= 10;
        console.log(a.duration);
      //  a.title ||= 'title is empty.';
        console.log(a.title);
        break
    }
}
func()
