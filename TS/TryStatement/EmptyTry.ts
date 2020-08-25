//Inspection is OFF
//TS 3.9.5

//Case1
function empty1(n) {
    try {

    } finally {
        return n

    }
}


//Case2
class ExampleResource {
}

async function empty2() {
    let resource: ExampleResource = null;
    try {
    } catch (e) {
        if (e instanceof Error) {

        } else {
            throw e;
        }
    }
}

//case3
function empty3() {
    try {

    } catch (e) {
        throw new Error('my error');
    }
}
