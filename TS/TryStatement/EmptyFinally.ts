//Inspection is OFF by default
//TS 3.9.5

function k24() {
    try {
        function nono(m) {
            return m * m
        }

        nono(5)
    } finally {

    }
}

k24()

//Case2
function k25(argument: string) {
    try {
        let result = this.markLibrary(argument);
    } finally {

    }
}

//case3
function k26(param: number, callback: (err: Error, result: number) => void) {
    try {
        const exampleResult = 1;
        callback(null, exampleResult);
    } finally {

    }
}
