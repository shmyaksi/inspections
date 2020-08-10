//Inspection is OFF
function two3() {
    let ccc, adddd, bvv;
    let m = !adddd ? bvv : ccc
}

function Calc() {
    let booksCount = 19;
    let result;
    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
    console.log(result)
}

Calc()


function two2() {
    const user3 = {
        admin() {
            console.log("I am admin");
        }

    }
    const user4 = {};
    for (let i = 0; i < 3; i++) {
        result1 = (user3.admin !== null) ? user3.admin?.() :
            (user4.admin !== null) ? user4.admin?.() : console.log('sorry')


    }
}

//Case4
const name = "charles"

function k(i) {
    const greet = name => `Hello, ${name}`
    const capitalize = str => str.toUpperCase()
    const exclaim = str => `${str}!!!`
    const loudGreeting = name
    result2 = (i > 2) ? name |> greet
            |> capitalize
            |> exclaim :
        (i > 1) ? console.log('ok') : console.log('sorry')
}

k(4)

function kk() {
    const map = new Map([['foo', 'bar'], ['baz', 42]]);

    const obj = (map.entries() !== null) ? Object.fromEntries(map) : console.log('fill it')
    console.log(obj);

}

kk()


function square(width, height, i) {
    areaa = (i < 9) ? ((height ?? 100) * (width ?? 50)) : console.log('!')
    console.log(areaa)
}

square(null, null, 8)

function f4(param) {
    let i;
    //i ??= "default";
    let result = (param !== 0) ? (i ??= 'default') : (i ??= 'put it down')
    console.log(result)

}

f4(4)
