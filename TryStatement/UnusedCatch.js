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
function testAll2() {
    try {
        return func11();
    } catch (error) {
    }
    try {
        return func22();
    } catch (e) {
        return e.message
    }

}

testAll2()