function s(){

    let z = 1<<1000000
    console.log(z)

}
s()
function s1(){

    let z = 1<<-14
    console.log(z)

}
s1()


const setBit = (num, position) => { // todo tool tip should contain enough info
    let mask = 1 << position
    return num | mask
}

// Set the bit at position 1
console.log(setBit(12, -14)) // todo works for numbers as well( not constants)






