//Inspection is OFF by default
//TS 3.9.5

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
function h3() {
    let value: string | undefined;
    console.log(`value is ${(value!.length << 0)} characters long`);
}

//case4
function h4() {
    const getSthSymbol = Number(1000);

    class SampleClass {
        [getSthSymbol]() {
            return getSthSymbol & 0;
        }
    }
}
