//Inspection is ON by default
//TS 3.9.5

//case1
function k22() {
    try {
        let counter = 1;
    } finally {
        throw new Error('counter');

    }
}

k22()

//case2
function k23() {
    try {
        function nono(m) {
            return m * m
        }

        nono(5)
    } finally {
        throw new Error('type smth else')

    }
}

k23()

//Case3
function k29(param: number, callback: (err: Error, result: number) => void) {
    try {
        const exampleResult = 1;
        callback(null, exampleResult);
    } finally {
        throw new Error('error')

    }
}


//Case4
function objectlime(this: { a: number, b: number }, a: number, b: number) {
    this.a = a;
    this.b = b;
    try {
        return this
    } finally {
        throw this.a;
    }
}

