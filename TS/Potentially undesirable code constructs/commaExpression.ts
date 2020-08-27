//Inspection is ON by default

//Case1
function d3() {
    let x65 = 1

    x65 = (x65++, x65)

    console.log(x65)
}

d3()

//Case2
function d4() {
    let a66, b66, c66

    a66 = b66 = 3, c66 = 4
    console.log(a66)
}

d4()

//Case3
function d5() {
    let x12, y12, z12

    x12 = (y12 = 5, z12 = 6)
    console.log(x12);
}

d5()

//Case4
function one65() {
    let arr = [4, 0, 2, 5]
    arr[0] = 5, 3

    console.log(arr)
}

one65()

