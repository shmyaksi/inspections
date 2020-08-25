//Inspection is ON by default
//TS 3.9.5

//case1
class TryFinally {
    static doLogic() {
        try {
            throw new Error();
        } finally {
            return true;
        }
    }
}

//case2
function TryFinally2(param: number, callback: (err: Error, result: number) => void) {
    try {
        const exampleResult = 1;
        callback(null, exampleResult);
    } finally {
        return 'hello'

    }
}

//case3
function TryFinally3(argument: string) {
    try {
        let result = this.markLibrary(argument);
    } finally {
        return argument

    }
}
