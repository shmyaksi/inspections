//Inspection is ON

//Case1
function s(){
    let z = 1<<1000000
    console.log(z)

}
s()

//Case2
function s1(){

    let z = 1<<-14
    console.log(z)

}
s1()

//Case3
const setBit = (num, position) => {
    let mask = 1 << position
    return num | mask
}


console.log(setBit(12, -14))






