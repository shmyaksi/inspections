function h(a) {
    let b
    let z = a & 0;
    console.log(z)

}

h(3)

function h1(a) {
    return a | 0;

}

h1()
const x = 0

function h2(a) {
    return a << 0;

}

h2()

function h3(a) {
    return a | x; //todo (works only for numbers, not constants)

}

h3()
