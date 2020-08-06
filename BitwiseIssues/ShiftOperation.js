//Inspection is ON
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


const setBit = (num, position) => {
    let mask = 1 << position
    return num | mask
}


console.log(setBit(12, -14))






