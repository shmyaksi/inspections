//Inspection is OFF by default

//Case1
function h(a) {
    let b
    let z = a & 0;
    console.log(z)

}

h(3)

//Case2
function h1(a) {
    return a | 0;

}

h1(5)

const x = 0

//Case3
function h2(a) {
    return a << 0;

}

h2(7)

//Case4
function h3(a) {
    return a | x;

}

h3(8)


