//Inspection 'Unused catch parameter' is OFF by default
//TS 3.9.5

//Case1
function testAll(): void {
    try {
        return;
    } catch (a) { //todo: this inspection doesn't work here

    }

}

testAll()

//Case2
function testAll2(n) {
    try {
        return n;
    } catch (error) {

    }
    try {
        return n * n;
    } catch (ignore) {

    }

}

testAll2(2)
