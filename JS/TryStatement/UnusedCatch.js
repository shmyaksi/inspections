//Inspection 'Unused catch parameter' is OFF by default

//Case1
function testAll() {
    try {
        return func1();
    } catch (a) {

    }

}

testAll()

//Case2
function testAll2(n) {
    try {
        return n
    } catch (error) {

    }
    try {
        return n * n
    } catch (ignore) {

    }

}

testAll2()
