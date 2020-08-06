//'Incompatible bitwise mask operation' is ON

function t() {
    let a, b, c

    return (a & 0b0010) == 0b0001
}

console.log(t())


function t1()
{
    let a, b, c

    return (a | 0b0010) ==0b0001
}
console.log(t1())

