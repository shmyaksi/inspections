//Inspection is ON

//Case1
function s(){
    let z = 1<<1000000
    console.log(z)

}
s()

//Case2
function s1() {
    let z = 1 << -14
    console.log(z)

}

s1()

//Case3
let position = -14
const setBit = (num) => {
    let mask = 1 >> 32
    return num | mask
}


console.log(setBit(12))






