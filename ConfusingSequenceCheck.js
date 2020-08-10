//'Confusing sequence of '+' or '-'' is OFF

//Case1
function ad() {
    let a = 34, b = 4;
    let c;
    c = a++ + b;
    console.log(c)
}

ad()

//Case2
function ad2() {
    let a = 34, b = 4;
    let c;
    for (let i = 0; i < 5; i++) {
        {
            c = a - +-b;
            console.log(c)
        }
    }
}

ad2()

console.log('------------------------------')

//Case3
function ad3() {
    let a = 34, b = 4;
    let c;
    for (let i = 0; i < 5; i++) {
        {
            c = a - +-+b;
            console.log(c)
        }
    }
}

ad3()