//'Incompatible bitwise mask operation' is ON
//TS 3.9.5

//Case1
function tt1() {
    let a, b, c

    return (a & 0b0010) == 0b0001
}

console.log(tt1())

//Case2
function tt2() {
    let a, b, c

    return (a | 0b0010) == 0b0001
}

console.log(tt2())


